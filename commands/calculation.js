const math = require('mathjs');

const Discord = require('discord.js');

module.exports = {
	name: "계산",
	description: "계산을 해줍니다",

	async run (client, message, args) {
		
		const embed4 = new Discord.MessageEmbed()
		.setDescription('계산 할 올바른 식을 알려주세요')
		if(!args[0]) return message.channel.send(embed4)

		let resp;

		try {
			resp = math.evaluate(args.join(" "))
		} catch (e) {

			const embed = new Discord.MessageEmbed()
			.setDescription('계산 할 식에 문자를 포함하지 말아주세요')
			return message.channel.send(embed)
		}

		const embed2 = new Discord.MessageEmbed()
		.setTitle('<:SurveyCorps:832772562123489280> 조사병단 계산기')
		.setDescription('더하기 (+), 빼기 (-), 곱하기 (*), 나누기 (/)\n계산 할 식에 문자가 있거나 올바르지 않은\n식을 적을 경우 오류가 날 수 있습니다')
		.addField('> 문제', `\`\`\`\n${args.join(' ')}\`\`\``)
		.addField('> 정답', `\`\`\`\n${resp}\`\`\``)

		message.channel.send(embed2)
	}
}