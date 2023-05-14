// Packages
const { Client, Collection, Intents } = require("discord.js");
const config = require("./config.json");
const fs = require("fs");

// Bot
const client = new Client({
  intents: [Intents.FLAGS.GUILDS]
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
  try {
    if (event.once) {
      client.once(event.name, (...args) => event.execute(client, ...args));
    } else {
      client.on(event.name, (...args) => event.execute(client, ...args));
    }
  } catch (error) {
    console.error(`Error loading event ${event.name}: ${error}`);
  }
});

// Slash Command Handler
client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;
  
  const command = client.commands.get(interaction.commandName);
  
  if (!command) return;
  
  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(`Error executing slash command ${interaction.commandName}: ${error}`);
    await interaction.reply({ content: 'An error occurred while executing this command.', ephemeral: true });
  }
});
