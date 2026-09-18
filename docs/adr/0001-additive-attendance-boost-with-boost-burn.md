# 0001: Additive Attendance Boost with Boost Burn Loot Distribution

## Context
With unknown raid releases, dynamic balance patches, and shifting metas, pre-compiled 50-item wishlists (ThatsMyBis) fail. The guild requires an objective, drama-free loot distribution system for 40-man, 20-man, and 10-man raids operating on Tuesday/Thursday nights. Subjective Loot Council is strictly rejected.

## Decision
We adopt an **Additive Attendance Boost** system integrated with in-game Gargul (`/gl br`) paired with **Boost Burn** streak protection:

1. **Attendance**: 1 point per Tuesday/Thursday Raid Night for signed-up raiders who are rostered or online at raid start on standby. Tracked across a rolling 6-week window (12 points max).
2. **Roll Formula**: Standard `/roll 100` + Additive Roll Boost. Boost equals `10 * AttendancePoints` (maximum +120 bonus, effective max roll 220). Recruits serve a 1-2 week trial eligible only for Rot, naturally scaling their boost as they accumulate points in the 6-week window.
3. **Item Classification**: Hardcoded by slot to prevent collusion:
   - **Major**: Weapons (1H/2H/Offhand/Shield/Ranged/Wand), Trinkets, Tier Tokens, Chest, Legs.
   - **Minor**: Helm, Shoulders, Gloves, Boots, Belts, Bracers, Cloaks, Necks, Rings.
4. **Boost Burn**: Winning a contested Major item drops that raider's roll boost to +0 for subsequent Major rolls for the remainder of that Raid Night, fully resetting on the next Raid Night. Minor items, off-spec, and rot do not trigger Boost Burn.
5. **Role Gating**: Zero discretionary officer overrides. Only pre-published, rule-gated assignments (e.g. Main Tank defensive mitigation, legendary quest components) bypass rolls.

## Considered Options
- **Pure Loot Council**: Rejected due to high risk of drama, bias, and favoritism accusations.
- **Strict +1 Priority Brackets**: Rejected as overly rigid, inducing degenerate behavior where players pass on legitimate upgrades to save their virgin roll.
- **Ni Karma / Half-Life DKP**: Considered, but rejected due to mathematical friction during live raids compared to native Gargul boosted roll imports.
- **EPGP**: Fully explored; preserved as a candidate alternative.

## Consequences
- Requires an automated export from the web app into Gargul `/gl br`.
- Standby tracking requires confirming players online at raid start.
- In-game loot distribution is fast, transparent, and completely verifiable in public chat.
