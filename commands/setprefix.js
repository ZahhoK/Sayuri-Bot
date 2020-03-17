const Discord = require("discord.js");
const fs = require("fs");
const db = require('quick.db');
const Database = require('better-sqlite3');
module.exports = {
  run: (client, message, args) => {
   if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`:facepalm: You can't do that BOIII! :facepalm:`);
  if(!args[0] || args[0 == "help"]) return message.reply(`Usage: [p]prefix <desired prefix here> ([p] is the bot original prefix or the prefix previously set)\n [p]prefix clear (to clear the customised prefix and reset it to /)`);

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

  prefixes[message.guild.id] = {
    prefixes: args[0]
  };
  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) =>{
    if (err) console.log(err)
  });
  if(args[0] === 'clear'){
    db.set(`prefix_${message.guild.id}`, '/')
        message.channel.send("Success, Cleared customised prefix. Reset to /")
        return
    }else{
    db.set(`prefix_${message.guild.id}`, args[0])
  

    let embed = new Discord.RichEmbed()
    .setColor("#ff8200")
    .setTitle("Prefix Changed")
    .setDescription(`Set to ${args[0]}`)
    .setTimestamp();

    message.channel.send({embed});
  }
},
    
  conf: {},

  help: {
    name: 'setprefix',
    aliases: ['prefix'],
    category: 'Administracion',
    description: 'EStablecer un propio prefix.',
    usage: ''
  }
}