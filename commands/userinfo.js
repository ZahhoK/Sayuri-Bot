const Discord = require('discord.js');
const moment = require('moment');
module.exports = {
  run: (client, message, args) => {
 const member = args.member || message.member;

        if (member.user.bot) {
            var author = member.user.tag + ' [BOT]'
        } else {
            var author = member.user.tag
        }

        if (!member.nickname) {
            var nickname = '`N/A`'
        } else {
            var nickname = member.nickname
        }


        const roles = member.roles.array().slice(1).sort((a, b) => a.comparePositionTo(b)).reverse().map(role => {
            return role.name;
        })

        const embed = new Discord.MessageEmbed()
            .setAuthor(author, member.user.displayAvatarURL({ format: 'png' }))
            .setDescription(status)
            .setColor(member.displayHexColor)
            .setThumbnail(member.user.displayAvatarURL())
            .setFooter(`Solicitado po ${message.author.tag}`, message.author.displayAvatarURL())
            .addField('❯\u2000\Information', `•\u2000\**ID:** ${member.user.id}\n\•\u2000\**Estado:** ${member.user.presence.status ? member.user.presence.status : '`N/A`'}\n\•\u2000\**Creado:** ${moment(member.user.createdAt).format('MMMM Do YYYY')} `)
            .addField('❯\u2000\Server Membership', `•\u2000\**Apodo:** ${nickname}\n\•\u2000\**Unido:** ${moment(member.joinedAt).format('MMMM Do YYYY')} `, true)
            .addField('❯\u2000\**Role Infomation**', `•\u2000\**Rol alto:** ${member.highestRole.name !== '@everyone' ? member.highestRole.name : 'None'}\n\•\u2000\**Hoist Role:** ${member.hoistRole ? member.hoistRole.name : 'None'}`, true)
            .addField(`❯\u2000\**Roles** [${roles.length}]`, roles.length ? '•\u2000' + roles.join(', ') : '•\u2000\None', true)
        return message.channel.send(`Informacion de: **${member.user.username}**#${member.user.discriminator}`, { embed: embed });
    },
        
  

  conf: {},

  help: {
    name: 'userinfo',
    aliases: [''],
    category: 'Info',
    description: '.',
    usage: ''
  }
}