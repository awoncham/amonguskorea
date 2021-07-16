const Discord = require('discord.js');
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });

const { readdirSync } = require('fs');
const { join } = require('path');

client.commands = new Discord.Collection();

let prefix = '!'

const commandFile = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith("js"));

for (const file of commandFile) {
  const command = require(join(__dirname, "commands", `${file}`));
  client.commands.set(command.name, command);
}

client.on("error", console.error);

client.on("message", async message => {

// 	if(message.author.bot) return;
// 	if(message.channel.type === 'dm') return;
// 	if(message.guild !== null) {
//     if(message.guild.id !== "701398748521300049") return;
// }; 

  if(message.content.startsWith(prefix)) {
    const args = message.content.slice(prefix.length).trim().split(/ +/);

    const command = args.shift().toLowerCase();

    if(!client.commands.has(command)) return;

    try {
      client.commands.get(command).run(client, message, args);
    } catch (error) {
      console.error(error);
    }
  }
})

client.on('ready', function() {   

    console.log('[✅] 조사병단 봇 구동 완료');
		client.user.setActivity('조사병단 | !도움말')
    
    setInterval(() => {
        let tips = [
										"<#702873267345817600> 에서 현재 예정되어 있는 벽외조사를 확인하고 <#702873366373204019> 에서 신청하실 수 있습니다",
										"<@&746682677499002920>：27명 중 3명 생존이라는 극악의 난이도를 자랑했던 제 14회 벽외조사에 참여한 모든 병사들에게 수여되는 역할",
										"<@&751703838477516910>：제 14회 벽외조사에서 **갑옷거인, 짐승거인, 초대형거인** 을 토벌한 병사에게 수여되는 역할",
										"AOTTG2 및 조사병단 공식 카페가 개설되었습니다, [여기](https://cafe.naver.com/aottg2)를 클릭하여 카페에 접속해보세요",
										"조사병단의 설립일은 **2020년 4월 19일**입니다"
									]
        let rand = Math.floor(Math.random() * tips.length);
        const channel = client.channels.cache.find(channel => channel.id === '742051945472065546')
        
        const embed = new Discord.MessageEmbed()
				.setColor('RANDOM')
        .setDescription(`${tips[rand]}`)
        channel.send(embed)
    }, 14400000); // 4시간 | 2시간 7200000 / 1분 = 1000

});

// 서버 입장 메시지
client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.id === '702744515802300466');
    if(!channel) return;
    const embed = new Discord.MessageEmbed()
      .setColor('#a4d166')
			.setAuthor('https://media.discordapp.net/attachments/832482884127424543/865738397308813332/plus.png', '조사병단')
      .setDescription(`${member}, **조사병단** 서버에 오신 것을 환영합니다. 저희와 함께 벽외조사를 하실 분들은 <#701406223999959062> 에서 규칙을 읽어주시고 개인 메시지로 온 입단신청서를 작성하여 보내주세요`)
			.setImage('https://media.tenor.co/videos/8fefbb376663bbb4d0af871194dd502a/mp4')
			.setTimestamp()
		const embed1 = new Discord.MessageEmbed()
			.setTitle('<:SurveyCorps:832772562123489280> 조사병단 디스코드에 오신 것을 환영합니다!')
			.setDescription('**You Have to check the <#715046268593897482>**\n\n질문사항이 있다면 단장의 개인 DM보단 디스코드 내의 질문채널을 이용해 주세요\n\n질문을 하시기 전에 <#713752285393453147> 채널에서 먼저 확인 후에 질문을 해주세요\n\n필독 규칙 읽어주신 후, [여기](https://docs.google.com/forms/d/e/1FAIpQLSft32i7tCfBMzzehQpvHjZ3fUFBrfsSEIAPdVrXRFtxjlkYdg/viewform)를 클릭하여 입단신청서를 작성해주세요\n\n입단신청서를 작성 완료한 후 <#767285361319346186> 채널에 들어가 아래 내용을 기재해주시면 심사 후에 입단 허가 해드립니다\n(입단 허가가 되려면 최소 1시간 이상 기달려야 합니다)')
			.setImage('https://media.discordapp.net/attachments/832482884127424543/832932732442116096/unknown.png')
			.setFooter('입단신청서를 보낸 후 신청서 메시지를 제거하지 말아주세요')
      channel.send(embed)
			member.send(embed1)
    });

// 서버 퇴장 메시지
client.on('guildMemberRemove', member => {
    const channel = member.guild.channels.cache.find(ch => ch.id === '702744515802300466');
    if(!channel) return;
    const embed = new Discord.MessageEmbed()
      .setColor('#db5b5b')
			.setAuthor('https://media.discordapp.net/attachments/832482884127424543/865738395794800651/minus_1.png', '조사병단')
      .setDescription(`${member}, **조사병단** 서버를 나가셨습니다. 언제든 환영이니 다시 들어올 생각이 있으시면 다시 들어와요!`)
			.setTimestamp()
			.setImage('https://media.discordapp.net/attachments/832482884127424543/865740768282148884/25bc9054e83f3b0537b0c52b9a60ba88.gif')
      channel.send(embed)
  });

//메시지 수정
client.on('messageUpdate', async(oldMessage, newMessage) => {
  if(oldMessage.content === newMessage.content) return // 임베드로 인한 수정같은 경우 
  const channel = client.channels.cache.find(channel => channel.id === '833267835530641419')
  const user = oldMessage.mentions.users.first() || oldMessage.author;
  const embed = new Discord.MessageEmbed()
  .setTitle('<:SurveyCorps:832772562123489280> 수정 로그')
	.setColor('#5665aa')
	.addField('<:ph6400:832905025972994078> 수정한 사람', `<@!${oldMessage.author.id}>`, true)
	.addField('<:ph6400:832905025972994078> 해당 채널', `<#${oldMessage.channel.id}>`, false)
  .addFields(
    { name: '<:ph6400:832905025972994078> 수정 전', value: `\`\`\`${oldMessage.content}\`\`\``, inline: true },
    { name: '<:ph6400:832905025972994078> 수정 후', value: `\`\`\`${newMessage.content}\`\`\``, inline: true }
)
  .setTimestamp()
  .setFooter(user.username, user.displayAvatarURL())
  channel.send(embed)
})

