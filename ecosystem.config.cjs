module.exports = {
  apps: [
    {
      name: "discord-vac-bot",
      script: "./index.js",
      watch: true,
      ignore_watch: ["node_modules", ".git", "database.db"],
      autorestart: true,
      time: true,
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
