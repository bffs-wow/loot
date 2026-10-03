"""
Refined Grounded Simulation with Real-World Item Scarcity:
Incorporates actual WoW drop scarcity modeled from the guild's That's My BiS data:

Item Scarcity Tiers:
1. S-Tier Hyper-Contested (BiS Trinket / Weapon - e.g. Bindings of Immerseus):
   - 15-18 raiders compete
   - Drops ~4-5 times in 16 weeks (~15% drop rate per raid)
   - Supply severely below demand: ~75% of raiders NEVER receive it.

2. Tier Set Tokens (Vanquisher / Conqueror / Protector):
   - 10-12 raiders compete per token
   - Drops ~1-2 times per raid (~45 tokens total across 16 weeks)
   - Veterans take 8-12 weeks to complete 4-piece set; casuals get bottlenecked.

3. Role/Armor Specific Epics (Plate DPS, Cloth Caster, Agi Leather):
   - 3-5 raiders compete
   - Drops ~8 times per raid (~250 drops total)
   - High supply relative to small competition pool; readily acquired.

4. Niche / Off-Pieces (Tank shields, off-hands, relics):
   - 1-2 raiders compete
   - Rapidly saturates and rots to off-spec/greed.
"""

import random
import json
from collections import defaultdict

NUM_SIMULATIONS = 300
WEEKS = 16
RAIDS_PER_WEEK = 2
TOTAL_RAIDS = WEEKS * RAIDS_PER_WEEK  # 32

PERSONAS = [
    {'name': 'Goatlord', 'cls': 'Warrior', 'archetype': 'Rational Veteran', 'join_week': 1, 'att_prob': 1.0},
    {'name': 'Applepi', 'cls': 'Paladin', 'archetype': 'Rational Veteran', 'join_week': 1, 'att_prob': 1.0},
    {'name': 'Airah', 'cls': 'Mage', 'archetype': 'Rational Veteran', 'join_week': 1, 'att_prob': 1.0},
    {'name': 'Crànker', 'cls': 'Shaman', 'archetype': 'Rational Veteran', 'join_week': 1, 'att_prob': 1.0},
    {'name': 'Clueles', 'cls': 'Priest', 'archetype': 'Rational Veteran', 'join_week': 1, 'att_prob': 1.0},
    {'name': 'Money', 'cls': 'Paladin', 'archetype': 'Rational Veteran', 'join_week': 1, 'att_prob': 1.0},
    {'name': 'Miyokan', 'cls': 'Warlock', 'archetype': 'Rational Veteran', 'join_week': 1, 'att_prob': 1.0},
    {'name': 'Kabata', 'cls': 'Druid', 'archetype': 'Rational Veteran', 'join_week': 1, 'att_prob': 1.0},
    {'name': 'Lurkin', 'cls': 'Rogue', 'archetype': 'Hoarder', 'join_week': 1, 'att_prob': 1.0},
    {'name': 'Helpmeplease', 'cls': 'Mage', 'archetype': 'Hoarder', 'join_week': 1, 'att_prob': 1.0},
    {'name': 'Bexy', 'cls': 'Rogue', 'archetype': 'Greedy Veteran', 'join_week': 1, 'att_prob': 1.0},
    {'name': 'Matzy', 'cls': 'Mage', 'archetype': 'Greedy Veteran', 'join_week': 1, 'att_prob': 1.0},
    {'name': 'Nadzia', 'cls': 'Priest', 'archetype': 'Standby Veteran', 'join_week': 1, 'att_prob': 1.0},
    {'name': 'Bobby', 'cls': 'Hunter', 'archetype': 'Standby Veteran', 'join_week': 1, 'att_prob': 1.0},
    {'name': 'Seph', 'cls': 'Paladin', 'archetype': 'Casual Raider', 'join_week': 1, 'att_prob': 0.70},
    {'name': 'Marenjok', 'cls': 'Priest', 'archetype': 'Casual Raider', 'join_week': 1, 'att_prob': 0.70},
    {'name': 'Shiftyz', 'cls': 'Druid', 'archetype': 'Casual Raider', 'join_week': 1, 'att_prob': 0.70},
    {'name': 'Emofive', 'cls': 'Death Knight', 'archetype': 'Casual Raider', 'join_week': 1, 'att_prob': 0.70},
    {'name': 'Newrecruit', 'cls': 'Death Knight', 'archetype': 'Late Recruit', 'join_week': 5, 'att_prob': 1.0},
    {'name': 'Freshblood', 'cls': 'Monk', 'archetype': 'Late Recruit', 'join_week': 5, 'att_prob': 1.0},
]

