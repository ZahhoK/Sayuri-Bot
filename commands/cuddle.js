  
const Discord = require('discord.js');
const superagent = require('superagent');
module.exports = {
  run: async (client, message, args) => {
   if (!message.mentions.users.first()) return message.reply("You need to mention someone to cuddle them");
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/cuddle");
    
    const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setTitle(`OwO, ${message.author.username} cuddled ${message.mentions.users.first().username}`)
    .setImage(body.url) 
    .setTimestamp();
    message.channel.send({embed})

  },

  conf: {},

  help: {
    name: 'cuddle',
    aliases: [''],
    category: 'Diversion',
    guildOnly: true,
    description: 'Repite cualquier mensaje.',
    usage: ''
  }
}