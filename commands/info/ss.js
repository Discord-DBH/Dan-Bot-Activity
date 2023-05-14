const { MessageAttachment } = require("discord.js");

module.exports = {
  name: "ss",
  run: async (client, message, args) => {
    const url = args.join("");
    const attachment = new MessageAttachment(
      `https://image.thum.io/get/width/1920/crop/1000/noanimate/${url}`,
      "Screenshot.png"
    );
    message.reply({
      content: `${message.author} (${message.author.tag})`,
      files: [attachment],
    });
  },
};
