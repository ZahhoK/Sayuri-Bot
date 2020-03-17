
module.exports = {
  run: (client, message, args) => {
    if(message.author.id !== "242263403001937920") return message.channel.send(`**»** ${message.author}, you don't have permission to do that❌`);
    let id = args[0];
    if (!id) id = message.guild.id;
    return message.guild.leave(id);
    
    

  },

  conf: {},

  help: {
    name: 'leave',
    aliases: [''],
    category: 'Diversion',
    description: 'Repite cualquier mensaje.',
    usage: ''
  }
}