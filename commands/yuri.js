const Discord = require('discord.js');
const randomPuppy = require('random-puppy');
const errors = require('../assets/json/errors.json');

module.exports = {
  run: (client, message, args) => {
    var errMessage = errors[Math.round(Math.random() * (errors.length - 1))];
        if (!message.channel.nsfw) {
            message.react('💢');
            return message.channel.send(errMessage);
        }

        randomPuppy('yuri')
            .then(url => {
                const embed = new Discord.MessageEmbed()
                    .setFooter(`yuri`)
                    .setDescription(`[Imagen URL](${url})`)
                    .setImage(url)
                    .setColor('#A187E0');
                return message.channel.send({ embed });
            })
    

  },

  conf: {},

  help: {
    name: 'yuri',
    aliases: [''],
    category: 'NSFW',
    description: 'Repite cualquier mensaje.',
    usage: ''
  }
}