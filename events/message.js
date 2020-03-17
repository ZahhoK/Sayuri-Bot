
module.exports = (client, message) => { 
 
  let cd = new Set();
  let cdseconds = 5;
  
  if (message.content.indexOf(process.env.PREFIX) !== 0) return
  const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g)
  const command = args.shift().toLowerCase()

  const cmd = client.commands.get(command)
  if (!cmd) return

  console.log(`${message.author.username} (${message.author.id}) ejecuto el comando: ${cmd.help.name}`)
  if (cmd.conf.onlyguilds && !message.guild) return // Guild check
  cmd.run(client, message, args)
  
      setTimeout(() => {
      cd.delete(message.author.id)
    }, cdseconds * 1000)

}
