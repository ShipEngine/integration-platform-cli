import * as path from "path";
import ShipengineApiClinet from "../shipengine-api-client";
import { loadApp } from "@shipengine/integration-platform-loader";
import { NewDeployment } from "../types";

/**
 * Takes an npm package tarball and uploads it via a multipart/form-data to the integration platform.
 */
export async function deployApp(
  tarballName: string,
  client: ShipengineApiClinet,
): Promise<NewDeployment> {
  // load app to retrieve the carrier id.
  const app = await loadApp(process.cwd());

  // Find the tarball
  const pathToTarball = path.join(process.cwd(), tarballName);

  let deployedApp;
  try {
    deployedApp = await client.apps.getByName(app.manifest.name);
  } catch {
    deployedApp = await client.apps.create({
      name: app.manifest.name,
      type: "carrier",
    });
  }

  console.log(pathToTarball);
  
  const deployment = await client.deploys.create({
    appId: deployedApp.id,
    pathToTarball: pathToTarball,
  });

  return deployment;
}