// 메시지 삭제
client.on('messageDelete', message => {
	if(!message.partial) {
		const channel = client.channels.cache.find(channel => channel.id === '833267835530641419')
		const user = message.mentions.users.first() || message.author;
		if(channel) {
			const embed = new Discord.MessageEmbed()
			.setTitle('<:error:832821274719551529> 삭제 로그')
			.setColor('#FF0000')
			.addField('<:awoncham:832894731427643422> 메시지 주인', `<@${message.author.id}>`, true)
			.addField('<:awoncham:832894731427643422> 해당 채널', `<#${message.channel.id}>`, true)
			.addField('<:awoncham:832894731427643422> 삭제된 메시지', `\`\`\`${message.content}\`\`\``, false)
			.setTimestamp()
			.setFooter(user.username, user.displayAvatarURL())
			channel.send(embed)
		}
	}
});

// //금지어
// client.on('message', async message => {
    
//     if (message.channel.type === 'dm') return;
        

//     let blacklisted = ["씨발", "시발", "ㅅㅂ", "ㅄ", "병신", "븅신", "지랄", "죠랄", "존나", "ㅈㄴ", "자지", "보지", "섹스", "sex", "Sex", "TLQKF", "tlqkf",
//                        "개새끼", "^^ㅣ발", "좆", "ㅈ밥", "알씨", "ARCE", "알1씨"]

//     let foundInText = false;
//     for (var i in blacklisted) { 
//       if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true
//     }

//     if (foundInText) {
//         const user = message.author.id;
//         const embed = new Discord.MessageEmbed()
//         .setColor('#FF0000')
//         .setDescription(`잠깐, <@${user}> 지금 너는 금지어에 포함되어 있는 단어를 말했다!`);
//         message.channel.send(embed)
// }
// }
// );

//음식추천
client.on('message', message => {
        
	if(message.author.bot) return;
	if(message.channel.type === 'dm') return;
	if(message.guild !== null) {
    if(message.guild.id !== "701398748521300049") return;
};        
    
    let foods = ["지크 척수액", "족발", "피자", "치킨", "진라면", "짜파게티", "파스타", "스테이크", "마라흑당치즈민트초코칩쿠키", "크레이프 케이크", "짜장면", "짬뽕", "허니버터흑당마라치즈불닭민트초코순대국밥", "마라허니민트초코칩쿠키", "된장국", "보리밥", "산낙지", "도토리묵", "쭈꾸미", "참깨빵 위에 순 쇠고기 패티 두장, 특별한 소스 양상추 치즈 피클 양파까지", "포카칩", "부대찌개", "해리포터젤리빈", "도토리", "떡볶이", "곤드레비빔밥", "초밥"]

    if (message.content === `${prefix}음식추천`) {
        let rand = Math.floor(Math.random() * foods.length);
        const embed = new Discord.MessageEmbed()
        .setDescription(`${foods[rand]} 먹어보세요!`)
        message.channel.send(embed)
    }
});

//오늘의 운세
client.on('message', message => {
        
	if(message.author.bot) return;
	if(message.channel.type === 'dm') return;
	if(message.guild !== null) {
    if(message.guild.id !== "701398748521300049") return;
}; 
        
    
    let luck = [
								"스피드런 신기록을 찍을 것입니다",
								"데미지런 신기록을 찍을 것입니다",
								"와이어가 잘 안 쏴지는 날입니다",
								"게임이 많이 튕길 것입니다",
								"나무에 많이 박을 것입니다",
								"거인들이 당신을 기달리고 있습니다",
								"엄청 못해지는 날입니다",
								"벽외조사를 하고 싶어하게 될 것입니다"
            	 ]

    if (message.content === `${prefix}오늘의운세`) {
        let rand = Math.floor(Math.random() * luck.length);
        const embed = new Discord.MessageEmbed()
        .setDescription(`\`\`\`md\n#오늘의 운세\n\n${luck[rand]}\`\`\``)
        message.channel.send(embed)
    }
});

//게임추천
client.on('message', message => {
        
	if(message.author.bot) return;
	if(message.channel.type === 'dm') return;
	if(message.guild !== null) {
    if(message.guild.id !== "701398748521300049") return;
}; 
        
    
    let games = ["AoTTG", "롤", "마인크래프트", "레포데", "더 포레스트", "어몽어스", "OSU", "오버워치", "배그", "피파온라인", "카트라이더", "브롤스타즈", "서튼어택", "메이플스토리", "GTA5", "테일즈런너", "로블록스", "거지 키우기", "원신", "아원참이랑 놀아주기"]

    if (message.content === `${prefix}게임추천`) {
        let rand = Math.floor(Math.random() * games.length);
        const embed = new Discord.MessageEmbed()
        .setDescription(`${games[rand]} 하는 거 어떤가요?`)
        message.channel.send(embed)
    }
});

//태그 메시지
client.on('message', message => {
    let replaceStr = message.content.replace(/[^0-9]/g, "")
    if(replaceStr === client.user.id) {
			const embed = new Discord.MessageEmbed()
			.setAuthor('조사병단 도움말', 'https://media.discordapp.net/attachments/832482884127424543/843326112301580318/c6a249645d46209f337279cd2ca998c7.png')
			.setThumbnail('https://media.discordapp.net/attachments/832482884127424543/843326112301580318/c6a249645d46209f337279cd2ca998c7.png')
			.addField('**조사병단**', '`!도움말 조사병단`', true)
			.addField('**놀이**', '`!도움말 놀이`', true)
			.addField('**관리**', '`!도움말 관리`', true)
			.addField('**기타**', '`!도움말 기타`', true)
			message.channel.send(embed)
    }
})

