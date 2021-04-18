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

  if(message.author.bot) return;
	if(message.channel.type === 'dm') return;

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
        let tips = ["조사병단에는 검찰청이 있습니다. 욕설, 비방, 벽외조사 유니폼 미착용, 보안유출 등 불법행위를 발견했을 시에는 <@688375427848470753>, <@703524055009198080> 검사에게 신고하시면 됩니다",
										"<#702873267345817600> 에서 현재 예정되어 있는 벽외조사를 확인하고 <#702873366373204019> 에서 신청하실 수 있습니다",
										"<@&746682677499002920>：27명 중 3명 생존이라는 극악의 난이도를 자랑했던 제 14회 벽외조사에 참여한 모든 병사들에게 수여되는 역할",
										"<@&751703838477516910>：제 14회 벽외조사에서 **갑옷거인, 짐승거인, 초대형거인** 을 토벌한 병사에게 수여되는 역할"]
        let rand = Math.floor(Math.random() * tips.length);
        const channel = client.channels.cache.find(channel => channel.id === '832482884127424543')
        
        const embed = new Discord.MessageEmbed()
        .setDescription(`${tips[rand]}`)
        channel.send(embed)
    }, 7200000); // 7200000

});

// 서버 입장 메시지
client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.id === '832482884127424543');
    if(!channel) return;
    const embed = new Discord.MessageEmbed()
      .setColor('#00FF00')
      .setDescription(`<:SurveyCorps:832772562123489280> ${member} 님께서 **\`조사병단\`** 서버에 들어오셨습니다`)
		const embed1 = new Discord.MessageEmbed()
			.setTitle('<:SurveyCorps:832772562123489280> 조사병단 디스코드에 오신 것을 환영합니다!')
			.setDescription('**You Have to check the English manual**\n\n질문사항이 있다면 단장의 개인 DM보단 디스코드 내의 질문채널을 이용해 주세요\n\n질문을 하시기 전에 <#713752285393453147> 채널에서 먼저 확인 후에 질문을 해주세요\n\n필독 규칙 읽어주신 후, [여기](https://docs.google.com/forms/d/e/1FAIpQLSft32i7tCfBMzzehQpvHjZ3fUFBrfsSEIAPdVrXRFtxjlkYdg/viewform)를 클릭하여 입단신청서를 작성해주세요\n\n입단신청서를 작성 완료한 후 <#767285361319346186> 채널에 들어가 아래 내용을 기재해주시면 심사 후에 입단 허가 해드립니다')
			.setImage('https://media.discordapp.net/attachments/832482884127424543/832932732442116096/unknown.png')
			.setFooter('입단신청서를 보낸 후 신청서 메시지를 제거하지 말아주세요')
      channel.send(embed)
			member.send(embed1)
    });

// 서버 퇴장 메시지
client.on('guildMemberRemove', member => {
    const channel = member.guild.channels.cache.find(ch => ch.id === '832482884127424543');
    if(!channel) return;
    const embed = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setDescription(`<:SurveyCorps:832772562123489280> ${member} 님께서 **\`조사병단\`** 서버를 떠나셨습니다`)
      channel.send(embed)
  });

//메시지 수정
client.on('messageUpdate', async(oldMessage, newMessage) => {
  if(oldMessage.content === newMessage.content) return // 임베드로 인한 수정같은 경우 
  const channel = client.channels.cache.find(channel => channel.id === '832482884127424543')
  const user = oldMessage.mentions.users.first() || oldMessage.author;
  const embed = new Discord.MessageEmbed()
  .setTitle('<:SurveyCorps:832772562123489280> 수정 로그')
  .setDescription(`<@!${oldMessage.author.id}> 님께서 메시지를 수정하셨습니다`)
  .addFields(
    { name: 'Before', value: `\`${oldMessage.content}\``, inline: true },
    { name: 'After', value: `\`${newMessage.content}\``, inline: true }
)
  .setTimestamp()
  .setFooter(user.username, user.displayAvatarURL())
  channel.send(embed)
})

//메시지 삭제
client.on('messageDelete', async message => {
    const user = message.mentions.users.first() || message.author;
    const channel = client.channels.cache.find(channel => channel.id === '832482884127424543')
    const embed = new Discord.MessageEmbed()
    .setTitle('<:error:832821274719551529> 삭제 로그')
		.setColor('#FF0000')
    .setDescription(`<@!${message.author.id}> 님이 \`${message.content}\` 을(를) 삭제하셨습니다`)
    .setTimestamp()
    .setFooter(user.username, user.displayAvatarURL())
    channel.send(embed)
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
        
    if (message.channel.type === 'dm') return;
        
    
    let foods = ["지크 척수액", "족발", "피자", "치킨", "진라면", "짜파게티", "파스타", "스테이크", "마라흑당치즈민트초코칩쿠키", "크레이프 케이크", "짜장면", "짬뽕", "허니버터흑당마라치즈불닭민트초코순대국밥", "마라허니민트초코칩쿠키", "된장국", "보리밥", "산낙지", "도토리묵", "쭈꾸미", "참깨빵 위에 순 쇠고기 패티 두장, 특별한 소스 양상추 치즈 피클 양파까지", "포카칩", "부대찌개", "해리포터젤리빈", "도토리", "떡볶이", "곤드레비빔밥", "초밥"]

    if (message.content === `${prefix}음식추천`) {
        let rand = Math.floor(Math.random() * foods.length);
        const embed = new Discord.MessageEmbed()
        .setDescription(`${foods[rand]} 먹고 진격거 게임해라!`)
        message.channel.send(embed)
    }
});

