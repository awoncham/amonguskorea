// const Discord = require('discord.js')

// module.exports = {
// 	name: "벽외조사",
// 	async run (_client, message, args) {

// 			let msg = args.join(" ");

// 			const Filter = (reaction, user) => {
// 				return (['⚙️', '1️⃣', '2️⃣', '3️⃣'].includes(reaction.emoji.name) && user.id === message.author.id);
// 			};

// 			const expedition = new Discord.MessageEmbed()
// 			.setDescription(msg)
// 			.addField('⚙️ 지휘분대', `-`, false)
// 			.addField('1️⃣ 제1분대', `-`, false)
// 			.addField('2️⃣ 제2분대', `-`, false)
// 			.addField('3️⃣ 제3분대', `-`, false)
// 			message.channel.send(expedition).then((th) => {
// 					th.react("⚙️")
// 					th.react("1️⃣")
// 					th.react("2️⃣")
// 					th.react("3️⃣")
// 					th.awaitReactions(Filter, {
// 							max: 1,
// 					}).then((collected) => {

// 							const reaction = collected.first();

// 							if (reaction.emoji.name === "⚙️") {
// 								const CommanderMessage = new Discord.MessageEmbed()
// 								.setDescription(msg)
// 								.addField('⚙️ 지휘분대', `${reaction.users.cache.array()[1].username}`, false) // 태그 #${reaction.users.cache.array()[1].discriminator}
// 								.addField('1️⃣ 제1분대', `${reaction.users.cache.array()[2].username}`, false)
// 								.addField('2️⃣ 제2분대', `${reaction.users.cache.array()[3].username}`, false)
// 								.addField('3️⃣ 제3분대', `${reaction.users.cache.array()[4].username}`, false)
// 									th.edit(CommanderMessage)
// 									return th.reactions.removeAll()
// 							} else if (reaction.emoji.name === '1️⃣') {
// 								const oneMessage = new Discord.MessageEmbed()
// 								.setDescription(msg)
// 								.addField('⚙️ 지휘분대', `${reaction.users.cache.array()[1].username}`, false) // 태그 #${reaction.users.cache.array()[1].discriminator}
// 								.addField('1️⃣ 제1분대', `${reaction.users.cache.array()[2].username}`, false)
// 								.addField('2️⃣ 제2분대', `${reaction.users.cache.array()[3].username}`, false)
// 								.addField('3️⃣ 제3분대', `${reaction.users.cache.array()[4].username}`, false)
// 									th.edit(oneMessage)
// 									return th.reactions.removeAll()
// 							} else if (reaction.emoji.name === '2️⃣') {
// 								const oneMessage = new Discord.MessageEmbed()
// 								.setDescription(msg)
// 								.addField('⚙️ 지휘분대', `${reaction.users.cache.array()[1].username}`, false) // 태그 #${reaction.users.cache.array()[1].discriminator}
// 								.addField('1️⃣ 제1분대', `${reaction.users.cache.array()[2].username}`, false)
// 								.addField('2️⃣ 제2분대', `${reaction.users.cache.array()[3].username}`, false)
// 								.addField('3️⃣ 제3분대', `${reaction.users.cache.array()[4].username}`, false)
// 									th.edit(oneMessage)
// 									return th.reactions.removeAll()
// 							} else if (reaction.emoji.name === '3️⃣') {
// 								const oneMessage = new Discord.MessageEmbed()
// 								.setDescription(msg)
// 								.addField('⚙️ 지휘분대', `${reaction.users.cache.array()[1].username}`, false) // 태그 #${reaction.users.cache.array()[1].discriminator}
// 								.addField('1️⃣ 제1분대', `${reaction.users.cache.array()[2].username}`, false)
// 								.addField('2️⃣ 제2분대', `${reaction.users.cache.array()[3].username}`, false)
// 								.addField('3️⃣ 제3분대', `${reaction.users.cache.array()[4].username}`, false)
// 									th.edit(oneMessage)
// 									return th.reactions.removeAll()
// 							}
// 					}) // 여기까지
// 			})
// 	},
// }