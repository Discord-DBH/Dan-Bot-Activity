const Discord = require('discord.js');
module.exports = {
  name: "oddlysatisfying",
  run: async (client, message, args) => {
    const embed = new Discord.MessageEmbed();
    import('got').then(got => {
      got('https://www.reddit.com/r/memes/random/.json')
        .then(response => {
          const [list] = JSON.parse(response.body);
          const [post] = list.data.children;

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

          message.channel.send(embed);
        })
        .catch(console.error);
    }).catch(console.error);
  }
};