//오늘의 운세
client.on('message', message => {
        
    if (message.channel.type === 'dm') return;
        
    
    let luck = [
        "오늘은 스피드런 신기록을 찍을 것이다", "오늘은 데미지런 신기록을 찍을 것이다", "기행종이 많이 나타날 것이다", "펑크가 너를 기달리고 있다", "죽음이 따라오는 날", 
        "와이어가 잘 안 쏴지는 날", "와이어를 잘 발사하는 날", "거의 안 죽는 날", "게임이 많이 튕길 것이다", "어택님과 많이하게 될 것이다", "엄청 못해지는 날", "거인에게 자주 잡힌다", "거인에게 10번 몸이 찢겨 나갈 것이다",
        "나무에 많이 박을 것이다", "킬딸만 오지게 당할 것이다"
            ]

    if (message.content === `${prefix}오늘의운세`) {
        let rand = Math.floor(Math.random() * luck.length);
        const embed = new Discord.MessageEmbed()
        .setDescription(`**\`오늘의 운세\`**\n\n${luck[rand]}`)
        message.channel.send(embed)
    }
});

//게임추천
client.on('message', message => {
        
    if (message.channel.type === 'dm') return;
        
    
    let games = ["AoTTG", "롤", "마인크래프트", "레포데", "더 포레스트", "어몽어스", "OSU", "오버워치", "배그", "피파온라인", "카트라이더", "브롤스타즈", "서튼어택", "메이플스토리", "GTA5", "테일즈런너", "로블록스", "거지 키우기", "원신", "아원참이랑 놀아주기"]

    if (message.content === `${prefix}게임추천`) {
        let rand = Math.floor(Math.random() * games.length);
        const embed = new Discord.MessageEmbed()
        .setDescription(`${games[rand]} 딱 한판만 하고 진격거 게임해라!`)
        message.channel.send(embed)
    }
});

//태그 메시지
client.on('message', message => {
    let replaceStr = message.content.replace(/[^0-9]/g, "")
    if(replaceStr === client.user.id) {
		const embed = new Discord.MessageEmbed()
		.setDescription
        message.channel.send(embed)
    }
})

