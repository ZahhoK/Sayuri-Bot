
module.exports = {
  run: async (client, message, args) => {
    const { member } = args;

        if (member.id === this.client.user.id) return message.channel.send('Please don\'t mute me...!');
        if (member.id === message.author.id) return message.channel.send('I wouldn\'t dare mute you...!');
        if (member.highestRole.calculatedPosition > message.member.highestRole.calculatedPosition - 1) {
            return message.channel.send(`❎ | You can't mute **${member.user.username}**! Their position is higher than you!`);
        }
        if (!member.bannable) return message.channel.send(`❎ | I can't mute **${member.user.username}**! Their role is higher than mine!`);

        await message.channel.send(`Are you sure you want to mute **${member.user.tag}** in **${message.channel.name}**? \`\`(y/n)\`\``);
        const msgs = await message.channel.awaitMessages(res => res.author.id === message.author.id, {
            max: 1,
            time: 30000
        });
        if (!msgs.size || !['y', 'yes'].includes(msgs.first().content.toLowerCase())) return message.channel.send('Cancelled command!');
        if (['n', 'no'].includes(msgs.first().content.toLowerCase())) return message.channel.send('Cancelled command!')

        try {
            await message.channel.overwritePermissions(member, {
                SEND_MESSAGES: false,
                ADD_REACTIONS: false
            })
        } catch (err) {
            await message.channel.send(`❎ | **${message.author.username}**, there was an error trying to mute **${member}**! \`${err}\``);
        }

        return await message.channel.send(`**${message.author.username}**, successfully muted **${member.user.tag}** in **${message.channel.name}**! 🙊`);

    

  },

  conf: {},

  help: {
    name: 'mute',
    aliases: [''],
    category: 'Diversion',
    description: 'Repite cualquier mensaje.',
    usage: ''
  }
}