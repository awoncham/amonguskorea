const Discord = require('discord.js');

module.exports = {
	name: "청소",
	description: "1~99까지의 메시지를 삭제합니다",

	async run (client, message) {

	const messageArray = message.content.split(' ');
	const args = messageArray.slice(1);

	const embed = new Discord.MessageEmbed()
	.setColor('#ff0000')
	.setDescription('<:error:832821274719551529> 당신은 이 명령어를 사용할 권한이 없습니다!')
	if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send(embed);

	let deleteAmount;

	const embed2 = new Discord.MessageEmbed()
	.setColor('#ff0000')
	.setDescription('<:error:832821274719551529> 우선 삭제할 메시지 수를 입력해주세요!')
	if (isNaN(args[0]) || parseInt(args[0]) <= 0) { return message.channel.send(embed2)}

	if (parseInt(args[0]) > 100) {
		const embed3 = new Discord.MessageEmbed()
		.setColor('#ff0000')
		.setDescription('<:error:832821274719551529> 당신은 1~99 사이의 메시지만 삭제할 수 있어요!')
		return message.channel.send(embed3)
	} else {
		deleteAmount = parseInt(args[0]);
	}

	message.channel.bulkDelete(deleteAmount + 1, true);
	const embed4 = new Discord.MessageEmbed()
	.setColor('#43b581')
	.setDescription(`<:check:832821047215521802> 성공적으로 **${deleteAmount}**개의 메시지를 삭제하였습니다!`)
	message.channel.send(embed4)
}
}