// 인물 정보
client.on('message', message => {

	if(message.author.bot) return;
	if(message.channel.type === 'dm') return;
	if(message.guild !== null) {
    if(message.guild.id !== "701398748521300049") return;
}; 

	if (message.content === `${prefix}인물정보 아원참` || message.content === `${prefix}인물정보 awoncham`) { // 아원참
		const embed = new Discord.MessageEmbed()
		.setTitle('아원참 (awoncham)')
		.setURL('https://www.youtube.com/channel/UCDKwZRPOZ9YCnJDAO4GmPYA')
		.setColor('#FF6161')
		.setDescription('조사병단 봇을 만든 인물이며, 벽외조사에서도 뛰어난 활약을 하고 있다')
		.setThumbnail('https://media.discordapp.net/attachments/808951741592371224/839055354301120553/9.png?width=676&height=676')
		.addField('<:awoncham:832894731427643422> 나이', '15', true)
		.addField('<:awoncham:832894731427643422> 성별', '남자', true)
		.addField('<:awoncham:832894731427643422> 신체', '165 | 57 | A형', true)
		.addField('<:awoncham:832894731427643422> 출생', '820년대 7월 4일, 방벽 월 시나 지하도시', true)
		.addField('<:awoncham:832894731427643422> 직책', '조사병단 베테랑', true)
		.addField('<:awoncham:832894731427643422> 훈장', '총 1개 보유', true)
		.setImage('https://media.discordapp.net/attachments/832482884127424543/832893679756115978/5.png?width=1203&height=676')
		.setFooter('awoncham', 'https://media.discordapp.net/attachments/808951741592371224/839055354301120553/9.png?width=676&height=676')
		.setTimestamp()
		message.channel.send(embed)
	}
	if (message.content === `${prefix}인물정보 파라유저` || message.content === `${prefix}인물정보 파라` || message.content === `${prefix}인물정보 PharahUser`) { // 파라유저
		const embed = new Discord.MessageEmbed()
		.setTitle('파라유저 (PharahUser)')
		.setURL('https://www.youtube.com/channel/UCXYg94ladrdBG4HfFdBKmgw')
		.setColor('#d2d23d')
		.setDescription('한때 오버워치를 즐겼던 흔한 즐겜러')
		.setThumbnail('https://media.discordapp.net/attachments/832482884127424543/832899833110593536/fa9a1388f39a6b33e90eae6a8f19d132.png')
		.addField('<:pharahuser:832900205837680640> 나이', '20', true)
		.addField('<:pharahuser:832900205837680640> 성별', '남자', true)
		.addField('<:pharahuser:832900205837680640> 신체', '186 | 82 | AB형', true)
		.addField('<:pharahuser:832900205837680640> 출생', '830년 11월 30일, 월로제 크로르바 구', true)
		.addField('<:pharahuser:832900205837680640> 직책', '조사병단 분대장', true)
		.addField('<:pharahuser:832900205837680640> 훈장', '총 0개 보유', true)
		.setImage('https://media.discordapp.net/attachments/809302876445868072/832898106424426496/maxresdefault.png?width=926&height=521')
		.setFooter('PharahUser', 'https://media.discordapp.net/attachments/832482884127424543/832899833110593536/fa9a1388f39a6b33e90eae6a8f19d132.png')
		.setTimestamp()
		message.channel.send(embed)
	}
	if (message.content === `${prefix}인물정보 애플` || message.content === `${prefix}인물정보 Red_Orange_Yellow_Green_Blue_Purple_Black_White_apple_G` || message.content === `${prefix}인물정보 Red_Orange_Green_Purple_apple_G`) { // 애플
		const embed = new Discord.MessageEmbed()
		.setTitle('애플 (Red_Orange_Yellow_Green_Blue_Purple_Black_White_apple_G)')
		.setURL('https://www.youtube.com/channel/UCZTRt2K-MY3pB6WxfKQuGvg')
		.setColor('#00ff40')
		.setDescription('그딴 거 없다')
		.setThumbnail('https://media.discordapp.net/attachments/803107763428261888/832899807176949790/e_9678530497_630996b5daaf665a9c7d0566369bbe8a425d770a.png')
		.addField('<:apple:832901945576128523> 나이', '15', true)
		.addField('<:apple:832901945576128523> 성별', '남자', true)
		.addField('<:apple:832901945576128523> 신체', '170 | 80 | AB형', true)
		.addField('<:apple:832901945576128523> 출생', '100년 4월 13일, 미트라스 왕도', true)
		.addField('<:apple:832901945576128523> 직책', '조사병단 병사장', true)
		.addField('<:apple:832901945576128523> 훈장', '총 2개 보유', true)
		.setImage('https://images-ext-1.discordapp.net/external/6A_ZYeOugupXGzVU7wr4zJnM2disiTePPMsveT7NRtE/https/media.discordapp.net/attachments/810906802396463145/825208095340363836/1615285570265.gif')
		.setFooter('Red_apple', 'https://media.discordapp.net/attachments/803107763428261888/832899807176949790/e_9678530497_630996b5daaf665a9c7d0566369bbe8a425d770a.png')
		.setTimestamp()
		message.channel.send(embed)
	}
	if (message.content === `${prefix}인물정보 ph6400`) { // ph6400
		const embed = new Discord.MessageEmbed()
		.setTitle('ph6400 (ph6400)')
		.setURL('https://www.youtube.com/channel/UCN1o9d0_iToU5RyL8CrtWcw')
		.setColor('#5665aa')
		.setDescription('조사병단 창단자이자, 제1 대 단장')
		.setThumbnail('https://media.discordapp.net/attachments/803793832528314418/832904155487404042/-1.png?width=676&height=676')
		.addField('<:ph6400:832905025972994078> 나이', '24', true)
		.addField('<:ph6400:832905025972994078> 성별', '남자', true)
		.addField('<:ph6400:832905025972994078> 신체', '182 | 64 | O형', true)
		.addField('<:ph6400:832905025972994078> 출생', '827년 8월 29일, 월 시나', true)
		.addField('<:ph6400:832905025972994078> 직책', '조사병단 법관', true)
		.addField('<:ph6400:832905025972994078> 훈장', '총 0개 보유', true)
		.setImage('https://media.discordapp.net/attachments/803793832528314418/832906464909328414/1-2.png?width=1203&height=676')
		.setFooter('ph6400', 'https://media.discordapp.net/attachments/803793832528314418/832904155487404042/-1.png?width=676&height=676')
		.setTimestamp()
		message.channel.send(embed)
	}
	if (message.content === `${prefix}인물정보 나물` || message.content === `${prefix}인물정보 Namull`) { // 나물님
		const embed = new Discord.MessageEmbed()
		.setTitle('김나물 (Namull)')
		.setURL('https://www.youtube.com/channel/UCP50mdWLVxMuwtQiaVQBA6A')
		.setColor('#9A2EFE')
		.setDescription('조사병단의 최초의 여성 단장')
		.setThumbnail('https://media.discordapp.net/attachments/802761275507343370/832918660321640468/d202a0bb59bcdd29.png?width=676&height=676')
		.addField('<:namull:832910275517743124> 나이', '16', true)
		.addField('<:namull:832910275517743124> 성별', '다들 남자라고 오해하지만 여자다', true)
		.addField('<:namull:832910275517743124> 신체', '157 | 45 | A형', true)
		.addField('<:namull:832910275517743124> 출생', '836년 1월 2일, 월시나 에르미하구', true)
		.addField('<:namull:832910275517743124> 직책', '조사병단 단장', true)
		.addField('<:namull:832910275517743124> 훈장', '총 0개 보유', true)
		.setImage('https://media.discordapp.net/attachments/802761275507343370/832933652547239956/9bcd7a670af8c0cc.png?width=1203&height=676')
		.setFooter('Namull', 'https://media.discordapp.net/attachments/802761275507343370/832918660321640468/d202a0bb59bcdd29.png?width=676&height=676')
		.setTimestamp()
		message.channel.send(embed)
	}
	if (message.content === `${prefix}인물정보 왁끼` || message.content === `${prefix}인물정보 비온` || message.content === `${prefix}인물정보 Wakggi`) { // 왁끼님
		const embed = new Discord.MessageEmbed()
		.setTitle('왁끼 (Wakggi)')
		.setColor('#aee5e1')
		.setDescription('든든한 왁갈통과 함께해요!')
		.setThumbnail('https://media.discordapp.net/attachments/804966296088215563/833302082987098112/externalFile.gif')
		.addField('<:bion:833312147424804954> 나이', '16', true)
		.addField('<:bion:833312147424804954> 성별', '남자', true)
		.addField('<:bion:833312147424804954> 신체', '187 | 77 | A형', true)
		.addField('<:bion:833312147424804954> 출생', '836년 1월 10일, 시간시나구', true)
		.addField('<:bion:833312147424804954> 직책', '조사병단 검사', true)
		.addField('<:bion:833312147424804954> 훈장', '총 0개 보유', true)
		.setImage('https://media.discordapp.net/attachments/804966296088215563/833313017667256320/1232-1.png?width=1203&height=676')
		.setFooter('Wakggi', 'https://media.discordapp.net/attachments/804966296088215563/833302082987098112/externalFile.gif')
		.setTimestamp()
		message.channel.send(embed)
	}
	if (message.content === `${prefix}인물정보 결백` || message.content === `${prefix}인물정보 GYEOL_BAEG`) { // 결백님
		const embed = new Discord.MessageEmbed()
		.setTitle('결백 (GYEOL_BAEG)')
		.setURL('https://www.youtube.com/channel/UCen9uei3e4OletnPH8LMtDw')
		.setColor('#FF6161')
		.setDescription('나는 조사병단에서 허당을 맡고 있다')
		.setThumbnail('https://media.discordapp.net/attachments/828203987185958912/833571140281827328/123213123123.png?width=676&height=676')
		.addField('<:awoncham:832894731427643422> 나이', '15', true)
		.addField('<:awoncham:832894731427643422> 성별', '남자', true)
		.addField('<:awoncham:832894731427643422> 신체', '167 | 63 | B형', true)
		.addField('<:awoncham:832894731427643422> 출생', '807년대 11월 2일, 월 마리아', true)
		.addField('<:awoncham:832894731427643422> 직책', '조사병단 숙련병', true)
		.addField('<:awoncham:832894731427643422> 훈장', '총 1개 보유', true)
		.setImage('https://media.discordapp.net/attachments/828203987185958912/833560769173651486/1231233.PNG?width=1203&height=676')
		.setFooter('GYEOL_BAEG', 'https://media.discordapp.net/attachments/828203987185958912/833571140281827328/123213123123.png?width=676&height=676')
		.setTimestamp()
		message.channel.send(embed)
	}
	if (message.content === `${prefix}인물정보 거인TV` || message.content === `${prefix}인물정보 거인` || message.content === `${prefix}인물정보 TitanTV`) { // 거인TV님
		const embed = new Discord.MessageEmbed()
		.setTitle('거인TV (TitanTV)')
		.setURL('https://www.youtube.com/channel/UCNd1xAYf28upEZYvIRsc6-Q')
		.setColor('#FF6699')
		.setDescription('한 때는 초절인기 유튜버, 지금은 씹퇴물련')
		.setThumbnail('https://media.discordapp.net/attachments/832482884127424543/833605684859371520/734778676104790096.png')
		.addField('<:TitanTV:833606765819723826> 나이', '27', true)
		.addField('<:TitanTV:833606765819723826> 성별', '남자', true)
		.addField('<:TitanTV:833606765819723826> 신체', '177 | 58 | B형', true)
		.addField('<:TitanTV:833606765819723826> 출생', '895년 5월 15일, 월 시나 공작가', true)
		.addField('<:TitanTV:833606765819723826> 직책', '조사병단 찐따', true)
		.addField('<:TitanTV:833606765819723826> 훈장', 'AOTTG 역사상 최초로 시청자 300명 이상 기록 보유', true)
		.setImage('https://media.discordapp.net/attachments/813307553307951115/833606236129460224/df9eb2efe9ac186b.png?width=1203&height=676')
		.setFooter('TitanTV', 'https://media.discordapp.net/attachments/832482884127424543/833605684859371520/734778676104790096.png')
		.setTimestamp()
		message.channel.send(embed)
	}
	if (message.content === `${prefix}인물정보 카인` || message.content === `${prefix}인물정보 A.Kain` || message.content === `${prefix}인물정보 Kain`) { // 카인님
		const embed = new Discord.MessageEmbed()
		.setTitle('카인 (A.Kain)')
		.setURL('https://www.youtube.com/channel/UCMz30Ljl5eD-YnJQB9VaE8A')
		.setColor('#6e0000')
		.setDescription('조사병단의 3반 반장, 달빠다')
		.setThumbnail('https://cdn.discordapp.com/attachments/815765657458049044/833622888539488306/KakaoTalk_20210418_2152410362.jpg')
		.addField('<:kain:833972454648446986> 나이', '18', true)
		.addField('<:kain:833972454648446986> 성별', '남자', true)
		.addField('<:kain:833972454648446986> 신체', '176 | 52.9 | A형', true)
		.addField('<:kain:833972454648446986> 출생', '668년 2월 4일, 월 마리아', true)
		.addField('<:kain:833972454648446986> 직책', '조사병단 반장', true)
		.addField('<:kain:833972454648446986> 훈장', '훈장은 먹는 것이다', true)
		.setImage('https://media.discordapp.net/attachments/815765657458049044/833325314029518848/KakaoTalk_20210418_214927436.gif')
		.setFooter('A.Kain', 'https://cdn.discordapp.com/attachments/815765657458049044/833622888539488306/KakaoTalk_20210418_2152410362.jpg')
		.setTimestamp()
		message.channel.send(embed)
	}
	if (message.content === `${prefix}인물정보 나메` || message.content === `${prefix}인물정보 NoName`) { // 나메님
		const embed = new Discord.MessageEmbed()
		.setTitle('나메 (NoName)')
		.setColor('#fff990')
		.setDescription('네임 말고 나메다')
		.setThumbnail('https://media.discordapp.net/attachments/832482884127424543/833975455325093898/93b40f5e447856a093ab37dbc8451eb0.gif')
		.addField('<:NoName:833974404223336468> 나이', '16', true)
		.addField('<:NoName:833974404223336468> 성별', '남자', true)
		.addField('<:NoName:833974404223336468> 신체', '173 | 80 | A형', true)
		.addField('<:NoName:833974404223336468> 출생', '834년 3월 8일, 월 로제', true)
		.addField('<:NoName:833974404223336468> 직책', '조사병단 보좌관', true)
		.addField('<:NoName:833974404223336468> 훈장', '총 0개 보유', true)
		.setImage('https://media.discordapp.net/attachments/832482884127424543/833975624287911996/91c20793962c3cbb0b97ca4f7692911f.gif')
		.setFooter('NoName', 'https://media.discordapp.net/attachments/832482884127424543/833975455325093898/93b40f5e447856a093ab37dbc8451eb0.gif')
		.setTimestamp()
		message.channel.send(embed)
	}
	if (message.content === `${prefix}인물정보 하쿠` || message.content === `${prefix}인물정보 HAKU`) { // 하쿠님
		const embed = new Discord.MessageEmbed()
		.setTitle('하쿠 (HAKU)')
		.setColor('#e13458')
		.setDescription('정의의 사도가 되기위해 지구랑 계약한 수호자')
		.setURL('https://www.youtube.com/channel/UC-skqWsNNSQkxRFG-ouRi_g')
		.setThumbnail('https://media.discordapp.net/attachments/829985000015003658/835399354818101248/haku1.png?width=676&height=676')
		.addField('<:HAKU:835395834044350474> 나이', '17', true)
		.addField('<:HAKU:835395834044350474> 성별', '남자', true)
		.addField('<:HAKU:835395834044350474> 신체', '172 | 63 | A형', true)
		.addField('<:HAKU:835395834044350474> 출생', '819년 7월 5일, 월 시나 지하도시', true)
		.addField('<:HAKU:835395834044350474> 직책', '조사병단 베테랑', true)
		.addField('<:HAKU:835395834044350474> 훈장', '에밀리아 훈장 보유', true)
		.setImage('https://media.discordapp.net/attachments/829985000015003658/835399420006760448/1501704854_bf5cd8e4f1a47307d403e4ca51ce083cae94c64e_hq.gif')
		.setFooter('HAKU', 'https://media.discordapp.net/attachments/829985000015003658/835399354818101248/haku1.png?width=676&height=676')
		.setTimestamp()
		message.channel.send(embed)
	}
	if (message.content === `${prefix}인물정보 장발장` || message.content === `${prefix}인물정보 Abraham`) { // 장발장님
		const embed = new Discord.MessageEmbed()
		.setTitle('장발장 (Abraham)')
		.setColor('#000000')
		.setDescription('빵 알레르기가 있다')
		.setThumbnail('https://media.discordapp.net/attachments/838752812102975498/840559077784551444/unnamed_2.jpg?width=676&height=676')
		.addField('<:jbj:840566887272546354> 나이', '17', true)
		.addField('<:jbj:840566887272546354> 성별', '남자', true)
		.addField('<:jbj:840566887272546354> 신체', '175 | 59 | O형', true)
		.addField('<:jbj:840566887272546354> 출생', '833년 6월 1일, 월 시나 야르케르 구', true)
		.addField('<:jbj:840566887272546354> 직책', '조사병단 신병', true)
		.addField('<:jbj:840566887272546354> 훈장', '총 0개 보유보유', true)
		.setImage('https://media.discordapp.net/attachments/838752812102975498/840559076714610708/unnamed_1.jpg?width=1203&height=676')
		.setFooter('Abraham', 'https://media.discordapp.net/attachments/838752812102975498/840559077784551444/unnamed_2.jpg?width=676&height=676')
		.setTimestamp()
		message.channel.send(embed)
	}
	if (message.content === `${prefix}인물정보 쿠키` || message.content === `${prefix}인물정보 KuKi`) { //쿠키님
		const embed = new Discord.MessageEmbed()
		.setDescription('<:error:832821274719551529> 해당 유저는 정보가 없는 비공개 유저입니다!')
		.setColor('#FF0000')
		message.channel.send(embed)
	}
});

