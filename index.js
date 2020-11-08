const Discord = require('discord.js');
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });

client.on('ready', function() {   

    console.log('심장을 바치는 것을 성공하였다');
    client.user.setActivity('심장을 바쳐라!')
    
    setInterval(() => {
        let tips = ["`현재 공개 가능한 정보` \n\n#대규모-벽외조사 공지에서 현재 예정돼 있는 벽외조살르 확인할 수 있으며 #벽외조사-신청에서 벽외조사를 신청할 수 있습니다",
                     "`현재 공개 가능한 정보` \n\n장거리 수색 진형을 도입한 이후로 생존율이 비약적으로 상승했습니다.", 
                     "`현재 공개 가능한 정보` \n\n인류는 세 겹의 벽으로 둘러싸 생활하고 있다 첫 번 바깥벽은 월 마리아 두 번째가 월 로제 그리고 중앙 벽이 월 시나다", 
                     "`현재 공개 가능한 정보` \n\n벽에 대해서 벽과 벽 사이 구역은 거의 같다 마리아와 로제 사이가 100km 로제와 시나 사이가 약 130km 시나에서 중앙까지가 약 250km이다",
                     "`현재 공개 가능한 정보` \n\n인류 활동 영역의 댉적인 규모 도식 이 도식은 인류에게 남은 영역의 넓이를 감각적으로 표시한 것이다 월 마리아 밖은 여전히 의문인 채로다",
                     "`현재 공개 가능한 정보` \n\n인류 활동 영역의 대략적인 규모 도식 인류 영역의 중심일수록 표고는 높다 인류 영역 내는 물과 광물자원과 천연가스 같은 자원이 풍부하다",
                     "`현재 공개 가능한 정보` \n\n입체기동 장치 훈련) 입체기동 장치 훈련은, 인간이란 2차원적인 움직임을 하는 생물을, 3차원으로 적응시키는 가혹한 것이다",
                     "`현재 공개 가능한 정보` \n\n입체기동 장치 훈련) 강건한 체력과 각력, 공간파악능력, 그리고 패닉에 빠지지 않기 위한 정신력이 필요하다",
                     "`현재 공개 가능한 정보` \n\n제 104기 훈련병단 성적 상위 10위 (10 등 크리스타 렌즈, 9등 사샤 브라우스, 8등 코니 스프링거, 7등 마르코 보트, 6등 쟝 키르슈타인",
                     "`현재 공개 가능한 정보` \n\n벽외조사에서 거인의 목을 한 번에 도려내지 못한다면 거인의 목은 다시 재생됩니다",
                     "`현재 공개 가능한 정보` \n\n제 104기 훈련병단 성적 상위 10명 (5등 에렌 예거, 4등 애니 레온하트, 3등 베르톨트 후버, 2등 라이너 브라운 1등, 미카사 아커만",
                     "`현재 공개 가능한 정보` \n\n벽상고정포) 대포는 입체기동 장비 등장 이전 대 거인 주력병기다 기동력 부족을 채우기 위해 고정포가 벽에 배치돼 방위용 개량을 했다",
                     "`현재 공개 가능한 정보` \n\n벽상고정포) 포도탄: 살상효과는 낮지만, 거인의 움직임이 정체하는 효과가 있다, 유탄: 위력은 높지만 명중 정밀도가 매우 낮아, 노려서 맞추는 것은 매우 곤란하다",
                     "`현재 공개 가능한 정보` \n\n초경질 스틸) 강인함과 부드러움을 함께 가진 소재이며 거인의 육질을 베어낼 수 있다 이것을 이용해 제조한 외날도신은 대 거인 병기로써 널리 알려졌다",
                     "`현재 공개 가능한 정보` \n\n초경질 스틸) 초경질 스틸 정련에는 공장도시에 있는 고로가 필요불가결하여 공장도시 이외에서는 제조할 수 없다",
                     "`현재 공개 가능한 정보` \n\n입체기동장치 정보) 입체 기동 본체 본체 부분에 철선을 수납 축이 둘 있어, 독립해서 회전",
                     "`현재 공개 가능한 정보` \n\n입체기동장치 정보 조작 장치) 조작 장치가 작용하는 부분은 블랙박스(기공과가 비밀리에 관리, 개량) 봄베 본체 가스는 봄베에 압축해 주입돼 있다",
                     "`현재 공개 가능한 정보` \n\n입체기동장치 정보 팬 부분) 가스는 팬에 직접 뿜어서 회전 가스의 압력을 조정해서 조작",
                     "`현재 공개 가능한 정보` \n\n거인의 체격 차 도식",
                     "`현재 공개 가능한 정보` \n\n현재의 조사병단) 조사병단이란, 벽 밖의 탐색활동이 주된 목적이지만, 월 마리아 함락 이전과 이후는 활동내용이 다르다",
                     "`현재 공개 가능한 정보` \n\n현재의 조사병단) 함락 이후의 활동은 올 월 마리아 탈환작전 두 번째를 위해 병참 거점을 만들어, 대부대가 이동할 길을 작성하는 것이다",
                     "`현재 공개 가능한 정보` \n\n효모) 월 시나 안에서만 생산되는 특수한 효모 효모를 키워 잎이나 밀, 대두 등이 든 창고나 텐트에 두는 걸로 부패가 매우 느려지는 것을 알았다",
                     "`현재 공개 가능한 정보` \n\n효모를 넣는 저장 플랜트를 각지에 전개하는 걸로 월 마리아ㅏ 탈환을 위한 보금물자를 비축하는 것이 지금까지 인류 쪽의 전략이었다",
                     "`현재 공개 가능한 정보` \n\n입체기동 장치의 체중이동 장비) 입체기동을 가능하게 하려면 전신을 감은 고정벨트를 이용한 까다로운 체중 이동 기술이 필요하게 된다",
                     "`현재 공개 가능한 정보` \n\n입체기동 장치의 체중이동 장비) 입체적으로 고속 기동이 목적인 장비는 철저히 경량화의 한계를 다했다",
                     "`현재 공개 가능한 정보` \n\n입체기동 장치의 체중이동 장비) 양 허리 한쪽에 모든 체중을 걸게 된다 허공을 춤추는 듯한 기동이라도, 전신의 근육을 혹사하는 걸로 이루어진다",
                     "`현재 공개 가능한 정보` \n\n입체기동 장치의 훈련) 그걸 위해 교관이 구명줄을 고의로 잘라, 그 대응을 보는 훈련을 한다 안전한 훈련이라고 하기 어렵지만, 훈련 중에 죽을 사람이 거인과 싸우는 건 어찌 됐든 불가능하다",
                     "`현재 공개 가능한 정보` \n\n거인과 싸움의 역사) 확인할 수 있는 가장 옛 기록에는 107년 전 거인이 출현했다고 한다 대부분 인류는 거인에게 잡아먹혔다",
                     "`현재 공개 가능한 정보` \n\n거인과 싸움의 역사) 인류는 대포로 거인에게 대항하려 했지만, 경이적인 생명력을 가진 거인 앞에 어떻게 할 방도가 없었다",
                     "`현재 공개 가능한 정보` \n\n특별 군사회의) 병사, 군속을 재판하기 위한 형사재판 판사, 검찰, 변호인, 모두 군속이 맡는다",
                     "`현재 공개 가능한 정보` \n\n특별 군사회의) 통상 군법회의보다 정치색이 짙고, 결정권은 세 병단의 톱 다리스 작클레 총통이 맡는다",
                     "`현재 공개 가능한 정보` \n\n월교) 벽 안 지역에서 포교활동 하는 종교 조직 벽을 신으로 숭상하고 비록 방어를 위해서라도 벽에 손대는 것을 일절 인정하지 않는다",
                     "`현재 공개 가능한 정보` \n\n월교) 월 마리아 함락 이후 급속히 신자 수를 늘리고 있고 또한 그 발언력도 커졌다",
                     "`현재 공개 가능한 정보` \n\n병단 선택) 3년의 조련 과정을 끝낸 병사가 헌병단, 주둔병단, 조사병단, 어느 병과를 선탁하는 의식",
                     "`현재 공개 가능한 정보` \n\n병단 선택) 하지만 헌병단에 입단할 수 있는 것은 성적 상위 10명뿐이며, 실질적으로는 주둔병단인지 조사병단인지 두 선택이며, 많은 사람이 주둔병단을 선택하게 된다",
                     "`현재 공개 가능한 정보` \n\n장거리 탐색 진형) 조사병단 단장 앨빈 스미스가 고안한 이론이며 이 진형을 조직해서 벽 밖에서 생존율이 비약적으로 향상했다",
                     "`현재 공개 가능한 정보` \n\n장거리 탐색 진형) 간단히 말하면, 인력 레이더다 진형 중앙에 위치한 앨빈이 빨리 거인 발견을 아는 것으로 조우 전에 진영 진로 변경이 가능하게 됬다",
                     "`현재 공개 가능한 정보` \n\n거대수의 숲) 벽 안, 벽 밖에 흩어져 있는 거목군 어떤 지구를 경계로 국지적으로 자생해, 나무 높이는 80m가 넘는다",
                     "`현재 공개 가능한 정보` \n\n거대수의 숲) 월 마리아 붕괴 전은, 관광지로 했었지만, 현재 조사병단에게는 벽 밖 원정에서 거인의 위협에서 몸을 지키는 중요한 거점이 됐다",
                     "`현재 공개 가능한 정보` \n\n신호탄) 화약의 힘으로 신호탄을 사출할 수 있는 소형 권총 신호탄이 들어있는 작은 관을 한발씩 교환해서 사용한다",
                     "`현재 공개 가능한 정보` \n\n신호탄) 전달 내용에 따라, 쏘는 연막의 색이 바뀐다 빨강: 거인 발견, 초록: 진형의 진로 결정, 검정: 기행종 발견 등",
                     "`현재 공개 가능한 정보` \n\n대 특정 목표 구속병기) 특정 거인을 구속하는 것을 목적으로 해, 새로이 개발한 조사병단의 병기",
                     "`현재 공개 가능한 정보` \n\n대 특정 목표 구속병기) 적재한 통 안에는 일곱 자루 철관이 깔려, 그 관에는 화살촉을 양 끝에 단 와이어가 나선 모양으로 들어있다",
                     "`현재 공개 가능한 정보` \n\n양식은 로리콘이다",
                     "`현재 공개 가능한 정보` \n\n리하이는 잘생겼다",
                     "`현재 공개 가능한 정보` \n\n단장님의 전직은 모델이였다",
                     "`현재 공개 가능한 정보` \n\n어택님은 리하이의 따까리다",
                     "`현재 공개 가능한 정보` \n\nQ 와 E는 와이어이다",
                     "`현재 공개 가능한 정보` \n\n와이어를 박은 뒤 부스트를 사용하면 속도를 더 빠르게 할 수 있다",
                     "`현재 공개 가능한 정보` \n\n리하이는 잘생겼다",
                     "`현재 공개 가능한 정보` \n\n<#702873267345817600> 에서 현재 예정되어 있는 벽외조사를 확인하고 <#702873366373204019> 에서 신청할 수 있다",
                     "`현재 공개 가능한 정보` \n\n조사병단에는 검찰청이 있습니다. 욕설, 비방, 유니폼 불착용 등 불법행위를 목격하시면 신고하세요"
                    ]
        let rand = Math.floor(Math.random() * tips.length);
        const channel = client.channels.cache.find(channel => channel.id === '742051945472065546')
        
        const embed = new Discord.MessageEmbed()
        .setDescription(`${tips[rand]}`)
        .setColor('RANDOM')
        channel.send(embed);
    }, 7200000);

});

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.id === '702744515802300466');
    if(!channel) return;
    const embed = new Discord.MessageEmbed()
      .setColor('#00FF00')
      .setDescription(`${member} 조사병단에 입단한 것을 환영한다, 벽외조사에서 살고 싶으면 <#701406223999959062>을 확인해라!`)
      .setImage('https://i.pinimg.com/originals/d1/72/3d/d1723dc033cfece00342e567d15b7c30.gif')
      .setTimestamp()
      channel.send(embed)
    });

client.on('guildMemberRemove', member => {
    const channel = member.guild.channels.cache.find(ch => ch.id === '702744515802300466');
    if(!channel) return;
    const embed = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setDescription(`${member} 님이 거인에 의해 쫒겨났습니다`)
      .setImage('https://cdn.discordapp.com/attachments/758884038962053133/774449593134874664/tenor_3.gif')
      .setTimestamp()
      channel.send(embed)
  });

//메시지 삭제
client.on('messageDelete', async message => {
    const user = message.author.id
    const channel = client.channels.cache.find(channel => channel.name === '로그')
    const embed = new Discord.MessageEmbed()
    .setTitle('❌ 삭제 로그')
    .setColor('#FF0000')
    .setDescription(`<@!${user}> 님이 \`${message.content}\` 을(를) 삭제하셨습니다`)
    .setTimestamp()
    channel.send(embed)
});

//금지어
client.on('message', async message => {

    let blacklisted = ["씨발", "시발", "ㅅㅂ", "ㅄ", "병신", "븅신", "지랄", "죠랄", "존나", "ㅈㄴ", "자지", "보지", "섹스", "sex", "Sex", "TLQKF", "tlqkf",
                       "개새끼", "^^ㅣ발", "좆", "ㅈ밥", "알씨", "ARCE", "알1씨"]

    let foundInText = false;
    for (var i in blacklisted) { 
      if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true
    }

    if (foundInText) {
        const user = message.author.id;
        const embed = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setDescription(`잠깐, <@${user}> 지금 너는 금지어에 포함되어 있는 단어를 말했다!`);
        message.channel.send(embed)
}
}
);

