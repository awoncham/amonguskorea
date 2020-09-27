const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;
const welcomeChannelName = "👋｜환영합니다";

client.on('ready', () => {
    console.log('켰다.');
    client.user.setPresence({ game: { name: '모든 우주선 | 접두사: .' }, status: 'online' })
});
      
client.on("guildMemberAdd", (member) => {
    const guild = member.guild;
    const newUser = member.user;
    const welcomeChannel = guild.channels.find(channel => channel.name == welcomeChannelName);
    let embed = new Discord.RichEmbed()
      .setColor('#F08080')
      .setDescription(`<@${newUser.id}> 님이 **\`어몽어스 코리아 디스코드\`** 서버에 입장하셨습니다`)
      
    welcomeChannel.send(embed);
});

if(message.content == '.역할받기') {
  let embed = new Discord.RichEmbed()
    .setTitle('역할 받기')
    .setDescription('자신이 주로 이용하는 전자기기를 선택해주세요')
    .addField('**```🖥️ : 컴퓨터**```')
    .addField('**```📱 : 핸드폰**```')

    message.channel.send(embed)
}

client.on('messageReactionAdd', (reaction, user) => {
  const { name } = reaction.emoji;
  const member = reaction.message.guild.members.cache.get(user.id);
  if (reaction.message.id === '759623973792120842') {
    switch (name) {
      case '🖥️':
        member.roles.add('759635270131253248');
        break;
      case '📱':
        member.roles.add('759635312452042762');
        break;
    }
  }
});

client.on('messageReactionRemove', (reaction, user) => {
  const { name } = reaction.emoji;
  const member = reaction.message.guild.members.cache.get(user.id);
  if (reaction.message.id === '759623973792120842') {
    switch (name) {
      case '🖥️':
        member.roles.remove('759635270131253248');
        break;
      case '📱':
        member.roles.remove('759635312452042762');
        break;
    }
  }
});

client.login(token);