// 도움말
client.on('message', message => {

	if(message.author.bot) return;
	if(message.channel.type === 'dm') return;
	if(message.guild !== null) {
    if(message.guild.id !== "701398748521300049") return;
}; 

	// 기본 도움말
	if (message.content === `${prefix}도움말`) {
		const embed = new Discord.MessageEmbed()
		.setAuthor('조사병단 도움말', 'https://media.discordapp.net/attachments/832482884127424543/843326112301580318/c6a249645d46209f337279cd2ca998c7.png')
		.setThumbnail('https://media.discordapp.net/attachments/832482884127424543/843326112301580318/c6a249645d46209f337279cd2ca998c7.png')
		.addField('**조사병단**', '`!도움말 조사병단`', true)
		.addField('**놀이**', '`!도움말 놀이`', true)
		.addField('**관리**', '`!도움말 관리`', true)
		.addField('**기타**', '`!도움말 기타`', true)
		message.channel.send(embed)
	}
	// 조사병단 도움말
	if (message.content === `${prefix}도움말 조사병단`) {
		const embed = new Discord.MessageEmbed()
		.setTitle('조사병단 플러그인')
		.addField('`!색깔`', '벽외조사 할 때에 사용해야 하는 닉네임 색깔코드', false)
		.addField('`!벽외조사 <#채널> <내용>`', '벽외조사 공지를 띄울 수 있습니다 ', false)
		.addField('`!계급`', '조사병단에 있는 역할들을 설명해줍니다', false)
		.addField('`!팀스피크`', '팀스피크 다운 혹은 사용 방법', false)
		.addField('`!초대`', '조사병단 영구 초대코드를 확인해보세요', false)
		.addField('`!연막탄`', '조사병단 연막탄 가이드를 확인할 수 있다', false)
		.addField('`!훈장`', '조사병단 훈장 획득 조건 혹은 어떤 훈장이 있는지 확인해보세요', false)
		message.channel.send(embed)
	}
	// 조사병단 색깔
	if (message.content === `${prefix}색깔`) {
		const embed = new Discord.MessageEmbed()
		.setDescription('<@&701403514160545792>：조사병단 작전통제권 지휘자 **[3300FF]** <:color1:834675089022255114>\n<@&701403526433341531>：4 ~ 6명을 이끄는 분대 통솔자 **[FFFF33]** <:color2:834675089202741268>\n<@&701403575070490716>：3 ~ 4명을 이끄는 반 통솔자 **[FF0000]** <:color3:834675087528689664>\n<@&701403592195702814>：위에 있는 역할 외에 모든 병사들 **[FFFFFF]** <:color4:834675087142813707>')
		.setImage('https://media.discordapp.net/attachments/832482884127424543/834672919841603594/1.PNG')
		message.channel.send(embed)
	}
	// 조사병단 훈장
	if (message.content === `${prefix}훈장`) {
		const embed = new Discord.MessageEmbed()
		.setDescription('**`훈장 획득 조건`**\n\n**1.** 특수거인(여성형, 초대형, 갑옷, 로드 레이스 등등) 토벌 또는 한 벽외조사에서 15구 토벌 후 생존\n**2.** 훈장은 총 7개 등급으로 구성되어 있으며, 최고등급 훈장을 수여받을 시에는 엘리트 등급으로 승진 가능\n\n**`훈장 등급표`**\n\n**1.** 앙헬무공훈장：인류 최초로 거인을 잡은 \'앙헬\'을 기억하는, 첫 번째 훈장\n**2.** 마리아무공훈장：유미르의 세 자녀 중 하나인 마리아\n**3.** 로제무공훈장：유미르의 세 자녀 중 하나인 로제\n**2.** 시나무공훈장：유미르의 세 자녀 중 하나인 시나\n**5.** 자유무공훈장：자유의 의지를 보여준 자에게 수여되는 훈장\n**6.** 총통무공훈장：3개 병단을 통솔하는 충통이 수여하는 훈장\n**7.** 여왕무공훈장：파라디 섬의 최고 통솔자, 여왕이 직접 수여하는 훈장')
		.setImage('https://media.discordapp.net/attachments/832478811522072618/839052363398381568/Shingeki_no_Kyojin_S3_-_Episode_59_END_-_Hange_Receives_Medal.gif')
		message.channel.send(embed)
	}
	// 조사병단 유니폼
	if (message.content === `${prefix}유니폼`) {
		const embed = new Discord.MessageEmbed() 
		.setTitle('<:SurveyCorps:832772562123489280> 조사병단 공식 유니폼')
		.setDescription('<#702415058768101488>')
		.setColor('#079951')
		.setFooter('위에 있는 사진은 착용 시 캐릭터 모습입니다')
		.setImage('https://media.discordapp.net/attachments/832482884127424543/843320765091807252/unknown.png')
		message.channel.send(embed)
	}
	// 조사병단 계급
	if (message.content === `${prefix}계급`) {
		const embed = new Discord.MessageEmbed()
		.setTitle('<:SurveyCorps:832772562123489280> 조사병단 계급 배치도')
		.setDescription(
			`<@&701403514160545792>：조사병단의 총괄 책임자 및 최고 지휘관이다. 장거리 수색 진형 전체를 컨트롤하며 작전 목표 수행을 위한 모든 책임을 진다. 2 ~ 40명 또는 합동 벽외조사에서는 6 ~ 70명까지 통솔해야 하는 만큼 뛰어난 통솔력을 가지고 전반적인 벽외조사의 이해도를 가지고 있어야 한다.
			
			<@&701403526433341531>：벽외조사 섹션 책임자 및 지휘권 2인자이다. 단장의 부재 시 진형의 지휘권을 이어받는다. 반장이 한 반을 통제할 수 있다면 분대장은 반장들을 통제하고 좌익이나 우익 등 전체를 컨트롤한다.
			
			<@&701403563083038760>：병사들 전체를 선도하며, 제 3분대를 이끄는 캡틴
			
			<@&701403575070490716>：각 반을 책임지는 반장이다. 각 조사마다 한 반에는 3 ~ 10명 정도의 병사들로 구성돼 출전하며, 반들은 장거리 수색진형에서 살을 이룬다. 장교급의 직책인 만큼 뛰어난 리더쉽과 통솔력을 가지며 반을 통솔하는 능력과 책임감을 가져야 한다.
			
			<@&711553803236933685>：일반 사병급 병사에서 최고로 올라갈 수 있는 계급이다. 조사병단 내의 상위 1% 안에 들어가는 실력을 보여주며, 한 벽외조사에서 수십마리의 거인들을 구축하고 돌아오는 완벽한 실력을 보여준다.
			
			**훈장 10개를 모을 시에 진급할 수 있는 계급이다**
			
			<@&711553800179286037>：벽외조사에서 베테랑급이 되어, 거인 구축과 생존 전문가이다.
			
			**신병부터 대규모 벽외조사 누적 60킬을 달성했을 경우 진급할 수 있는 계급이다.**
			
			<@&711553978059587634>：수많은 벽외조사에 참가하여, 조사병단의 핵심맴버를 이루는 어엿한 숙련병이다. 평균정도의 전투력을 가지고 있으며 각 벽외조사마다 작전의 이해도와 거인과의 전투에서 숙달돼있다.
			
			**신병부터 대규모 벽외조사 누적 15킬을 달성했을 경우 진급할 수 있는 계급이다.**
			
			<@&711511435783569468>：정식 병단원이 되었지만, 입단한 지 얼마 안 된 신병이다.
			
			**신병 시험에 합격해야 진급할 수 있는 계급이다.**
			
			<@&703096881403658250>：벽외조사에 참가하기 위해 훈련 중인 병사들이다. 훈련병단의 훈련병 신분이며, 조사병단 입단 필기시험을 합격한 후에 정식 조사병단원이 될 수 있다.`
			)
			message.channel.send(embed);
	}
	if (message.content === `${prefix}연막탄`) {
		const embed = new Discord.MessageEmbed()
		.setDescription('**연막탄 가이드** <:smoke:838358026963779585>')
		.addField('녹색 <:color5:838358884292231198>', '**-** 진형의 방향을 결정하는 연막탄이며, 분대장 및 반장이 발사할 수 없을 시, 다른 대원이 발사한다', false)
		.addField('적색 <:color3:834675087528689664>', '**-** 거인이 접근할 시 오는 방향으로 발사해야 할 연막탄이다. 거인을 단순히 발견했을 때는 지나치고 거인이 진형으로 접근중일때만 발사하여 지휘분대에 알린다', false)
		.addField('흑색 <:color6:838359769029935125>', '**-** 기행종을 발견할 시 발사해야 할 연막탄이다. 적색과 달리 발견하자마자 발사해야 하며, 크롤러나 특이행동을 보이는 거인일 때 발사하여 알린다. 일반 거인부터 달리는 거인, 점퍼, 펑크는 벽외조사에서 기행종이 아니다', false)
		.addField('황색 <:color2:834675089202741268>', '**-** 거인과 교전할 수 없거나 굉장히 어려운 상황에 봉착했을 때 발사하는 연막탄. 노란 연막탄을 확인한다면 인근분대가 지원해줄 것이다', false)
		.addField('보라색 <:color7:838360513985118219>', '**-** 단장만 발사 가능한 연막탄이며, 단장이 진형을 다시 맞추기 위해서 발사하는 연막탄. 이 연막탄이 발사된다면 전부 보라색 연막탄의 위치를 확인하고 각자의 포메이션 위치로 이동해야 한다. 교전 중이거나 먼저 앞에 있더라도 즉시 진형으로 복귀. 분대장 및 반장들은 보라색 연막탄 방향과 똑같이 녹색 연막탄을 발사해야 한다', false)
		.addField('청색 <:color1:834675089022255114>', '**-** 진형을 좁히기 위해 결정하는 연막탄이다. 단장이 발사 했을 경우 반장들은 진형을 좁혀야 한다. 곧 문이나 다리를 지나갈 일이 있을 경우 발사된다', false)
		.setImage('https://media.discordapp.net/attachments/832478811522072618/838358344849817620/Signal_Flare.gif')
		message.channel.send(embed)
	}
	// 조사병단 팀스피크
	if (message.content === `${prefix}팀스피크`) {
		const embed = new Discord.MessageEmbed()
		.setDescription('[여기](https://www.teamspeak3.com/)를 클릭하여 다운로드 **(일반 병사들 제외)**\n\n**1.** 왼쪽 상단에 connections에서 serverlist를 클릭\n**2.** 서버 중 [NPIX] Public Teamspeak server를 찾아서 더블클릭\n**3.** 창을 close하면 서버에 들어와져 있는데 맨 밑에 Survey Corps를 더블클릭\n**4.** 다시 상단 위에 tools가 있는데 들어가서 capture에 들어가 push to talk를 설정')
		message.channel.send(embed)
	}
	// 조사병단 영구 초대 코드
	if (message.content === `${prefix}초대`) {
		const embed = new Discord.MessageEmbed()
		.setDescription('**https://discord.gg/K9s7XpZaaM**')
		message.channel.send(embed)
	}
	// 명령어 놀이
	if (message.content === `${prefix}도움말 놀이`) {
		const embed = new Discord.MessageEmbed()
		.setTitle('놀이 플러그인')
		.addField('`!핑`', '자신의 디스코드 연결속도를 확인해보세요', false)
		.addField('`!음식추천`', '음식 고르기가 힘들면 한 번 사용해보세요', false)
		.addField('`!게임추천`', '할 게임이 없을 때 한 번 사용해보세요', false)
		.addField('`!오늘의운세`', '오늘은 과연 어떤 일이 일어날 지 확인해보세요', false)
		.addField('`!가위바위보`', '조사병단 봇과 가위바위보를 한번 해보세요', false)
		.addField('`!말하기`', '뒤에 한 말을 그대로 따라합니다', false)
		message.channel.send(embed)
	}
	// 명령어 관리
	if (message.content === `${prefix}도움말 관리`) {
		const embed = new Discord.MessageEmbed()
		.setTitle('관리 플러그인')
		.addField('`!청소 (1 ~ 99)`', '1 ~ 99까지의 메시지를 삭제할 수 있습니다 (관리자만)', false)
		message.channel.send(embed)
	}
	// 명령어 기타
	if (message.content === `${prefix}도움말 기타`) {
		const embed = new Discord.MessageEmbed()
		.setTitle('기타 플러그인')
		.addField('`!아바타 (@태그)`', '자신 혹은 다른 유저의 프로필을 확인하실 수 있습니다', false)
		.addField('`!다운로드`', '많이 사용되는 Aottg 다운 사이트를 알려줍니다', false)
		.addField('`!인물정보`', '조사병단의 있는 유저의 정보를 얻을 수 있어요', false)
		.addField('`!특성카드`', '조사병단에 있는 관리진 및 봇 관리자 관계자들의 카드를 볼 수 있어요')
		.addField('`!계산`', '더하기, 빼기, 곱하기, 나누기 식을 계산해줍니다', false)
		.addField('`!전송 (@태그) (내용)`', '관리자만 사용할 수 있는 명령어입니다', false)
		.addField('`!코로나`', '현재 대한민국 코로나 상태를 확인하실 수 있습니다', false)
		message.channel.send(embed)
	}
	// 특성카드
	if (message.content === `${prefix}특성카드 아원참`) {
		const embed = new Discord.MessageEmbed()
		.setImage('https://media.discordapp.net/attachments/832482884127424543/865727580678389770/4cc82fcfbcf43717.png?width=1009&height=567')
		message.channel.send(embed)
	}
})

