const fs = require("fs");
const Papa = require("papaparse");

/**
 * This is a helper to generate the large empty object to fill in class and item limit restrictions.
 * Usage: run via `npm run make-item-restrictions`
 * After running, remove any old instance of `ITEM_RESTRICTIONS` in the `item-restrictions.ts` file.
 * Run VSCode code formatter to clean up the raw JSON.
 * The `ITEM_NAME` property is an assistant to be able to locate objects in the file to update them.
 */
(() => {
  const csv = fs.readFileSync("./src/assets/tmb-items.csv", "utf8");
  Papa.parse(csv, {
    header: true,
    complete: (res) => {
      const restrictionsObj = {};
      for (const row of res.data) {
        restrictionsObj[row.id] = {
          ITEM_NAME: row.name,
          allowedClasses: [],
          restrictedClasses: [],
          allowedRankings: 3,
        };
      }

      fs.appendFileSync(
        "./src/app/tmb/item-restrictions.ts",
        `export const ITEM_RESTRICTIONS: ItemRestrictions = ${JSON.stringify(
          restrictionsObj,
          null,
          2
        )}`
      );
    },
  });
})();
