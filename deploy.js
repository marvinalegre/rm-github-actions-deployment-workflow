var ghpages = require("gh-pages");

ghpages.publish(
  "dist",
  {
    branch: "main",
    repo:
      "https://" +
      process.env.GH_TOKEN +
      "@github.com/marvinalegre/rm-github-actions-deployment-workflow",
    silent: true,
  },
  function (err) {
    console.log(err.message);
  },
);