class ScarcityPlayer:
    def __init__(self, p_conf, base_gp=100.0):
        self.name = p_conf['name']
        self.cls = p_conf['cls']
        self.archetype = p_conf['archetype']
        self.join_week = p_conf['join_week']
        self.att_prob = p_conf['att_prob']

        self.attendance_history = []
        self.current_boost = 0
        self.boost_burned_tonight = False

        self.ep = 0.0
        self.gp = base_gp
        self.base_gp = base_gp
        self.ep_events = []
        self.gp_events = []

        # Granular loot tracking
        self.s_tier_won = 0         # Max 2 (BiS Trinket, BiS Weapon)
        self.tier_tokens_won = 0    # Max 4 (4-piece tier set)
        self.role_epics_won = 0     # Max 8 (Armor upgrades)
        self.niche_won = 0          # Max 4 (Sidegrades, off-pieces)
        self.os_taken = 0           # Junk majors absorbed at OS price

        self.first_item = None
        self.first_s_tier = None
        self.tier_4p_week = None

    def attends(self, week):
        if week < self.join_week: return False
        return random.random() < self.att_prob

    def is_trial(self, week):
        return self.archetype == 'Late Recruit' and (week < self.join_week + 2)

    def wants_s_tier(self, week):
        if week < self.join_week or self.is_trial(week): return False
        return self.s_tier_won < 2

    def wants_tier(self, week):
        if week < self.join_week or self.is_trial(week): return False
        return self.tier_tokens_won < 4

    def wants_role_epic(self, week, minor_free):
        if week < self.join_week or self.is_trial(week): return False
        if self.archetype == 'Hoarder' and not minor_free: return False
        return self.role_epics_won < 8

    def wants_niche(self, week, minor_free):
        if week < self.join_week or self.is_trial(week): return False
        if self.archetype == 'Hoarder' and not minor_free: return False
        return self.niche_won < 4

def resolve_epgp_major(wanters, price, raid_idx, cfg, counts):
    """EPGP major-slot resolution: desirability gating + MS→OS→rot cascade.
    Returns winner (GP updated) or None when the item rots.
    Junk majors (not desirable): rational raiders pass on MS price — only
    Greedy/Late Recruit claim them at full price; otherwise they fall to the
    OS tier at os_cost_pct. Hoarders never MS junk (they only want S-tier).
    """
    des = cfg.get('desirability', 1.0)
    ms = wanters
    if des < 1.0 and not (random.random() < des):
        ms = [p for p in wanters if p.archetype in ('Greedy Veteran', 'Late Recruit')]
    if ms:
        qualified = [p for p in ms if p.ep >= 100.0] or ms
        winner = max(qualified, key=lambda p: p.ep / p.gp)
        winner.gp += price
        winner.gp_events.append((raid_idx, price))
        counts['ms'] += 1
        return winner
    if cfg.get('cascade', False):
        os_pool = [p for p in wanters if p.ep >= 100.0] or wanters
        if os_pool:
            winner = max(os_pool, key=lambda p: p.ep / p.gp)
            cost = price * cfg.get('os_cost_pct', 0.25)
            winner.gp += cost
            winner.gp_events.append((raid_idx, cost))
            winner.os_taken += 1
            counts['os'] += 1
            return winner
    counts['rot'] += 1
    return None

