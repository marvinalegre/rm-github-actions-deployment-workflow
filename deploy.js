var ghpages = require("gh-pages");

ghpages.publish(
  "dist",
  {
    branch: "main",
    repo: "https://github.com/marvinalegre/rm-github-actions-deployment-workflow",
  },
  function (err) {},
);