//음식추천
client.on('message', message => {
    
    let foods = ["지크 척수액", "족발", "피자", "치킨", "진라면", "짜파게티", "파스타", "스테이크", "마라흑당치즈민트초코칩쿠키", "크레이프 케이크", "짜장면", "짬뽕", "허니버터흑당마라치즈불닭민트초코순대국밥", "마라허니민트초코칩쿠키", "된장국", "보리밥", "산낙지", "도토리묵", "쭈꾸미", "참깨빵 위에 순 쇠고기 패티 두장, 특별한 소스 양상추 치즈 피클 양파까지", "포카칩", "부대찌개", "해리포터젤리빈", "도토리", "떡볶이", "곤드레비빔밥", "초밥"]

    if (message.content === `샤디스 음식추천`) {
        let rand = Math.floor(Math.random() * foods.length);
        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription(`${foods[rand]} 먹고 진격거 게임해라!`)
        message.channel.send(embed)
    }
});

//오늘의 운세
client.on('message', message => {
    
    let luck = [
        "리하이보다 기록이 안 나올 것이다","오늘은 스피드런 신기록을 찍을 것이다", "오늘은 데미지런 신기록을 찍을 것이다", "기행종이 많이 나타날 것이다", "펑크가 너를 기달리고 있다", "죽음이 따라오는 날", 
        "와이어가 잘 안 쏴지는 날", "와이어를 잘 발사하는 날", "거의 안 죽는 날", "게임이 많이 튕길 것이다", "어택님과 많이하게 될 것이다", "엄청 못해지는 날"
            ]

    if (message.content === `샤디스 오늘의 운세`) {
        let rand = Math.floor(Math.random() * luck.length);
        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription(`**\`오늘의 운세\`**\n\n${luck[rand]}`)
        message.channel.send(embed)
    }
});

//게임추천
client.on('message', message => {
    
    let games = ["AoTTG", "롤", "마인크래프트", "레포데", "더 포레스트", "어몽어스", "OSU", "오버워치", "배그", "피파온라인", "카트라이더", "브롤스타즈", "서튼어택", "메이플스토리", "GTA5", "테일즈런너", "로블록스", "거지 키우기", "리하이랑 놀아주기"]

    if (message.content === `샤디스 게임추천`) {
        let rand = Math.floor(Math.random() * games.length);
        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription(`${games[rand]} 딱 한판만 하고 진격거 게임해라!`)
        message.channel.send(embed)
    }
});

// 샤디스 대화 명령어
client.on('message', message => {
    let chats = ["어디서 반말인것이냐", "왜 불렀나!", "선은 넘지 말자!"]
    if (message.content === `샤디스`) {
        let rand = Math.floor(Math.random() * chats.length);
        message.channel.send(`${chats[rand]}`)
    }
    let chats1 = ["너랑 지금 대화 중인거 안 보이냐?!", "훈련병들을 위해 훈련 준비를 하고 있다", "훈련병들 훈련시키는거 안보이나"]
    if (message.content === `샤디스 뭐해`) {
        let rand1 = Math.floor(Math.random() * chats1.length);
        message.channel.send(`${chats1[rand1]}`)
    }
    let chats2 = ["지금 뭐라고 했나", "그만해라", "시끄럽다!"]
    if (message.content === `샤디스 죽어`) {
        let rand2 = Math.floor(Math.random() * chats2.length);
        message.channel.send(`${chats2[rand2]}`)
    }
    let chats3 = ["ㅈ..지금 뭐라고 했나..!", "멈머라고?!", "..."]
    if (message.content === `샤디스 대머리`) {
        let rand3 = Math.floor(Math.random() * chats3.length);
        message.channel.send(`${chats3[rand3]}`)
    }
    let chats4 = ["ㅇ?", "운동장에서 10바퀴 실시!!", "..."]
    if (message.content === `샤디스 민머리`) {
        let rand4 = Math.floor(Math.random() * chats4.length);
        message.channel.send(`${chats4[rand4]}`)
    }
    let chats5 = ["ㅈ..지금 뭐라고 했나..!", "멈머라고?!", "죽어라!"]
    if (message.content === `샤디스 빡빡이`) {
        let rand5 = Math.floor(Math.random() * chats5.length);
        message.channel.send(`${chats5[rand5]}`)
    }
    let chats6 = ["어디서 반말이냐!", "인사를 제대로 하는 날이 오지 않구나", "다시 한번 말해보거라"]
    if (message.content === `샤디스 안녕`) {
        let rand6 = Math.floor(Math.random() * chats6.length);
        message.channel.send(`${chats6[rand6]}`)
    }
    let chats7 = ["너가 제대로 인사하는 날도 오는구나..", "무슨 일인가?", "그래"]
    if (message.content === `샤디스 안녕하세요`) {
        let rand7 = Math.floor(Math.random() * chats7.length);
        message.channel.send(`${chats7[rand7]}`)
    }
    if (message.content === '샤디스 도와줘') {
        const embed = new Discord.MessageEmbed()
        .setDescription('`샤디스 도움말` 이라고 검색해라!')
        message.channel.send(embed)
    }
    let chats8 = ["지금 뭐라고 했나", "너처럼 나한테 말하는 사람은 처음이다..", "어디서 반말인가!"]
    if (message.content === `샤디스 ㅎㅇ`) {
        let rand8 = Math.floor(Math.random() * chats8.length);
        message.channel.send(`${chats8[rand8]}`)
    }
    let chats9 = ["지금 뭐라고 했나", "너처럼 나한테 말하는 사람은 처음이다..", "어디서 반말인가!"]
    if (message.content === `샤디스 하이`) {
        let rand9 = Math.floor(Math.random() * chats9.length);
        message.channel.send(`${chats9[rand9]}`)
    }
})

//샤디스 태그 메시지
client.on('message', message => {
    let replaceStr = message.content.replace(/[^0-9]/g, "")
    if(replaceStr === client.user.id) {
    let chats10 = ["왜 불렀나", "누구 마음대로 태그하래!!", "그래"]
        let rand10 = Math.floor(Math.random() * chats10.length);
        message.channel.send(`${chats10[rand10]}`)
    }
})

