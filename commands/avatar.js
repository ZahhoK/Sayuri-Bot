const Discord = require("discord.js");
module.exports = {
  run: (client, message, args) => {
    const user = message.mentions.users.first();
   
    if (user) {
    
      const member = message.guild.member(user);
      }else{
         const embed = new Discord.MessageEmbed()
            .setAuthor(`${user.tag}`, avatar)
            .setColor(member.displayHexColor ? member.displayHexColor : '#D0C7FF')
            .setDescription(`[Avatar URL](${avatar})`)
            .setImage(avatar)
       return message.channel.send({embed}).catch(e =>{
    if (e) {
    message.channel.send("No puedo enviarte mensajes a tu MD, parece que esta bloqueado.");
    }
         } else {
        // The mentioned user isn't in this guild
        message.reply("Ese usuario no esta en este servidor!");
      }

    } else {
      message.reply("NO has mencionado a nadie!");
    }
  });
         message.channel.send({ embed }).catch(err => {
      console.error(err);
          
      } else {
        // The mentioned user isn't in this guild
        message.reply("Ese usuario no esta en este servidor!");
      }

    } else {
      message.reply("NO has mencionado a nadie!");
    }
  }

    },
    


  conf: {},

  help: {
    name: 'avatar',
    aliases: ['icon'],
    category: 'Info',
      guildOnly: true,
    description: 'Muestra el avatar del usuario.',
    usage: ''
  }
}