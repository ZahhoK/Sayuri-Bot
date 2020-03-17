const Discord = require('discord.js');
module.exports = {
 run: (client, message, args) => {
const embed = new Discord.MessageEmbed()
	.setColor('#FFB09F')
	.setTitle("Comandos de Sayuri")
  .setDescription("Estos son mis comandos")
  .addField("__𝐀𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐜𝐢𝐨𝐧__", "`poll, purge, setprefix`")
  .addField("__𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐜𝐢𝐨𝐧__", "`serverinfo, userinfo, help, invite, ping`")
  .addField("__𝐍𝐒𝐅𝐖__", "`ass, boobs`")
  .addField("__𝐌𝐨𝐝𝐞𝐫𝐚𝐜𝐢𝐨𝐧__","`kick, ban`")
  .addField("__𝐃𝐢𝐯𝐞𝐫𝐬𝐢𝐨𝐧__","`kiss, cuddle, jumbo, say`")
  .setTimestamp()
  .setFooter('Release 1.01')
    message.author.send({embed}).catch(e =>{
    if (e) {
    message.channel.send("No puedo enviarte mensajes a tu MD, parece que esta bloqueado.");
    message.channel.send({embed});
    }
  });
  message.reply("Revisa tu DM!");
   message.react('📨')
 },
  
  

  conf: {},

  help: {
    name: 'help',
    aliases: ['h'],
    category: 'Help',
    guildOnly: true,
    description: 'Muestra todos los comandos disponibles del bot.',
    usage: 'help'
  }
}
