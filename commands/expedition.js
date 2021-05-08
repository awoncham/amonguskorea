// const Discord = require('discord.js')

// module.exports = {
// 	name: "벽외조사",
// 	async run (_client, message, args) {

// 			let msg = args.join(" ");

// 			const jwFilter = (reaction, user) => reaction.emoji.name === '⚙️' && user.id === message.author.id;
// 			const oneFilter = (reaction, user) => reaction.emoji.name === '1️⃣' && user.id === message.author.id;
// 			const twoFilter = (reaction, user) => reaction.emoji.name === '2️⃣' && user.id === message.author.id;
// 			const threeFilter = (reaction, user) => reaction.emoji.name === '3️⃣' && user.id === message.author.id;

// 			const embed = new Discord.MessageEmbed()
// 			.setDescription(msg)
// 			.addField('`지휘분대`', `-`, false)
// 			.addField('`제1분대`', `-`, false)
// 			.addField('`제2분대`', `-`, false)
// 			.addField('`제3분대`', `-`, false)
// 			message.channel.send(embed).then((th) => {
// 					await th.react("⚙️")
// 					await th.react("1️⃣")
// 					await th.react("2️⃣")
// 					await th.react("3️⃣")
// 					th.awaitReactions(jwFilter, {
// 							max: 1,
// 					}).then((collected) => {
// 							if (collected.array()[0].emoji.name === "⚙️") {
// 								const editMessage = new Discord.MessageEmbed()
// 								.setDescription(msg)
// 								.addField('`지휘분대`', `${collected.array()[0].users.cache.array()[1].username}`, false) // 태그 #${collected.array()[0].users.cache.array()[1].discriminator}
// 								.addField('`제1분대`', `-`, false)
// 								.addField('`제2분대`', `-`, false)
// 								.addField('`제3분대`', `-`, false)
// 									th.edit(editMessage)
// 									return th.reactions.removeAll()
// 							} else {
// 									return
// 							}
// 					}) // 여기까지
// 			})
// 	},
// }