import chalk from "chalk";

function log(logLine: string): void {
  // eslint-disable-next-line no-console
  console.log(logLine);
}

function repeat(str: string, n: number): string {
  return new Array(n).join(str);
}

function indent(n: number): string {
  return repeat("    ", n);
}

function indentLines(str: string, n: number): string {
  return indent(n) + str.replace(/\n/g, `\n${indent(n)}`);
}

function logPass(logLine: string) {
  log(`${indent(2)}${chalk.bgGreen.black(" PASS ")} ${chalk.green(logLine)}`);
}

function logFail(logLine: string) {
  log(`${indent(2)}${chalk.bgRed.black(" FAIL ")} ${chalk.red(logLine)}`);
}

function logSkip(logLine: string) {
  log(`${indent(2)}${chalk.bgWhite.black(" SKIP ")} ${chalk.gray(logLine)}`);
}

function logStep(logLine: string) {
  log(chalk.yellow(logLine));
}

function logObject(obj: object) {
  /* eslint-disable no-console */
  console.dir(obj, { depth: null });
}

function logResults(results: {
  failed: number;
  passed: number;
  skipped: number;
}) {
  log(
    `${chalk.green(results.passed + " passing")} , ${chalk.red(
      results.failed + " failing",
    )}, ${chalk.white(results.skipped + " skipped")}`,
  );
}
export {
  indent,
  indentLines,
  log,
  logFail,
  logObject,
  logPass,
  logResults,
  logSkip,
  logStep,
};
