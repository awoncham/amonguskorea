const Discord = require('discord.js');
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });

client.on('ready', function() {   

    console.log('히스토리아 봇 구동 성공');
		
});

// 서버 입장 메시지
client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.id === '815418831198748692');
    if(!channel) return;
    const embed = new Discord.MessageEmbed()
      .setColor('#00FF00')
      .setDescription(`${member} 님께서 \`𝗚𝗔𝗠𝗝𝗔\` 길드 서버에 입장하셨습니다`)
      channel.send(embed)
			member.roles.add('815421166318649354')
			member.roles.add('815422085932253204')
    });

// 서버 퇴장 메시지
client.on('guildMemberRemove', member => {
    const channel = member.guild.channels.cache.find(ch => ch.id === '815418831198748692');
    if(!channel) return;
    const embed = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setDescription(`${member} 님께서 \`𝗚𝗔𝗠𝗝𝗔\` 길드 서버를 퇴장하셨습니다`)
      channel.send(embed)
  });

//메시지 수정
client.on('messageUpdate', async(oldMessage, newMessage) => {
  if(oldMessage.content === newMessage.content) return // 임베드로 인한 수정같은 경우 
  const channel = client.channels.cache.find(channel => channel.name === '📈｜로그')
  const user = oldMessage.mentions.users.first() || oldMessage.author;
  const embed = new Discord.MessageEmbed()
  .setTitle('📝 수정 로그')
  .setColor('#6E81EE')
  .setDescription(`<@!${oldMessage.author.id}> 님께서 메시지를 수정하셨습니다`)
  .addFields(
    { name: '수정 전', value: `\`${oldMessage.content}\``, inline: true },
    { name: '수정 후', value: `\`${newMessage.content}\``, inline: true }
)
  .setTimestamp()
  .setFooter(user.username, user.displayAvatarURL())
  channel.send(embed)
})

//메시지 삭제
client.on('messageDelete', async message => {
    const user = message.author.id
    const user1 = oldMessage.mentions.users.first() || oldMessage.author;
    const channel = client.channels.cache.find(channel => channel.name === '📈｜로그')
    const embed = new Discord.MessageEmbed()
    .setTitle('❌ 삭제 로그')
    .setColor('#FF0000')
    .setDescription(`<@!${user}> 님이 \`${message.content}\` 을(를) 삭제하셨습니다`)
    .setTimestamp()
    .setFooter(user1.username, user1.displayAvatarURL())
    channel.send(embed)
});

client.on('message', message => {
	const embed = new Discord.MessageEmbed()
	.setColor('fffaa1')
	.setDescription(`
	위 티어별 중 자신이 해낼 수 있는 있는 티어를 선택하고 스피드런, 데미지런 중 조건의 만족되는 사진 혹은 영상을 올리시면 됩니다.
만약 약간의 차이로 티어를 얻지 못하게 된다면 스피드런같은 경우는 2킬, 데미지런은 8K까지 봐드립니다.`)
	.addField('Tier 1', '스피드런 75킬 이상 / 데미지런 120K 이상')
	.addField('Tier 2', '스피드런 85킬 이상 / 데미지런 140K 이상')
	.addField('Tier 3', '스피드런 95킬 이상 / 데미지런 150K 이상')
	.addField('Tier 4', '스피드런 105킬 이상 / 데미지런 170K 이상')
	.addField('Tier 5', '스피드런 115킬 이상 / 데미지런 200K 이상')
	.addField('Tier 6', '스피드런 130킬 이상 / 데미지런 230K 이상')
	.addField('Tier 7', '스피드런 145킬 이상 / 데미지런 240K 이상')
	.addField('Tier 8', '스피드런 150킬 이상 / 데미지런 250K 이상')
	.addField('Tier 9', '스피드런 160킬 이상 / 데미지런 280K 이상')
	.addField('Tier 10', '스피드런 170킬 이상 / 데미지런 300K 이상')
	if(message.content === '입단조건입니다')
	message.channel.send(embed)

})

client.login(process.env.token);