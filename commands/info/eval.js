const { MessageEmbed } = require('discord.js');
const ownerIDs = ['824394779327594536'];

module.exports = {
    name: 'evaldev',
    run: async (client, message, args) => {
        if (!ownerIDs.includes(message.author.id)) {
            return message.reply('You are not my owner!');
        }

        try {
            const code = args.join(' ');
            let evaled = await eval(code);

            if (typeof evaled !== 'string') {
                evaled = require('util').inspect(evaled);
            }

            const embed = new MessageEmbed()
                .setAuthor(message.author.tag)
                .setTitle('Developer Evaluation')
                .addField('Input', `\`\`\`kt\n${code}\n\`\`\``)
                .addField('Output', `\`\`\`kt\n${evaled}\n\`\`\``)
                .setColor('GREEN')
                .setTimestamp();

            message.channel.send({ embeds: [embed] });
        } catch (error) {
            const embed = new MessageEmbed()
                .setAuthor(message.author.tag)
                .setTitle('Evaluation Error')
                .addField('Input', `\`\`\`kt\n${args.join(' ')}\n\`\`\``)
                .addField('Error', `\`\`\`kt\n${error}\n\`\`\``)
                .setColor('RED')
                .setTimestamp();

            message.channel.send({ embeds: [embed] });
        }
    },
};
