const discord = require('discord.js')

module.exports = {
    name: "가위바위보",
    aliases: ['가위보'],
    description: "가위 바위 보 게임",
    run: async(client, message, args) => {
        let embed = new discord.MessageEmbed()
        .setTitle("조사병단 가위바위보")
				.setColor('RANDOM')
        .setDescription("가위 (✌️) 바위 (✊) 보 (🖐) 중 자신이 내고 싶은 이모트를 클릭하세요!")
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
                let result = new discord.MessageEmbed()
                .setDescription(`당신：${reaction.emoji.name}\n조사병단：${me}`)
								.setColor('RANDOM')
            await msg.edit(result)
                if ((me === "✊" && reaction.emoji.name === "✌️") ||
                (me === "🖐" && reaction.emoji.name === "✊") ||
                (me === "✌️" && reaction.emoji.name === "🖐")) {
									const embed2 = new discord.MessageEmbed()
									.setDescription('제가 이겼군요! 😝')
									.setColor('RANDOM')
                    message.channel.send(embed2);
            } else if (me === reaction.emoji.name) {
							const embed3 = new discord.MessageEmbed()
							.setDescription('무승부네요 😅')
							.setColor('RANDOM')
                return message.channel.send(embed3);
            } else {
							const embed4 = new discord.MessageEmbed()
							.setDescription('당신이 이겼네요.. 😭')
							.setColor('RANDOM')
                return message.channel.send(embed4);
            }
        })
        .catch(collected => {
					const embed5 = new discord.MessageEmbed()
					.setDescription('제 시간 내에 응답하지 않았으므로 처리가 취소되었습니다!')
                message.channel.send(embed5);
            })
}
}