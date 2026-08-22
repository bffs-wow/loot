const fs = require('fs');
let code = fs.readFileSync('src/app/tmb/tmb.service.ts', 'utf8');

const s2 = `<<<<<<< HEAD
    private itemService: ItemService,
  ) {}
=======
    private itemService: ItemService
  ) { }
>>>>>>> origin/main`;
const r2 = `    private itemService: ItemService,
  ) {}`;

const s3 = `<<<<<<< HEAD
            (i) => (i.pivot.note = 'INVALID LIST (TOO MANY OS)'),
=======
            (i) => (i.pivot.note = \`INVALID LIST (TOO MANY OS) - Starting at \${firstOsItem.name}\`)
>>>>>>> origin/main`;
const r3 = `            (i) => (i.pivot.note = \`INVALID LIST (TOO MANY OS) - Starting at \${osItems[0]?.name}\`),`;

const s4 = `<<<<<<< HEAD
                (i) => (i.pivot.note = 'INVALID LIST (OS TOO EARLY)'),
=======
                (i) => (i.pivot.note = \`INVALID LIST (OS TOO EARLY) \${firstOsItem.name}\`)
>>>>>>> origin/main`;
const r4 = `                (i) => (i.pivot.note = \`INVALID LIST (OS TOO EARLY) \${firstOsItem.name}\`),`;


code = code.replace(s2, r2);
code = code.replace(s3, r3);
code = code.replace(s4, r4);

fs.writeFileSync('src/app/tmb/tmb.service.ts', code, 'utf8');
