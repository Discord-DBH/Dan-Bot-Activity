const Discord = require('discord.js');
module.exports = {
name: "infostory",
run: async (client, message, args) => {
	const embed = new Discord.MessageEmbed();
			embed.setTitle(`DBH Activity Bot Info!`);
			embed.setURL(`https://www.youtube.com/watch?v=dQw4w9WgXcQ`);
			embed.setColor('RANDOM');
			embed.setDescription("Hello! You are probably using my bot if you see this command. This is my first full discord.js bot and something i've been working on for around 1-4 days. People might think that this bot took to long to make. I get what you are saying because it did take way too long to make it. This bot was first made as a joke when dan brought something like this up. I think it's came out of a joke and it became something bigger. The code for this bot is public at https://github.com/Discord-DBH/Dan-Bot-Activity for you free to use. Thank you for using my bot! :)");
            embed.setFooter("Made with love by Alone")
			message.channel.send(embed);

}}


