const Discord = require("discord.js");
const { Client, Collection } = require("discord.js");
const fs = require("fs");
const config = require("./config.json");

const client = new Client({
  intents: ["GUILDS", "GUILD_MESSAGES"],
});

client.commands = new Collection();
client.aliases = new Collection();

const commandFiles = fs.readdirSync("./commands")
  .filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
  if (command.aliases) {
    command.aliases.forEach(alias => {
      client.aliases.set(alias, command.name);
    });
  }
}

const eventFiles = fs.readdirSync("./events")
  .filter(file => file.endsWith(".js"));

for (const file of eventFiles) {
  const event = require(`./events/${file}`);
  if (event.once) {
    client.once(event.name, (...args) => event.run(...args, client));
  } else {
    client.on(event.name, (...args) => event.run(...args, client));
  }
}

client.login(config.token);