def run_simulation(config):
    mode = config.get('mode', 'epgp')
    decay = config.get('decay_rate', 0.15)
    horizon = config.get('horizon_raids', None)
    base_gp = config.get('base_gp', 100.0)
    minor_free = config.get('minor_free', False)
    boost_max = config.get('boost_max', 120)
    hybrid = mode == 'hybrid'
    epgp_mode = mode in ('epgp', 'hybrid')
    additive = mode in ('additive', 'hybrid')
    armor_ms = config.get('armor_ms', False)   # hat/chest/legs are MS-priced majors
    cascade = config.get('cascade', False)
    desirability = config.get('desirability', 1.0)
    cfg = {'desirability': desirability, 'cascade': cascade,
           'os_cost_pct': config.get('os_cost_pct', 0.25)}
    counts = {'ms': 0, 'os': 0, 'rot': 0}

    players = [ScarcityPlayer(p, base_gp=base_gp) for p in PERSONAS]
    raid_idx = 0

    for week in range(1, WEEKS + 1):
        if epgp_mode and horizon is None:
            for p in players:
                p.ep *= (1.0 - decay)
                p.gp = max(p.base_gp, p.gp * (1.0 - decay))

        for r_in_week in range(RAIDS_PER_WEEK):
            raid_idx += 1
            attendees = [p for p in players if p.attends(week)]
            for p in attendees:
                p.attendance_history.append(1)
                p.ep += 100.0
                p.ep_events.append((raid_idx, 100.0))
            for p in players:
                if p not in attendees:
                    p.attendance_history.append(0)
                if len(p.attendance_history) > 12:
                    p.attendance_history.pop(0)
                p.boost_burned_tonight = False
                pts = sum(p.attendance_history)
                p.current_boost = int(pts * (boost_max / 12.0))

            if epgp_mode and horizon is not None:
                cutoff = raid_idx - horizon
                for p in players:
                    p.ep = sum(val for r, val in p.ep_events if r > cutoff)
                    p.gp = p.base_gp + sum(val for r, val in p.gp_events if r > cutoff)

            # 1. Hyper-Contested S-Tier Item (15% drop rate per raid, ~4.8 drops across 16 weeks)
            if random.random() < 0.15:
                # 14-16 attendees compete
                bidders = [p for p in attendees if p.wants_s_tier(week)]
                if bidders:
                    winner = None
                    if additive:
                        winner = max(bidders, key=lambda p: random.randint(1, 100) + (0 if p.boost_burned_tonight else p.current_boost))
                        winner.boost_burned_tonight = True
                    elif epgp_mode:
                        winner = resolve_epgp_major(bidders, 1200.0, raid_idx, cfg, counts)

                    if winner:
                        winner.s_tier_won += 1
                        if winner.first_s_tier is None: winner.first_s_tier = week
                        if winner.first_item is None: winner.first_item = week

            # 2. Tier Tokens: 1-2 tokens per raid (~45 tokens across 16 weeks)
            for _ in range(random.choice([1, 2])):
                bidders = [p for p in attendees if p.wants_tier(week)]
                if bidders:
                    winner = None
                    if additive:
                        winner = max(bidders, key=lambda p: random.randint(1, 100) + (0 if p.boost_burned_tonight else p.current_boost))
                        winner.boost_burned_tonight = True
                    elif epgp_mode:
                        winner = resolve_epgp_major(bidders, 600.0, raid_idx, cfg, counts)

                    if winner:
                        winner.tier_tokens_won += 1
                        if winner.tier_tokens_won == 4 and winner.tier_4p_week is None:
                            winner.tier_4p_week = week
                        if winner.first_item is None: winner.first_item = week

            # 3. Slot-priced armor majors (hat/chest/legs) with MS pricing + OS cascade (~8 drops per raid)
            for _ in range(8):
                armor_bidders = [p for p in attendees if p.wants_role_epic(week, minor_free)]
                if armor_bidders:
                    k = min(4, len(armor_bidders))
                    contenders = random.sample(armor_bidders, k)
                    winner = None
                    if additive:
                        winner = max(contenders, key=lambda p: random.randint(1, 100) + p.current_boost)
                    elif armor_ms:
                        winner = resolve_epgp_major(contenders, 400.0, raid_idx, cfg, counts)
                    elif epgp_mode:
                        qualified = [p for p in contenders if p.ep >= 100.0] or contenders
                        winner = max(qualified, key=lambda p: p.ep / p.gp)
                        cost = 0.0 if minor_free else 400.0
                        winner.gp += cost
                        winner.gp_events.append((raid_idx, cost))

                    if winner:
                        winner.role_epics_won += 1
                        if winner.first_item is None: winner.first_item = week

            # 4. Niche / Off-Pieces (~6 drops per raid)
            for _ in range(6):
                bidders = [p for p in attendees if p.wants_niche(week, minor_free)]
                if bidders:
                    k = min(2, len(bidders))
                    contenders = random.sample(bidders, k)
                    winner = None
                    if additive:
                        winner = max(contenders, key=lambda p: random.randint(1, 100) + p.current_boost)
                    elif epgp_mode:
                        qualified = [p for p in contenders if p.ep >= 100.0] or contenders
                        winner = max(qualified, key=lambda p: p.ep / p.gp)
                        cost = 0.0 if minor_free else 250.0
                        winner.gp += cost
                        winner.gp_events.append((raid_idx, cost))

                    winner.niche_won += 1
                    if winner.first_item is None: winner.first_item = week

    return players, counts

