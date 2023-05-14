const Discord = require('discord.js');
const got = require('got');

module.exports = {
  name: 'oddlysatisfying',
  description: 'Get a random oddly satisfying meme from Reddit',
  async execute(client, interaction) {
    const embed = new Discord.MessageEmbed();
    const response = await got('https://www.reddit.com/r/memes/random/.json').json();
    const [post] = response[0].data.children;

    const permalink = post.data.permalink;
    const memeUrl = `https://reddit.com${permalink}`;
    const memeImage = post.data.url;
    const memeTitle = post.data.title;
    const memeUpvotes = post.data.ups;
    const memeNumComments = post.data.num_comments;

    embed.setTitle(`**Meme Title:** ${memeTitle}`);
    embed.setURL(`${memeUrl}`);
    embed.setColor('RANDOM');
    embed.setImage(memeImage);
    embed.setDescription(`**Upvotes and comments:** 👍 ${memeUpvotes} 💬 ${memeNumComments}`);

    await interaction.reply({ embeds: [embed] });
  }
};
