const Discord = require('discord.js');
module.exports = {
name: "github",
run: async (client, message, args) => {
	const embed = new Discord.MessageEmbed();
			embed.setTitle(`DBH ACTIVITY GITHUB!`);
			embed.setURL(`https://www.youtube.com/watch?v=dQw4w9WgXcQ`);
			embed.setColor('RANDOM');
			embed.setDescription("https://github.com/Discord-DBH/Dan-Bot-Activity");
            embed.setFooter("Made with love by Alone")
			message.channel.send(embed);

}}



