/**
 * @type {import('semantic-release').GlobalConfig}
 * @see https://semantic-release.gitbook.io/semantic-release/usage/configuration#configuration
 */
module.exports = {
  branches: ["master"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github",
  ],
};
