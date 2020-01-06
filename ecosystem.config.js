module.exports = {
  apps: [],
  deploy: {
    production: {
      user: "deploy",
      host: "alexdana.me",
      ref: "origin/master",
      repo: "git@github.com:misteralex95/tic-tac-toc.git",
      path: "/home/deploy/tic-tac-toc",
      "post-deploy":
        ". ~/.bashrc && yarn install && pm2 reload ecosystem.config.js --env production && yarn start",
      env: {
        NODE_ENV: "production"
      }
    }
  }
};
