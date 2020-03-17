const Discord = require('discord.js');
module.exports = {
  run: (client, message, args) => {
    let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(":no_entry_sign: **Error:** NO tienes **Kick Members** permisos!");
  if (message.mentions.users.size < 1) return message.reply('Debes mencionar a alguien.').catch(console.error);
  if (user.id === message.author.id) return message.reply("No puedo hacerlo Onii-chan");
  if (user.id === client.user.id) return message.reply("NO puedo kickearme...");
    
  if (message.mentions.users.first().id === "651964537330991114") return message.reply("NO puedes kickear a mi desarrollador >:v");
  if (reason.length < 1) reason = 'Ninguna razon dada';

  if (!message.guild.member(user).kickable) return message.reply('NO puedo kickear ese miembro');
  message.guild.member(user).kick();

  const embed = new Discord.MessageEmbed()
    .setColor(0xCFFF84)
    .setTimestamp()
    .addField('Accion:', 'Kick')
    .addField('Usuario:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Razon', reason)
    .setFooter('Moderador:', `${message.author.username}#${message.author.discriminator}`);
  let logchannel = message.guild.channels.find('name', 'logs');
  if  (!logchannel){
    message.channel.send(`:white_check_mark: Success! I have kicked that toxic kid.`)
  }else{
    message.channel.send(`:white_check_mark: Success! I\'ve logged the kick in <#${logchannel.id}>.`)
    client.channels.get(logchannel.id).send({embed});
  }
  if(user.bot) return;
  return message.mentions.users.first().send({embed}).catch(e =>{
    if(e) return
  });
    
  },

  conf: {},

  help: {
    name: 'kick',
    aliases: ['k'],
    category: 'Administracion',
    description: 'Kickea a cualquier usurario.',
    usage: 'kick [mention] [reason]'
  }
}