// 조사병단 관련 명령어
client.on('message', message => {
    
	if(message.author.bot) return;
	if(message.channel.type === 'dm') return;
	if(message.guild !== null) {
    if(message.guild.id !== "701398748521300049") return;
}; 
        
    // 연결한 정도를 알려줍니다
    if(message.content.startsWith(`${prefix}핑`)) {
        const embed = new Discord.MessageEmbed()
        .setDescription(`🏓 퐁, 당신의 핑：**${Date.now() - message.createdTimestamp}**ms`)
        message.channel.send(embed)
    }
    // 해당 유저의 프로필을 보여줍니다
    if (message.content.startsWith(`${prefix}아바타`)) {
        const user = message.mentions.users.first() || message.author;
        const avatarEmbed = new Discord.MessageEmbed()
            .setDescription('`' + user.username + '`' + ' 님의 프로필')
            .setImage(user.displayAvatarURL());
        message.channel.send(avatarEmbed);
    }
		// 명령어 입력
    if(message.content == `${prefix}명령어`) {
        const embed = new Discord.MessageEmbed()
				.setColor('#FF0000')
        .setDescription('<:error:832821274719551529> `!도움말` 이라고 입력해주세요, 조사병단 봇을 활용하는 방법이 나와있습니다!')
        message.channel.send(embed)
        .then(message => {
            message.delete({ timeout: 5000 })
            console.log('[✅] 명령어 메시지 삭제를 성공하였습니다')
        })
    }
		//AOTTG 게임 다운로드
    if (message.content === `${prefix}다운로드`) {
        const embed = new Discord.MessageEmbed()
        .addFields(
            { name: 'RC MOD', value: '[다운로드](http://aotrc.weebly.com/)', inline: false },
            { name: 'RRC MOD', value: '[다운로드](http://asq.kr/wCTW34208gOa)', inline: false },
            { name: 'ANARCHY MOD', value: '[다운로드](https://url.kr/Ne7YZ5)', inline: false }
        )
        message.channel.send(embed)
    }
		//AOTTG 게임 다운로드
    if (message.content === `${prefix}다운`) {
        const embed = new Discord.MessageEmbed()
        .addFields(
            { name: 'RC MOD', value: '[다운로드](http://aotrc.weebly.com/)', inline: false },
            { name: 'RRC MOD', value: '[다운로드](http://asq.kr/wCTW34208gOa)', inline: false },
            { name: 'ANARCHY MOD', value: '[다운로드](https://url.kr/Ne7YZ5)', inline: false }
        )
        message.channel.send(embed)
    }
});

