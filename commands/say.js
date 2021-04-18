const Discord = require('discord.js');

module.exports = {
    name: "말하기",
    description: "말을 따라합니다",

    async run (client, message, args){

			let msg = args.join(" ");

			message.channel.send(msg)
  }
}