const Discord = require('discord.js')
const moment = require('moment')

module.exports = {
	name: "유저정보",
	async run (client, message){

		const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

		const roles = member.roles.cache
		.sort((a, b) => b.position - a.position)
		.map(role => role.toString())
		.slice(0, -1);

		const embed = new Discord.MessageEmbed()
		.setColor('#FF0000')
		.setDescription('<:error:832821274719551529> 유저 정보를 볼 유저를 멘션해주세요!')
		if(!message.mentions.members.first()) return message.channel.send(embed);

		const user = message.mentions.users.first() || message.author;
		const userinfo = new Discord.MessageEmbed()
		.setTitle(`${user.tag}`)
		.setThumbnail(user.displayAvatarURL())
		.setColor('RANDOM')
		.addField("👤 아이디", `${user.id}`, false)
		.addField("⏱️ 가입 날짜", `${moment(member.user.createdTimestamp).locale('ko').format('ll dddd LTS')}`, false)
		.addField("🌎 서버 가입 날짜", `${moment(member.joinedAt).locale('ko').format('LL LTS')}`, false)
		.addField("⚔️ 역할 수", `${roles.length}`, false)
		message.channel.send(userinfo)
	}
}