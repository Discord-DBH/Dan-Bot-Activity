module.exports = {
name: "evaldev",
run: async (client, message, args) => {
let owner = ['819586427968552971', '819586427968552971']
if (!owner.includes(message.author.id)) return message.reply("You are not my owner!!");
const Discord = require("discord.js");
    try {
            let evaled;
            try {
                evaled = await eval(args.join(" "));

                const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.tag)
                    .setTitle("Developer Evaluation")
                    .addField("Input",`\`\`\`kt\n${args.join(" ")}\n\`\`\``)
                    .addField("Output", `\`\`\`kt\n${evaled}\n\`\`\``)
                    .setColor("#00F6FF");


                message.channel.send(embed);
            } catch (error) {
                console.error(error);
                    const errormessage = new Discord.MessageEmbed()
                    .setAuthor(message.author.tag)
                    .setTitle("Evaluation Error")
                    .addField("Input",`\`\`\`kt\n${args.join(" ")}\n\`\`\``)
                    .addField("Error", `\`\`\`kt\n${error.message}\n\`\`\``)
                    .setColor("#00F6FF");
                     message.channel.send(errormessage);
            }
        } catch (err) {
            console.error(err);
        }
}}
