// const Discord = require('discord.js')

// module.exports = {
// 	name: "유저정보",
// 	async run (client, message){

// 		const embed = new Discord.MessageEmbed()
// 		.setColor('#FF0000')
// 		.setDescription('<:error:832821274719551529> 유저 정보를 볼 유저를 멘션해주세요!')
// 		if(!message.mentions.members.first()) return message.channel.send(embed);

// 		const user = message.mentions.users.first() || message.author;
// 		const userinfo = new Discord.MessageEmbed()
// 		.setTitle(`${user.tag}`)
// 		.setThumbnail(user.displayAvatarURL())
// 		.addField("👤 아이디", `${user.id}`)
// 		.addField("⏱️ 가입 날짜", `${new Date(user.createdTimestamp).toLocaleDateString()}`)
// 		.addField("🌎 서버 가입 날짜", `${new Date(user.joinedTimestamp).toLocaleDateString()}`)
// 		.addField("⚔️ 역할 수", `${user.roles.cache.size - 1}`)
// 		message.channel.send(userinfo)
// 	}
// }