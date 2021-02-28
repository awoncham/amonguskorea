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

client.login(process.env.token);