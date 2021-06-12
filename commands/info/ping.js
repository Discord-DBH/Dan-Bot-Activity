const Discord = require('discord.js');
module.exports = {
name: "ping",
run: async (client, message, args) => {
	const embed = new Discord.MessageEmbed();
			embed.setTitle(`Ping Command!`);
			embed.setURL(`https://www.youtube.com/watch?v=dQw4w9WgXcQ`);
			embed.setColor('RANDOM');
			embed.setDescription("\`Ping:\`");
            embed.setFooter(client.ws.ping)
			message.channel.send(embed);

}}

