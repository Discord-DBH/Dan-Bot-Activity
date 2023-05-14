// Packages
const Discord = require("discord.js");
const { Client, Collection } = require("discord.js");
const config = require("./config.json");

// Bot
const client = new Client({
    intents: ["GUILDS", "GUILD_MESSAGES"]
});
client.commands = new Collection();
client.aliases = new Collection();
client.login(config.token);

// Command Handler
const commandFiles = require("./handlers/command");
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

// Event Handler
const eventFiles = require("./handlers/event");
for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    if (event.once) {
        client.once(event.name, (...args) => event.run(...args, client));
    } else {
        client.on(event.name, (...args) => event.run(...args, client));
    }
}
