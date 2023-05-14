module.exports = {
    name: "interactionCreate",
    async run(interaction, client) {
        if (!interaction.isCommand()) return;
        
        const commandName = interaction.commandName;
        const command = client.commands.get(commandName);
        
        if (!command) return;

        try {
            await command.execute(interaction, client);
        } catch (error) {
            console.error(error);
            interaction.reply({ content: "There was an error trying to execute that command!", ephemeral: true });
        }
    },
};
