const Discord = require('discord.js');
const snekfetch = require('snekfetch');
const errors = require('../assets/json/errors.json');

module.exports = {
  run: async (client, message, args) => {
       
        var errMessage = errors[Math.round(Math.random() * (errors.length - 1))];
        if (!message.channel.nsfw) {
            message.react('💢');
            return message.channel.send(errMessage);

        } else {

            const id = [Math.floor(Math.random() * 10930)];
            const res = await snekfetch.get(`http://api.oboobs.ru/boobs/${id}`);
            const preview = res.body[0]["PREVIEW".toLowerCase()];
            const image = `http://media.oboobs.ru/${preview}`;

            const embed = new Discord.MessageEmbed()
                .setTimestamp()
                .setImage(image)
                .setColor('#CEA0A6');
            return message.channel.send({ embed });
        }
    },
  conf: {},

  help: {
    name: 'boobs',
    aliases: [''],
    category: 'NSFW',
    guildOnly: true,
    description: 'Repite cualquier mensaje.',
    usage: ''
  }
}