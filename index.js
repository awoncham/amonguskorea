const Discord = require('discord.js');
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });

client.on('ready', () => {
    console.log('심장을 바치는 것을 성공하였다');
    client.user.setActivity('심장을 바쳐라', { type: 'WATCHING' });
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(ch => ch.id === '702744515802300466');
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
    if (message.content === '샤디스 색상') { //인게임 닉네임 색상 코드
        const embed = new Discord.MessageEmbed()
        .setTitle('인게임 닉네임 색상 코드')
        .setDescription('벽외조사 할때 자신의 소속에 맞게 색상 코드를 적용해주세요')
        .addFields(
            { name: '**▫️ 단장 (Commander)**', value: '**`[3300FF]`**', inline: false },
            { name: '**▫️ 분대장 (SquadLeader)**', value: '**`[FFFF33]`**', inline: false },
            { name: '**▫️ 반장 (TeamLeader)**', value: '**`[FF0000]`**', inline: false },
            { name: '**▫️ 병사 (Soldier)**', value: '**`[FFFFFF]`**', inline: false }
        )
        message.channel.send(embed)
    }
    if (message.content === '샤디스 초대코드') { //서버 초대 링크
        const embed = new Discord.MessageEmbed()
        .setDescription('**https://discord.gg/SZeXuZ5**')
        message.channel.send(embed)
    }
    if (message.content === '샤디스 다운로드') { //AOTTG 게임 다운로드
        const embed = new Discord.MessageEmbed()
        .addFields(
            { name: '▫️ EM 모드', value: 'http://asq.kr/I8ODb1WKVZbK', inline: false },
            { name: '▫️ RC 모드', value: 'https://tinyurl.com/yax2omx6', inline: false },
            { name: '▫️ RRC 모드', value: 'http://asq.kr/wCTW34208gOa', inline: false },
            { name: '▫️ ANARCHY 모드', value: 'https://url.kr/Ne7YZ5', inline: false },
            { name: '▫️ RC83 모드', value: 'https://rc83.rocks/', inline: false },
        )
        message.channel.send(embed)
    }
    if (message.content === '샤디스 맵') { //맵 파일 다운로드
        const embed = new Discord.MessageEmbed()
        .addField('▫️ 카라네스', '다운로드 : https://url.kr/TV8sFR', false)
        .setImage('https://cdn.discordapp.com/attachments/760381117634314280/765823400551645214/-1.png')
        message.channel.send(embed)
    }
    if (message.content === '샤디스 역할') { //조사병단 중요 역할
        const embed = new Discord.MessageEmbed()
        .setTitle('조사병단 총괄 시스템 부서 분류')
        .setDescription('벽외조사 할때 자신의 소속에 맞게 색상 코드를 적용해주세요')
        .addFields(
            { name: '▫️ 행정부', value: '@여왕 @단장 @병사장 @분대장', inline: false },
            { name: '▫️ 입법부', value: '@반장 @보좌관', inline: false },
            { name: '▫️ 사법부', value: '@검사', inline: false }
        )
        message.channel.send(embed)
    }
    if (message.content === '샤디스 계급') { //조사병단 기본적인 계급
        const embed = new Discord.MessageEmbed()
        .setTitle('계급 안내')
        .setDescription('실력에 뛰어난 자에 대하여 특례가 있을 수도 있습니다')
        .addFields(
            { name: '▫️ 훈련병', value: '아직 벽외조사를 경험하지 못한 병사', inline: false },
            { name: '▫️ 신병', value: '벽외조사를 1번 이상 참여한 병사', inline: false },
            { name: '▫️ 숙련병', value: '벽외조사에서 2번 이상 생존하여 돌아온 병사', inline: false },
            { name: '▫️ 베테랑', value: '벽외조사에서 10번 이상 생존하여 돌아온 병사', inline: false },
            { name: '▫️ 엘리트', value: '특별 임명', inline: false }
        )
        message.channel.send(embed)
    }
    if (message.content === '샤디스 조사병단') { //조사병단 단장님들 태그
        const embed = new Discord.MessageEmbed()
        .setTitle('조사병단 편성도')
        .setDescription('각 반에 반장님이십니다')
        .addFields(
            { name: '▫️ 지휘 분대', value: '`ph6400#4243`', inline: false },
            { name: '▫️ 1반', value: '`심심해#4154`', inline: false },
            { name: '▫️ 2반', value: '`MASK#7165`', inline: false },
            { name: '▫️ 3반', value: '`덕소물주먹호형#5446`', inline: false },
            { name: '▫️ 4반', value: '`Yang Sick.me#9559`', inline: false },
            { name: '▫️ 5반', value: '`Bion2467#8719`', inline: false },
            { name: '▫️ 6반', value: '`Red_Orange_Green_Purple_apple_G#2412`', inline: false },
            { name: '▫️ 7반', value: '`이한별#6657`', inline: false }
        )
        message.channel.send(embed)
    }
    if (message.content === '샤디스 분단') { //분대 및 반 설명
        const embed = new Discord.MessageEmbed()
        .setDescription('**`분대 및 반 설명`**')
        .setImage('https://cdn.discordapp.com/attachments/707566851034447934/711886956732088340/192fb97c7572e0e8949ad52c10a02cb9.png')
        .addFields(
            { name: '▫️ 지휘분대 (HeadQuater Control Squad)', value: '작전지휘관인 단장이 중앙에서 진형 전체를 통제하는 퍼스트 컨트롤 팀이다. 중앙에서 1,2열 반들을 지원하며 특수작전들을 수행한다. 단장이 신속하고 적합한 통제를 할 수 있도록 진형의 위치파악 서포팅이나 작전 조언을 하는 등 전투보다는 지략을 우선으로 내세우는 팀이다. 진형의 2열에 있기 때문에 전방에서 전투를 종종 해야해서 적절한 전투능력도 필요하며 뛰어난 위치파악능력, 자료해석능력, 상황판단능력을 요구한다.', inline: false },
            { name: '▫️ 탐색반 (Scout Team)', value: '진형의 최전방에서 거인과 가장 먼저 조우하여 전투를 하는 수색반이다. 거인과 조우시 거인이 오는 방향으로 신호탄을 발사하여 다른 반들에게 먼저 알리는 역할도 수행한다. 최전방에서 전투를 해야하는 만큼 뛰어난 전투능력과 입체기동실력을 요구한다. 그만큼 생존률은 가장 낮은 팀이기에 자신있는 전투실력을 가지고 있을 때만 지원하는 것을 추천한다.', inline: false },
            { name: '▫️ 전달반 (Transmission Team)', value: '진형의 2열에서 탐색반이 발견한 거인의 신호탄을 중앙과 반대편으로 전달하는 역할을 한다. 중앙과 최전방 사이에서 유동성있게 움직이는 기동팀이자, 탐색반이 고전하고 있을 시 지원을 맡아야하는 지원팀이다. 탐색반이 궤멸하면 2열이 1열로 변경되므로 어느정도 전투능력을 요구한다. ', inline: false },
            { name: '▫️ 중앙 대기반 (Center Back Team)', value: '진형의 중앙 후방에서 후열 또는 전달의 서포팅을 맡는 팀이다. 장거리 수색진형에서 가장 안전한 위치에 있기에 거인과 조우하는 일은 가장 적다. 전투에 자신이 없거나 벽외조사에 처음 참가하는 훈련병들은 이 반으로 참가하는 것을 추천한다. ', inline: false },
            { name: '▫️ 후열반 (The Back Defense Team) ', value: '진형의 가장 후방에서 뒤를 맡는 팀이다. 진형의 뒤에 위치하는 만큼 먼저 거인과 조우하는 일은 적지만, 다른 반들이 놓치거나 뒤에서 추격하는 거인들과 전투를 해야하는 역할을 맡고있다.', inline: false }
        )
        message.channel.send(embed)
    }
    if (message.content === '샤디스 진형') { //분대 및 반 설명
        const embed = new Discord.MessageEmbed()
        .setDescription('**`분대 및 반 설명`**')
        .setImage('https://cdn.discordapp.com/attachments/707566851034447934/711886956732088340/192fb97c7572e0e8949ad52c10a02cb9.png')
        .addFields(
            { name: '▫️ 지휘분대 (HeadQuater Control Squad)', value: '작전지휘관인 단장이 중앙에서 진형 전체를 통제하는 퍼스트 컨트롤 팀이다. 중앙에서 1,2열 반들을 지원하며 특수작전들을 수행한다. 단장이 신속하고 적합한 통제를 할 수 있도록 진형의 위치파악 서포팅이나 작전 조언을 하는 등 전투보다는 지략을 우선으로 내세우는 팀이다. 진형의 2열에 있기 때문에 전방에서 전투를 종종 해야해서 적절한 전투능력도 필요하며 뛰어난 위치파악능력, 자료해석능력, 상황판단능력을 요구한다.', inline: false },
            { name: '▫️ 탐색반 (Scout Team)', value: '진형의 최전방에서 거인과 가장 먼저 조우하여 전투를 하는 수색반이다. 거인과 조우시 거인이 오는 방향으로 신호탄을 발사하여 다른 반들에게 먼저 알리는 역할도 수행한다. 최전방에서 전투를 해야하는 만큼 뛰어난 전투능력과 입체기동실력을 요구한다. 그만큼 생존률은 가장 낮은 팀이기에 자신있는 전투실력을 가지고 있을 때만 지원하는 것을 추천한다.', inline: false },
            { name: '▫️ 전달반 (Transmission Team)', value: '진형의 2열에서 탐색반이 발견한 거인의 신호탄을 중앙과 반대편으로 전달하는 역할을 한다. 중앙과 최전방 사이에서 유동성있게 움직이는 기동팀이자, 탐색반이 고전하고 있을 시 지원을 맡아야하는 지원팀이다. 탐색반이 궤멸하면 2열이 1열로 변경되므로 어느정도 전투능력을 요구한다. ', inline: false },
            { name: '▫️ 중앙 대기반 (Center Back Team)', value: '진형의 중앙 후방에서 후열 또는 전달의 서포팅을 맡는 팀이다. 장거리 수색진형에서 가장 안전한 위치에 있기에 거인과 조우하는 일은 가장 적다. 전투에 자신이 없거나 벽외조사에 처음 참가하는 훈련병들은 이 반으로 참가하는 것을 추천한다. ', inline: false },
            { name: '▫️ 후열반 (The Back Defense Team) ', value: '진형의 가장 후방에서 뒤를 맡는 팀이다. 진형의 뒤에 위치하는 만큼 먼저 거인과 조우하는 일은 적지만, 다른 반들이 놓치거나 뒤에서 추격하는 거인들과 전투를 해야하는 역할을 맡고있다.', inline: false }
        )
        message.channel.send(embed)
    }
    if (message.content === '샤디스 연막탄') { //연막탄 설명
        const embed = new Discord.MessageEmbed()
        .setDescription('**`연막탄 가이드`**')
        .setImage('https://lh3.googleusercontent.com/proxy/jsd62v6ekQBqFHlEFmArtoRbjTH4yqsEcTdUobgB1IyBXG1cJx2FUnqVV2087qd8uYRHYlATGJrgXzZyW5N8_z9XFDgqDPiFJXdXrw')
        .addFields(
            { name: '▫️ 초록색', value: '진형의 방향을 결정하는 연막탄이며, 단장이 발사한 방향대로 각 반장들은 전부 발사한다. ', inline: false },
            { name: '▫️ 적색', value: '거인이 접근할 시 오는 방향으로 발사해야할 연막탄이다. 거인을 단순히 발견했을 때는 지나치고 거인이 진형으로 접근중일때만 발사하여 지휘분대에 알린다.', inline: false },
            { name: '▫️ 흑색', value: '기행종을 발견할 시 발사해야할 연막탄이다. 적색과 달리 발견하자마자 발사해야하며, 크롤러나 특이행동을 보이는 거인일때 발사하여 알린다.', inline: false },
            { name: '▫️ 보라색', value: '진형이 어느정도 흐트려졌을 때 단장이 진형을 다시 맞추기 위해서 발사하는 연막탄. 이 연막탄이 발사된다면 전부 보라색 연막탄의 위치를 확인하고 각자의 포메이션 위치로 이동해야 한다. 교전 중이거나 먼저 앞에 있더라도 즉시 진형으로 복귀', inline: false },
            { name: '▫️ 노란색', value: '거인과 교전할 수 없거나 굉장히 어려운 상황에 봉착했을 때 발사하는 연막탄. 노란 연막탄을 확인한다면 인근분대가 지원해줄 것이다.', inline: false },
        )
        message.channel.send(embed)
    }
})

client.login("NzYzOTY3MDM2NDA5MzgwOTA0.X3_Zvw.AFELsHOWQbESBCIhi6a4U9vSelA");