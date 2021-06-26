const Discord = require('discord.js');
const fs = require('fs')

module.exports =  {
    name: "벽외조사",
    async run (client, message, args){

				const warnmessage = new Discord.MessageEmbed()
				.setColor('#ff0000')
				.setDescription('<:error:832821274719551529> 당신은 이 명령어를 사용할 권한이 없습니다!')
				if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send(warnmessage);

				const embed = new Discord.MessageEmbed()
				.setColor('#FF0000')
				.setDescription('<:error:832821274719551529> 벽외조사 공지를 올릴 채널을 입력해주세요!\n```!벽외조사 <#채널> <내용>```')
				if(!message.mentions.channels.first()) return message.channel.send(embed);
        let Channel = message.mentions.channels.first()

        let msg = message.content.slice(`!벽외조사 ${args[0]} `.length).trim()
        const Message = await Channel.send(new Discord.MessageEmbed().setDescription(msg)
        .setFooter(`한 번 선택한 분대를 취소할 수 없습니다｜자신의 맞는 분대에 클릭하세요`)
				.setTitle('<:SurveyCorps:832772562123489280>｜조사병단 벽외조사 공지')
				.setColor('#93BD8C')
        .addField('⚙️ 지휘분대', `-`, false)
        .addField('1️⃣ 제1분대', `-`, false)
        .addField('2️⃣ 제2분대', `-`, false)
        .addField('3️⃣ 제3분대', `-`, false));

        const id = message.id;
        const filePath = `./survey/${id}.json`;
        !fs.existsSync(filePath) ? fs.writeFileSync(filePath, JSON.stringify({"zero":[""],"one":[""],"two":[""],"three":[""]})) : null;
        let saveSurvey;

        await Message.react("⚙️");
        await Message.react("1️⃣");
        await Message.react("2️⃣");
        await Message.react("3️⃣");

        const Filter_1 = (reaction) => reaction.emoji.name === "⚙️";
        const Filter_2 = (reaction) => reaction.emoji.name === "1️⃣";
        const Filter_3 = (reaction) => reaction.emoji.name === "2️⃣";
        const Filter_4 = (reaction) => reaction.emoji.name === "3️⃣";

        const role_1 = Message.createReactionCollector(Filter_1, {time: 900000, dispose: true});
        const role_2 = Message.createReactionCollector(Filter_2, {time: 900000, dispose: true});
        const role_3 = Message.createReactionCollector(Filter_3, {time: 900000, dispose: true});
        const role_4 = Message.createReactionCollector(Filter_4, {time: 900000, dispose: true});

        let result_0
        let result_1
        let result_2
        let result_3

        role_1.on("collect", async (r, user) => {

            r.users.remove(message.author.id);

            const survey = JSON.parse(fs.readFileSync(filePath, "utf-8"));

            if(survey.zero.includes(user.username) || survey.one.includes(user.username) || survey.two.includes(user.username) || survey.three.includes(user.username)) return;

            if(!survey.zero[0]){
                saveSurvey = {"zero": [user.username],"one": survey.one,"two": survey.two,"three": survey.three};
            }else{
                saveSurvey = {"zero": ["" + survey.zero[0] + ", " + user.username],"one": survey.one,"two": survey.two,"three": survey.three};
            }
            fs.writeFileSync(filePath, JSON.stringify(saveSurvey));

            if(!survey.zero[0]){
                result_0 = user.username
            }else if(survey.zero[3]){
                result_0 = "" + survey.zero[0] + ", " + survey.zero[1] + ", " + survey.zero[2] + ", " + survey.zero[3] + user.username
            }else if(survey.zero[2]){
                result_0 = "" + survey.zero[0] + ", " + survey.zero[1] + ", " + survey.zero[2] + user.username
            }else if(survey.zero[1]){
                result_0 = "" + survey.zero[0] + ", " + survey.zero[1] + user.username
            }else if(survey.zero[0]){
                result_0 = "" + survey.zero[0] + ", " + user.username
            }

            if(!survey.one[0]){
                result_1 = "-"
            }else if(survey.one[3]){
                result_1 = "" + survey.one[0] + ", " + survey.one[1] + ", " + survey.one[2] + ", " + survey.one[3]
            }else if(survey.one[2]){
                result_1 = "" + survey.one[0] + ", " + survey.one[1] + ", " + survey.one[2]
            }else if(survey.one[1]){
                result_1 = "" + survey.one[0] + ", " + survey.one[1]
            }else if(survey.one[0]){
                result_1 = "" + survey.one[0]
            }

            if(!survey.two[0]){
                result_2 = "-"
            }else if(survey.two[3]){
                result_2 = "" + survey.two[0] + ", " + survey.two[1] + ", " + survey.two[2] + ", " + survey.two[3]
            }else if(survey.two[2]){
                result_2 = "" + survey.two[0] + ", " + survey.two[1] + ", " + survey.two[2]
            }else if(survey.two[1]){
                result_2 = "" + survey.two[0] + ", " + survey.two[1]
            }else if(survey.two[0]){
                result_2 = "" + survey.two[0]
            }

            if(!survey.three[0]){
                result_3 = "-"
            }else if(survey.three[3]){
                result_3 = "" + survey.three[0] + ", " + survey.three[1] + ", " + survey.three[2] + ", " + survey.three[3]
            }else if(survey.three[2]){
                result_3 = "" + survey.three[0] + ", " + survey.three[1] + ", " + survey.three[2]
            }else if(survey.three[1]){
                result_3 = "" + survey.three[0] + ", " + survey.three[1]
            }else if(survey.three[0]){
                result_3 = "" + survey.three[0]
            }

            const editMessage = new Discord.MessageEmbed()
            .setDescription(msg)
						.setTitle('<:SurveyCorps:832772562123489280>｜조사병단 벽외조사 공지')
            .setFooter(`한 번 선택한 분대를 취소할 수 없습니다｜자신의 맞는 분대에 클릭하세요`)
						.setColor('#43b581')
            .addField('⚙️ 지휘분대', `${result_0}`, false)
            .addField('1️⃣ 제1분대', `${result_1}`, false)
            .addField('2️⃣ 제2분대', `${result_2}`, false)
            .addField('3️⃣ 제3분대', `${result_3}`, false);

            Message.edit(editMessage)
        });

        role_2.on("collect", async (r, user) => {

            r.users.remove(message.author.id);

            const survey = JSON.parse(fs.readFileSync(filePath, "utf-8"));

            if(survey.zero.includes(user.username) || survey.one.includes(user.username) || survey.two.includes(user.username) || survey.three.includes(user.username)) return;

            if(!survey.one[0]){
                saveSurvey = {"zero": survey.zero,"one": [user.username],"two": survey.two,"three": survey.three};
            }else{
                saveSurvey = {"zero": survey.zero,"one": ["" + survey.one[0] + ", " + user.username],"two": survey.two,"three": survey.three};
            }
            fs.writeFileSync(filePath, JSON.stringify(saveSurvey));

            if(!survey.zero[0]){
                result_0 = "-"
            }else if(survey.zero[3]){
                result_0 = "" + survey.zero[0] + ", " + survey.zero[1] + ", " + survey.zero[2] + ", " + survey.zero[3]
            }else if(survey.zero[2]){
                result_0 = "" + survey.zero[0] + ", " + survey.zero[1] + ", " + survey.zero[2]
            }else if(survey.zero[1]){
                result_0 = "" + survey.zero[0] + ", " + survey.zero[1]
            }else if(survey.zero[0]){
                result_0 = "" + survey.zero[0]
            }

            if(!survey.one[0]){
                result_1 = user.username
            }else if(survey.one[3]){
                result_1 = "" + survey.one[0] + ", " + survey.one[1] + ", " + survey.one[2] + ", " + survey.one[3] + ", " + user.username
            }else if(survey.one[2]){
                result_1 = "" + survey.one[0] + ", " + survey.one[1] + ", " + survey.one[2] + ", " + user.username
            }else if(survey.one[1]){
                result_1 = "" + survey.one[0] + ", " + survey.one[1] + ", " + user.username
            }else if(survey.one[0]){
                result_1 = "" + survey.one[0] + ", " + user.username
            }

            if(!survey.two[0]){
                result_2 = "-"
            }else if(survey.two[3]){
                result_2 = "" + survey.two[0] + ", " + survey.two[1] + ", " + survey.two[2] + ", " + survey.two[3]
            }else if(survey.two[2]){
                result_2 = "" + survey.two[0] + ", " + survey.two[1] + ", " + survey.two[2]
            }else if(survey.two[1]){
                result_2 = "" + survey.two[0] + ", " + survey.two[1]
            }else if(survey.two[0]){
                result_2 = "" + survey.two[0]
            }

            if(!survey.three[0]){
                result_3 = "-"
            }else if(survey.three[3]){
                result_3 = "" + survey.three[0] + ", " + survey.three[1] + ", " + survey.three[2] + ", " + survey.three[3]
            }else if(survey.three[2]){
                result_3 = "" + survey.three[0] + ", " + survey.three[1] + ", " + survey.three[2]
            }else if(survey.three[1]){
                result_3 = "" + survey.three[0] + ", " + survey.three[1]
            }else if(survey.three[0]){
                result_3 = "" + survey.three[0]
            }

            const editMessage = new Discord.MessageEmbed()
            .setDescription(msg)
						.setTitle('<:SurveyCorps:832772562123489280>｜조사병단 벽외조사 공지')
            .setFooter(`한 번 선택한 분대를 취소할 수 없습니다｜자신의 맞는 분대에 클릭하세요`)
						.setColor('#43b581')
            .addField('⚙️ 지휘분대', `${result_0}`, false)
            .addField('1️⃣ 제1분대', `${result_1}`, false)
            .addField('2️⃣ 제2분대', `${result_2}`, false)
            .addField('3️⃣ 제3분대', `${result_3}`, false);

            Message.edit(editMessage)
        });

        role_3.on("collect", async (r, user) => {

            r.users.remove(message.author.id);

            const survey = JSON.parse(fs.readFileSync(filePath, "utf-8"));

            if(survey.zero.includes(user.username) || survey.one.includes(user.username) || survey.two.includes(user.username) || survey.three.includes(user.username)) return;

            if(!survey.two[0]){
                saveSurvey = {"zero": survey.zero,"one": survey.one,"two": [user.username],"three": survey.three};
            }else{
                saveSurvey = {"zero": survey.zero,"one": survey.one,"two": ["" + survey.two[0] + ", " + user.username],"three": survey.three};
            }
            fs.writeFileSync(filePath, JSON.stringify(saveSurvey));

            if(!survey.zero[0]){
                result_0 = "-"
            }else if(survey.zero[3]){
                result_0 = "" + survey.zero[0] + ", " + survey.zero[1] + ", " + survey.zero[2] + ", " + survey.zero[3]
            }else if(survey.zero[2]){
                result_0 = "" + survey.zero[0] + ", " + survey.zero[1] + ", " + survey.zero[2]
            }else if(survey.zero[1]){
                result_0 = "" + survey.zero[0] + ", " + survey.zero[1]
            }else if(survey.zero[0]){
                result_0 = "" + survey.zero[0]
            }

            if(!survey.one[0]){
                result_1 = "-"
            }else if(survey.one[3]){
                result_1 = "" + survey.one[0] + ", " + survey.one[1] + ", " + survey.one[2] + ", " + survey.one[3]
            }else if(survey.one[2]){
                result_1 = "" + survey.one[0] + ", " + survey.one[1] + ", " + survey.one[2]
            }else if(survey.one[1]){
                result_1 = "" + survey.one[0] + ", " + survey.one[1]
            }else if(survey.one[0]){
                result_1 = "" + survey.one[0]
            }

            if(!survey.two[0]){
                result_2 = user.username
            }else if(survey.two[3]){
                result_2 = "" + survey.two[0] + ", " + survey.two[1] + ", " + survey.two[2] + ", " + survey.two[3] + ", " + user.username
            }else if(survey.two[2]){
                result_2 = "" + survey.two[0] + ", " + survey.two[1] + ", " + survey.two[2] + ", " + user.username
            }else if(survey.two[1]){
                result_2 = "" + survey.two[0] + ", " + survey.two[1] + ", " + user.username
            }else if(survey.two[0]){
                result_2 = "" + survey.two[0] + ", " + user.username
            }

            if(!survey.three[0]){
                result_3 = "-"
            }else if(survey.three[3]){
                result_3 = "" + survey.three[0] + ", " + survey.three[1] + ", " + survey.three[2] + ", " + survey.three[3]
            }else if(survey.three[2]){
                result_3 = "" + survey.three[0] + ", " + survey.three[1] + ", " + survey.three[2]
            }else if(survey.three[1]){
                result_3 = "" + survey.three[0] + ", " + survey.three[1]
            }else if(survey.three[0]){
                result_3 = "" + survey.three[0]
            }

            const editMessage = new Discord.MessageEmbed()
            .setDescription(msg)
						.setTitle('<:SurveyCorps:832772562123489280>｜조사병단 벽외조사 공지')
            .setFooter(`한 번 선택한 분대를 취소할 수 없습니다｜자신의 맞는 분대에 클릭하세요`)
						.setColor('#43b581')
            .addField('⚙️ 지휘분대', `${result_0}`, false)
            .addField('1️⃣ 제1분대', `${result_1}`, false)
            .addField('2️⃣ 제2분대', `${result_2}`, false)
            .addField('3️⃣ 제3분대', `${result_3}`, false);

            Message.edit(editMessage)
        });

        role_4.on("collect", async (r, user) => {

            r.users.remove(message.author.id);

            const survey = JSON.parse(fs.readFileSync(filePath, "utf-8"));

            if(survey.zero.includes(user.username) || survey.one.includes(user.username) || survey.two.includes(user.username) || survey.three.includes(user.username)) return;

            if(!survey.three[0]){
                saveSurvey = {"zero": survey.zero,"one": survey.one,"two": survey.two,"three": [user.username]};
            }else{
                saveSurvey = {"zero": survey.zero,"one": survey.one,"two": survey.two,"three": ["" + survey.three[0] + ", " + user.username]};
            }
            fs.writeFileSync(filePath, JSON.stringify(saveSurvey));

            if(!survey.zero[0]){
                result_0 = "-"
            }else if(survey.zero[3]){
                result_0 = "" + survey.zero[0] + ", " + survey.zero[1] + ", " + survey.zero[2] + ", " + survey.zero[3]
            }else if(survey.zero[2]){
                result_0 = "" + survey.zero[0] + ", " + survey.zero[1] + ", " + survey.zero[2]
            }else if(survey.zero[1]){
                result_0 = "" + survey.zero[0] + ", " + survey.zero[1]
            }else if(survey.zero[0]){
                result_0 = "" + survey.zero[0]
            }

            if(!survey.one[0]){
                result_1 = "-"
            }else if(survey.one[3]){
                result_1 = "" + survey.one[0] + ", " + survey.one[1] + ", " + survey.one[2] + ", " + survey.one[3]
            }else if(survey.one[2]){
                result_1 = "" + survey.one[0] + ", " + survey.one[1] + ", " + survey.one[2]
            }else if(survey.one[1]){
                result_1 = "" + survey.one[0] + ", " + survey.one[1]
            }else if(survey.one[0]){
                result_1 = "" + survey.one[0]
            }

            if(!survey.two[0]){
                result_2 = "-"
            }else if(survey.two[3]){
                result_2 = "" + survey.two[0] + ", " + survey.two[1] + ", " + survey.two[2] + ", " + survey.two[3]
            }else if(survey.two[2]){
                result_2 = "" + survey.two[0] + ", " + survey.two[1] + ", " + survey.two[2]
            }else if(survey.two[1]){
                result_2 = "" + survey.two[0] + ", " + survey.two[1]
            }else if(survey.two[0]){
                result_2 = "" + survey.two[0]
            }

            if(!survey.three[0]){
                result_3 = user.username
            }else if(survey.three[3]){
                result_3 = "" + survey.three[0] + ", " + survey.three[1] + ", " + survey.three[2] + ", " + survey.three[3] + ", " + user.username
            }else if(survey.three[2]){
                result_3 = "" + survey.three[0] + ", " + survey.three[1] + ", " + survey.three[2] + ", " + user.username
            }else if(survey.three[1]){
                result_3 = "" + survey.three[0] + ", " + survey.three[1] + ", " + user.username
            }else if(survey.three[0]){
                result_3 = "" + survey.three[0] + ", " + user.username
            }

            const editMessage = new Discord.MessageEmbed()
            .setDescription(msg)
						.setTitle('<:SurveyCorps:832772562123489280>｜조사병단 벽외조사 공지')
            .setFooter(`한 번 선택한 분대를 취소할 수 없습니다｜자신의 맞는 분대에 클릭하세요`)
						.setColor('#43b581')
            .addField('⚙️ 지휘분대', `${result_0}`, false)
            .addField('1️⃣ 제1분대', `${result_1}`, false)
            .addField('2️⃣ 제2분대', `${result_2}`, false)
            .addField('3️⃣ 제3분대', `${result_3}`, false);

            Message.edit(editMessage)
        });
    },
  };