client.on('message', message => {
		// // 조사병단 봇 정보
		// if(message.content === `${prefix}정보`){
		// 	const embed = new Discord.MessageEmbed()
		// 	.setTitle('<:SurveyCorps:832772562123489280> 조사병단 v0.0.5')
		// 	.setDescription('[여기](https://discord.com/api/oauth2/authorize?client_id=815429073474945025&permissions=8&scope=bot)를 클릭하여 봇을 초대할 수 있습니다')
		// 	.addField('📢 패치노트', '- 벽외조사 공지 기능이 생겼습니다 분대 이모티콘을 클릭하면 수정해서 올라갑니다\n```!벽외조사 <#채널> <내용>```', false)
		// 	.setTimestamp()
		// message.channel.send(embed)
		// }
		if (message.content.startsWith(`${prefix}전송`)) {
			const user = message.mentions.users.first()
			const embed = new Discord.MessageEmbed()
			.setColor('#FF0000')
			.setDescription('<:error:832821274719551529> 당신은 이 명령어를 사용할 권한이 없습니다!')
			if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(embed);
			try{
				let content = message.content.slice(`${prefix}전송`	.length);
				const embed2 = new Discord.MessageEmbed()
				.setTitle("<:SurveyCorps:832772562123489280>｜조사병단")
				.setDescription(`**조사병단 공식 서버**에서 온 메시지입니다\n\n${content}`)
				.setFooter(`전송자｜${message.author.username}`)
				.setTimestamp()
				.setColor('RANDOM')
				user.send(embed2)
				const embed3 = new Discord.MessageEmbed()
				.setColor('#43b581')
				.setDescription('<:check:832821047215521802> 성공적으로 메시지가 전송되었습니다!')
				message.channel.send(embed3)
			}catch(err) {
				console.log(err)
				const embed4 = new Discord.MessageEmbed()
				.setColor('#FF0000')
				.setDescription('<:error:832821274719551529> 어딘가에서 오류가 발생하였습니다!')
				message.channel.send(embed4)
			}
		}
})

client.login(process.env.token);