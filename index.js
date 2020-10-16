const Discord = require('discord.js');
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });

client.on('ready', function() {   
    console.log('심장을 바치는 것을 성공하였다');
    client.user.setActivity('심장을 바쳐라', { type: 'WATCHING' });
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.id === '702744515802300466');
  if(!channel) return;
  const embed = new Discord.MessageEmbed()
    .setDescription(`${member} 조사병단에 입단 한 걸 환영한다, 벽외조사에서 살고 싶으면 규칙을 확인해라!`)
    channel.send(embed)
})

client.on('message', message => {
    if (message.content === '샤디스 안녕') { // 샤디스 인사(반말)
        message.channel.send('어디서 반말이냐!');
    }
    if (message.content === '샤디스 안녕하세요') { // 샤디스 인사(존댓말)
        message.channel.send('그래');
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
        .setTitle('인게임 닉네임 색상 코드')
        .setDescription('벽외조사 할때 자신의 소속에 맞게 색상 코드를 적용해주세요')
        .addFields(
            { name: '**• 단장 (Commander)**', value: '**`[3300FF]`**', inline: false },
            { name: '**• 분대장 (SquadLeader)**', value: '**`[FFFF33]`**', inline: false },
            { name: '**• 반장 (TeamLeader)**', value: '**`[FF0000]`**', inline: false },
            { name: '**• 병사 (Soldier)**', value: '**`[FFFFFF]`**', inline: false }
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
        .setDescription('**`조사병단 공식 유니폼`**')
        .addFields(
            { name: '• 망토', value: 'https://i.imgur.com/HQjo5mK.png', inline: false },
            { name: '• 남성 제복', value: 'https://i.imgur.com/555gO79.png', inline: false },
            { name: '• 여성 제복', value: 'https://i.imgur.com/SIEizIT.png', inline: false }
        )
        message.channel.send(embed)
    }
    if (message.content === '샤디스 다운로드') { //AOTTG 게임 다운로드
        const embed = new Discord.MessageEmbed()
        .addFields(
            { name: '• EM 모드', value: 'http://asq.kr/I8ODb1WKVZbK', inline: false },
            { name: '• RC 모드', value: 'https://tinyurl.com/yax2omx6', inline: false },
            { name: '• RRC 모드', value: 'http://asq.kr/wCTW34208gOa', inline: false },
            { name: '• ANARCHY 모드', value: 'https://url.kr/Ne7YZ5', inline: false },
            { name: '• RC83 모드', value: 'https://rc83.rocks/', inline: false },
        )
        message.channel.send(embed)
    }
    if (message.content === '샤디스 맵') { //맵 파일 다운로드
        const embed = new Discord.MessageEmbed()
        .addField('• 카라네스', '다운로드 : https://url.kr/TV8sFR', false)
        .setImage('https://cdn.discordapp.com/attachments/760381117634314280/765823400551645214/-1.png')
        message.channel.send(embed)
    }
    if (message.content === '샤디스 계급') { //조사병단 기본적인 계급
        const embed = new Discord.MessageEmbed()
        .setTitle('조사병단 계급 배치도')
        .setDescription('조사병단의 계급 시스템이다')
        .addFields(
            { name: '• @단장', value: '조사병단의 총괄 책임자 및 최고 지휘관이다. 장거리 수색 진형 전체를 컨트롤하며 작전 목표 수행을 위한 모든 책임을 진다. 2~40명 또는 합동 조사에서는 6~70명까지 통솔해야 하는 만큼 뛰어난 통솔력을 가지고 전반적인 벽외조사의 이해도를 가지고 있어야 한다.', inline: false },
            { name: '• @분대장', value: '벽외조사 섹션 책임자 및 지휘권 2인자이다. 단장의 부재시 진형의 지휘권을 이어받는다. 반장이 한 반만을 통제할 수 있다면 분대장은 반장들을 통제하고 좌익이나 우익등 전체를 컨트롤한다. ', inline: false },
            { name: '• @병사장', value: '단장 따가리다', inline: false },
            { name: '• @반장', value: '각 반을 책임지는 반장이다. 각 조사마다 한 반에는 3~6명정도의 병사들로 구성돼 출전하며, 반들은 장거리 수색진형에서 살을 이룬다. 장교급의 직책인 만큼 뛰어난 리더십과 통솔력을 가지며 반을 통솔하는 능력과 책임감을 가져야한다.', inline: false },
            { name: '• @베테랑', value: '벽외조사에서 뛰어난 활약을 하는 병사들에게 수여되는 계급이다. 벽외조사의 높은 참여율과 뛰어난 실력을 필요로 한다. ', inline: false },
            { name: '• @숙련병', value: '어느정도 벽외조사에서 살아남았으며 벽외조사에 익숙해져서  올바른 장거리 수색진형을 구현할 수 있는 계급이다. 평균정도의 전투력을 가지고 있으며 각 벽외조사마다 작전의 이해도와 거인과의 전투에서 숙달돼있다. 대부분의 병사들은 이 직책까지 쉽게 올라올 수 있다.', inline: false },
            { name: '• @신병', value: '첫 벽외조사에서 살아온 병사 및 입단한지 얼마 안 된 신병이다. 조사병단에 입단한지 오랜 시간이 흐르지 못했거나 거인을 구축하기 위한 실력 베이스가 부족할 경우 이 계급에서 오랫동안 머무르는 상황이 발생할 수도 있다. 이 경우에는 실력을 갈고 닦아 숙련병으로 진급해야 한다.', inline: false },
            { name: '• @훈련병', value: '벽외조사에 참가하기 위해 훈련중인 병사들이다. 조사병단에 입단했으나 아직 벽외조사에 참가하지 못한 병사들로 구성돼 있다. 이들은 벽외조사에 참가하여 더 높은 계급으로 승진할 수 있다.', inline: false }
        )
        message.channel.send(embed)
    }
    if (message.content === '샤디스 조사병단') { //조사병단 단장님들 태그
        const embed = new Discord.MessageEmbed()
        .setTitle('조사병단 편성도')
        .setDescription('각 반에 반장님이십니다')
        .addFields(
            { name: '• 지휘 분대', value: '`ph6400#4243`', inline: false },
            { name: '• 1반', value: '`심심해#4154`', inline: false },
            { name: '• 2반', value: '`MASK#7165`', inline: false },
            { name: '• 3반', value: '`덕소물주먹호형#5446`', inline: false },
            { name: '• 4반', value: '`Yang Sick.me#9559`', inline: false },
            { name: '• 5반', value: '`Bion2467#8719`', inline: false },
            { name: '• 6반', value: '`Red_Orange_Green_Purple_apple_G#2412`', inline: false },
            { name: '• 7반', value: '`이한별#6657`', inline: false }
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
        .setDescription('**`연막탄 가이드`**')
        .setImage('https://64.media.tumblr.com/332f73e473e6b60b377937f68e117b87/tumblr_oqmcwoxf4U1tzew82o1_500.gif')
        .addFields(
            { name: '• 초록색', value: '진형의 방향을 결정하는 연막탄이며, 단장이 발사한 방향대로 각 반장들은 전부 발사한다. ', inline: false },
            { name: '• 적색', value: '거인이 접근할 시 오는 방향으로 발사해야할 연막탄이다. 거인을 단순히 발견했을 때는 지나치고 거인이 진형으로 접근중일때만 발사하여 지휘분대에 알린다.', inline: false },
            { name: '• 흑색', value: '기행종을 발견할 시 발사해야할 연막탄이다. 적색과 달리 발견하자마자 발사해야하며, 크롤러나 특이행동을 보이는 거인일때 발사하여 알린다.', inline: false },
            { name: '• 보라색', value: '진형이 어느정도 흐트려졌을 때 단장이 진형을 다시 맞추기 위해서 발사하는 연막탄. 이 연막탄이 발사된다면 전부 보라색 연막탄의 위치를 확인하고 각자의 포메이션 위치로 이동해야 한다. 교전 중이거나 먼저 앞에 있더라도 즉시 진형으로 복귀', inline: false },
            { name: '• 노란색', value: '거인과 교전할 수 없거나 굉장히 어려운 상황에 봉착했을 때 발사하는 연막탄. 노란 연막탄을 확인한다면 인근분대가 지원해줄 것이다.', inline: false },
        )
        message.channel.send(embed)
    }
    if (message.content === '샤디스 리바이') { // 리바이 아커만 설명
        const embed = new Discord.MessageEmbed()
        .setTitle('리바이 아커만 ')
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
        .setTitle('리바이 아커만 ')
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
        .setThumbnail('https://pbs.twimg.com/profile_images/344513261568320220/c391d25327a78e4af17d973a04356520_400x400.png')
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
        .setThumbnail('https://pbs.twimg.com/profile_images/344513261568320220/c391d25327a78e4af17d973a04356520_400x400.png')
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
        .setThumbnail('https://pbs.twimg.com/profile_images/344513261568320220/c391d25327a78e4af17d973a04356520_400x400.png')
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
        .setThumbnail('https://pbs.twimg.com/profile_images/344513261568320220/c391d25327a78e4af17d973a04356520_400x400.png')
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
    if (message.content === '샤디스 도움말') { // 샤디스 이용 방법
        const embed = new Discord.MessageEmbed()
        .setAuthor('샤디스 명령어 모음', 'https://media.discordapp.net/attachments/758884038962053133/766105918991106048/unknown.png')
        .setDescription('모든 샤디스 명령어의 접두사는 \'샤디스\' 입니다')
        .setThumbnail('https://cdn.discordapp.com/attachments/758884038962053133/766105918991106048/unknown.png')
        .addFields(
            { name: '**진격의 거인**', value: '`샤디스 도움말 진격의 거인`', inline: true },
            { name: '**조사병단**', value: '`샤디스 도움말 조사병단`', inline: true }
        )
        message.channel.send(embed)
    }
    if (message.content === '샤디스 도움말 진격의 거인') { // 모든 진격의 거인 명령어 모음
        const embed = new Discord.MessageEmbed()
        .setAuthor('샤디스 진격의 거인 명령어 모음', 'https://cdn.discordapp.com/attachments/758884038962053133/766172466271092776/fd1.png')
        .setThumbnail('https://cdn.discordapp.com/attachments/758884038962053133/766172466271092776/fd1.png')
        .addFields(
            { name: '**`샤디스 리바이`**', value: '진격의 거인 리바이의 대해 자세히 나옵니다', inline: true },
            { name: '**`샤디스 에렌`**', value: '진격의 거인 에렌의 대해 자세히 나옵니다', inline: true },
            { name: '**`샤디스 미카사`**', value: '진격의 거인 미카사의 대해 자세히 나옵니다', inline: true },
            { name: '**`샤디스 엘빈`**', value: '진격의 거인 엘빈의 대해 자세히 나옵니다', inline: true },
            { name: '**`샤디스 (명대사)`**', value: '진격의 거인에서 나온 명장면을 붙혀 넣으시면 해당 장면에 GIF가 나옵니다!', inline: true },
            { name: '**`샤디스 (진격거 캐릭터 닉네임)`**', value: '진격의 거인 캐릭터 닉네임을 적어보시면 거의 다 나와있어요!', inline: true }
        )
        message.channel.send(embed)
    }
    if (message.content === '샤디스 도움말 조사병단') { // 모든 조사병단 명령어 모음
        const embed = new Discord.MessageEmbed()
        .setAuthor('샤디스 조사병단 명령어 모음', 'https://cdn.discordapp.com/attachments/758884038962053133/766172466271092776/fd1.png')
        .setThumbnail('https://cdn.discordapp.com/attachments/758884038962053133/766172466271092776/fd1.png')
        .addFields(
            { name: '**`샤디스 다운로드`**', value: '진격의 거인 게임 모음집입니다 (벽외조사에 참여하실려면 EM모드 다운하세요)', inline: true },
            { name: '**`샤디스 맵`**', value: '벽외조사를 하기 위해 꼭 다운로드 해야하는 카라네스 맵입니다', inline: true },
            { name: '**`샤디스 계급`**', value: '한국 조사병단 보좌관 역할 모음', inline: true },
            { name: '**`샤디스 조사병단`**', value: '조사병단 각 반의 반장들입니다', inline: true },
            { name: '**`샤디스 분단(진형)`**', value: '각 반의 맞게 자신의 진형으로 보고 가세요', inline: true },
            { name: '**`샤디스 연막탄`**', value: '어떻게 연막을 써야 하는 지 나와있습니다', inline: true },
            { name: '**`샤디스 조사병단 유니폼`**', value: '조사병단 공식 유니폼들이 있어요!', inline: true },
            { name: '**`샤디스 (인물)`**', value: '인물칸에다가 조사병단 디스코드에 있는 보좌관들의 닉네임을 적어보세요!', inline: true }
        )
        message.channel.send(embed)
    }
    if (message.content === '샤디스 엘빈') { // 엘빈 스미스 설명
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
    if (message.content === '샤디스 엘빈 스미스') { // 엘빈 스미스 설명
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
    if (message.content === '샤디스 에르빈') { // 엘빈 스미스 설명
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
    if (message.content === '샤디스 에르빈 스미스') { // 엘빈 스미스 설명
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
    if (message.content === '샤디스 ph6400') { // ph6400 설명
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
    if (message.content === '샤디스 나물') { // 나물 설명
        const embed = new Discord.MessageEmbed()
        .setTitle('나물')
        .setColor('#973AE8')
        .setImage('https://cdn.discordapp.com/attachments/752784966475055138/766162966478848000/5a4fd668044bb896.png')
        .setThumbnail('https://cdn.discordapp.com/attachments/758884038962053133/766163117767655445/afdsf1.png')
        .setDescription('한국 조사병단의 대표 여성')
        .addFields(
            { name: '• 나이', value: '`15살`', inline: true },
            { name: '• 출생', value: '`836년 1월 2일 월 시나 출신`', inline: true },
            { name: '• 신장', value: '`156cm`', inline: true },
            { name: '• 체중', value: '`44kg`', inline: true },
            { name: '• 소속 직책', value: '`한국 조사병단 숙련병`', inline: true },
            { name: '• 가치관', value: '`내 몸 내가 알아서 챙기자`', inline: true },
            { name: '• 거주지', value: '`파라디 섬 월 로제 카라네스구`', inline: true },
            { name: '• 가족', value: '`아버지: 김태평 어머니: 김바다 동생: 김호림`', inline: true },
            { name: '• 부하들', value: '`조사병단 신병과 훈련병들`', inline: true }
        )
        message.channel.send(embed)
    }
    if (message.content === '샤디스 namull') { // 나물 설명
        const embed = new Discord.MessageEmbed()
        .setTitle('나물')
        .setColor('#973AE8')
        .setImage('https://cdn.discordapp.com/attachments/752784966475055138/766162966478848000/5a4fd668044bb896.png')
        .setThumbnail('https://cdn.discordapp.com/attachments/758884038962053133/766163117767655445/afdsf1.png')
        .setDescription('한국 조사병단의 대표 여성')
        .addFields(
            { name: '• 나이', value: '`15살`', inline: true },
            { name: '• 출생', value: '`836년 1월 2일 월 시나 출신`', inline: true },
            { name: '• 신장', value: '`156cm`', inline: true },
            { name: '• 체중', value: '`44kg`', inline: true },
            { name: '• 소속 직책', value: '`한국 조사병단 숙련병`', inline: true },
            { name: '• 가치관', value: '`내 몸 내가 알아서 챙기자`', inline: true },
            { name: '• 거주지', value: '`파라디 섬 월 로제 카라네스구`', inline: true },
            { name: '• 가족', value: '`아버지: 김태평 어머니: 김바다 동생: 김호림`', inline: true },
            { name: '• 부하들', value: '`조사병단 신병과 훈련병들`', inline: true }
        )
        message.channel.send(embed)
    }
    if (message.content === '샤디스 리하이') { // 리하이 설명
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
    if (message.content === '샤디스 리하이 아커만') { // 리하이 설명
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
    if (message.content === '샤디스 미카사 아커만') { // 미카사 설명
        const embed = new Discord.MessageEmbed()
        .setTitle('미카사 아커만')
        .setColor('#424242')
        .setImage('https://1.gall-gif.com/tdgall/files/attach/images/82/233/698/061/79479656c630fbe1dc57733acd90bcc5.gif')
        .setThumbnail('https://cdn.discordapp.com/attachments/758884038962053133/766178234055917609/f1.png')
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
    if (message.content === '샤디스 미카사') { // 미카사 설명
        const embed = new Discord.MessageEmbed()
        .setTitle('미카사 아커만')
        .setColor('#424242')
        .setImage('https://1.gall-gif.com/tdgall/files/attach/images/82/233/698/061/79479656c630fbe1dc57733acd90bcc5.gif')
        .setThumbnail('https://cdn.discordapp.com/attachments/758884038962053133/766178234055917609/f1.png')
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
    if (message.content === '샤디스 양식') { // 양식님 설명
        const embed = new Discord.MessageEmbed()
        .setTitle('양식')
        .setColor('#F781F3')
        .setImage('https://cdn.discordapp.com/attachments/742051945472065546/766447361735917578/1602747124.gif')
        .setThumbnail('https://cdn.discordapp.com/attachments/752784966475055138/766181849822920704/61f45102a97c69113d7f501c93d4eee0.png')
        .setDescription('한국 조사병단 분대장')
        .addFields(
            { name: '• 나이', value: '`18살`', inline: true },
            { name: '• 출생', value: '`파라디 섬 월 로제`', inline: true },
            { name: '• 신장', value: '`180cm`', inline: true },
            { name: '• 체중', value: '`75kg`', inline: true },
            { name: '• 소속 직책', value: '`4반 분대장`', inline: true },
            { name: '• 가치관', value: '`귀여우면 다 좋아`', inline: true },
            { name: '• 거주지', value: '`파라디 섬 월 로제 트로스트 구`', inline: true },
            { name: '• 가족', value: '`아버지: 개 어머니: 개`', inline: true },
            { name: '• 절친', value: '`친구 따윈 없다`', inline: true }
        )
        message.channel.send(embed)
    }
    if (message.content === '샤디스 어택') { // 어택님 설명
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
    if (message.content === '샤디스 비온') { // 비온님 설명
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
            { name: '• 가치관', value: '`태산보다 무거운 죽음도 있고 겻털만큼 가벼운 죽음도 있다`', inline: true },
            { name: '• 거주지', value: '`월 로제 트로스트구`', inline: true },
            { name: '• 가족', value: '`아버지: 24 어머니: 67`', inline: true },
            { name: '• 절친', value: '`시간시나구에서 암살당함`', inline: true }
        )
        message.channel.send(embed)
    }
    if (message.content === '샤디스 애플') { // 애플님 설명
        const embed = new Discord.MessageEmbed()
        .setTitle('Red_Orange_Yellow_Green_Blue_Purple_Black_White_apple_G')
        .setColor('#FF0000')
        .setImage('https://acegif.com/wp-content/uploads/apple.gif')
        .setThumbnail('https://cdn.discordapp.com/attachments/763956033789886505/766225257924263936/20200801_231259.jpg')
        .setDescription('항상 거인의 뒷태를 사랑스럽게 바라본다')
        .addFields(
            { name: '• 나이', value: '`14살`', inline: true },
            { name: '• 출생', value: '`월 시나 스토헤스 구`', inline: true },
            { name: '• 신장', value: '`169`', inline: true },
            { name: '• 체중', value: '`60kg`', inline: true },
            { name: '• 소속 직책', value: '`조사병단 반장`', inline: true },
            { name: '• 가치관', value: '`재밌으면 되`', inline: true },
            { name: '• 거주지', value: '`월 로제 트로스트구`', inline: true },
            { name: '• 가족', value: '`아버지: 죠셉 죠스타 어머니: 수지`', inline: true },
            { name: '• 절친', value: '`셀 수 없이 많음`', inline: true }
        )
        message.channel.send(embed)
    }
    if (message.content === '샤디스 사과') { // 애플님 설명
        const embed = new Discord.MessageEmbed()
        .setTitle('Red_Orange_Yellow_Green_Blue_Purple_Black_White_apple_G')
        .setColor('#FF0000')
        .setImage('https://acegif.com/wp-content/uploads/apple.gif')
        .setThumbnail('https://cdn.discordapp.com/attachments/763956033789886505/766225257924263936/20200801_231259.jpg')
        .setDescription('항상 거인의 뒷태를 사랑스럽게 바라본다')
        .addFields(
            { name: '• 나이', value: '`14살`', inline: true },
            { name: '• 출생', value: '`월 시나 스토헤스 구`', inline: true },
            { name: '• 신장', value: '`169`', inline: true },
            { name: '• 체중', value: '`60kg`', inline: true },
            { name: '• 소속 직책', value: '`조사병단 반장`', inline: true },
            { name: '• 가치관', value: '`재밌으면 되`', inline: true },
            { name: '• 거주지', value: '`월 로제 트로스트구`', inline: true },
            { name: '• 가족', value: '`아버지: 죠셉 죠스타 어머니: 수지`', inline: true },
            { name: '• 절친', value: '`셀 수 없이 많음`', inline: true }
        )
        message.channel.send(embed)
    }
});

client.login(process.env.token);