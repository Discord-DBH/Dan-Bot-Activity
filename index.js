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
["command", "event"].forEach(handler => {
    try {
        require(`./handlers/${handler}`).run(client);
    } catch (err) {
        console.error(`Error loading ${handler} handler: ${err}`);
    }
});
