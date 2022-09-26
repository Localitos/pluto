import { danger, warn } from "danger";

const changeset = danger.git.fileMatch(".changeset/*.md");
const packageFiles = danger.git.fileMatch(
  "packages/**/*.tsx",
  "packages/**/*.tsx"
);
const packageFileTests = danger.git.fileMatch(
  "packages/**/*.test.ts",
  "packages/**/*.test.tsx"
);

warn(JSON.stringify(changeset));
warn(JSON.stringify(packageFiles));
warn(JSON.stringify(packageFileTests));

if (
  (packageFiles.modified || packageFileTests.modified) &&
  !changeset.created
) {
  fail("You don't have a changeset file for your modifications.");
} else if (!changeset.created) {
  warn("You don't have a changeset file for your modifications.");
}