def run_suite():
    scenarios = {
        'epgp_15_free_minor': {
            'name': '⭐ EPGP (Free Minor Items - Optimal Balance)',
            'mode': 'epgp',
            'decay_rate': 0.15,
            'minor_free': True,
            'base_gp': 100.0
        },
        'epgp_horizon_6wk_free_minor': {
            'name': '⭐ EPGP 6-Wk Horizon (Free Minor)',
            'mode': 'epgp',
            'horizon_raids': 12,
            'minor_free': True,
            'base_gp': 100.0
        },
        'hybrid_horizon_boost120': {
            'name': '⭐⭐ HYBRID: Horizon EPGP + Boosted Rolls (Current ADR combo)',
            'mode': 'hybrid',
            'horizon_raids': 12,
            'boost_max': 120,
            'minor_free': True,
            'base_gp': 100.0
        },
        'epgp_15_std': {
            'name': 'Standard EPGP (15% Decay, Minor Costs GP)',
            'mode': 'epgp',
            'decay_rate': 0.15,
            'minor_free': False,
            'base_gp': 100.0
        },
        'epgp_armor_ms_100': {
            'name': 'EPGP on Hat/Chest/Legs + Tokens + Weapons (all majors desirable)',
            'mode': 'epgp',
            'decay_rate': 0.15,
            'minor_free': True,
            'base_gp': 100.0,
            'armor_ms': True,
            'cascade': True,
            'desirability': 1.0,
            'os_cost_pct': 0.25
        },
        'epgp_armor_ms_50': {
            'name': 'EPGP on Hat/Chest/Legs + Tokens + Weapons (50% desirable, OS fallback)',
            'mode': 'epgp',
            'decay_rate': 0.15,
            'minor_free': True,
            'base_gp': 100.0,
            'armor_ms': True,
            'cascade': True,
            'desirability': 0.5,
            'os_cost_pct': 0.25
        },
        'additive_120': {
            'name': 'Additive Boost (+120 Max, ADR 0001)',
            'mode': 'additive',
            'boost_max': 120,
            'minor_free': True
        },
        'additive_60': {
            'name': 'Additive Boost (+60 Max)',
            'mode': 'additive',
            'boost_max': 60,
            'minor_free': True
        },
        'epgp_base_gp_300': {
            'name': 'EPGP (Base GP 300 Floor, Free Minor)',
            'mode': 'epgp',
            'decay_rate': 0.15,
            'minor_free': True,
            'base_gp': 300.0
        },
    }

    results = {}
    print(f"Running realistic scarcity simulation suite ({NUM_SIMULATIONS} iterations each)...")
    for key, conf in scenarios.items():
        print(f"  Simulating {conf['name']}...")
        player_stats = defaultdict(lambda: {
            's_tier': [], 'tier_tokens': [], 'role_epics': [], 'niche': [], 'os_taken': [],
            'has_s_tier': [], 'completed_4p': [], 'first_s_tier_wk': [], 'first_item_wk': []
        })
        total_counts = {'ms': [], 'os': [], 'rot': []}
        for _ in range(NUM_SIMULATIONS):
            players, counts = run_simulation(conf)
            for c in ('ms', 'os', 'rot'):
                total_counts[c].append(counts[c])
            for p in players:
                player_stats[p.name]['s_tier'].append(p.s_tier_won)
                player_stats[p.name]['tier_tokens'].append(p.tier_tokens_won)
                player_stats[p.name]['role_epics'].append(p.role_epics_won)
                player_stats[p.name]['niche'].append(p.niche_won)
                player_stats[p.name]['os_taken'].append(p.os_taken)
                player_stats[p.name]['has_s_tier'].append(1 if p.s_tier_won > 0 else 0)
                player_stats[p.name]['completed_4p'].append(1 if p.tier_tokens_won >= 4 else 0)
                if p.first_s_tier: player_stats[p.name]['first_s_tier_wk'].append(p.first_s_tier)
                if p.first_item: player_stats[p.name]['first_item_wk'].append(p.first_item)

        results[key] = {
            'config': conf,
            'system': {
                'ms_per_raid': round(sum(total_counts['ms']) / (NUM_SIMULATIONS * 32), 2),
                'os_per_raid': round(sum(total_counts['os']) / (NUM_SIMULATIONS * 32), 2),
                'rot_per_raid': round(sum(total_counts['rot']) / (NUM_SIMULATIONS * 32), 2),
            },
            'personas': {}
        }
        for p_info in PERSONAS:
            name = p_info['name']
            st = player_stats[name]
            s_avg = sum(st['s_tier']) / NUM_SIMULATIONS
            s_pct = (sum(st['has_s_tier']) / NUM_SIMULATIONS) * 100
            t_avg = sum(st['tier_tokens']) / NUM_SIMULATIONS
            p4_pct = (sum(st['completed_4p']) / NUM_SIMULATIONS) * 100
            role_avg = sum(st['role_epics']) / NUM_SIMULATIONS
            niche_avg = sum(st['niche']) / NUM_SIMULATIONS
            total_avg = s_avg + t_avg + role_avg + niche_avg
            f_s_tier = sum(st['first_s_tier_wk']) / len(st['first_s_tier_wk']) if st['first_s_tier_wk'] else 0
            f_item = sum(st['first_item_wk']) / len(st['first_item_wk']) if st['first_item_wk'] else 0

            results[key]['personas'][name] = {
                'name': name,
                'class': p_info['cls'],
                'archetype': p_info['archetype'],
                'attendance_prob': p_info['att_prob'],
                's_tier_avg': round(s_avg, 2),
                's_tier_pct': round(s_pct, 1),
                'tier_tokens_avg': round(t_avg, 2),
                'completed_4p_pct': round(p4_pct, 1),
                'role_epics_avg': round(role_avg, 2),
                'niche_avg': round(niche_avg, 2),
                'os_taken_avg': round(sum(st['os_taken']) / NUM_SIMULATIONS, 2),
                'total_avg': round(total_avg, 2),
                'first_s_tier_wk': round(f_s_tier, 1),
                'first_item_wk': round(f_item, 1),
            }

    out_path = 'scripts/simulation_data.json'
    with open(out_path, 'w') as f:
        json.dump(results, f, indent=2)
    print(f"Scarcity simulation results saved to {out_path}!")

if __name__ == '__main__':
    run_suite()
