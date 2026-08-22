const fs = require('fs');
let code = fs.readFileSync('src/app/tmb/tmb.service.ts', 'utf8');

const s1 = `<<<<<<< HEAD
    map((raiders: Raider[]) =>
      raiders.filter((r) => r.is_alt === 0 && r.raid_group_id > 0),
=======
    map((tmbData: { data: Raider[], imported: string }) =>
      tmbData.data.filter((r) => r.is_alt === 0 && r.raid_group_id > 0)
>>>>>>> origin/main`;
const r1 = `    map((tmbData: { data: Raider[], imported: string }) =>
      tmbData.data.filter((r) => r.is_alt === 0 && r.raid_group_id > 0),`;

code = code.replace(s1, r1);
fs.writeFileSync('src/app/tmb/tmb.service.ts', code, 'utf8');
