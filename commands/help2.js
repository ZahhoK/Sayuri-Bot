const Discord = require('discord.js');
module.exports = {
 run: (client, message, args) => {
const embed = new Discord.MessageEmbed()
.setColor('#FFB09F')
.setTitle("Título que desees")
.setDescription("Descripción que desees")
.addField("nombre del campo", "valor del campo")
message.author.send(embed);
    
 },
  

  conf: {},

  help: {
    name: 'help2',
    aliases: ['h'],
    category: 'Help',
    description: 'Muestra todos los comandos disponibles del bot.',
    usage: 'help'
  }
}
