const {MessageAttachment} = require("discord.js");
const Discord = require('discord.js');
module.exports = {
name: "ss",
run: async (client, message, args) => {
//const arg = message.content.slice(4).trim().split(/+ /);          
let url = args.join("")
message.channel.send(`${message.author}(${message.author.tag})`,
new MessageAttachment(`https://image.thum.io/get/width/1920/crop/1000/noanimate/${url}`, "Screenshot.png"))

}}
