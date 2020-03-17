const {MessageEmbed} = require('discord.js')
const ms = require('ms')
module.exports = {
  run: async (client, message, args) => {
        if(!message.member.permissions.has("ADMINISTRATOR")) return message.reply("Нямаш права!")
        let timev = message.content.slice(process.env.prefix.lenght+9)
        if(!timev) return message.channel.send('Не си посочил колко милисекунди ще е дълго раздаването!')
        let time = parseInt(timev,10)
        if(time<= 15000){
            return message.channel.send('Раздаването трябва да е по дълго от 15сек(15000 MS)')
        }
        let prize = message.content.split(`${time}`).join("").split(`${process.env.PREFIX}giveaway `).join("")
        if(!prize) return message.channel.send("Не си посочил каква ще е наградата!")
        const Embed = new MessageEmbed()
        .setTitle('🎉🎉 Раздаване 🎉🎉')
        .setDescription(prize)
        .setColor('RANDOM')
        .setFooter(`Това раздаване е ${ms(time)} дълго!`)
        let msg = await message.channel.send(Embed)
        await msg.react('🎉')
        setTimeout(() => {
            let winner = msg.reactions.cache.get('🎉').users.cache.random().id
            message.channel.send(`Победител е <@${winner}>`)
        }, time);

    
    },
  conf: {},

  help: {
    name: 'say',
    aliases: [''],
    cooldown: 5,
    guildOnly: true,
    category: 'Diversion',
    description: 'Repite cualquier mensaje.',
    usage: ''
  }
}