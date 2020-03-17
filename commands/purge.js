module.exports = {
  run:  async (client, message, args) => {
    
	 if (message.deletable) {
            message.delete();
        }
    
        // Member doesn't have permissions
        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            return message.reply("No puedes borrar mensajes....").then(m => m.delete(5000));
        }

        // Check if args[0] is a number
        if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
            return message.reply("Espera... ¿Es ese un numero? Por cierto, no puedo borrar 0 mensajes.").then(m => m.delete(5000));
        }

        // Maybe the bot can't delete messages
        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
            return message.reply("L-lo siento... No puedo borrar mensajes.").then(m => m.delete(5000));
        }

        let deleteAmount;

        if (parseInt(args[0]) > 100) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args[0]);
        }

        message.channel.bulkDelete(deleteAmount, true)
            .then(deleted => message.channel.send(`**He borrado \`${deleted.size}\` mensajes.**`))
            .catch(err => message.reply(`Hubo un error... ${err}`));
    },
  

  

  conf: {},

  help: {
    name: 'purge',
    aliases: ['clear','borrarmsg'],
    category: 'Administracion',
    description: 'Borra mensajes enviados por usuarios.',
    usage: ''
  }
}