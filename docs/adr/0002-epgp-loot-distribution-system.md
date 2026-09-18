# 0002: EPGP (Effort Points / Gear Points) Loot Distribution System

## Context
Following evaluation of weighted roll models, the guild adopted a complete EPGP (Effort Points / Gear Points) model to achieve 100% mathematical objectivity, completely eliminate dice RNG and drama, naturally support dynamic/unknown raid metas without pre-compiled wishlists, and cleanly manage split 40m/20m/10m rosters. This supersedes the Additive Boost model in ADR 0001.

The guild already tracks raid attendance, bench history, and received loot in That's My BiS (TMB). We need a seamless pipeline where TMB remains the historical record while the web application calculates EPGP and exports structured data into in-game addons (Core Loot Manager and Gargul).

## Decision
We adopt the EPGP distribution model governed by Priority Rating ($\text{PR} = \frac{\text{EP}}{\text{GP}}$) with the following master configuration and data pipeline:

1. **Effort Points (EP)**:
   - Checkpoint-based attendance (100 EP total per full Raid Night: On-time = 25 EP, Mid-raid = 50 EP, End-of-raid = 25 EP).
   - Standby/benched raiders receive 100% EP credit equal to active raiders provided they are online at raid start.
   - Minimum EP to qualify for Main Spec loot: 100 EP (equivalent to 1 full raid night, preventing new recruits from claiming high-tier gear on hour one).

2. **Gear Points (GP)**:
   - Dynamic formula scaling by item level and slot budget:
     - 2H Weapon: 2.000 multiplier
     - Trinkets: 1.500 multiplier
     - 1H Weapon / Shield / Off-Hand / Ranged: 1.000 multiplier
     - Chest / Legs / Helm: 1.000 multiplier
     - Shoulders / Gloves / Belt / Boots: 0.777 multiplier
     - Neck / Cloak / Ring / Bracers: 0.550 multiplier
   - Base GP Floor: 100 GP minimum floor applied to all raiders. If an inactive raider's or hoarder's GP decays below 100, it is clamped to 100, steadily degrading their PR as their EP decays.

3. **Tiered Allocation & Discounts**:
   - **Main Spec (MS)**: 100% GP cost. Compares PR among all MS bidders; highest PR wins.
   - **Minor Upgrade / Sidegrade**: 50% GP cost. Compares PR only if no Main Spec bidders exist.
   - **Off-Spec (OS)**: 25% GP cost. Compares PR only if no MS or Minor bidders exist.
   - **Greed / Transmog / Rot**: 0% GP cost (Free).

4. **Weekly Decay**:
   - 10% decay applied weekly on Tuesday reset to all raiders' EP and GP (down to the 100 GP floor). Eliminates point hoarding and enables consistent new recruits to catch up within 2–3 weeks.

5. **TMB Ingest & Addon Export Pipeline**:
   - **Source of Truth**: That's My BiS (`assets/tmb-data.json`) supplies attendance counts, benched counts, and the `received` loot log with inventory slots.
   - **Calculation Engine**: `synergy-loot` computes each raider's decayed EP, decayed GP, and current PR.
   - **Core Loot Manager (CLM)**: The web app generates a structured JSON standings payload imported in-game via `/clm import` or `/clm importgeneric`.
   - **Gargul Tooltip Sync**: The web app exports a compressed payload for `/gl tmb` so that in-game tooltips display each raider's live PR standing.

## Consequences
- No manual in-game bookkeeping: all point math, slot coefficients, and decay schedules are handled automatically by `synergy-loot` from the TMB export.
- Standby raiders confirmed online at raid start receive full 100 EP credit alongside active raiders.
- In-game loot distribution is instantaneous, fully automated, and 100% transparent.
