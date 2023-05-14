// Packages
const Discord = require("discord.js");
const { Client, Collection } = require("discord.js");
const config = require("./config.json");
const fs = require("fs");

// Bot
const client = new Client({
  intents: ["GUILDS", "GUILD_MESSAGES"]
});
client.commands = new Collection();
client.aliases = new Collection();
client.login(config.token);

// Command Handler
fs.readdirSync("./commands").forEach(dir => {
  const commandFiles = fs.readdirSync(`./commands/${dir}/`).filter(file => file.endsWith(".js"));

  for (const file of commandFiles) {
    const command = require(`./commands/${dir}/${file}`);
    client.commands.set(command.name, command);
    console.log(`Loaded command: ${command.name}`);
  }
});

// Event Handler
fs.readdirSync("./events").forEach(file => {
  const event = require(`./events/${file}`);
  console.log(`Loaded event: ${event.name}`);
  if (event.once) {
    client.once(event.name, (...args) => event.run(client, ...args));
  } else {
    client.on(event.name, (...args) => event.run(client, ...args));
  }
});
