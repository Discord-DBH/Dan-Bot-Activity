const fs = require('fs');
const chalk = require('chalk');
const Discord = require("discord.js")
const client = new Discord.Client()
const config = require("./config.json")
const figlet = require('figlet');
const { Client } = require("discord.js")
//THe Packages have been Loaded
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
//The Collection for the Commands and its Aliases
["command", "events"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});
//The Handlers have Been Loaded
client.login(config.token)
