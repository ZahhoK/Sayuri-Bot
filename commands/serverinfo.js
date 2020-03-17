const Discord = require("discord.js");
module.exports = {
  run: (client, message, args) => {
    // Code
        function checkBots(guild) {
        let botCount = 0; // This is value that we will return
        guild.members.forEach(member => { // We are executing this code for every user that is in guild
          if(member.user.bot) botCount++; // If user is a bot, add 1 to botCount value
        });
        return botCount; // Return amount of bots
      }
    
    const embed = new Discord.MessageEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .setTitle("Server Info")
        .addField("**Nombre del Servidor**", message.guild.name, true)
        .addField("**Owner del Server**", message.guild.owner.user.tag, true)
        .addField("**Total de Miembros**", message.guild.memberCount, true)
        .addField("**Canales**", message.guild.channels.size,true)
        .addField("**Region**", message.guild.region, true)
        .addField("**Roles:**", `${message.guild.roles.size}`, true)
        .setColor("#ffe100")
        .setThumbnail(message.guild.iconURL)
        message.channel.send(embed);


  },

  conf: {},

  help: {
    name: 'serverinfo',
    aliases: ['SI'],
    category: 'Info',
    description: 'Muestra la info del server.',
    usage: ''
  }
}