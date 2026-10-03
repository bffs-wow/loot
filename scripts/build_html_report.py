"""
Builds an interactive HTML report reflecting grounded WoW scarcity:
- S-Tier Hyper-Contested Items (BiS Trinkets/Weapons - ~18 competitors, drops ~4 times in 16 weeks)
- 4-Piece Tier Token Sets (10-12 competitors per token)
- Role/Armor Specific Epics (Plate/Cloth/Leather)
- Real guild personas: Goatlord, Lurkin, Bexy, Nadzia, Seph, Newrecruit
"""

import json

def build_html():
    with open('scripts/simulation_data.json') as f:
        sim_data = json.load(f)

    class_colors = {
        'Warrior': '#C79C6E',
        'Paladin': '#F58CBA',
        'Hunter': '#ABD473',
        'Rogue': '#FFF569',
        'Priest': '#FFFFFF',
        'Death Knight': '#C41E3A',
        'Shaman': '#0070DE',
        'Mage': '#40C7EB',
        'Warlock': '#8787ED',
        'Monk': '#00FF96',
        'Druid': '#FF7D0A'
    }

    key_personas = [
        {'name': 'Goatlord', 'role': 'Rational Veteran', 'desc': '100% attendance. Bids on S-Tier weapons/trinkets, tier tokens, and armor upgrades.'},
        {'name': 'Lurkin', 'role': 'The Hoarder / Sniper', 'desc': '100% attendance. Passes on armor to save GP/boost exclusively for S-Tier weapons and trinkets.'},
        {'name': 'Bexy', 'role': 'Greedy Raider', 'desc': '100% attendance. Bids on every upgrade, sidegrade, and tier token.'},
        {'name': 'Nadzia', 'role': 'Standby Specialist', 'desc': '100% attendance. Frequently benched, receiving 100% standby credit online at raid start.'},
        {'name': 'Seph', 'role': 'Casual Raider', 'desc': '70% attendance. Misses ~1 out of 3 raids due to real-life schedule.'},
        {'name': 'Newrecruit', 'role': 'Late Recruit', 'desc': 'Joins in Week 5. Serves 2-week trial (rot only), then bids at 100% attendance.'},
    ]

    html_content = f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Synergy Loot - Scarcity & Role-Grounded Loot Simulation Report</title>
