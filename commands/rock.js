const Discord = require('discord.js')

module.exports = {
    name: "가위바위보",
    aliases: ['가위보'],
    description: "가위 바위 보 게임",
    run: async(client, message, args) => {
        let embed = new Discord.MessageEmbed()
				.setColor('RANDOM')
        .setDescription("자 그러면 시작할께요,, 안 내면 진다 **가위, 바위**..")
        let msg = await message.channel.send(embed)
        await msg.react("✊")
        await msg.react("✌️")
        await msg.react("🖐")

        const filter = (reaction, user) => {
            return ['✊', '✌️', '🖐'].includes(reaction.emoji.name) && user.id === message.author.id;
        }

        const choices = ['✊', '✌️', '🖐']
        const me = choices[Math.floor(Math.random() * choices.length)]
        msg.awaitReactions(filter, {max:1, time: 60000, error: ["time"]}).then(
            async(collected) => {
                const reaction = collected.first()
                let result = new Discord.MessageEmbed()
                .setDescription(`${me}...`)
								.setColor('RANDOM')
            await msg.edit(result)
                if ((me === "✊" && reaction.emoji.name === "✌️") ||
                (me === "🖐" && reaction.emoji.name === "✊") ||
                (me === "✌️" && reaction.emoji.name === "🖐")) {
									const embed2 = new Discord.MessageEmbed()
									.setDescription('당신이 졌어요! 😝')
									.setColor('RANDOM')
                    message.channel.send(embed2);
            } else if (me === reaction.emoji.name) {
							const embed3 = new Discord.MessageEmbed()
							.setDescription('무승부네요 😅')
							.setColor('RANDOM')
                return message.channel.send(embed3);
            } else {
							const embed4 = new Discord.MessageEmbed()
							.setDescription('당신이 이겼네요.. 😭')
							.setColor('RANDOM')
                return message.channel.send(embed4);
            }
        })
        .catch(collected => {
					const embed5 = new Discord.MessageEmbed()
					.setDescription('제 시간 내에 응답하지 않았으므로 처리가 취소되었습니다!')
                message.channel.send(embed5);
            })
}
}