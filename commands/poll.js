const Discord = require('discord.js');
module.exports = {
  run:  async (client, message, args) => {
    
 if (!message.member.hasPermission("MANAGE_MESSAGES")) { 
		message.channel.send('Permiso invalido.');
		return;
	}
  
    if (!args[0]) return message.channel.send('Usar u!poll <pregunta>');
    
    const embed = new Discord.MessageEmbed()
        .setColor("#FFDC84") 
        .setFooter('Reacciona para votar.')
        .setDescription(args.join(' '))
        .setTitle(`Nueva encuesta:`);
        
    let msg = await message.channel.send(embed)
        .then(function (msg) {
            msg.react("❎");
            msg.react("✅"); 
            message.delete({timeout: 1000});
            }).catch(function(error) {
            console.log(error);
        });
  },

  conf: {},

  help: {
    name: 'poll',
    aliases: [''],
    category: 'Administracion',
    description: 'Crea encuestas.',
    usage: ''
  }
}