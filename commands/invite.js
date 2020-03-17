const Discord = require('discord.js')
const info = require('../data/infoMsgs.json');
module.exports = {
  run: (client, message, args) => {
 const embed = new Discord.MessageEmbed()
  .setColor(Math.floor(Math.random()*16777215))
  .setTitle("Informacion de Sayuri:", '')
  .addField('Informacion Importante',info.infoMsg1)
  .addField('Invitame',info.infoMsg2)
  .addField('Links',info.infoMsg3)
  .setFooter(`© 2020 𝐌𝐚𝐲𝐮.`);

  message.author.send({embed}).catch(e =>{
    if (e) {
    message.channel.send("No puedo enviarte mensajes a tu MD, parece que esta bloqueado.");
    message.channel.send({embed});
    }
  });
  message.reply("Revisa tu DM!");  
    },

  conf: {},

  help: {
    name: 'invite',
    aliases: [''],
    category: 'Diversion',
    description: 'Repite cualquier mensaje.',
    usage: ''
  }
}