<style>
  :root {{
    --bg-main: #0b0f19;
    --bg-card: #151d30;
    --bg-card-hover: #1c2742;
    --border: #233152;
    --border-highlight: #3b82f6;
    --text-main: #f1f5f9;
    --text-muted: #94a3b8;
    --accent: #3b82f6;
    --accent-gold: #f59e0b;
    --accent-green: #10b981;
    --accent-red: #ef4444;
    --accent-purple: #8b5cf6;
  }}
  * {{ box-sizing: border-box; margin: 0; padding: 0; }}
  body {{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    background-color: var(--bg-main);
    color: var(--text-main);
    line-height: 1.6;
    padding: 24px;
  }}
  .container {{
    max-width: 1300px;
    margin: 0 auto;
  }}
  header {{
    background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 32px;
    margin-bottom: 28px;
    box-shadow: 0 10px 25px -5px rgba(0,0,0,0.5);
  }}
  .badge {{
    display: inline-block;
    padding: 4px 12px;
    border-radius: 9999px;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 12px;
  }}
  .badge-primary {{ background: rgba(59, 130, 246, 0.2); color: #60a5fa; border: 1px solid rgba(59, 130, 246, 0.4); }}
  .badge-gold {{ background: rgba(245, 158, 11, 0.2); color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.4); }}
  .badge-green {{ background: rgba(16, 185, 129, 0.2); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.4); }}
  .badge-red {{ background: rgba(239, 68, 68, 0.2); color: #f87171; border: 1px solid rgba(239, 68, 68, 0.4); }}
  
  h1 {{ font-size: 32px; font-weight: 800; margin-bottom: 8px; color: #fff; }}
  .subtitle {{ color: var(--text-muted); font-size: 16px; margin-bottom: 20px; }}
  
  .meta-grid {{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid var(--border);
  }}
  .meta-item {{ font-size: 14px; }}
  .meta-label {{ color: var(--text-muted); font-size: 12px; text-transform: uppercase; }}
  .meta-val {{ font-size: 18px; font-weight: 700; color: #fff; }}

  /* Reality Scarcity Box */
  .scarcity-box {{
    background: rgba(245, 158, 11, 0.08);
    border: 1px solid rgba(245, 158, 11, 0.3);
    border-radius: 10px;
    padding: 20px 24px;
    margin-bottom: 28px;
    display: flex;
    gap: 16px;
    align-items: flex-start;
  }}
  .scarcity-icon {{ font-size: 28px; }}
  .scarcity-content h3 {{ font-size: 16.5px; font-weight: 700; color: #fbbf24; margin-bottom: 6px; }}
  .scarcity-content p {{ font-size: 13.5px; color: #cbd5e1; line-height: 1.5; }}

  /* Navigation Tabs */
  .tabs-wrapper {{
    margin-bottom: 24px;
    overflow-x: auto;
  }}
  .tabs {{
    display: flex;
    gap: 8px;
    border-bottom: 1px solid var(--border);
    padding-bottom: 8px;
  }}
  .tab-btn {{
    background: var(--bg-card);
    border: 1px solid var(--border);
    color: var(--text-muted);
    padding: 10px 18px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    transition: all 0.2s;
    white-space: nowrap;
  }}
  .tab-btn:hover {{
    background: var(--bg-card-hover);
    color: #fff;
    border-color: #475569;
  }}
  .tab-btn.active {{
    background: var(--accent);
    color: #fff;
    border-color: var(--accent);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
  }}

  /* Overview Card */
  .card {{
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 24px;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.3);
  }}
  .card-header {{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }}

  /* Persona Spotlight */
  .persona-grid {{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    gap: 16px;
    margin-bottom: 32px;
  }}
  .persona-card {{
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 20px;
    position: relative;
    overflow: hidden;
  }}
  .persona-head {{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
  }}
  .persona-name {{
    font-size: 20px;
    font-weight: 800;
  }}
  .persona-role {{
    font-size: 12px;
    padding: 2px 8px;
    border-radius: 4px;
    background: #1e293b;
    color: #94a3b8;
    border: 1px solid #334155;
  }}
  .persona-desc {{
    font-size: 13px;
    color: var(--text-muted);
    margin-bottom: 16px;
    min-height: 38px;
  }}
  .persona-stats {{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
    background: #0f172a;
    padding: 12px;
    border-radius: 6px;
    text-align: center;
  }}
  .p-stat-val {{ font-size: 16px; font-weight: 800; }}
  .p-stat-lbl {{ font-size: 10px; color: var(--text-muted); text-transform: uppercase; }}

  /* Data Tables */
  .table-card {{
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 24px;
    margin-bottom: 32px;
    overflow-x: auto;
  }}
  table {{
    width: 100%;
    border-collapse: collapse;
    font-size: 14px;
    text-align: left;
  }}
  th {{
    background: #0f172a;
    padding: 12px 16px;
    font-weight: 700;
    color: #94a3b8;
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 0.5px;
    border-bottom: 2px solid var(--border);
  }}
  td {{
    padding: 14px 16px;
    border-bottom: 1px solid var(--border);
  }}
  tr:hover td {{ background: rgba(255,255,255,0.02); }}
  .highlight-cell {{ font-weight: 800; color: #fff; }}

  /* Progress Pill */
  .progress-pill {{
    display: inline-block;
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 700;
  }}
  .pill-green {{ background: rgba(16, 185, 129, 0.2); color: #34d399; }}
  .pill-gold {{ background: rgba(245, 158, 11, 0.2); color: #fbbf24; }}
  .pill-red {{ background: rgba(239, 68, 68, 0.2); color: #f87171; }}

  /* Key Takeaways Section */
  .takeaway-grid {{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin-top: 24px;
  }}
  .takeaway-card {{
    background: #131b2e;
    border-left: 4px solid var(--accent);
    padding: 20px;
    border-radius: 0 8px 8px 0;
  }}
  .takeaway-card.gold {{ border-left-color: var(--accent-gold); }}
  .takeaway-card.green {{ border-left-color: var(--accent-green); }}
  .takeaway-card.red {{ border-left-color: var(--accent-red); }}
  .takeaway-card h4 {{ font-size: 16px; margin-bottom: 8px; color: #fff; }}
  .takeaway-card p {{ font-size: 13.5px; color: var(--text-muted); line-height: 1.5; }}

  footer {{
    text-align: center;
    color: var(--text-muted);
    font-size: 13px;
    margin-top: 48px;
    padding-top: 24px;
    border-top: 1px solid var(--border);
  }}
</style>
</head>
<body>

<div class="container">
  <header>
    <div class="badge badge-gold">Empirical Scarcity Analysis</div>
    <h1>WoW Classic / Forever Raiding: Item Scarcity & Competition Report</h1>
    <p class="subtitle">Grounded in actual item competition tiers from That's My BiS wishlist data: S-Tier trinkets/weapons (18 competitors), tier token bottlenecks, and role-specific armor pools.</p>
    
    <div class="meta-grid">
      <div class="meta-item">
        <div class="meta-label">Season Duration</div>
        <div class="meta-val">16 Weeks (32 Raids)</div>
      </div>
      <div class="meta-item">
        <div class="meta-label">S-Tier Scarcity</div>
        <div class="meta-val">~4.8 Total Drops (18 Competing)</div>
      </div>
      <div class="meta-item">
        <div class="meta-label">Tier Token Pool</div>
        <div class="meta-val">~45 Drops (10-12 / Token)</div>
      </div>
      <div class="meta-item">
        <div class="meta-label">Monte Carlo Sample</div>
        <div class="meta-val">300 Seasons / Config</div>
      </div>
    </div>
  </header>

  <!-- Reality Scarcity Callout -->
  <div class="scarcity-box">
    <div class="scarcity-icon">⚔️</div>
    <div class="scarcity-content">
      <h3>The Reality of WoW Loot: Not Everyone Gets Everything</h3>
      <p>
        In real World of Warcraft raiding, gear is not uniformly distributed. Actual guild wishlist data reveals <strong>18 raiders competing for a single S-Tier Trinket</strong> (e.g., <em>Purified Bindings of Immerseus</em>) that drops only <strong>~4 times in an entire 16-week phase</strong>. Over 70% of raiders will <em>never</em> receive it.
        Below is the true test of each loot system: <strong>Who wins the ultra-scarce items, who finishes their 4-piece tier set, and who gets left behind?</strong>
      </p>
    </div>
  </div>

  <!-- Scenario Selector -->
  <div class="tabs-wrapper">
    <div class="tabs" id="scenario-tabs">
      <button class="tab-btn active" onclick="switchScenario('epgp_15_free_minor')">⭐ EPGP (Free Minor Items - Optimal)</button>
      <button class="tab-btn" onclick="switchScenario('epgp_horizon_6wk_free_minor')">⭐ EPGP 6-Wk Horizon (Free Minor)</button>
      <button class="tab-btn" onclick="switchScenario('hybrid_horizon_boost120')">⭐⭐ HYBRID: Horizon EPGP + Boosted Rolls</button>
      <button class="tab-btn" onclick="switchScenario('epgp_15_std')">Standard EPGP (Minor Costs GP - Hoarder Haven)</button>
      <button class="tab-btn" onclick="switchScenario('epgp_armor_ms_100')">EPGP: All Majors Priced</button>
      <button class="tab-btn" onclick="switchScenario('epgp_armor_ms_50')">EPGP: 50% Items Undesirable</button>
      <button class="tab-btn" onclick="switchScenario('additive_120')">Additive Boost (+120 Max, ADR 0001)</button>
      <button class="tab-btn" onclick="switchScenario('additive_60')">Additive Boost (+60 Max)</button>
      <button class="tab-btn" onclick="switchScenario('epgp_base_gp_300')">EPGP (Base GP 300 Floor)</button>
    </div>
  </div>

  <!-- Dynamic Header for Active Scenario -->
  <div class="card" style="margin-bottom: 24px;">
    <div class="card-header">
      <h2 id="scenario-title" style="font-size: 20px; color: #fff;">Scenario Overview</h2>
      <span class="badge badge-gold" id="scenario-badge">Active Model</span>
    </div>
    <p id="scenario-desc" style="color: var(--text-muted); font-size: 14.5px;">Scenario details...</p>
  </div>

  <!-- Persona Spotlight Cards -->
  <h3 style="font-size: 18px; margin-bottom: 16px; color: #cbd5e1;">Guild Personas: Real Scarcity Outcomes</h3>
  <div class="persona-grid" id="persona-cards-container">
    <!-- Populated by JS -->
  </div>

  <!-- Complete Standings & Scarcity Table -->
  <div class="table-card">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
      <div>
        <h3 style="font-size: 18px; color: #cbd5e1;">Scarcity Breakdown: S-Tier Items & Tier Token Completion</h3>
        <p style="font-size: 12px; color: var(--text-muted);">Empirical probability of winning a hyper-contested S-Tier item, average tier tokens won, and 4-piece completion rate.</p>
      </div>
    </div>
    <table>
      <thead>
        <tr>
          <th>Character</th>
          <th>Archetype</th>
          <th>S-Tier Item Rate</th>
          <th>Tier Tokens (Avg)</th>
          <th>4-Piece Tier Set %</th>
          <th>Armor Epics</th>
          <th>OS-Priced Junk</th>
          <th>Total Items</th>
        </tr>
      </thead>
      <tbody id="roster-table-body">
        <!-- Populated by JS -->
      </tbody>
    </table>
  </div>

  <!-- Core Behavioral Insights Across the Real World Scenarios -->
  <h3 style="font-size: 18px; margin-bottom: 16px; color: #cbd5e1;">The Hard Truths of Loot Distribution</h3>
  <div class="takeaway-grid">
    <div class="takeaway-card red">
      <h4>1. The Hoarder Monopolization Trap (Standard EPGP)</h4>
      <p>Under Standard EPGP (where minor items cost GP), <strong>Lurkin (Hoarder) has a 97.0% chance</strong> of winning an S-Tier item, while <strong>Goatlord (Balanced Veteran) has only a 17.7% chance</strong>! By refusing minor armor, the hoarder keeps GP at 100 and snipes every weapon and trinket that drops, while teammates who take armor are penalized.</p>
    </div>
    <div class="takeaway-card green">
      <h4>2. Zero-GP Minor Items Save Veteran Fairness</h4>
      <p>When <strong>Minor items cost 0 GP (Free)</strong>, Goatlord's chance of winning an S-Tier item jumps from <strong>17.7% to 29.0%</strong>, and Lurkin's drops from <strong>97% to 22.3%</strong>! Because minor items are free, hoarders take them too, preventing anyone from artificially holding an infinite GP advantage.</p>
    </div>
    <div class="takeaway-card gold">
      <h4>3. The Casual Scarcity Wall (Additive Boost)</h4>
      <p>In Additive Boost (+120), a 70% casual like <strong>Seph has a 2.7% chance</strong> of ever winning an S-Tier item and a <strong>0.0% chance of completing a 4-piece tier set</strong>! The 40-point roll deficit (+80 vs +120) across 15 competitors forms an almost impenetrable mathematical barrier.</p>
    </div>
    <div class="takeaway-card">
      <h4>4. Standby Roster Guarantees Tier Sets</h4>
      <p><strong>Nadzia</strong> (Priest, heavy bench) achieves identical tier token acquisition (3.2 tokens, 56% 4-piece completion) to active raiders, verifying that 100% standby credit online at raid start completely protects benched players on competitive tokens.</p>
    </div>
  </div>

  <footer>
    <p>Synergy Loot System Scarcity Simulation & Wayfinder Planning • September 2026</p>
  </footer>
</div>

<script>
  const SIM_DATA = {json.dumps(sim_data)};
  const CLASS_COLORS = {json.dumps(class_colors)};
  const KEY_PERSONAS = {json.dumps(key_personas)};

  const SCENARIO_DESCRIPTIONS = {{
    'epgp_15_free_minor': 'The recommended EPGP model: Minor items cost 0 GP (Free). Hoarders take minor armor too, equalizing GP across veterans. Goatlord has a 29.0% chance at an S-tier item, Lurkin has 22.3%, and veterans finish ~2.9 tier tokens.',
    'epgp_horizon_6wk_free_minor': 'The Rolling Horizon model: all records older than 6 weeks fall off. Delivers identical scarcity fairness to 15% decay with zero weekly Tuesday database scripts.',
    'hybrid_horizon_boost120': '<strong>⭐ THE RECOMMENDED HYBRID:</strong> Major chase items (weapons, trinkets, tier tokens) are governed by Rolling Horizon EPGP — highest PR wins, pays GP. Minor & off-spec items (rings, necks, cloaks, sidegrades) are 0 GP and use the additive attendance-boosted roll from ADR 0001 — veterans get a 2–3× roll advantage. Lurkin (Hoarder) gets ~22% S-tier chance (same as pure EPGP) but CANNOT game minor items: they're free, so everyone takes them. Goatlord finishes ~3.5 tier tokens. Casuals still get meaningful roll bonuses on minor gear.',
    'epgp_15_std': 'Standard textbook EPGP: Minor items cost GP. <strong>Lurkin (Hoarder) wins an S-tier item 97.0% of the time</strong>, while Goatlord drops to 17.7% because taking armor ruins your Priority Rating for weapons.',
    'additive_120': 'Additive Attendance Boost (ADR 0001): Base /roll 100 + up to 120 boost. Boost Burn zeros boost on winning a Major item. Veterans have a ~25-28% chance at S-tier items and 56% complete 4-piece tier sets. Casuals are locked out (2.7% S-tier chance).',
    'additive_60': 'Moderate Additive Boost (+60 Max): Softens the veteran roll gap. Casuals gain improved chances on tier tokens and S-tier drops.',
    'epgp_base_gp_300': 'EPGP with a 300 Base GP Floor. Restricts late recruits from sniping S-tier weapons on week one ahead of established veterans.',
    'epgp_armor_ms_100': 'Simulated rule extension: Hat/Chest/Legs armor is priced exactly like a Major item (400 GP = 2/3 of an S-tier win). When every item is desirable this is the fair textbook case: ~6.65 majors per raid distribute at full price, zero waste, zero OS fallback. Compare with the 50% tab.',
    'epgp_armor_ms_50': '<strong>The stress test:</strong> Only ~50% of major drops are wanted at MS price. Rational raiders (Goatlord, Lurkin, Nadzia) pass on junk majors; Greedy veterans and late recruits claim them anyway at full GP, and the rest falls to a 25% OS tier. Result: <strong>~1.8 majors per raid land at OS price</strong>, Rot stays 0.00/raid — progression gear is NOT wasted as long as a 25% OS tier exists. The PR tax is real: Bexy (greedy) soaks junk weapons and wins <strong>78.7%</strong> of all S-tier drops while paying full GP for junk; rational vets stay PR-clean and bank for the good items (Goatlord 19.3%, Lurkin 16.0%).',
  }};

  let currentScenario = 'epgp_15_free_minor';

  function switchScenario(key) {{
    currentScenario = key;
    document.querySelectorAll('.tab-btn').forEach(btn => {{
      btn.classList.remove('active');
      if (btn.getAttribute('onclick').includes(key)) btn.classList.add('active');
    }});
    render();
  }}

  function render() {{
    const data = SIM_DATA[currentScenario];
    if (!data) return;

    document.getElementById('scenario-title').innerText = data.config.name;
    document.getElementById('scenario-desc').innerHTML = SCENARIO_DESCRIPTIONS[currentScenario] || '';
    if (data.system) {{
      const s = data.system;
      document.getElementById('scenario-desc').innerHTML += '<div style="margin-top:10px; padding:8px 12px; background:var(--bg-primary); border-radius:8px; font-size:13px; border:1px solid var(--border);">Majors distributed per raid (avg across ' + data.config.name + '): <strong>' + s.ms_per_raid + ' at full price (MS)</strong> · ' + s.os_per_raid + ' fell through to OS pricing (25%) · ' + s.rot_per_raid + ' rotted.</div>';
    }}

    // Render Persona Cards
    const container = document.getElementById('persona-cards-container');
    container.innerHTML = '';

    KEY_PERSONAS.forEach(kp => {{
      const p = data.personas[kp.name];
      if (!p) return;
      const cColor = CLASS_COLORS[p.class] || '#fff';

      const card = document.createElement('div');
      card.className = 'persona-card';
      card.style.borderLeft = `4px solid ${{cColor}}`;
      card.innerHTML = `
        <div class="persona-head">
          <div class="persona-name" style="color: ${{cColor}};">${{p.name}}</div>
          <div class="persona-role">${{kp.role}}</div>
        </div>
        <div class="persona-desc">${{kp.desc}}</div>
        <div class="persona-stats">
          <div>
            <div class="p-stat-val" style="color: #f59e0b;">${{p.s_tier_pct}}%</div>
            <div class="p-stat-lbl">S-Tier Chance</div>
          </div>
          <div>
            <div class="p-stat-val" style="color: #60a5fa;">${{p.tier_tokens_avg}} / 4</div>
            <div class="p-stat-lbl">Tier Tokens</div>
          </div>
          <div>
            <div class="p-stat-val" style="color: #10b981;">${{p.completed_4p_pct}}%</div>
            <div class="p-stat-lbl">4-Piece Set</div>
          </div>
          <div>
            <div class="p-stat-val" style="color: #fff;">${{p.total_avg}}</div>
            <div class="p-stat-lbl">Total Loot</div>
          </div>
        </div>
      `;
      container.appendChild(card);
    }});

    // Render Table
    const tbody = document.getElementById('roster-table-body');
    tbody.innerHTML = '';

    const sorted = Object.values(data.personas).sort((a,b) => b.s_tier_pct - a.s_tier_pct);

    sorted.forEach(p => {{
      const cColor = CLASS_COLORS[p.class] || '#fff';
      const tr = document.createElement('tr');

      const sBadgeClass = p.s_tier_pct >= 50 ? 'pill-green' : (p.s_tier_pct >= 15 ? 'pill-gold' : 'pill-red');
      const p4BadgeClass = p.completed_4p_pct >= 40 ? 'pill-green' : (p.completed_4p_pct > 0 ? 'pill-gold' : 'pill-red');

      tr.innerHTML = `
        <td><strong style="color: ${{cColor}};">${{p.name}}</strong> <span style="font-size: 11px; color: var(--text-muted);">(${{p.class}})</span></td>
        <td><span class="badge badge-primary" style="font-size: 10.5px;">${{p.archetype}}</span></td>
        <td><span class="progress-pill ${{sBadgeClass}}">${{p.s_tier_pct}}%</span> (${{p.s_tier_avg}})</td>
        <td class="highlight-cell" style="color: #60a5fa;">${{p.tier_tokens_avg}} / 4</td>
        <td><span class="progress-pill ${{p4BadgeClass}}">${{p.completed_4p_pct}}%</span></td>
        <td>${{p.role_epics_avg}} / 8</td>
        <td>${{p.os_taken_avg || 0}} / raid-avg</td>
        <td class="highlight-cell">${{p.total_avg}} items</td>
      `;
      tbody.appendChild(tr);
    }});
  }}

  render();
</script>

</body>
</html>
"""

    out_file = '/home/sean/homelab/herdr/projects/loot/loot-system-simulation-report.html'
    with open(out_file, 'w', encoding='utf-8') as f:
        f.write(html_content)
    print(f"Successfully generated scarcity-grounded HTML report at: {out_file}")

if __name__ == '__main__':
    build_html()
