const Discord = require('discord.js');
const superagent = require('superagent');
module.exports = {
  run: async (client, message, args) => {
    // Code
    if (!message.mentions.users.first()) return message.reply("Necesitas mencionar a alguien para besarl@");
    const { body } = await superagent
    .get("https://nekos.life/api/kiss");
    
    const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setTitle(`OwO, ${message.author.username} beso a ${message.mentions.users.first().username}`)
    .setImage(body.url) 
    message.channel.send({embed})
},

  conf: {},

  help: {
    name: 'kiss',
    aliases: [''],
    category: 'Diversion',
    description: 'Repite cualquier mensaje.',
    usage: ''
  }
}