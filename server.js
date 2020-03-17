const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
//--------------------------------------------------------------------------
const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require('fs');
const { readdirSync } = require('fs');
const Enmap = require('enmap');
const cooldowns = new Discord.Collection();

client.commands = new Enmap()
client.startTime = Date.now()

const cmdFiles = readdirSync('./commands/')
console.log(`Cargando un total de ${cmdFiles.length} comandos.`)
cmdFiles.forEach(f => {
  try {
    const props = require(`./commands/${f}`)
    if (f.split('.').slice(-1)[0] !== 'js') return

    console.log(`Se ha cargado: ${props.help.name}`)

    if (props.init) props.init(client)

    client.commands.set(props.help.name, props)
    if (props.help.aliases) {
      props.alias = true
      props.help.aliases.forEach(alias => client.commands.set(alias, props))
    }
  } catch (e) {
    console.log(`Imposible de ejecutar el comando ${f}: ${e}`)
  }
})

const evtFiles = readdirSync('./events/')
console.log('log', `Se ha cargado un total de: ${evtFiles.length} eventos`)
evtFiles.forEach(f => {
  const eventName = f.split('.')[0]
  let event = require(`./events/${f}`)
  console.log(event)
  
})

client.on('error', (err) => {
  console.log('error', err)
})

client.on("message", (message) => {
  if(message.content === "<@679165210623213568> prefix"){
   message.channel.send(`Holaaaa. Soy 𝐒𝐚𝐲𝐮𝐫𝐢 y este es mi prefix en este servidor ^w^: ${process.env.PREFIX}`);
  }
  
  });


client.login(process.env.TOKEN);