import { createRequire } from "module";

const require = createRequire(import.meta.url); // Require hack to load dependency
const fs = require("fs-extra");

const writter = {
    /**
     * Writes a JSON file in `path` with `data`
     * @param {String} path Where to store the `data`
     * @param data Data to store
     * @returns
     */
    write: async (path, data) => {
      fs.outputFile(path, JSON.stringify(data), (err) =>
        err ? console.log("Error stringifying ", err) : 0
      );
    }
  }

export default writter