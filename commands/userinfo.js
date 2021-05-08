// const Discord = require('discord.js')
// module.exports = {
// 	name: "UserInfo",
// 	execute(message) {
// 		const embed = new Discord.MessageEmbed()
// 		.setDescription('<:error:832821274719551529> 유저 정보를 볼 유저를 멘션해주세요!')
// 		if(!message.mentions.members.first()) return message.channel.send(embed)
// 		const user = message.mentions.members.first()
// 		const embed2 = new Discord.MesssageEmbed()
// 		const createdAt = user.user.createdAt
// 		embed2.setTitle(`${user.user.tag}`)
// 		embed2.setThumbnail(user.user.avatarURL())
// 		if(!user.user.avatarURL()) embed2.setThumbnail(user.user.defaultAvatarURL)
// 		embed2.addField("아이디", user.user.id)
// 		embed2.addField("가입 날짜", `${createdAt.getFullYear()}년 ${createdAt.getMonth()}월 ${createdAt.getDay()}일 ${createdAt.getHours()}시 ${createdAt.getMinutes()}분`)
// 		return message.channel.send(embed2)
// 	}
// }