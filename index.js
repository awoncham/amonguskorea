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
      .setDescription(`${user.tag} 님이 **\`어몽어스 코리아 디스코드\`** 서버에 입장하셨습니다`)
      
    welcomeChannel.send(embed);
});

client.on('messageReactionAdd', (reaction, user) => {
  const { name } = reaction.emoji;
  const member = reaction.message.guild.members.cache.get(user.id);
  if (reaction.message.id === '759623973792120842') {
    switch (name) {
      case ':Red:':
        member.roles.add('752475160707072021');
        break;
      case ':Orange:':
        member.roles.add('752493678194327632');
        break;
      case ':Yellow:':
        member.roles.add('752493680517972008');
        break;
      case ':Green:':
        member.roles.add('752493630933041203');
        break;
      case ':Lime:':
        member.roles.add('752493739276238918');
        break;
      case ':Blue:':
        member.roles.add('752493413244338189');
        break;
      case ':Cyan:':
        member.roles.add('752493735878721536');
        break;
      case ':Pink:':
        member.roles.add('752493633625784331');
        break;
      case ':Purple:':
        member.roles.add('752493688302731324');
        break;
      case ':White:':
        member.roles.add('752493685198946374');
        break;
      case ':Brown:':
        member.roles.add('752493732519084095');
        break;
      case ':Black:':
        member.roles.add('752493682711724043');
        break;
    
    }
  }
});

client.on('messageReactionRemove', (reaction, user) => {
  const { name } = reaction.emoji;
  const member = reaction.message.guild.members.cache.get(user.id);
  if (reaction.message.id === '759623973792120842') {
    switch (name) {
      case ':Red:':
        member.roles.remove('752475160707072021');
        break;
      case ':Orange:':
        member.roles.remove('752493678194327632');
        break;
      case ':Yellow:':
        member.roles.remove('752493680517972008');
        break;
      case ':Green:':
        member.roles.remove('752493630933041203');
        break;
      case ':Lime:':
        member.roles.remove('752493739276238918');
        break;
      case ':Blue:':
        member.roles.remove('752493413244338189');
        break;
      case ':Cyan:':
        member.roles.remove('752493735878721536');
        break;
      case ':Pink:':
        member.roles.remove('752493633625784331');
        break;
      case ':Purple:':
        member.roles.remove('752493688302731324');
        break;
      case ':White:':
        member.roles.remove('752493685198946374');
        break;
      case ':Brown:':
        member.roles.remove('752493732519084095');
        break;
      case ':Black:':
        member.roles.remove('752493682711724043');
        break;
    
    }
  }
});

client.login(token);