// 조사병단 관련 명령어
client.on('message', message => {
    // 연결한 정도를 알려줍니다
    if(message.content.startsWith('샤디스 핑')) {
        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription(`현재 너의 핑은 ${Date.now() - message.createdTimestamp} ms 다 `)
        message.channel.send(embed)
    }
    // 해당 유저의 프로필을 보여줍니다
    if (message.content.startsWith('샤디스 아바타')) {
        const user = message.mentions.users.first() || message.author;
        const avatarEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription(user.username + '님의 프로필입니다')
            .setImage(user.displayAvatarURL());
        message.channel.send(avatarEmbed);
    }
    if(message.content == '샤디스 명령어') {
        const embed = new Discord.MessageEmbed()
        .setDescription('`샤디스 도움말` 이라고 입력해주세요!')
        message.channel.send(embed)
        .then(message => {
            message.delete({ timeout: 5000 })
            console.log('명령어 메시지 삭제에 성공하였다!')
        })
    }
    if (message.content === '샤디스 색상') { //인게임 닉네임 색상 코드
        const embed = new Discord.MessageEmbed()
        .setDescription('**`인게임 닉네임 색상 코드`**\n\n벽외조사 할때 자신의 소속에 맞게 색상 코드를 적용해주세요')
        .addFields(
            { name: '**• 단장 (Commander)**', value: '`[3300FF]`', inline: false },
            { name: '**• 분대장 (SquadLeader)**', value: '`[FFFF33]`', inline: false },
            { name: '**• 반장 (TeamLeader)**', value: '`[FF0000]`', inline: false },
            { name: '**• 병사 (Soldier)**', value: '`[FFFFFF]`', inline: false }
        )
        message.channel.send(embed)
    }
    if (message.content === '샤디스 초대코드') { //서버 초대 링크
        const embed = new Discord.MessageEmbed()
        .setDescription('**https://discord.gg/SZeXuZ5**')
        message.channel.send(embed)
    }
    if (message.content === '샤디스 심장을 바쳐라') { // 심장을 바쳐라
        const embed = new Discord.MessageEmbed()
        .setImage('https://i.pinimg.com/originals/d1/72/3d/d1723dc033cfece00342e567d15b7c30.gif')
        message.channel.send(embed)
    }
    if (message.content === '샤디스 조사병단 유니폼') { // 조사병단 유니폼
        const embed = new Discord.MessageEmbed()
        .setDescription('**`조사병단 공식 유니폼`** \n\n벽외조사 때에 착용을 안하면 처벌이 있습니다')
        .addFields(
            { name: '• 망토', value: 'https://i.imgur.com/HQjo5mK.png', inline: false },
            { name: '• 가스', value: 'https://i.imgur.com/luEXJBS.png', inline: false },
            { name: '• 남성 제복', value: 'https://i.imgur.com/555gO79.png', inline: false },
            { name: '• 여성 제복', value: 'https://i.imgur.com/SIEizIT.png', inline: false }
        )
        .setImage('https://cdn.discordapp.com/attachments/758884038962053133/772984418020098088/unknown.png')
        message.channel.send(embed)
    }
    if (message.content === '샤디스 다운로드') { //AOTTG 게임 다운로드
        const embed = new Discord.MessageEmbed()
        .addFields(
            { name: '• EM 모드', value: '**https://discord.gg/SZeXuZ5**', inline: false },
            { name: '• RC 모드', value: '**https://tinyurl.com/yax2omx6**', inline: false },
            { name: '• RRC 모드', value: '**http://asq.kr/wCTW34208gOa**', inline: false },
            { name: '• ANARCHY 모드', value: '**https://url.kr/Ne7YZ5**', inline: false },
            { name: '• RC83 모드', value: '**https://rc83.rocks/**', inline: false },
        )
        message.channel.send(embed)
    }
    if (message.content === '샤디스 다운') { //AOTTG 게임 다운로드
        const embed = new Discord.MessageEmbed()
        .addFields(
            { name: '• EM 모드', value: '**https://discord.gg/SZeXuZ5**', inline: false },
            { name: '• RC 모드', value: '**https://tinyurl.com/yax2omx6**', inline: false },
            { name: '• RRC 모드', value: '**http://asq.kr/wCTW34208gOa**', inline: false },
            { name: '• ANARCHY 모드', value: '**https://url.kr/Ne7YZ5**', inline: false },
            { name: '• RC83 모드', value: '**https://rc83.rocks/**', inline: false },
        )
        message.channel.send(embed)
    }
    if (message.content === '샤디스 맵') { //맵 파일 다운로드
        const embed = new Discord.MessageEmbed()
        .addField('• 카라네스', '다운로드 : **https://discord.gg/SZeXuZ5**', false)
        .setImage('https://cdn.discordapp.com/attachments/760381117634314280/765823400551645214/-1.png')
        message.channel.send(embed)
    }
    if (message.content === '샤디스 맵 다운로드') { //맵 파일 다운로드
        const embed = new Discord.MessageEmbed()
        .addField('• 카라네스', '다운로드 : **https://discord.gg/SZeXuZ5**', false)
        .setImage('https://cdn.discordapp.com/attachments/760381117634314280/765823400551645214/-1.png')
        message.channel.send(embed)
    }
    if (message.content === '샤디스 맵 다운') { //맵 파일 다운로드
        const embed = new Discord.MessageEmbed()
        .addField('• 카라네스', '다운로드 : **https://discord.gg/SZeXuZ5**', false)
        .setImage('https://cdn.discordapp.com/attachments/760381117634314280/765823400551645214/-1.png')
        message.channel.send(embed)
    }
    if (message.content === '샤디스 계급') { //조사병단 기본적인 계급
        const embed = new Discord.MessageEmbed()
        .setDescription('**`조사병단 계급 배치도`**\n\n조사병단의 계급 시스템이다')
        .addFields(
            { name: '• 단장', value: '조사병단의 총괄 책임자 및 최고 지휘관이다. 장거리 수색 진형 전체를 컨트롤하며 작전 목표 수행을 위한 모든 책임을 진다. 2~40명 또는 합동 조사에서는 6~70명까지 통솔해야 하는 만큼 뛰어난 통솔력을 가지고 전반적인 벽외조사의 이해도를 가지고 있어야 한다.', inline: false },
            { name: '• 분대장', value: '벽외조사 섹션 책임자 및 지휘권 2인자이다. 단장의 부재시 진형의 지휘권을 이어받는다. 반장이 한 반만을 통제할 수 있다면 분대장은 반장들을 통제하고 좌익이나 우익등 전체를 컨트롤한다. ', inline: false },
            { name: '• 병사장', value: '단장 따가리다', inline: false },
            { name: '• 반장', value: '각 반을 책임지는 반장이다. 각 조사마다 한 반에는 3~6명정도의 병사들로 구성돼 출전하며, 반들은 장거리 수색진형에서 살을 이룬다. 장교급의 직책인 만큼 뛰어난 리더십과 통솔력을 가지며 반을 통솔하는 능력과 책임감을 가져야한다.', inline: false },
            { name: '• 엘리트', value: '벽외조사에서 뛰어난 활약을 하는 병사들에게 수여되는 계급이다. 벽외조사의 높은 참여율과 뛰어난 실력을 필요로 한다.', inline: false },
            { name: '• 베테랑', value: '벽외조사에서 뛰어난 활약을 하는 병사들에게 수여되는 계급이다. 벽외조사의 높은 참여율과 뛰어난 실력을 필요로 한다. ', inline: false },
            { name: '• 숙련병', value: '어느정도 벽외조사에서 살아남았으며 벽외조사에 익숙해져서  올바른 장거리 수색진형을 구현할 수 있는 계급이다. 평균정도의 전투력을 가지고 있으며 각 벽외조사마다 작전의 이해도와 거인과의 전투에서 숙달돼있다. 대부분의 병사들은 이 직책까지 쉽게 올라올 수 있다.', inline: false },
            { name: '• 신병', value: '첫 벽외조사에서 살아온 병사 및 입단한지 얼마 안 된 신병이다. 조사병단에 입단한지 오랜 시간이 흐르지 못했거나 거인을 구축하기 위한 실력 베이스가 부족할 경우 이 계급에서 오랫동안 머무르는 상황이 발생할 수도 있다. 이 경우에는 실력을 갈고 닦아 숙련병으로 진급해야 한다.', inline: false },
            { name: '• 훈련병', value: '벽외조사에 참가하기 위해 훈련중인 병사들이다. 조사병단에 입단했으나 아직 벽외조사에 참가하지 못한 병사들로 구성돼 있다. 이들은 벽외조사에 참가하여 더 높은 계급으로 승진할 수 있다.', inline: false }
        )
        message.channel.send(embed)
    }
    if (message.content === '샤디스 조사병단') { //조사병단 반장님들 태그
        const embed = new Discord.MessageEmbed()
        .setDescription('**`조사병단 반장 모음`**')
        .setImage('https://i.makeagif.com/media/2-10-2014/IvFxLe.gif')
        .addFields(
            { name: '• 지휘 분대', value: '<@!271100288704839681>', inline: true },
            { name: '• 1반', value: '<@!263511886258110466>', inline: true },
            { name: '• 특별작전반', value: '<@!740778845480681544>', inline: true },
            { name: '• 3반', value: '<@!566852436275232768>', inline: true },
            { name: '• 4반', value: '<@!300210057621143562>', inline: true },
            { name: '• 5반', value: '<@!703524055009198080>', inline: true },
            { name: '• 6반', value: '<@!505697524913274900>', inline: true },
            { name: '• 7반', value: '<@!376197734576816130>', inline: true }
        )
        message.channel.send(embed)
    }
    if (message.content === '샤디스 분단') { //분대 및 반 설명
        const embed = new Discord.MessageEmbed()
        .setDescription('**`분대 및 반 설명`**')
        .setImage('https://cdn.discordapp.com/attachments/707566851034447934/711886956732088340/192fb97c7572e0e8949ad52c10a02cb9.png')
        .addFields(
            { name: '• 지휘분대 (HeadQuater Control Squad)', value: '작전지휘관인 단장이 중앙에서 진형 전체를 통제하는 퍼스트 컨트롤 팀이다. 중앙에서 1,2열 반들을 지원하며 특수작전들을 수행한다. 단장이 신속하고 적합한 통제를 할 수 있도록 진형의 위치파악 서포팅이나 작전 조언을 하는 등 전투보다는 지략을 우선으로 내세우는 팀이다. 진형의 2열에 있기 때문에 전방에서 전투를 종종 해야해서 적절한 전투능력도 필요하며 뛰어난 위치파악능력, 자료해석능력, 상황판단능력을 요구한다.', inline: false },
            { name: '• 탐색반 (Scout Team)', value: '진형의 최전방에서 거인과 가장 먼저 조우하여 전투를 하는 수색반이다. 거인과 조우시 거인이 오는 방향으로 신호탄을 발사하여 다른 반들에게 먼저 알리는 역할도 수행한다. 최전방에서 전투를 해야하는 만큼 뛰어난 전투능력과 입체기동실력을 요구한다. 그만큼 생존률은 가장 낮은 팀이기에 자신있는 전투실력을 가지고 있을 때만 지원하는 것을 추천한다.', inline: false },
            { name: '• 전달반 (Transmission Team)', value: '진형의 2열에서 탐색반이 발견한 거인의 신호탄을 중앙과 반대편으로 전달하는 역할을 한다. 중앙과 최전방 사이에서 유동성있게 움직이는 기동팀이자, 탐색반이 고전하고 있을 시 지원을 맡아야하는 지원팀이다. 탐색반이 궤멸하면 2열이 1열로 변경되므로 어느정도 전투능력을 요구한다. ', inline: false },
            { name: '• 중앙 대기반 (Center Back Team)', value: '진형의 중앙 후방에서 후열 또는 전달의 서포팅을 맡는 팀이다. 장거리 수색진형에서 가장 안전한 위치에 있기에 거인과 조우하는 일은 가장 적다. 전투에 자신이 없거나 벽외조사에 처음 참가하는 훈련병들은 이 반으로 참가하는 것을 추천한다. ', inline: false },
            { name: '• 후열반 (The Back Defense Team) ', value: '진형의 가장 후방에서 뒤를 맡는 팀이다. 진형의 뒤에 위치하는 만큼 먼저 거인과 조우하는 일은 적지만, 다른 반들이 놓치거나 뒤에서 추격하는 거인들과 전투를 해야하는 역할을 맡고있다.', inline: false }
        )
        message.channel.send(embed)
    }
    if (message.content === '샤디스 진형') { //분대 및 반 설명
        const embed = new Discord.MessageEmbed()
        .setDescription('**`분대 및 반 설명`**')
        .setImage('https://cdn.discordapp.com/attachments/707566851034447934/711886956732088340/192fb97c7572e0e8949ad52c10a02cb9.png')
        .addFields(
            { name: '• 지휘분대 (HeadQuater Control Squad)', value: '작전지휘관인 단장이 중앙에서 진형 전체를 통제하는 퍼스트 컨트롤 팀이다. 중앙에서 1,2열 반들을 지원하며 특수작전들을 수행한다. 단장이 신속하고 적합한 통제를 할 수 있도록 진형의 위치파악 서포팅이나 작전 조언을 하는 등 전투보다는 지략을 우선으로 내세우는 팀이다. 진형의 2열에 있기 때문에 전방에서 전투를 종종 해야해서 적절한 전투능력도 필요하며 뛰어난 위치파악능력, 자료해석능력, 상황판단능력을 요구한다.', inline: false },
            { name: '• 탐색반 (Scout Team)', value: '진형의 최전방에서 거인과 가장 먼저 조우하여 전투를 하는 수색반이다. 거인과 조우시 거인이 오는 방향으로 신호탄을 발사하여 다른 반들에게 먼저 알리는 역할도 수행한다. 최전방에서 전투를 해야하는 만큼 뛰어난 전투능력과 입체기동실력을 요구한다. 그만큼 생존률은 가장 낮은 팀이기에 자신있는 전투실력을 가지고 있을 때만 지원하는 것을 추천한다.', inline: false },
            { name: '• 전달반 (Transmission Team)', value: '진형의 2열에서 탐색반이 발견한 거인의 신호탄을 중앙과 반대편으로 전달하는 역할을 한다. 중앙과 최전방 사이에서 유동성있게 움직이는 기동팀이자, 탐색반이 고전하고 있을 시 지원을 맡아야하는 지원팀이다. 탐색반이 궤멸하면 2열이 1열로 변경되므로 어느정도 전투능력을 요구한다. ', inline: false },
            { name: '• 중앙 대기반 (Center Back Team)', value: '진형의 중앙 후방에서 후열 또는 전달의 서포팅을 맡는 팀이다. 장거리 수색진형에서 가장 안전한 위치에 있기에 거인과 조우하는 일은 가장 적다. 전투에 자신이 없거나 벽외조사에 처음 참가하는 훈련병들은 이 반으로 참가하는 것을 추천한다. ', inline: false },
            { name: '• 후열반 (The Back Defense Team) ', value: '진형의 가장 후방에서 뒤를 맡는 팀이다. 진형의 뒤에 위치하는 만큼 먼저 거인과 조우하는 일은 적지만, 다른 반들이 놓치거나 뒤에서 추격하는 거인들과 전투를 해야하는 역할을 맡고있다.', inline: false }
        )
        message.channel.send(embed)
    }
    if (message.content === '샤디스 연막탄') { //연막탄 설명
        const embed = new Discord.MessageEmbed()
        .setDescription('**`연막탄 가이드`**\n\n상황에 따라 연막탄을 어쩔 때 사용해야 하는지 자세히 나옵니다')
        .setImage('https://64.media.tumblr.com/332f73e473e6b60b377937f68e117b87/tumblr_oqmcwoxf4U1tzew82o1_500.gif')
        .addFields(
            { name: '• 초록색 🟢', value: '진형의 방향을 결정하는 연막탄이며, 단장이 발사한 방향대로 각 반장들은 전부 발사한다. ', inline: false },
            { name: '• 적색 🔴', value: '거인이 접근할 시 오는 방향으로 발사해야할 연막탄이다. 거인을 단순히 발견했을 때는 지나치고 거인이 진형으로 접근중일때만 발사하여 지휘분대에 알린다.', inline: false },
            { name: '• 흑색 ⚫', value: '기행종을 발견할 시 발사해야할 연막탄이다. 적색과 달리 발견하자마자 발사해야하며, 크롤러나 특이행동을 보이는 거인일때 발사하여 알린다.', inline: false },
            { name: '• 보라색 🟣', value: '진형이 어느정도 흐트려졌을 때 단장이 진형을 다시 맞추기 위해서 발사하는 연막탄. 이 연막탄이 발사된다면 전부 보라색 연막탄의 위치를 확인하고 각자의 포메이션 위치로 이동해야 한다. 교전 중이거나 먼저 앞에 있더라도 즉시 진형으로 복귀', inline: false },
            { name: '• 노란색 🟡', value: '거인과 교전할 수 없거나 굉장히 어려운 상황에 봉착했을 때 발사하는 연막탄. 노란 연막탄을 확인한다면 인근분대가 지원해줄 것이다.', inline: false },
        )
        message.channel.send(embed)
    }
    if (message.content === '샤디스 리바이') { // 리바이 아커만 설명
        const embed = new Discord.MessageEmbed()
        .setTitle('리바이 아커만')
        .setURL('https://namu.wiki/w/%EB%A6%AC%EB%B0%94%EC%9D%B4(%EC%A7%84%EA%B2%A9%EC%9D%98%20%EA%B1%B0%EC%9D%B8)')
        .setThumbnail('https://lh3.googleusercontent.com/EijOaLeJS_g_uixx8oU_mBtvNlEklrteinrWeaU6jnkttj4dOEyjhJlH2RA6C3ou7W23M09X-rkKcNZGxkJVAw=s640-c')
        .setImage('https://thumbs.gfycat.com/ElasticEmptyDairycow-size_restricted.gif')
        .setDescription('リヴァイ • アッカーマン / Levi Ackerman \n 조사병단의 병사장이며 인류 최강의 병사이다')
        .addFields(
            { name: '• 나이', value: '`30 대 중후반 (854년)`', inline: true },
            { name: '• 출생', value: '`820년대 12월 25일, 파라디 왕국 월 시나 지하도시`', inline: true },
            { name: '• 신장', value: '`160cm (850년)`', inline: true },
            { name: '• 체중', value: '`65kg (850년)`', inline: true },
            { name: '• 소속 직책', value: '`파라디 섬 조사병단 간부`', inline: true },
            { name: '• 가치관', value: '`현실주의`', inline: true },
            { name: '• 거주지', value: '`파라디 섬 월 로제 트로스트 구`', inline: true },
            { name: '• 가족', value: '`아버지: 지하도시 매음굴 손님 어머니: 쿠셸 아커만 삼촌: 케니 아커만 친척: 미카사 아커만의 부모, 미카사 아커만`', inline: true },
            { name: '• 新 리바이반', value: '`에렌 예거, 아르민 알레르토, 크리스타 렌즈, 사샤 브라우스, 코니 스프링거, 장 키르슈타인, 미카사 아커만`', inline: true }
        )
        .setFooter('출처: 나무위키', 'https://w.namu.la/s/895d8eaf4bbb3b9b2ca614bbf22cc8229ce77b2e780d3b63abac8f04510493038affe6e8be4eea6e33a6d1fb5c50733697da8edec268c09b1a585af1df7d11fbbe38a3baf46539fb7bb758df2ff55466fa504381ba1fdfc64cfa430961feed5d927b4574b2f43b6710f91806bcd58b40');
        message.channel.send(embed)
    }
    if (message.content === '샤디스 리바이 아커만') { // 리바이 아커만 설명
        const embed = new Discord.MessageEmbed()
        .setTitle('리바이 아커만')
        .setURL('https://namu.wiki/w/%EB%A6%AC%EB%B0%94%EC%9D%B4(%EC%A7%84%EA%B2%A9%EC%9D%98%20%EA%B1%B0%EC%9D%B8)')
        .setThumbnail('https://lh3.googleusercontent.com/EijOaLeJS_g_uixx8oU_mBtvNlEklrteinrWeaU6jnkttj4dOEyjhJlH2RA6C3ou7W23M09X-rkKcNZGxkJVAw=s640-c')
        .setImage('https://thumbs.gfycat.com/ElasticEmptyDairycow-size_restricted.gif')
        .setDescription('リヴァイ • アッカーマン / Levi Ackerman \n 조사병단의 병사장이며 인류 최강의 병사이다')
        .addFields(
            { name: '• 나이', value: '`30 대 중후반 (854년)`', inline: true },
            { name: '• 출생', value: '`820년대 12월 25일, 파라디 왕국 월 시나 지하도시`', inline: true },
            { name: '• 신장', value: '`160cm (850년)`', inline: true },
            { name: '• 체중', value: '`65kg (850년)`', inline: true },
            { name: '• 소속 직책', value: '`파라디 섬 조사병단 간부`', inline: true },
            { name: '• 가치관', value: '`현실주의`', inline: true },
            { name: '• 거주지', value: '`파라디 섬 월 로제 트로스트 구`', inline: true },
            { name: '• 가족', value: '`아버지: 지하도시 매음굴 손님 어머니: 쿠셸 아커만 삼촌: 케니 아커만 친척: 미카사 아커만의 부모, 미카사 아커만`', inline: true },
            { name: '• 新 리바이반', value: '`에렌 예거, 아르민 알레르토, 크리스타 렌즈, 사샤 브라우스, 코니 스프링거, 장 키르슈타인, 미카사 아커만`', inline: true }
        )
        .setFooter('출처: 나무위키', 'https://w.namu.la/s/895d8eaf4bbb3b9b2ca614bbf22cc8229ce77b2e780d3b63abac8f04510493038affe6e8be4eea6e33a6d1fb5c50733697da8edec268c09b1a585af1df7d11fbbe38a3baf46539fb7bb758df2ff55466fa504381ba1fdfc64cfa430961feed5d927b4574b2f43b6710f91806bcd58b40');
        message.channel.send(embed)
    }
    if (message.content === '샤디스 엘런') { // 엘런 예거 설명
        const embed = new Discord.MessageEmbed()
        .setTitle('엘런 예거')
        .setURL('https://namu.wiki/w/%EC%97%98%EB%9F%B0%20%EC%98%88%EA%B1%B0')
        .setThumbnail('https://i.gifer.com/2BbC.gif')
        .setImage('https://images-ext-1.discordapp.net/external/AgzlCyvy2IO5W07O0C9NcQsOqzZ5Pfm7q0ATW4D-17g/https/i.imgur.com/XbkOPQ8.gif')
        .setDescription('エレン・イェーガー / Eren Yaeger \n 거인화의 능력을 소유하고 있으며 죽고 싶어 안달하는 녀석이다')
        .addFields(
            { name: '• 나이', value: '`19세`', inline: true },
            { name: '• 출생', value: '`835년 3월 30일, 파라디 왕국`', inline: true },
            { name: '• 신장', value: '`183cm`', inline: true },
            { name: '• 체중', value: '`63kg`', inline: true },
            { name: '• 소속 직책', value: '`파라디 섬 조사병단 특별작전반 병사`', inline: true },
            { name: '• 가치관', value: '`자유`', inline: true },
            { name: '• 거주지', value: '`파라디 섬 월 로제`', inline: true },
            { name: '• 가족', value: '`아버지: 그리샤 예거 어머니: 카를라 예거 입양 남매: 미카사 아커만 이복 형제: 지크 예거`', inline: true },
            { name: '• 거인화', value: '`진격의 거인, 시조의 거인`', inline: true }
        )
        .setFooter('출처: 나무위키', 'https://w.namu.la/s/895d8eaf4bbb3b9b2ca614bbf22cc8229ce77b2e780d3b63abac8f04510493038affe6e8be4eea6e33a6d1fb5c50733697da8edec268c09b1a585af1df7d11fbbe38a3baf46539fb7bb758df2ff55466fa504381ba1fdfc64cfa430961feed5d927b4574b2f43b6710f91806bcd58b40');
        message.channel.send(embed)
    }
    if (message.content === '샤디스 엘런 예거') { // 엘런 예거 설명
        const embed = new Discord.MessageEmbed()
        .setTitle('엘런 예거')
        .setURL('https://namu.wiki/w/%EC%97%98%EB%9F%B0%20%EC%98%88%EA%B1%B0')
        .setThumbnail('https://i.gifer.com/2BbC.gif')
        .setImage('https://images-ext-1.discordapp.net/external/AgzlCyvy2IO5W07O0C9NcQsOqzZ5Pfm7q0ATW4D-17g/https/i.imgur.com/XbkOPQ8.gif')
        .setDescription('エレン・イェーガー / Eren Yaeger \n 거인화의 능력을 소유하고 있으며 죽고 싶어 안달하는 녀석이다')
        .addFields(
            { name: '• 나이', value: '`19세`', inline: true },
            { name: '• 출생', value: '`835년 3월 30일, 파라디 왕국`', inline: true },
            { name: '• 신장', value: '`183cm`', inline: true },
            { name: '• 체중', value: '`63kg`', inline: true },
            { name: '• 소속 직책', value: '`파라디 섬 조사병단 특별작전반 병사`', inline: true },
            { name: '• 가치관', value: '`자유`', inline: true },
            { name: '• 거주지', value: '`파라디 섬 월 로제`', inline: true },
            { name: '• 가족', value: '`아버지: 그리샤 예거 어머니: 카를라 예거 입양 남매: 미카사 아커만 이복 형제: 지크 예거`', inline: true },
            { name: '• 거인화', value: '`진격의 거인, 시조의 거인`', inline: true }
        )
        .setFooter('출처: 나무위키', 'https://w.namu.la/s/895d8eaf4bbb3b9b2ca614bbf22cc8229ce77b2e780d3b63abac8f04510493038affe6e8be4eea6e33a6d1fb5c50733697da8edec268c09b1a585af1df7d11fbbe38a3baf46539fb7bb758df2ff55466fa504381ba1fdfc64cfa430961feed5d927b4574b2f43b6710f91806bcd58b40');
        message.channel.send(embed)
    }
    if (message.content === '샤디스 에렌') { // 엘런 예거 설명
        const embed = new Discord.MessageEmbed()
        .setTitle('엘런 예거')
        .setURL('https://namu.wiki/w/%EC%97%98%EB%9F%B0%20%EC%98%88%EA%B1%B0')
        .setThumbnail('https://i.gifer.com/2BbC.gif')
        .setImage('https://images-ext-1.discordapp.net/external/AgzlCyvy2IO5W07O0C9NcQsOqzZ5Pfm7q0ATW4D-17g/https/i.imgur.com/XbkOPQ8.gif')
        .setDescription('エレン・イェーガー / Eren Yaeger \n 거인화의 능력을 소유하고 있으며 죽고 싶어 안달하는 녀석이다')
        .addFields(
            { name: '• 나이', value: '`19세`', inline: true },
            { name: '• 출생', value: '`835년 3월 30일, 파라디 왕국`', inline: true },
            { name: '• 신장', value: '`183cm`', inline: true },
            { name: '• 체중', value: '`63kg`', inline: true },
            { name: '• 소속 직책', value: '`파라디 섬 조사병단 특별작전반 병사`', inline: true },
            { name: '• 가치관', value: '`자유`', inline: true },
            { name: '• 거주지', value: '`파라디 섬 월 로제`', inline: true },
            { name: '• 가족', value: '`아버지: 그리샤 예거 어머니: 카를라 예거 입양 남매: 미카사 아커만 이복 형제: 지크 예거`', inline: true },
            { name: '• 거인화', value: '`진격의 거인, 시조의 거인`', inline: true }
        )
        .setFooter('출처: 나무위키', 'https://w.namu.la/s/895d8eaf4bbb3b9b2ca614bbf22cc8229ce77b2e780d3b63abac8f04510493038affe6e8be4eea6e33a6d1fb5c50733697da8edec268c09b1a585af1df7d11fbbe38a3baf46539fb7bb758df2ff55466fa504381ba1fdfc64cfa430961feed5d927b4574b2f43b6710f91806bcd58b40');
        message.channel.send(embed)
    }
    if (message.content === '샤디스 에렌 예거') { // 엘런 예거 설명
        const embed = new Discord.MessageEmbed()
        .setTitle('엘런 예거')
        .setURL('https://namu.wiki/w/%EC%97%98%EB%9F%B0%20%EC%98%88%EA%B1%B0')
        .setThumbnail('https://i.gifer.com/2BbC.gif')
        .setImage('https://images-ext-1.discordapp.net/external/AgzlCyvy2IO5W07O0C9NcQsOqzZ5Pfm7q0ATW4D-17g/https/i.imgur.com/XbkOPQ8.gif')
        .setDescription('エレン・イェーガー / Eren Yaeger \n 거인화의 능력을 소유하고 있으며 죽고 싶어 안달하는 녀석이다')
        .addFields(
            { name: '• 나이', value: '`19세`', inline: true },
            { name: '• 출생', value: '`835년 3월 30일, 파라디 왕국`', inline: true },
            { name: '• 신장', value: '`183cm`', inline: true },
            { name: '• 체중', value: '`63kg`', inline: true },
            { name: '• 소속 직책', value: '`파라디 섬 조사병단 특별작전반 병사`', inline: true },
            { name: '• 가치관', value: '`자유`', inline: true },
            { name: '• 거주지', value: '`파라디 섬 월 로제`', inline: true },
            { name: '• 가족', value: '`아버지: 그리샤 예거 어머니: 카를라 예거 입양 남매: 미카사 아커만 이복 형제: 지크 예거`', inline: true },
            { name: '• 거인화', value: '`진격의 거인, 시조의 거인`', inline: true }
        )
        .setFooter('출처: 나무위키', 'https://w.namu.la/s/895d8eaf4bbb3b9b2ca614bbf22cc8229ce77b2e780d3b63abac8f04510493038affe6e8be4eea6e33a6d1fb5c50733697da8edec268c09b1a585af1df7d11fbbe38a3baf46539fb7bb758df2ff55466fa504381ba1fdfc64cfa430961feed5d927b4574b2f43b6710f91806bcd58b40');
        message.channel.send(embed)
    }
    // 샤디스 이용 방법
    if (message.content === '샤디스 도움말') { 
        const embed = new Discord.MessageEmbed()
        .setAuthor('샤디스 명령어 모음', 'https://pbs.twimg.com/profile_images/676598497873928192/vbiUNPq3_400x400.jpg')
        .setColor('#3B240B')
        .setThumbnail('https://pbs.twimg.com/profile_images/676598497873928192/vbiUNPq3_400x400.jpg')
        .addFields(
            { name: '대화', value: '`샤디스 도움말 대화`', inline: true },
            { name: '놀이', value: '`샤디스 도움말 놀이`', inline: true },
            { name: '진격의 거인', value: '`샤디스 도움말 진격의 거인`', inline: true },
            { name: '조사병단', value: '`샤디스 도움말 조사병단`', inline: true }
        )
        message.channel.send(embed)
    }
    // 샤디스 놀이 방법
    if (message.content === '샤디스 도움말 놀이') { 
        const embed = new Discord.MessageEmbed()
        .setAuthor('샤디스 놀이 명령어 모음', 'https://pbs.twimg.com/profile_images/676598497873928192/vbiUNPq3_400x400.jpg')
        .setColor('#3B240B')
        .setThumbnail('https://pbs.twimg.com/profile_images/676598497873928192/vbiUNPq3_400x400.jpg')
        .addFields(
            { name: '`샤디스 음식추천`', value: '오늘은 무슨 음식을 먹을지 고민되면 이용해보세요!', inline: true },
            { name: '`샤디스 게임추천`', value: '샤디스가 추천하는 게임을 한번 해보시는것도 나쁘지 않아요', inline: true },
            { name: '`샤디스 오늘의 운세`', value: '오늘은 어떤 일이 일어날 지 예상을 해요!', inline: true },
            { name: '`샤디스 아바타`', value: '해당 유저를 태그하여 프로필을 획득하세요', inline: true },
            { name: '`샤디스 핑`', value: '자신의 연결 속도를 확인해보세요', inline: true }
        )
        message.channel.send(embed)
    }
    // 샤디스 대화 방법
    if (message.content === '샤디스 도움말 대화') { 
        const embed = new Discord.MessageEmbed()
        .setAuthor('샤디스 놀이 명령어 모음', 'https://pbs.twimg.com/profile_images/676598497873928192/vbiUNPq3_400x400.jpg')
        .setColor('#3B240B')
        .setThumbnail('https://pbs.twimg.com/profile_images/676598497873928192/vbiUNPq3_400x400.jpg')
        .addFields(
            { name: '`샤디스 (할말)`', value: '여러분들이 한 말에 샤디스가 대답할 수 있어요!', inline: true },
            { name: '`샤디스 레벨`', value: '아직 미완성입니다', inline: true }
        )
        message.channel.send(embed)
    }
    // 모든 진격의 거인 명령어 모음
    if (message.content === '샤디스 도움말 진격의 거인') { 
        const embed = new Discord.MessageEmbed()
        .setAuthor('샤디스 진격의 거인 명령어 모음', 'https://cdn.discordapp.com/attachments/758884038962053133/772993602053079110/2ed956ea7e3e518470b3f87b69b7b8fa.png')
        .setColor('#FF0000')
        .setThumbnail('https://cdn.discordapp.com/attachments/758884038962053133/772993602053079110/2ed956ea7e3e518470b3f87b69b7b8fa.png')
        .addFields(
            { name: '`샤디스 리바이`', value: '진격의 거인 리바이의 대해 자세히 나옵니다', inline: true },
            { name: '`샤디스 에렌`', value: '진격의 거인 에렌의 대해 자세히 나옵니다', inline: true },
            { name: '`샤디스 미카사`', value: '진격의 거인 미카사의 대해 자세히 나옵니다', inline: true },
            { name: '`샤디스 엘빈`', value: '진격의 거인 엘빈의 대해 자세히 나옵니다', inline: true },
            { name: '`샤디스 (명대사)`', value: '진격의 거인에서 나온 명장면을 붙혀 넣으시면 해당 장면에 GIF가 나옵니다', inline: true },
            { name: '`샤디스 (진격거 캐릭터 닉네임)`', value: '진격의 거인 캐릭터 닉네임을 적어보시면 거의 다 나와있어요', inline: true }
        )
        message.channel.send(embed)
    }
    // 모든 조사병단 명령어 모음
    if (message.content === '샤디스 도움말 조사병단') { 
        const embed = new Discord.MessageEmbed()
        .setAuthor('샤디스 조사병단 명령어 모음', 'https://i.pinimg.com/originals/57/ed/3b/57ed3b5c113d60d1fa0eced7e2e37357.png')
        .setColor('#11A52F')
        .setThumbnail('https://i.pinimg.com/originals/57/ed/3b/57ed3b5c113d60d1fa0eced7e2e37357.png')
        .addFields(
            { name: '`샤디스 다운로드`', value: '진격의 거인 게임 모음집입니다 (벽외조사에 참여하실려면 EM모드 다운하세요)', inline: true },
            { name: '`샤디스 맵`', value: '벽외조사를 하기 위해 꼭 다운로드 해야하는 카라네스 맵입니다', inline: true },
            { name: '`샤디스 계급`', value: '한국 조사병단 보좌관 역할 모음', inline: true },
            { name: '`샤디스 조사병단`', value: '조사병단 각 반의 반장들입니다', inline: true },
            { name: '`샤디스 분단(진형)`', value: '각 반의 맞게 자신의 진형으로 보고 가세요', inline: true },
            { name: '`샤디스 연막탄`', value: '어떻게 연막을 써야 하는 지 나와있습니다', inline: true },
            { name: '`샤디스 조사병단 유니폼`', value: '조사병단 공식 유니폼들이 있어요!', inline: true },
            { name: '`샤디스 (인물)`', value: '인물칸에다가 조사병단 디스코드에 있는 보좌관들의 닉네임을 적어보세요', inline: true }
        )
        message.channel.send(embed)
    }
    // 엘빈 스미스 설명
    if (message.content === '샤디스 엘빈') { 
        const embed = new Discord.MessageEmbed()
        .setTitle('에르빈 스미스')
        .setURL('https://namu.wiki/w/%EC%97%98%EB%B9%88%20%EC%8A%A4%EB%AF%B8%EC%8A%A4')
        .setImage('https://data.whicdn.com/images/320839514/original.gif')
        .setThumbnail('https://pbs.twimg.com/profile_images/378800000541320457/d7ff9e8e8aa6d4b395d6a92e03dd8864_400x400.jpeg')
        .setDescription('인류의 미래를 책임지고 있는 조사병단의 지휘관으로서 그 책임이 막중한 인물')
        .addFields(
            { name: '• 나이', value: '`30대`', inline: true },
            { name: '• 출생', value: '`810년대 10월 14일월 로제의 한 도시.`', inline: true },
            { name: '• 신장', value: '`188cm`', inline: true },
            { name: '• 체중', value: '`93kg (850년)`', inline: true },
            { name: '• 소속 직책', value: '`조사병단 前 13대 단장`', inline: true },
            { name: '• 가치관', value: '`방벽 내 인류의 자유, 진보주의, 세계의 진실을 밝히는 것.`', inline: true },
            { name: '• 거주지', value: '`파라디 섬 월 로제`', inline: true },
            { name: '• 가족', value: '`아버지: 스미스 어머니: 불명`', inline: true },
            { name: '• 부하들', value: '`한지 조에, 리바이, 그외 조사병단 간부들, 조사병단 신병들, 104기 훈련병단 신병들`', inline: true }
        )
        message.channel.send(embed)
    }
    // 엘빈 스미스 설명
    if (message.content === '샤디스 엘빈 스미스') { 
        const embed = new Discord.MessageEmbed()
        .setTitle('에르빈 스미스')
        .setURL('https://namu.wiki/w/%EC%97%98%EB%B9%88%20%EC%8A%A4%EB%AF%B8%EC%8A%A4')
        .setImage('https://data.whicdn.com/images/320839514/original.gif')
        .setThumbnail('https://pbs.twimg.com/profile_images/378800000541320457/d7ff9e8e8aa6d4b395d6a92e03dd8864_400x400.jpeg')
        .setDescription('인류의 미래를 책임지고 있는 조사병단의 지휘관으로서 그 책임이 막중한 인물')
        .addFields(
            { name: '• 나이', value: '`30대`', inline: true },
            { name: '• 출생', value: '`810년대 10월 14일월 로제의 한 도시.`', inline: true },
            { name: '• 신장', value: '`188cm`', inline: true },
            { name: '• 체중', value: '`93kg (850년)`', inline: true },
            { name: '• 소속 직책', value: '`조사병단 前 13대 단장`', inline: true },
            { name: '• 가치관', value: '`방벽 내 인류의 자유, 진보주의, 세계의 진실을 밝히는 것.`', inline: true },
            { name: '• 거주지', value: '`파라디 섬 월 로제`', inline: true },
            { name: '• 가족', value: '`아버지: 스미스 어머니: 불명`', inline: true },
            { name: '• 부하들', value: '`한지 조에, 리바이, 그외 조사병단 간부들, 조사병단 신병들, 104기 훈련병단 신병들`', inline: true }
        )
        message.channel.send(embed)
    }
    // 엘빈 스미스 설명
    if (message.content === '샤디스 에르빈') { 
        const embed = new Discord.MessageEmbed()
        .setTitle('에르빈 스미스')
        .setURL('https://namu.wiki/w/%EC%97%98%EB%B9%88%20%EC%8A%A4%EB%AF%B8%EC%8A%A4')
        .setImage('https://data.whicdn.com/images/320839514/original.gif')
        .setThumbnail('https://pbs.twimg.com/profile_images/378800000541320457/d7ff9e8e8aa6d4b395d6a92e03dd8864_400x400.jpeg')
        .setDescription('인류의 미래를 책임지고 있는 조사병단의 지휘관으로서 그 책임이 막중한 인물')
        .addFields(
            { name: '• 나이', value: '`30대`', inline: true },
            { name: '• 출생', value: '`810년대 10월 14일월 로제의 한 도시.`', inline: true },
            { name: '• 신장', value: '`188cm`', inline: true },
            { name: '• 체중', value: '`93kg (850년)`', inline: true },
            { name: '• 소속 직책', value: '`조사병단 前 13대 단장`', inline: true },
            { name: '• 가치관', value: '`방벽 내 인류의 자유, 진보주의, 세계의 진실을 밝히는 것.`', inline: true },
            { name: '• 거주지', value: '`파라디 섬 월 로제`', inline: true },
            { name: '• 가족', value: '`아버지: 스미스 어머니: 불명`', inline: true },
            { name: '• 부하들', value: '`한지 조에, 리바이, 그외 조사병단 간부들, 조사병단 신병들, 104기 훈련병단 신병들`', inline: true }
        )
        message.channel.send(embed)
    }
    // 엘빈 스미스 설명
    if (message.content === '샤디스 에르빈 스미스') { 
        const embed = new Discord.MessageEmbed()
        .setTitle('에르빈 스미스')
        .setURL('https://namu.wiki/w/%EC%97%98%EB%B9%88%20%EC%8A%A4%EB%AF%B8%EC%8A%A4')
        .setImage('https://data.whicdn.com/images/320839514/original.gif')
        .setThumbnail('https://pbs.twimg.com/profile_images/378800000541320457/d7ff9e8e8aa6d4b395d6a92e03dd8864_400x400.jpeg')
        .setDescription('인류의 미래를 책임지고 있는 조사병단의 지휘관으로서 그 책임이 막중한 인물')
        .addFields(
            { name: '• 나이', value: '`30대`', inline: true },
            { name: '• 출생', value: '`810년대 10월 14일월 로제의 한 도시.`', inline: true },
            { name: '• 신장', value: '`188cm`', inline: true },
            { name: '• 체중', value: '`93kg (850년)`', inline: true },
            { name: '• 소속 직책', value: '`조사병단 前 13대 단장`', inline: true },
            { name: '• 가치관', value: '`방벽 내 인류의 자유, 진보주의, 세계의 진실을 밝히는 것.`', inline: true },
            { name: '• 거주지', value: '`파라디 섬 월 로제`', inline: true },
            { name: '• 가족', value: '`아버지: 스미스 어머니: 불명`', inline: true },
            { name: '• 부하들', value: '`한지 조에, 리바이, 그외 조사병단 간부들, 조사병단 신병들, 104기 훈련병단 신병들`', inline: true }
        )
        message.channel.send(embed)
    }
    // ph6400 설명
    if (message.content === '샤디스 ph6400') { 
        const embed = new Discord.MessageEmbed()
        .setTitle('ph6400')
        .setColor('#11A52F')
        .setImage('https://media.discordapp.net/attachments/758884038962053133/766160556985679892/erwin_smith_shingeki_no_kyojin_drawn_by_duexduex__6c11ff747f38103236476a1b59f25c4a.png?width=720&height=449')
        .setThumbnail('https://cdn.discordapp.com/attachments/758884038962053133/766162033577033758/afsdfsa-1.png')
        .setDescription('한국 조사병단 지부의 창단자이자, 제 1대 조사병단 단장이다')
        .addFields(
            { name: '• 나이', value: '`20대 중반`', inline: true },
            { name: '• 출생', value: '`출생 820년대 8월 29일 월 시나 출신`', inline: true },
            { name: '• 신장', value: '`181cm`', inline: true },
            { name: '• 체중', value: '`64kg`', inline: true },
            { name: '• 소속 직책', value: '`한국 조사병단 제 1대 단장`', inline: true },
            { name: '• 가치관', value: '`이 세계의 진실을 밝혀내는 것`', inline: true },
            { name: '• 거주지', value: '`파라디 섬 월 로제`', inline: true },
            { name: '• 가족', value: '`아버지: ph64 어머니: ph00`', inline: true },
            { name: '• 부하들', value: '`마스크슬레이브, 나물, 양식 그외 조사병단 간부들, 조사병단 신병들`', inline: true }
        )
        message.channel.send(embed)
    }
    // 나물 설명
    if (message.content === '샤디스 나물') { 
        const embed = new Discord.MessageEmbed()
        .setTitle('나물')
        .setColor('#973AE8')
        .setImage('https://cdn.discordapp.com/attachments/752784966475055138/766162966478848000/5a4fd668044bb896.png')
        .setThumbnail('https://cdn.discordapp.com/attachments/758884038962053133/766163117767655445/afdsf1.png')
        .setDescription('거인과 소통을 시도하는 사람')
        .addFields(
            { name: '• 나이', value: '`15살`', inline: true },
            { name: '• 출생', value: '`836년 1월 2일 월 시나 출신`', inline: true },
            { name: '• 신장', value: '`157cm`', inline: true },
            { name: '• 체중', value: '`44kg`', inline: true },
            { name: '• 소속 직책', value: '`한국 조사병단 숙련병`', inline: true },
            { name: '• 가치관', value: '`내 몸 내가 알아서 챙기자`', inline: true },
            { name: '• 거주지', value: '`파라디 섬 월 로제 카라네스구`', inline: true },
            { name: '• 가족', value: '`아버지: 김태평 어머니: 김바다 동생: 김호림`', inline: true },
            { name: '• 부하들', value: '`조사병단 신병과 훈련병들`', inline: true }
        )
        message.channel.send(embed)
    }
    // 나물 설명
    if (message.content === '샤디스 namull') {
        const embed = new Discord.MessageEmbed()
        .setTitle('나물')
        .setColor('#973AE8')
        .setImage('https://cdn.discordapp.com/attachments/752784966475055138/766162966478848000/5a4fd668044bb896.png')
        .setThumbnail('https://cdn.discordapp.com/attachments/758884038962053133/766163117767655445/afdsf1.png')
        .setDescription('거인과 소통을 시도하는 사람')
        .addFields(
            { name: '• 나이', value: '`15살`', inline: true },
            { name: '• 출생', value: '`836년 1월 2일 월 시나 출신`', inline: true },
            { name: '• 신장', value: '`157cm`', inline: true },
            { name: '• 체중', value: '`44kg`', inline: true },
            { name: '• 소속 직책', value: '`한국 조사병단 숙련병`', inline: true },
            { name: '• 가치관', value: '`내 몸 내가 알아서 챙기자`', inline: true },
            { name: '• 거주지', value: '`파라디 섬 월 로제 카라네스구`', inline: true },
            { name: '• 가족', value: '`아버지: 김태평 어머니: 김바다 동생: 김호림`', inline: true },
            { name: '• 부하들', value: '`조사병단 신병과 훈련병들`', inline: true }
        )
        message.channel.send(embed)
    }
    // 리하이 설명
    if (message.content === '샤디스 리하이') { 
        const embed = new Discord.MessageEmbed()
        .setTitle('리하이 아커만')
        .setColor('#EA6B6B')
        .setImage('https://1.gall-gif.com/tdgall/files/attach/images/82/883/868/110/d6423213dba049e41f15cae002f25d7b.gif')
        .setThumbnail('https://p16-sg-default.akamaized.net/aweme/720x720/tiktok-obj/1659396893307906.jpeg')
        .setDescription('조사병단의 리바이 아커만의 첫째 아들')
        .addFields(
            { name: '• 나이', value: '`14살`', inline: true },
            { name: '• 출생', value: '`837년 파라디 섬 월 로제`', inline: true },
            { name: '• 신장', value: '`162cm`', inline: true },
            { name: '• 체중', value: '`47kg`', inline: true },
            { name: '• 소속 직책', value: '`한국 조사병단 신병`', inline: true },
            { name: '• 가치관', value: '`현실주의`', inline: true },
            { name: '• 거주지', value: '`파라디 섬 월 로제 트로스트 구`', inline: true },
            { name: '• 가족', value: '`아버지: 리바이 어머니: 미공개`', inline: true },
            { name: '• 부하들', value: '`없음`', inline: true }
        )
        message.channel.send(embed)
    }
    // 리하이 설명
    if (message.content === '샤디스 리하이 아커만') { 
        const embed = new Discord.MessageEmbed()
        .setTitle('리하이 아커만')
        .setColor('#EA6B6B')
        .setImage('https://1.gall-gif.com/tdgall/files/attach/images/82/883/868/110/d6423213dba049e41f15cae002f25d7b.gif')
        .setThumbnail('https://p16-sg-default.akamaized.net/aweme/720x720/tiktok-obj/1659396893307906.jpeg')
        .setDescription('조사병단의 리바이 아커만의 첫째 아들')
        .addFields(
            { name: '• 나이', value: '`14살`', inline: true },
            { name: '• 출생', value: '`837년 파라디 섬 월 로제`', inline: true },
            { name: '• 신장', value: '`162cm`', inline: true },
            { name: '• 체중', value: '`47kg`', inline: true },
            { name: '• 소속 직책', value: '`한국 조사병단 신병`', inline: true },
            { name: '• 가치관', value: '`현실주의`', inline: true },
            { name: '• 거주지', value: '`파라디 섬 월 로제 트로스트 구`', inline: true },
            { name: '• 가족', value: '`아버지: 리바이 어머니: 미공개`', inline: true },
            { name: '• 절친들', value: '`친구 자체가 없음`', inline: true }
        )
        message.channel.send(embed)
    }
    // 리하이 설명
    if (message.content === '샤디스 Lehi') { 
        const embed = new Discord.MessageEmbed()
        .setTitle('리하이 아커만')
        .setColor('#EA6B6B')
        .setImage('https://1.gall-gif.com/tdgall/files/attach/images/82/883/868/110/d6423213dba049e41f15cae002f25d7b.gif')
        .setThumbnail('https://p16-sg-default.akamaized.net/aweme/720x720/tiktok-obj/1659396893307906.jpeg')
        .setDescription('조사병단의 리바이 아커만의 첫째 아들')
        .addFields(
            { name: '• 나이', value: '`14살`', inline: true },
            { name: '• 출생', value: '`837년 파라디 섬 월 로제`', inline: true },
            { name: '• 신장', value: '`162cm`', inline: true },
            { name: '• 체중', value: '`47kg`', inline: true },
            { name: '• 소속 직책', value: '`한국 조사병단 신병`', inline: true },
            { name: '• 가치관', value: '`현실주의`', inline: true },
            { name: '• 거주지', value: '`파라디 섬 월 로제 트로스트 구`', inline: true },
            { name: '• 가족', value: '`아버지: 리바이 어머니: 미공개`', inline: true },
            { name: '• 절친들', value: '`친구 자체가 없음`', inline: true }
        )
        message.channel.send(embed)
    }
    // 리하이 설명
    if (message.content === '샤디스 Lehi Ackerman') { 
        const embed = new Discord.MessageEmbed()
        .setTitle('리하이 아커만')
        .setColor('#EA6B6B')
        .setImage('https://1.gall-gif.com/tdgall/files/attach/images/82/883/868/110/d6423213dba049e41f15cae002f25d7b.gif')
        .setThumbnail('https://p16-sg-default.akamaized.net/aweme/720x720/tiktok-obj/1659396893307906.jpeg')
        .setDescription('조사병단의 리바이 아커만의 첫째 아들')
        .addFields(
            { name: '• 나이', value: '`14살`', inline: true },
            { name: '• 출생', value: '`837년 파라디 섬 월 로제`', inline: true },
            { name: '• 신장', value: '`162cm`', inline: true },
            { name: '• 체중', value: '`47kg`', inline: true },
            { name: '• 소속 직책', value: '`한국 조사병단 신병`', inline: true },
            { name: '• 가치관', value: '`현실주의`', inline: true },
            { name: '• 거주지', value: '`파라디 섬 월 로제 트로스트 구`', inline: true },
            { name: '• 가족', value: '`아버지: 리바이 어머니: 미공개`', inline: true },
            { name: '• 절친들', value: '`친구 자체가 없음`', inline: true }
        )
        message.channel.send(embed)
    }
    // 미카사 설명
    if (message.content === '샤디스 미카사 아커만') { 
        const embed = new Discord.MessageEmbed()
        .setTitle('미카사 아커만')
        .setColor('#424242')
        .setImage('https://i.pinimg.com/originals/34/f6/9e/34f69ec72ae4f3d891e949afa5663a46.gif')
        .setThumbnail('https://media.tenor.com/images/11e7c86b0a3f51c0be654235c0db8282/tenor.gif')
        .setDescription('리바이와 함께 조사병단 내 전투력 투톱을 달리는 초인')
        .addFields(
            { name: '• 나이', value: '`19살`', inline: true },
            { name: '• 출생', value: '`월 마리아 시간시나 구 근처 산골짜기 마을`', inline: true },
            { name: '• 신장', value: '`176cm (854년)`', inline: true },
            { name: '• 체중', value: '`68kg (850년)`', inline: true },
            { name: '• 소속 직책', value: '`조사병단 특별작전반`', inline: true },
            { name: '• 가치관', value: '`오직 에렌 바보`', inline: true },
            { name: '• 거주지', value: '`파라디 섬 월 로제 트로스트 구`', inline: true },
            { name: '• 가족', value: '`(입양) 아버지: 그리샤 예거 어머니: 카를라 예거`', inline: true },
            { name: '• 절친', value: '`엘런 예거, 아르민 알레르토`', inline: true }
        )
        message.channel.send(embed)
    }
    // 미카사 설명
    if (message.content === '샤디스 미카사') { 
        const embed = new Discord.MessageEmbed()
        .setTitle('미카사 아커만')
        .setColor('#424242')
        .setImage('https://i.pinimg.com/originals/34/f6/9e/34f69ec72ae4f3d891e949afa5663a46.gif')
        .setThumbnail('https://media.tenor.com/images/11e7c86b0a3f51c0be654235c0db8282/tenor.gif')
        .setDescription('리바이와 함께 조사병단 내 전투력 투톱을 달리는 초인')
        .addFields(
            { name: '• 나이', value: '`19살`', inline: true },
            { name: '• 출생', value: '`월 마리아 시간시나 구 근처 산골짜기 마을`', inline: true },
            { name: '• 신장', value: '`176cm (854년)`', inline: true },
            { name: '• 체중', value: '`68kg (850년)`', inline: true },
            { name: '• 소속 직책', value: '`조사병단 특별작전반`', inline: true },
            { name: '• 가치관', value: '`오직 에렌 바보`', inline: true },
            { name: '• 거주지', value: '`파라디 섬 월 로제 트로스트 구`', inline: true },
            { name: '• 가족', value: '`(입양) 아버지: 그리샤 예거 어머니: 카를라 예거`', inline: true },
            { name: '• 절친', value: '`엘런 예거, 아르민 알레르토`', inline: true }
        )
        message.channel.send(embed)
    }
    // 아르민 설명
    if (message.content === '샤디스 아르민') { 
        const embed = new Discord.MessageEmbed()
        .setTitle('아르민 알레르토')
        .setColor('#F3F781')
        .setImage('https://thumbs.gfycat.com/ImpeccableDemandingArgentinehornedfrog-size_restricted.gif')
        .setThumbnail('https://media.tenor.com/images/96afc0ae181ec93cecfdf5e6afc84609/tenor.gif')
        .setDescription('베르톨트의 초대형 거인의 힘 계승자')
        .addFields(
            { name: '• 나이', value: '`19살`', inline: true },
            { name: '• 출생', value: '`월마리아 시간시나구`', inline: true },
            { name: '• 신장', value: '`168 (854년)`', inline: true },
            { name: '• 체중', value: '`55kg (850년)`', inline: true },
            { name: '• 소속 직책', value: '`조사병단 특수작전반`', inline: true },
            { name: '• 가치관', value: '`평화주의, 자유`', inline: true },
            { name: '• 거주지', value: '`월 로제 트로스트 구`', inline: true },
            { name: '• 가족', value: '`아버지, 어머니, 할아버지 (세 분 다 846년 사망)`', inline: true },
            { name: '• 절친', value: '`엘런 예거, 미카사 아커만등`', inline: true }
        )
        message.channel.send(embed)
    }
    // 아르민 설명
    if (message.content === '샤디스 아르민 알레르토') { 
        const embed = new Discord.MessageEmbed()
        .setTitle('아르민 알레르토')
        .setColor('#F3F781')
        .setImage('https://thumbs.gfycat.com/ImpeccableDemandingArgentinehornedfrog-size_restricted.gif')
        .setThumbnail('https://media.tenor.com/images/96afc0ae181ec93cecfdf5e6afc84609/tenor.gif')
        .setDescription('베르톨트의 초대형 거인의 힘 계승자')
        .addFields(
            { name: '• 나이', value: '`19살`', inline: true },
            { name: '• 출생', value: '`월마리아 시간시나구`', inline: true },
            { name: '• 신장', value: '`168 (854년)`', inline: true },
            { name: '• 체중', value: '`55kg (854년)`', inline: true },
            { name: '• 소속 직책', value: '`조사병단 특수작전반`', inline: true },
            { name: '• 가치관', value: '`평화주의, 자유`', inline: true },
            { name: '• 거주지', value: '`월 로제 트로스트 구`', inline: true },
            { name: '• 가족', value: '`아버지, 어머니, 할아버지 (세 분 다 846년 사망)`', inline: true },
            { name: '• 절친', value: '`엘런 예거, 미카사 아커만등`', inline: true }
        )
        message.channel.send(embed)
    }
    // 한지 설명
    if (message.content === '샤디스 한지') { 
        const embed = new Discord.MessageEmbed()
        .setTitle('한지 조에')
        .setColor('#4F3535')
        .setImage('https://i.pinimg.com/originals/71/87/9b/71879b75130f7aa697161d8fa0766047.gif')
        .setThumbnail('https://data.whicdn.com/images/255803002/original.gif')
        .setDescription('머리는 좋은 망할 안경')
        .addFields(
            { name: '• 나이', value: '`30대 중반 (854년)`', inline: true },
            { name: '• 출생', value: '`파라디 왕국`', inline: true },
            { name: '• 신장', value: '`170 (850년)`', inline: true },
            { name: '• 체중', value: '`60kg (850년)`', inline: true },
            { name: '• 소속 직책', value: '`파라디 섬 조사병단 간부`', inline: true },
            { name: '• 가치관', value: '`평화주의`', inline: true },
            { name: '• 거주지', value: '`파라디 섬 월 로제 트로스트 구`', inline: true },
            { name: '• 가족', value: '`어머니, 아버지 (두분 다 불명)`', inline: true },
            { name: '• 부하', value: '`모블릿 베이너 제4분대 부대장 및 직속 보좌관, 니파, 케이지 등`', inline: true }
        )
        message.channel.send(embed)
    }
    // 한지 설명
    if (message.content === '샤디스 한지 조에') { 
        const embed = new Discord.MessageEmbed()
        .setTitle('한지 조에')
        .setColor('#4F3535')
        .setImage('https://i.pinimg.com/originals/71/87/9b/71879b75130f7aa697161d8fa0766047.gif')
        .setThumbnail('https://data.whicdn.com/images/255803002/original.gif')
        .setDescription('머리는 좋은 망할 안경')
        .addFields(
            { name: '• 나이', value: '`30대 중반 (854년)`', inline: true },
            { name: '• 출생', value: '`파라디 왕국`', inline: true },
            { name: '• 신장', value: '`170 (850년)`', inline: true },
            { name: '• 체중', value: '`60kg (850년)`', inline: true },
            { name: '• 소속 직책', value: '`파라디 섬 조사병단 간부`', inline: true },
            { name: '• 가치관', value: '`평화주의`', inline: true },
            { name: '• 거주지', value: '`파라디 섬 월 로제 트로스트 구`', inline: true },
            { name: '• 가족', value: '`어머니, 아버지 (두분 다 불명)`', inline: true },
            { name: '• 부하', value: '`모블릿 베이너 제4분대 부대장 및 직속 보좌관, 니파, 케이지 등`', inline: true }
        )
        message.channel.send(embed)
    }
    // 양식님 설명
    if (message.content === '샤디스 양식') { 
        const embed = new Discord.MessageEmbed()
        .setTitle('YangSick')
        .setColor('#F781F3')
        .setImage('https://cdn.discordapp.com/attachments/742051945472065546/766447361735917578/1602747124.gif')
        .setThumbnail('https://cdn.discordapp.com/attachments/752784966475055138/766181849822920704/61f45102a97c69113d7f501c93d4eee0.png')
        .setDescription('그저 로리콘')
        .addFields(
            { name: '• 나이', value: '`18살`', inline: true },
            { name: '• 출생', value: '`파라디 섬 월 로제`', inline: true },
            { name: '• 신장', value: '`180cm`', inline: true },
            { name: '• 체중', value: '`75kg`', inline: true },
            { name: '• 소속 직책', value: '`4반 분대장`', inline: true },
            { name: '• 가치관', value: '`귀여우면 다 좋아`', inline: true },
            { name: '• 거주지', value: '`파라디 섬 월 로제 트로스트 구`', inline: true },
            { name: '• 가족', value: '`아버지: 히토미 어머니: 히요비`', inline: true },
            { name: '• 절친', value: '`친구 따윈 없다`', inline: true }
        )
        message.channel.send(embed)
    }
    // 양식님 설명
    if (message.content === '샤디스 YangSick') { 
        const embed = new Discord.MessageEmbed()
        .setTitle('YangSick')
        .setColor('#F781F3')
        .setImage('https://cdn.discordapp.com/attachments/742051945472065546/766447361735917578/1602747124.gif')
        .setThumbnail('https://cdn.discordapp.com/attachments/752784966475055138/766181849822920704/61f45102a97c69113d7f501c93d4eee0.png')
        .setDescription('그저 로리콘')
        .addFields(
            { name: '• 나이', value: '`18살`', inline: true },
            { name: '• 출생', value: '`파라디 섬 월 로제`', inline: true },
            { name: '• 신장', value: '`180cm`', inline: true },
            { name: '• 체중', value: '`75kg`', inline: true },
            { name: '• 소속 직책', value: '`4반 분대장`', inline: true },
            { name: '• 가치관', value: '`귀여우면 다 좋아`', inline: true },
            { name: '• 거주지', value: '`파라디 섬 월 로제 트로스트 구`', inline: true },
            { name: '• 가족', value: '`아버지: 히토미 어머니: 히요비`', inline: true },
            { name: '• 절친', value: '`친구 따윈 없다`', inline: true }
        )
        message.channel.send(embed)
    }
    // 어택님 설명
    if (message.content === '샤디스 어택') { 
        const embed = new Discord.MessageEmbed()
        .setTitle('MASKSLAVE')
        .setColor('#FA5858')
        .setImage('https://cdn.discordapp.com/attachments/752828433834180628/766205899576311808/1530219802_Leviackerman1.gif')
        .setThumbnail('https://cdn.discordapp.com/attachments/752828433834180628/766204472467652608/image0.jpg')
        .setDescription('TOP 3 안에 드는 진격거 게임 고인물')
        .addFields(
            { name: '• 나이', value: '`18살`', inline: true },
            { name: '• 출생', value: '`파라디 섬 월 로제`', inline: true },
            { name: '• 신장', value: '`176cm`', inline: true },
            { name: '• 체중', value: '`60kg`', inline: true },
            { name: '• 소속 직책', value: '`조사병단 병사장`', inline: true },
            { name: '• 가치관', value: '`노력하면 안되는건 없다`', inline: true },
            { name: '• 거주지', value: '`단장의 책상 밑`', inline: true },
            { name: '• 가족', value: '`비공개`', inline: true },
            { name: '• 절친', value: '`책상 밑에 있는 먼지`', inline: true }
        )
        message.channel.send(embed)
    }
    // 어택님 설명
    if (message.content === '샤디스 maskslave') { 
        const embed = new Discord.MessageEmbed()
        .setTitle('MASKSLAVE')
        .setColor('#FA5858')
        .setImage('https://cdn.discordapp.com/attachments/752828433834180628/766205899576311808/1530219802_Leviackerman1.gif')
        .setThumbnail('https://cdn.discordapp.com/attachments/752828433834180628/766204472467652608/image0.jpg')
        .setDescription('TOP 3 안에 드는 진격거 게임 고인물')
        .addFields(
            { name: '• 나이', value: '`18살`', inline: true },
            { name: '• 출생', value: '`파라디 섬 월 로제`', inline: true },
            { name: '• 신장', value: '`176cm`', inline: true },
            { name: '• 체중', value: '`60kg`', inline: true },
            { name: '• 소속 직책', value: '`조사병단 병사장`', inline: true },
            { name: '• 가치관', value: '`노력하면 안되는건 없다`', inline: true },
            { name: '• 거주지', value: '`단장의 책상 밑`', inline: true },
            { name: '• 가족', value: '`비공개`', inline: true },
            { name: '• 절친', value: '`책상 밑에 있는 먼지`', inline: true }
        )
        message.channel.send(embed)
    }
    // 비온님 설명
    if (message.content === '샤디스 비온') { 
        const embed = new Discord.MessageEmbed()
        .setTitle('Bion 2467')
        .setColor('#2EFEF7')
        .setImage('https://1.gall-gif.com/tdgall/files/attach/images/82/731/317/059/92274b5dfe8fb21f81f378ca0b583e49.gif')
        .setThumbnail('https://cdn.discordapp.com/attachments/762993031141916712/766219663440740352/FB_IMG_1602575325195.jpg')
        .setDescription('민트초코를 너무 좋아한 나머지 민트초코보충제를 먹는 사람')
        .addFields(
            { name: '• 나이', value: '`15살`', inline: true },
            { name: '• 출생', value: '`월 마리아 시간시나구`', inline: true },
            { name: '• 신장', value: '`186cm`', inline: true },
            { name: '• 체중', value: '`73kg`', inline: true },
            { name: '• 소속 직책', value: '`조사병단 반장`', inline: true },
            { name: '• 가치관', value: '`태산보다 무거운 죽음도 있고 깃털만큼 가벼운 죽음도 있다`', inline: true },
            { name: '• 거주지', value: '`월 로제 트로스트구`', inline: true },
            { name: '• 가족', value: '`아버지: 24 어머니: 67`', inline: true },
            { name: '• 절친', value: '`시간시나구에서 거인에게 잡아먹힘`', inline: true }
        )
        message.channel.send(embed)
    }
    // 비온님 설명
    if (message.content === '샤디스 Bion 2467') { 
        const embed = new Discord.MessageEmbed()
        .setTitle('Bion 2467')
        .setColor('#2EFEF7')
        .setImage('https://1.gall-gif.com/tdgall/files/attach/images/82/731/317/059/92274b5dfe8fb21f81f378ca0b583e49.gif')
        .setThumbnail('https://cdn.discordapp.com/attachments/762993031141916712/766219663440740352/FB_IMG_1602575325195.jpg')
        .setDescription('민트초코를 너무 좋아한 나머지 민트초코보충제를 먹는 사람')
        .addFields(
            { name: '• 나이', value: '`15살`', inline: true },
            { name: '• 출생', value: '`월 마리아 시간시나구`', inline: true },
            { name: '• 신장', value: '`186cm`', inline: true },
            { name: '• 체중', value: '`73kg`', inline: true },
            { name: '• 소속 직책', value: '`조사병단 반장`', inline: true },
            { name: '• 가치관', value: '`태산보다 무거운 죽음도 있고 깃털만큼 가벼운 죽음도 있다`', inline: true },
            { name: '• 거주지', value: '`월 로제 트로스트구`', inline: true },
            { name: '• 가족', value: '`아버지: 24 어머니: 67`', inline: true },
            { name: '• 절친', value: '`시간시나구에서 거인에게 잡아먹힘`', inline: true }
        )
        message.channel.send(embed)
    }
    // 애플님 설명
    if (message.content === '샤디스 애플') { 
        const embed = new Discord.MessageEmbed()
        .setTitle('Red_Orange_Yellow_Green_Blue_Purple_Black_White_apple_G')
        .setColor('#FF0000')
        .setImage('https://cdn.discordapp.com/attachments/742051945472065546/766582015217893386/aaacf25274896c8a031047909b8a7603.gif')
        .setThumbnail('https://cdn.discordapp.com/attachments/763956033789886505/766225257924263936/20200801_231259.jpg')
        .setDescription('항상 거인의 뒷태를 사랑스럽게 바라본다')
        .addFields(
            { name: '• 나이', value: '`14살`', inline: true },
            { name: '• 출생', value: '`월 시나 스토헤스 구`', inline: true },
            { name: '• 신장', value: '`169cm`', inline: true },
            { name: '• 체중', value: '`60kg`', inline: true },
            { name: '• 소속 직책', value: '`조사병단 반장`', inline: true },
            { name: '• 가치관', value: '`재밌으면 되`', inline: true },
            { name: '• 거주지', value: '`월 로제 트로스트구`', inline: true },
            { name: '• 가족', value: '`아버지: 죠셉 죠스타 어머니: 수지Q`', inline: true },
            { name: '• 절친', value: '`셀 수 없이 많음`', inline: true }
        )
        message.channel.send(embed)
    }
    // 애플님 설명 
    if (message.content === '샤디스 사과') { 
        const embed = new Discord.MessageEmbed()
        .setTitle('Red_Orange_Yellow_Green_Blue_Purple_Black_White_apple_G')
        .setColor('#FF0000')
        .setImage('https://cdn.discordapp.com/attachments/742051945472065546/766582015217893386/aaacf25274896c8a031047909b8a7603.gif')
        .setThumbnail('https://cdn.discordapp.com/attachments/763956033789886505/766225257924263936/20200801_231259.jpg')
        .setDescription('항상 거인의 뒷태를 사랑스럽게 바라본다')
        .addFields(
            { name: '• 나이', value: '`14살`', inline: true },
            { name: '• 출생', value: '`월 시나 스토헤스 구`', inline: true },
            { name: '• 신장', value: '`169cm`', inline: true },
            { name: '• 체중', value: '`60kg`', inline: true },
            { name: '• 소속 직책', value: '`조사병단 반장`', inline: true },
            { name: '• 가치관', value: '`재밌으면 되`', inline: true },
            { name: '• 거주지', value: '`월 로제 트로스트구`', inline: true },
            { name: '• 가족', value: '`아버지: 죠셉 죠스타 어머니: 수지Q`', inline: true },
            { name: '• 절친', value: '`셀 수 없이 많음`', inline: true }
        )
        message.channel.send(embed)
    }
    // 애플님 설명 
    if (message.content === '샤디스 Red_Orange_Yellow_Green_Blue_Purple_Black_White_apple_G') { 
        const embed = new Discord.MessageEmbed()
        .setTitle('Red_Orange_Yellow_Green_Blue_Purple_Black_White_apple_G')
        .setColor('#FF0000')
        .setImage('https://cdn.discordapp.com/attachments/742051945472065546/766582015217893386/aaacf25274896c8a031047909b8a7603.gif')
        .setThumbnail('https://cdn.discordapp.com/attachments/763956033789886505/766225257924263936/20200801_231259.jpg')
        .setDescription('항상 거인의 뒷태를 사랑스럽게 바라본다')
        .addFields(
            { name: '• 나이', value: '`14살`', inline: true },
            { name: '• 출생', value: '`월 시나 스토헤스 구`', inline: true },
            { name: '• 신장', value: '`169cm`', inline: true },
            { name: '• 체중', value: '`60kg`', inline: true },
            { name: '• 소속 직책', value: '`조사병단 반장`', inline: true },
            { name: '• 가치관', value: '`재밌으면 되`', inline: true },
            { name: '• 거주지', value: '`월 로제 트로스트구`', inline: true },
            { name: '• 가족', value: '`아버지: 죠셉 죠스타 어머니: 수지Q`', inline: true },
            { name: '• 절친', value: '`셀 수 없이 많음`', inline: true }
        )
        message.channel.send(embed)
    }
    // 홍시 설명
    if (message.content === '샤디스 홍시') { 
        const embed = new Discord.MessageEmbed()
        .setTitle('Hongshi')
        .setColor('#2EFEF7')
        .setImage('https://i.pinimg.com/originals/60/bc/26/60bc268b002a5daf97e413887a532a9e.gif')
        .setThumbnail('https://cdn.discordapp.com/attachments/742051945472065546/766864631716773888/e7806fae43f8b058d9a4a9478e108a15.png')
        .setDescription('홍시를 먹으면 몸이 건강해져요!')
        .addFields(
            { name: '• 나이', value: '`13살`', inline: true },
            { name: '• 출생', value: '`월 로제 트로스트구`', inline: true },
            { name: '• 신장', value: '`150cm`', inline: true },
            { name: '• 체중', value: '`40kg`', inline: true },
            { name: '• 소속 직책', value: '`조사병단 벽의 수호자`', inline: true },
            { name: '• 가치관', value: '`홍시가 제일 맛있다`', inline: true },
            { name: '• 거주지', value: '`월 로제 트로스트구`', inline: true },
            { name: '• 가족', value: '`아버지: 홍삼 어머니: 냉동음식`', inline: true },
            { name: '• 절친', value: '`없음`', inline: true }
        )
        message.channel.send(embed)
    }
    // 홍시 설명
    if (message.content === '샤디스 Hongshi') { 
        const embed = new Discord.MessageEmbed()
        .setTitle('Hongshi')
        .setColor('#2EFEF7')
        .setImage('https://i.pinimg.com/originals/60/bc/26/60bc268b002a5daf97e413887a532a9e.gif')
        .setThumbnail('https://cdn.discordapp.com/attachments/742051945472065546/766864631716773888/e7806fae43f8b058d9a4a9478e108a15.png')
        .setDescription('홍시를 먹으면 몸이 건강해져요!')
        .addFields(
            { name: '• 나이', value: '`13살`', inline: true },
            { name: '• 출생', value: '`월 로제 트로스트구`', inline: true },
            { name: '• 신장', value: '`150cm`', inline: true },
            { name: '• 체중', value: '`40kg`', inline: true },
            { name: '• 소속 직책', value: '`조사병단 벽의 수호자`', inline: true },
            { name: '• 가치관', value: '`홍시가 제일 맛있다`', inline: true },
            { name: '• 거주지', value: '`월 로제 트로스트구`', inline: true },
            { name: '• 가족', value: '`아버지: 홍삼 어머니: 냉동음식`', inline: true },
            { name: '• 절친', value: '`없음`', inline: true }
        )
        message.channel.send(embed)
    }
    // 한별님 설명
    if (message.content === '샤디스 한별') { 
        const embed = new Discord.MessageEmbed()
        .setTitle('Han_byul_kirstein')
        .setColor('#151515')
        .setImage('https://cdn.discordapp.com/attachments/742051945472065546/774205684698447872/unnamed-1.gif')
        .setThumbnail('https://cdn.discordapp.com/attachments/766924018347409428/766926915667492874/tenor.gif')
        .setDescription('삼성의 3번째 동생')
        .addFields(
            { name: '• 나이', value: '`18살`', inline: true },
            { name: '• 출생', value: '`월 로제 트로스트구`', inline: true },
            { name: '• 신장', value: '`174cm`', inline: true },
            { name: '• 체중', value: '`61kg`', inline: true },
            { name: '• 소속 직책', value: '`조사병단 반장`', inline: true },
            { name: '• 가치관', value: '`선빵필승`', inline: true },
            { name: '• 거주지', value: '`월 로제 트로스트구`', inline: true },
            { name: '• 가족', value: '`부모님, 동생`', inline: true },
            { name: '• 절친', value: '`거인에게 사망`', inline: true }
        )
        message.channel.send(embed)
    }
    if (message.content === '샤디스 Han_byul_kirstein') { 
        const embed = new Discord.MessageEmbed()
        .setTitle('Han_byul_kirstein')
        .setColor('#151515')
        .setImage('https://cdn.discordapp.com/attachments/742051945472065546/774205684698447872/unnamed-1.gif')
        .setThumbnail('https://cdn.discordapp.com/attachments/766924018347409428/766926915667492874/tenor.gif')
        .setDescription('삼성의 3번째 동생')
        .addFields(
            { name: '• 나이', value: '`18살`', inline: true },
            { name: '• 출생', value: '`월 로제 트로스트구`', inline: true },
            { name: '• 신장', value: '`174cm`', inline: true },
            { name: '• 체중', value: '`61kg`', inline: true },
            { name: '• 소속 직책', value: '`조사병단 반장`', inline: true },
            { name: '• 가치관', value: '`선빵필승`', inline: true },
            { name: '• 거주지', value: '`월 로제 트로스트구`', inline: true },
            { name: '• 가족', value: '`부모님, 동생`', inline: true },
            { name: '• 절친', value: '`친구 자체가 없음`', inline: true }
        )
        message.channel.send(embed)
    }
    // 코니 설명
    if (message.content === '샤디스 코니') { 
        const embed = new Discord.MessageEmbed()
        .setTitle('코니 스프링거')
        .setColor('#6E6E6E')
        .setImage('https://i.pinimg.com/originals/2f/80/aa/2f80aa5d5c99e5582d89a8a608317c58.gif')
        .setThumbnail('https://cdn.discordapp.com/attachments/758884038962053133/773003027429720074/tenor.gif')
        .setDescription('그러니까...곤경에 처한 사람을 구하러 가자')
        .addFields(
            { name: '• 나이', value: '`19살`', inline: true },
            { name: '• 출생', value: '`월 로제 외지 남부 라가코 마을`', inline: true },
            { name: '• 신장', value: '`180cm`', inline: true },
            { name: '• 체중', value: '`58kg`', inline: true },
            { name: '• 소속 직책', value: '`파라디 섬 조사병단 특별작전반 병사`', inline: true },
            { name: '• 가치관', value: '`훌륭하고 의젓한 병사가 되는 것`', inline: true },
            { name: '• 거주지', value: '`방벽 월 로제 남구 라가코 마을`', inline: true },
            { name: '• 가족', value: '`아버지, 어머니, 여동생, 남동생`', inline: true },
            { name: '• 절친', value: '`사샤 브라우스, 유미르, 장 키르슈타인 등`', inline: true }
        )
        message.channel.send(embed)
    }
        // 코니 설명
        if (message.content === '샤디스 코니 스프링거') { 
            const embed = new Discord.MessageEmbed()
            .setTitle('코니 스프링거')
            .setColor('#6E6E6E')
            .setImage('https://i.pinimg.com/originals/2f/80/aa/2f80aa5d5c99e5582d89a8a608317c58.gif')
            .setThumbnail('https://cdn.discordapp.com/attachments/758884038962053133/773003027429720074/tenor.gif')
            .setDescription('그러니까...곤경에 처한 사람을 구하러 가자')
            .addFields(
                { name: '• 나이', value: '`19살`', inline: true },
                { name: '• 출생', value: '`월 로제 외지 남부 라가코 마을`', inline: true },
                { name: '• 신장', value: '`180cm`', inline: true },
                { name: '• 체중', value: '`58kg`', inline: true },
                { name: '• 소속 직책', value: '`파라디 섬 조사병단 특별작전반 병사`', inline: true },
                { name: '• 가치관', value: '`훌륭하고 의젓한 병사가 되는 것`', inline: true },
                { name: '• 거주지', value: '`방벽 월 로제 남구 라가코 마을`', inline: true },
                { name: '• 가족', value: '`아버지, 어머니, 여동생, 남동생`', inline: true },
                { name: '• 절친', value: '`사샤 브라우스, 유미르, 장 키르슈타인 등`', inline: true }
            )
            message.channel.send(embed)
        }
    // 레예님 설명
    if (message.content === '샤디스 레예') { 
        const embed = new Discord.MessageEmbed()
        .setTitle('redyager')
        .setColor('#FF0000')
        .setImage('https://cdn.discordapp.com/attachments/772381716413022259/774615370811572234/d47f41ca132fc7379a49e7dd4ec26c60.gif')
        .setThumbnail('https://cdn.discordapp.com/attachments/772381716413022259/774612195069788180/QH8j1tC9_400x400_1.png')
        .setDescription('교향인 사이버트론의 재건을 기다리고 있다')
        .addFields(
            { name: '• 나이', value: '`16살`', inline: true },
            { name: '• 출생', value: '`사이버트론 백터시그마`', inline: true },
            { name: '• 신장', value: '`175cm`', inline: true },
            { name: '• 체중', value: '`64kg`', inline: true },
            { name: '• 소속 직책', value: '`한국 조사병단 숙련병`', inline: true },
            { name: '• 가치관', value: '`하나는 일어서고 하나는 쓰러진다`', inline: true },
            { name: '• 거주지', value: '`월 로제 트로스트 구`', inline: true },
            { name: '• 가족', value: '`아버지 백터 프라임, 어머니 솔러스 프라임`', inline: true },
            { name: '• 절친', value: '`친구 없음`', inline: true }
        )
        message.channel.send(embed)
    }
        // 레예님 설명
        if (message.content === '샤디스 레드예거') { 
            const embed = new Discord.MessageEmbed()
            .setTitle('redyager')
            .setColor('#FF0000')
            .setImage('https://cdn.discordapp.com/attachments/772381716413022259/774615370811572234/d47f41ca132fc7379a49e7dd4ec26c60.gif')
            .setThumbnail('https://cdn.discordapp.com/attachments/772381716413022259/774612195069788180/QH8j1tC9_400x400_1.png')
            .setDescription('교향인 사이버트론의 재건을 기다리고 있다')
            .addFields(
                { name: '• 나이', value: '`16살`', inline: true },
                { name: '• 출생', value: '`사이버트론 백터시그마`', inline: true },
                { name: '• 신장', value: '`175cm`', inline: true },
                { name: '• 체중', value: '`64kg`', inline: true },
                { name: '• 소속 직책', value: '`한국 조사병단 숙련병`', inline: true },
                { name: '• 가치관', value: '`하나는 일어서고 하나는 쓰러진다`', inline: true },
                { name: '• 거주지', value: '`월 로제 트로스트 구`', inline: true },
                { name: '• 가족', value: '`아버지 백터 프라임, 어머니 솔러스 프라임`', inline: true },
                { name: '• 절친', value: '`친구 없음`', inline: true }
            )
            message.channel.send(embed)
        }
    // 레예님 설명
    if (message.content === '샤디스 redyager') { 
        const embed = new Discord.MessageEmbed()
        .setTitle('redyager')
        .setColor('#FF0000')
        .setImage('https://cdn.discordapp.com/attachments/772381716413022259/774615370811572234/d47f41ca132fc7379a49e7dd4ec26c60.gif')
        .setThumbnail('https://cdn.discordapp.com/attachments/772381716413022259/774612195069788180/QH8j1tC9_400x400_1.png')
        .setDescription('교향인 사이버트론의 재건을 기다리고 있다')
        .addFields(
            { name: '• 나이', value: '`16살`', inline: true },
            { name: '• 출생', value: '`사이버트론 백터시그마`', inline: true },
            { name: '• 신장', value: '`175cm`', inline: true },
            { name: '• 체중', value: '`64kg`', inline: true },
            { name: '• 소속 직책', value: '`한국 조사병단 숙련병`', inline: true },
            { name: '• 가치관', value: '`하나는 일어서고 하나는 쓰러진다`', inline: true },
            { name: '• 거주지', value: '`월 로제 트로스트 구`', inline: true },
            { name: '• 가족', value: '`아버지 백터 프라임, 어머니 솔러스 프라임`', inline: true },
            { name: '• 절친', value: '`친구 없음`', inline: true }
        )
        message.channel.send(embed)
    }
    // 팀스피크 다운
    if (message.content === '샤디스 팀스피크') { 
        const embed = new Discord.MessageEmbed()
        .setColor('#5080F8')
        .setURL('https://www.teamspeak3.com/')
        .setTitle('클릭 시 팀스피크 사이트 이동')
        .setThumbnail('https://blog.kakaocdn.net/dn/chQxE4/btqEuzi5x7x/cAsLdBkS0OZtjx4ofe23ak/img.png')
        .setDescription('**`1)`** 왼쪽 상단에 connections에서 serverlist를 클릭한다 \n **`2)`** 서버 중 [NPIX] Public Teamspeack server를 찾아서 더블클릭한다 \n **`3)`** 창을 close하면 서버를 들어와져 있는데 맨밑에 Survey Corps를 더블클릭한다 \n **`4)`** 다시 상단 위에 tools가 있는데 들어가서 Capture에 들어가 push to talk를 설정한다')
        message.channel.send(embed)
    }
    // 팀스피크 다운
    if (message.content === '샤디스 팀스피크 다운') { 
        const embed = new Discord.MessageEmbed()
        .setColor('#5080F8')
        .setURL('https://www.teamspeak3.com/')
        .setTitle('클릭 시 팀스피크 사이트 이동')
        .setThumbnail('https://blog.kakaocdn.net/dn/chQxE4/btqEuzi5x7x/cAsLdBkS0OZtjx4ofe23ak/img.png')
        .setDescription('**`1)`** 왼쪽 상단에 connections에서 serverlist를 클릭한다 \n **`2)`** 서버 중 [NPIX] Public Teamspeack server를 찾아서 더블클릭한다 \n **`3)`** 창을 close하면 서버를 들어와져 있는데 맨밑에 Survey Corps를 더블클릭한다 \n **`4)`** 다시 상단 위에 tools가 있는데 들어가서 Capture에 들어가 push to talk를 설정한다')
        message.channel.send(embed)
    }
    // 팀스피크 다운
    if (message.content === '샤디스 팀스피크 다운로드') { 
        const embed = new Discord.MessageEmbed()
        .setColor('#5080F8')
        .setURL('https://www.teamspeak3.com/')
        .setTitle('클릭 시 팀스피크 사이트 이동')
        .setThumbnail('https://blog.kakaocdn.net/dn/chQxE4/btqEuzi5x7x/cAsLdBkS0OZtjx4ofe23ak/img.png')
        .setDescription('**`1)`** 왼쪽 상단에 connections에서 serverlist를 클릭한다 \n **`2)`** 서버 중 [NPIX] Public Teamspeack server를 찾아서 더블클릭한다 \n **`3)`** 창을 close하면 서버를 들어와져 있는데 맨밑에 Survey Corps를 더블클릭한다 \n **`4)`** 다시 상단 위에 tools가 있는데 들어가서 Capture에 들어가 push to talk를 설정한다')
        message.channel.send(embed)
    }
});

client.login(process.env.token);