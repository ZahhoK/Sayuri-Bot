var moment = require("moment");
var momentDurationFormatSetup = require("moment-duration-format");
module.exports = {
  run: (client, message, args) => {
 	
        var uptime = moment.duration(this.client.uptime).format('d[ days], h[ hours], m[ minutes, and ]s[ seconds]')
		return message.channel.send(`⌛ | I've been up and running for **${uptime}**!`);
	

  },

  conf: {},

  help: {
    name: 'uptime',
    aliases: [''],
    category: 'Diversion',
    description: 'Repite cualquier mensaje.',
    usage: ''
  }
}