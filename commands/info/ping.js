const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'ping',
  description: 'Displays the bot\'s current latency and API ping.',
  execute: async (interaction) => {
    const embed = new MessageEmbed()
      .setTitle('Pong!')
      .setColor('RANDOM')
      .addField('🏓 Latency', `${Date.now() - interaction.createdTimestamp}ms`, true)
      .addField('💻 API', `${Math.round(interaction.client.ws.ping)}ms`, true);

    await interaction.reply({ embeds: [embed] });
  }
};
