
const responses = [
    'Pong!',
    'No es como si quisiera decir pong o algo...',
    'Pong...',
    'P-pronbando, probando, 1, 2, 3!',
    '¿Hay alguien ahi?',
    '¿Alguien usa esto?',
    'Woo! A secret command!',
    'Ping! ...Digo **pong!**',
    '¡Hola!',
    '¡A tu servicio!',
    '¿Si?',
    "Konnichiwa~",
    "Ohayoo~",
    "¡Estoy en funcionamiento!",
    "¡Aqui estoy!",
    "¡Aquí mismo!",
    "Hai!",
    "¡Me encontrastre!",
    "Nya!",
    "N-Nya..?",
    "Nyahaha me encontraste!"
];

module.exports = {
  run: async (client, message) => {
     let choice = responses[Math.floor(Math.random() * responses.length - 1)];
        const pingMsg = await message.channel.send('🔄 | Pinging...');
        return pingMsg.edit(` ${choice} \`${pingMsg.createdTimestamp - message.createdTimestamp}ms\``);
    
    },


  conf: {},

  help: {
    name: 'ping',
    aliases: ['pong'],
    category: 'Info',
    description: '¿Me pregunto qué hace esto?',
    usage: ''
  }
}