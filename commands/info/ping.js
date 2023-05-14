const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'ping',
  run: async (client, message, args) => {
    const embed = new MessageEmbed()
      .setTitle('Pong!')
      .setColor('RANDOM')
      .addField('🏓 Latency', `${Date.now() - message.createdTimestamp}ms`, true)
      .addField('💻 API', `${Math.round(client.ws.ping)}ms`, true);

    message.channel.send({ embeds: [embed] });
  }
};
