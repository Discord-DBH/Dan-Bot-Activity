// Packages
const Discord = require("discord.js")
const config = require("./config.json")

// Bot
const client = new Discord.Client()
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.login(config.token)

// Command Handler
["command", "events"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});
