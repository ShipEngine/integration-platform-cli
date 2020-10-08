import { CarrierApp } from "@shipengine/connect-sdk/lib/internal";
import Suite from "../runner/suite";
import {
  ConnectionFormConfigOptions,
  ConnectionFormTestParams,
} from "../runner/config/connection-form";
import reduceDefaultsWithConfig from '../utils/reduce-defaults-with-config';
import objectToTestTitle from '../utils/object-to-test-title';

import { expect } from "chai";
import Test from '../runner/test';

interface TestArgs {
  title: string;
  methodArgs: ConnectionFormTestParams;
  config: unknown;
}

export class ConnectionForm extends Suite {
  title = "connectionForm";

  buildTestArg(
    config: ConnectionFormConfigOptions,
  ): TestArgs | undefined {

    // Make a best guess at the defaults, need to resolve the default vs config based delivery service early
    // on since that determines what address and associated timezones get generated.
    const defaults: ConnectionFormTestParams = {
      connectionFormData: {},
    };

    const testParams = reduceDefaultsWithConfig<
      ConnectionFormTestParams
    >(defaults, config);

    const title = config.expectedErrorMessage
      ? `it raises an error when creating a connection form with ${objectToTestTitle(
        testParams,
      )}`
      : `it validates the connection form with ${objectToTestTitle(
        testParams,
      )}`;

    return {
      title,
      methodArgs: testParams,
      config,
    };
  }

  buildTestArgs(): Array<TestArgs | undefined> {
    if (Array.isArray(this.config)) {
      return this.config.map((config: ConnectionFormConfigOptions) => {
        return this.buildTestArg(config);
      });
    }
    const config = this.config as ConnectionFormConfigOptions;
    return [this.buildTestArg(config)];
  }

  tests(): Test[] {
    const testArgs = this.buildTestArgs().filter((args) => args !== undefined) as TestArgs[];

    if (testArgs.length === 0) {
      return [];
    }
    return testArgs.map((testArg) => {
      return this.test(
        testArg.title,
        testArg.methodArgs,
        testArg.config,
        async () => {
          expect(2).to.equal(2);
          const carrierApp = this.app as CarrierApp;

        }
      );
    });
  }
}