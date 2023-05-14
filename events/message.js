const { prefix } = require("../config.json");

module.exports = {
    name: "messageCreate",
    async run(message, client) {
        if (message.author.bot) return;
        if (!message.guild) return;
        if (!message.content.startsWith(prefix)) return;

        if (!message.member) {
            message.member = await message.guild.members.fetch(message.author);
        }

        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();

        if (commandName.length === 0) return;

        const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

        if (!command) return;

        try {
            await command.execute(message, args, client);
        } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
        }
    },
};
