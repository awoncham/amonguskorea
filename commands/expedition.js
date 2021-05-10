// const Discord = require('discord.js');


// module.exports =  {
//     name: "벽외조사",

// 		async run (_client, message, args) {

// 				let msg = args.join(" ");

//         const reactionMessage = await message.channel.send(new Discord.MessageEmbed().setDescription(msg)
//         .addField('`지휘분대`', `-`, false)
//         .addField('`제1분대`', `-`, false)
//         .addField('`제2분대`', `-`, false)
//         .addField('`제3분대`', `-`, false));
    
//         try {
//             await reactionMessage.react("⚙️");
//             await reactionMessage.react("1️⃣");
//             await reactionMessage.react("2️⃣");
//             await reactionMessage.react("3️⃣");
//         } catch (err) {
//             console.log('이모티콘 보내기를 실패하였습니다!');
//             throw err;
//         }
    
//         const collector = reactionMessage.createReactionCollector(
//             (reaction, user) => message.guild.members.cache.find((member) => member.id === user.id),
//             { dispose: true }
//         );

        
    
//         collector.on("collect", (reaction, user) => {
//             switch (reaction.emoji.name) {
//             case "⚙️":
//                 const editMessage = new Discord.MessageEmbed()
//                 .setDescription(msg)
//                 .addField('`지휘분대`', `강원참`, false) // 태그 #${collected.array()[0].users.cache.array()[1].discriminator}
//                 .addField('`제1분대`', `-`, false)
//                 .addField('`제2분대`', `-`, false)
//                 .addField('`제3분대`', `-`, false);
//                 reactionMessage.edit(editMessage)
//                 break;
//             case "1️⃣":
//                 const editMessage1 = new Discord.MessageEmbed()
//                 .setDescription(msg)
//                 .addField('`지휘분대`', `-`, false) // 태그 #${collected.array()[0].users.cache.array()[1].discriminator}
//                 .addField('`제1분대`', `강원참`, false)
//                 .addField('`제2분대`', `-`, false)
//                 .addField('`제3분대`', `-`, false);
//                 reactionMessage.edit(editMessage1)
//                 break;
//             case "2️⃣":
//                 const editMessage2 = new Discord.MessageEmbed()
//                 .setDescription(msg)
//                 .addField('`지휘분대`', `-`, false) // 태그 #${collected.array()[0].users.cache.array()[1].discriminator}
//                 .addField('`제1분대`', `-`, false)
//                 .addField('`제2분대`', `강원참`, false)
//                 .addField('`제3분대`', `-`, false);
//                 reactionMessage.edit(editMessage2)
//                 break;
//             case "3️⃣":
//                 const editMessage3 = new Discord.MessageEmbed()
//                 .setDescription(msg)
//                 .addField('`지휘분대`', `-`, false) // 태그 #${collected.array()[0].users.cache.array()[1].discriminator}
//                 .addField('`제1분대`', `-`, false)
//                 .addField('`제2분대`', `-`, false)
//                 .addField('`제3분대`', `강원참`, false);
//                 reactionMessage.edit(editMessage3)
//                 break;
//             }
//         });
//     },
//   };