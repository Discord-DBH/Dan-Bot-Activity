const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'ping',
  description: 'Check the bot\'s latency',
  async execute(interaction) {
    const embed = new MessageEmbed()
      .setTitle('Pong!')
      .setColor('RANDOM')
      .addField('🏓 Latency', `${Date.now() - interaction.createdTimestamp}ms`, true)
      .addField('💻 API', `${Math.round(interaction.client.ws.ping)}ms`, true);

    await interaction.reply({ embeds: [embed] });
  }
};
