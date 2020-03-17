
module.exports = client => {
    console.log(`En linea y lista para servir en ${client.guilds.cache.size} servidores C:`);

  setInterval(function(){
  let statues = ['| Release 1.01',`Estoy en ${client.guilds.cache.size} servidores.`,"s!help | Para mas info.", "𝐒𝐚𝐲𝐮𝐫𝐢","¿En serio? ¿Lees esto?","s!invite | Para invitarme ^w^."];
  let status = statues[Math.floor(Math.random()*statues.length)];
       client.user.setPresence({ activity: {  name: status },  status: 'dnd' })
    }, 20000);
  }