// 인물 정보
client.on('message', message => {
	if (message.content === `${prefix}인물정보 아원참`) { // 아원참
		const embed = new Discord.MessageEmbed()
		.setTitle('awoncham')
		.setURL('https://www.youtube.com/channel/UCDKwZRPOZ9YCnJDAO4GmPYA')
		.setColor('#FF6161')
		.setDescription('조사병단 봇을 만든 인물이며, 벽외조사에서도 뛰어난 활약을 하고 있다')
		.setThumbnail('https://media.discordapp.net/attachments/832482884127424543/832891814159450112/2.png?width=676&height=676')
		.addField('<:awoncham:832894731427643422> 나이', '15', true)
		.addField('<:awoncham:832894731427643422> 성별', '남자', true)
		.addField('<:awoncham:832894731427643422> 신체', '165 | 57 | A형', true)
		.addField('<:awoncham:832894731427643422> 출생', '820년대 7월 4일, 방벽 월 시나 지하도시', true)
		.addField('<:awoncham:832894731427643422> 직책', '조사병단 숙련병', true)
		.addField('<:awoncham:832894731427643422> 훈장', '총 1개 보유', true)
		.setImage('https://media.discordapp.net/attachments/832482884127424543/832893679756115978/5.png?width=1203&height=676')
		.setFooter('awoncham', 'https://media.discordapp.net/attachments/832482884127424543/832891814159450112/2.png?width=676&height=676')
		.setTimestamp()
		message.channel.send(embed)
	}
	if (message.content === `${prefix}인물정보 파라유저`) { // 파라유저
		const embed = new Discord.MessageEmbed()
		.setTitle('파라유저 (PharahUser)')
		.setURL('https://www.youtube.com/channel/UCXYg94ladrdBG4HfFdBKmgw')
		.setColor('#d2d23d')
		.setDescription('한때 오버워치를 즐겼던 흔한 즐겜러')
		.setThumbnail('https://media.discordapp.net/attachments/832482884127424543/832899833110593536/fa9a1388f39a6b33e90eae6a8f19d132.png')
		.addField('<:pharahuser:832900205837680640> 나이', '20', true)
		.addField('<:pharahuser:832900205837680640> 성별', '남자', true)
		.addField('<:pharahuser:832900205837680640> 신체', '186 | 82 | AB형', true)
		.addField('<:pharahuser:832900205837680640> 출생', '830년대 11월 30일, 월로제 크로르바 구', true)
		.addField('<:pharahuser:832900205837680640> 직책', '조사병단 분대장', true)
		.addField('<:pharahuser:832900205837680640> 훈장', '총 0개 보유', true)
		.setImage('https://media.discordapp.net/attachments/809302876445868072/832898106424426496/maxresdefault.png?width=926&height=521')
		.setFooter('PharahUser', 'https://media.discordapp.net/attachments/832482884127424543/832899833110593536/fa9a1388f39a6b33e90eae6a8f19d132.png')
		.setTimestamp()
		message.channel.send(embed)
	}
	if (message.content === `${prefix}인물정보 애플`) { // 애플
		const embed = new Discord.MessageEmbed()
		.setTitle('애플 (Red_Orange_Yellow_Green_Blue_Purple_Black_White_apple)')
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
	if (message.content === `${prefix}인물정보 나물`) { // 나물님
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
})

// 도움말
client.on('message', message => {
	// 기본 도움말
	if (message.content === `${prefix}도움말`) {
		const embed = new Discord.MessageEmbed()
		.setAuthor('조사병단 도움말', 'https://media.discordapp.net/attachments/832482884127424543/833185091613622302/7a1222a50c50bf3a14ec1c50721e74e5.png')
		.setThumbnail('https://media.discordapp.net/attachments/832482884127424543/833185091613622302/7a1222a50c50bf3a14ec1c50721e74e5.png')
		.addField('**조사병단**', '`!도움말 조사병단`', true)
		.addField('**명령어**', '`!도움말 명령어`', true)
		.addField('**놀이**', '`!도움말 놀이`', true)
		.addField('**관리**', '`!도움말 관리`', true)
		message.channel.send(embed)
	}
	// 명령어 도움말
	if (message.content === `${prefix}도움말 명령어`) {
		const embed = new Discord.MessageEmbed()
		.setTitle('명령어 플러그인')
		.addField('`!색깔`', '벽외조사 할 때에 사용해야 하는 닉네임 색깔코드', false)
		.addField('`!팀스피크`', '팀스피크 다운 혹은 사용 방법', false)
		message.channel.send(embed)
	}
	// 명령어 색깔
	if (message.content === `${prefix}색깔`) {
		const embed = new Discord.MessageEmbed()
		.setDescription('<@&701403514160545792>：조사병단 작전통제권 지휘자 **[3300FF]**\n<@&701403526433341531>：4 ~ 6명을 이끄는 분대 통솔자 **[FFFF33]**\n<@&701403575070490716>：3 ~ 4명을 이끄는 반 통솔자 **[FF0000]**\n<@&701403592195702814>：위에 있는 역할 외에 모든 병사들 **[FFFFFF]**')
		.setImage('https://media.discordapp.net/attachments/832482884127424543/833193545446719523/1.PNG')
		message.channel.send(embed)
	}
	// 명령어 팀스피크
	if (message.content === `${prefix}팀스피크`) {
		const embed = new Discord.MessageEmbed()
		.setDescription('[여기](https://www.teamspeak3.com/)를 클릭하여 다운로드 **(일반 병사들 제외)**\n\n**1.** 왼쪽 상단에 connections에서 serverlist를 클릭\n**2.** 서버 중 [NPIX] Public Teamspeak server를 찾아서 더블클릭\n**3.** 창을 close하면 서버에 들어와져 있는데 맨 밑에 Survey Corps를 더블클릭\n**4.** 다시 상단 위에 tools가 있는데 들어가서 capture에 들어가 push to talk를 설정')
		message.channel.send(embed)
	}
})

// 조사병단 관련 명령어
client.on('message', message => {
    
    if (message.channel.type === 'dm') return;
        
    // 연결한 정도를 알려줍니다
    if(message.content.startsWith(`${prefix}핑`)) {
        const embed = new Discord.MessageEmbed()
        .setDescription(`현재 너의 핑은 ${Date.now() - message.createdTimestamp} ms 다 `)
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
        .setDescription('`!도움말` 이라고 입력해주세요!')
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
		// 조사병단 봇 정보
		if(message.content === `${prefix}정보`){
			const embed = new Discord.MessageEmbed()
			.setTitle('<:SurveyCorps:832772562123489280> 조사병단 v0.0.2')
			.setDescription('[여기](https://discord.com/api/oauth2/authorize?client_id=815429073474945025&permissions=8&scope=bot)를 클릭하여 봇을 초대할 수 있습니다')
			.addField('추가된 명령어', '`청소`, `인물정보`, `도움말` 등', false)
			.setTimestamp()
		message.channel.send(embed)
		}
});

client.login("ODE1NDI5MDczNDc0OTQ1MDI1.YDsRgQ.8kL2d0sbjdxD5LFx-dHm5HRv3pc");