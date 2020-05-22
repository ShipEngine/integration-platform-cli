import * as fs from "fs";
import * as path from "path";
import { execSync } from "child_process";

export async function packageApp(): Promise<string> {

  const packagePath = path.join(process.cwd(), "package.json");

  const results = await fs.promises.readFile(packagePath, "utf-8");
  const pjson = JSON.parse(results);

  // take dependencies and move them to bundledDependencies

  pjson.bundledDependencies = [];

  for (let dependency of Object.keys(pjson.dependencies)) {
    pjson.bundledDependencies.push(dependency);
  }

  await fs.promises.writeFile(packagePath, JSON.stringify(pjson, undefined, 2));

  let packResults;

  try {
    //TODO: make this asynchronous?
    packResults = execSync("npm pack");
  }
  catch(error) {
    let err = error as Error;
    throw new Error(`There was an error packaging your app ${err.message}`);
  }

  return packResults.toString("utf-8").trim();
}