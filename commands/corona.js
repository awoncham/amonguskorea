const fetch = require('node-fetch');
const request = require("request")
const Discord = require('discord.js')

let url = "http://ncov.mohw.go.kr/bdBoardList_Real.do?brdId=1&brdGubun=11&ncvContSeq=&contSeq=&board_id=&gubun="

module.exports = {
      name: "코로나",
      description: "대한민국 코로나 상태",

	async run (bot, message, args) {
        fetch(`https://covid19.mathdro.id/api/countries/Korea, south`)
            .then(response => response.json())
            .then(data => {
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()

                let a = `전체 확진자 [${confirmed}]\n전체 완치자 [${recovered}]\n전체 사망자 [${deaths}]`

                request(url, (error, response, body) => {
                    let info = '', text1 = '', text2 = '', text3 = '';
    
                    let 해외 = response.body.split('DP_data.oversea.push').slice(1, 8).map(x => x.split('("')[1].split('")')[0]); // 해외 유입
                    let 국내 = response.body.split('DP_data.region.push').slice(1, 8).map(x => x.split('("')[1].split('")')[0]); // 국내 발생
                    let date = response.body.split('DP_data.date.push').slice(1, 8).map(x => x.split('("')[1].split('")')[0]); // 날짜
                    let 코로나리스트 = `\`\`\`md\n`;
                    코로나리스트 += `# 최근 일주일\n\n`;
                    코로나리스트 += `날짜 - 신규확진자 / 국내발생자 - 해외유입자\n\n`;
                    코로나리스트 += date.map((x, i) => {
                        if (i + 1 == date.length) {
                            info = "대한민국 확진자 - 2021." + x + '. 00시 기준';
                            text1 = "신규 전체 확진자 [" + (parseInt(해외[i]) + parseInt(국내[i])) + "]";
                            text3 = "신규 해외 유입자 [" + 해외[i] + "]";
                            text2 = "신규 국내 발생자 [" + 국내[i] + "]";
                        }
                        return `2021.${x} - ${parseInt(해외[i]) + parseInt(국내[i])} / ${국내[i]} - ${해외[i]}`;
                    }).join('\n')
                    코로나리스트 += `\`\`\``;
    
                    const b = `\`\`\`md\n# ${info}\n\n${text1}\n${text2}\n${text3}\n\`\`\`\n${코로나리스트}`
                    let embed = new Discord.MessageEmbed()
                    embed.setTitle('대한민국 COVID-19 확진현황')
                    embed.setURL('http://ncov.mohw.go.kr/bdBoardList_Real.do?brdId=1&brdGubun=11&ncvContSeq=&contSeq=&board_id=&gubun=')
                    embed.setColor('GREEN')
                    embed.setTimestamp()
                    embed.setFooter(message.author.tag, message.author.avatarURL({dynamic: true}))
                    embed.setDescription('```md\n# 대한민국 전체 확진자\n\n' + a + '\n```\n' + `${b}`)
                    message.channel.send(embed)
                })
            })
    }
}