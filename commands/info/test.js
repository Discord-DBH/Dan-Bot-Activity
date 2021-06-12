const axios = require('axios')
const config = require('../../config.json')
module.exports = {
name: "youtube",
run: async(client, message, args) => {
    if (!message.member.voice.channel) return message.channel.send("You need to be in a voice channel, So I can generate an invite!");
    const data = {
        max_age: 86400,
        max_uses: 0,
        target_application_id: "755600276941176913", // youtube together
        target_type: 2,
        temporary: false,
        validate: null
    }
    axios({
        url: `https://discord.com/api/v8/channels/${message.member.voice.channelID}/invites`,
        method: 'POST',
        followRedirect: true,
        maxRedirects: 5,
        headers: {
            'Authorization': 'Bot ' + config.token,
            'Content-Type': 'application/json',
        },
        data: data
    }).then(invite => {
        message.channel.send(`✅ | Link generated for **Youtube Together** : <https://discord.gg/${invite.data.code}>`);
    }).catch(err => {
        console.log(err)
   })
}}


