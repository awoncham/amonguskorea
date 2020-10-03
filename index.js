const Discord = require('discord.js');
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
const token = precess.env.token;

client.on('ready', () => {
    console.log('켰다.');
    client.user.setActivity('모든 우주선 | 접두사: .', { type: 'WATCHING' });
});
      
client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(ch => ch.id === '758141493553659924');
  if(!channel) return;
  const embed = new Discord.MessageEmbed()
    .setColor('#F08080')
    .setDescription(`${member} 님이 **\`어몽어스 코리아 디스코드\`** 서버에 입장하셨습니다`)
    channel.send(embed)
});

client.on('messageReactionAdd', async (reaction, user) => { 
    // 해당 메시지의 이모트를 추가하면 역할을 부여함.
    try {
        if(reaction.message.id === '761780394533978132') {
            await reaction.fetch()
            if(reaction._emoji.name === "Red") {
                reaction.message.guild.members.fetch(user.id).then(member => {
                    member.roles.add('761747249671307265')
                })
        
            }
        }
    } catch (error) {
        console.log(error)
    }
    try {
        if(reaction.message.id === '761780394533978132') {
            await reaction.fetch()
            if(reaction._emoji.name === "Orange") {
                reaction.message.guild.members.fetch(user.id).then(member => {
                    member.roles.add('761747252871692309')
                })
        
            }
        }
    } catch (error) {
        console.log(error)
    }
    try {
        if(reaction.message.id === '761780394533978132') {
            await reaction.fetch()
            if(reaction._emoji.name === "Yellow") {
                reaction.message.guild.members.fetch(user.id).then(member => {
                    member.roles.add('761747255212113943')
                })
        
            }
        }
    } catch (error) {
        console.log(error)
    }
    try {
        if(reaction.message.id === '761780394533978132') {
            await reaction.fetch()
            if(reaction._emoji.name === "Green") {
                reaction.message.guild.members.fetch(user.id).then(member => {
                    member.roles.add('761747258478821406')
                })
        
            }
        }
    } catch (error) {
        console.log(error)
    }
    try {
        if(reaction.message.id === '761780394533978132') {
            await reaction.fetch()
            if(reaction._emoji.name === "Lime") {
                reaction.message.guild.members.fetch(user.id).then(member => {
                    member.roles.add('761747261863755837')
                })
        
            }
        }
    } catch (error) {
        console.log(error)
    }
    try {
        if(reaction.message.id === '761780394533978132') {
            await reaction.fetch()
            if(reaction._emoji.name === "Blue") {
                reaction.message.guild.members.fetch(user.id).then(member => {
                    member.roles.add('761747264753762304')
                })
        
            }
        }
    } catch (error) {
        console.log(error)
    }
    try {
        if(reaction.message.id === '761780394533978132') {
            await reaction.fetch()
            if(reaction._emoji.name === "Cyan") {
                reaction.message.guild.members.fetch(user.id).then(member => {
                    member.roles.add('761747267568271401')
                })
        
            }
        }
    } catch (error) {
        console.log(error)
    }
    try {
        if(reaction.message.id === '761780394533978132') {
            await reaction.fetch()
            if(reaction._emoji.name === "Pink") {
                reaction.message.guild.members.fetch(user.id).then(member => {
                    member.roles.add('761747270906937384')
                })
        
            }
        }
    } catch (error) {
        console.log(error)
    }
    try {
        if(reaction.message.id === '761780394533978132') {
            await reaction.fetch()
            if(reaction._emoji.name === "Purple") {
                reaction.message.guild.members.fetch(user.id).then(member => {
                    member.roles.add('761747274032087052')
                })
        
            }
        }
    } catch (error) {
        console.log(error)
    }
    try {
        if(reaction.message.id === '761780394533978132') {
            await reaction.fetch()
            if(reaction._emoji.name === "White") {
                reaction.message.guild.members.fetch(user.id).then(member => {
                    member.roles.add('761747277810630656')
                })
        
            }
        }
    } catch (error) {
        console.log(error)
    }
    try {
        if(reaction.message.id === '761780394533978132') {
            await reaction.fetch()
            if(reaction._emoji.name === "Brown") {
                reaction.message.guild.members.fetch(user.id).then(member => {
                    member.roles.add('761747280839311381')
                })
        
            }
        }
    } catch (error) {
        console.log(error)
    }
    try {
        if(reaction.message.id === '761780394533978132') {
            await reaction.fetch()
            if(reaction._emoji.name === "Black") {
                reaction.message.guild.members.fetch(user.id).then(member => {
                    member.roles.add('761747283624198144')
                })
        
            }
        }
    } catch (error) {
        console.log(error)
    }
})

client.on('messageReactionRemove', async (reaction, user) => { 
    // 해당 메시지의 이모트를 제거하면 역할을 제거함.
    try {
        if(reaction.message.id === '761780394533978132') {
            await reaction.fetch()
            if(reaction._emoji.name === "Red") {
                reaction.message.guild.members.fetch(user.id).then(member => {
                    member.roles.remove('761747249671307265')
                })
        
            }
        }
    } catch (error) {
        console.log(error)
    }
    try {
        if(reaction.message.id === '761780394533978132') {
            await reaction.fetch()
            if(reaction._emoji.name === "Orange") {
                reaction.message.guild.members.fetch(user.id).then(member => {
                    member.roles.remove('761747252871692309')
                })
        
            }
        }
    } catch (error) {
        console.log(error)
    }
    try {
        if(reaction.message.id === '761780394533978132') {
            await reaction.fetch()
            if(reaction._emoji.name === "Yellow") {
                reaction.message.guild.members.fetch(user.id).then(member => {
                    member.roles.remove('761747255212113943')
                })
        
            }
        }
    } catch (error) {
        console.log(error)
    }
    try {
        if(reaction.message.id === '761780394533978132') {
            await reaction.fetch()
            if(reaction._emoji.name === "Green") {
                reaction.message.guild.members.fetch(user.id).then(member => {
                    member.roles.remove('761747258478821406')
                })
        
            }
        }
    } catch (error) {
        console.log(error)
    }
    try {
        if(reaction.message.id === '761780394533978132') {
            await reaction.fetch()
            if(reaction._emoji.name === "Lime") {
                reaction.message.guild.members.fetch(user.id).then(member => {
                    member.roles.remove('761747261863755837')
                })
        
            }
        }
    } catch (error) {
        console.log(error)
    }
    try {
        if(reaction.message.id === '761780394533978132') {
            await reaction.fetch()
            if(reaction._emoji.name === "Blue") {
                reaction.message.guild.members.fetch(user.id).then(member => {
                    member.roles.remove('761747264753762304')
                })
        
            }
        }
    } catch (error) {
        console.log(error)
    }
    try {
        if(reaction.message.id === '761780394533978132') {
            await reaction.fetch()
            if(reaction._emoji.name === "Cyan") {
                reaction.message.guild.members.fetch(user.id).then(member => {
                    member.roles.remove('761747267568271401')
                })
        
            }
        }
    } catch (error) {
        console.log(error)
    }
    try {
        if(reaction.message.id === '761780394533978132') {
            await reaction.fetch()
            if(reaction._emoji.name === "Pink") {
                reaction.message.guild.members.fetch(user.id).then(member => {
                    member.roles.remove('761747270906937384')
                })
        
            }
        }
    } catch (error) {
        console.log(error)
    }
    try {
        if(reaction.message.id === '761780394533978132') {
            await reaction.fetch()
            if(reaction._emoji.name === "Purple") {
                reaction.message.guild.members.fetch(user.id).then(member => {
                    member.roles.remove('761747274032087052')
                })
        
            }
        }
    } catch (error) {
        console.log(error)
    }
    try {
        if(reaction.message.id === '761780394533978132') {
            await reaction.fetch()
            if(reaction._emoji.name === "White") {
                reaction.message.guild.members.fetch(user.id).then(member => {
                    member.roles.remove('761747277810630656')
                })
        
            }
        }
    } catch (error) {
        console.log(error)
    }
    try {
        if(reaction.message.id === '761780394533978132') {
            await reaction.fetch()
            if(reaction._emoji.name === "Brown") {
                reaction.message.guild.members.fetch(user.id).then(member => {
                    member.roles.remove('761747280839311381')
                })
        
            }
        }
    } catch (error) {
        console.log(error)
    }
    try {
        if(reaction.message.id === '761780394533978132') {
            await reaction.fetch()
            if(reaction._emoji.name === "Black") {
                reaction.message.guild.members.fetch(user.id).then(member => {
                    member.roles.remove('761747283624198144')
                })
        
            }
        }
    } catch (error) {
        console.log(error)
    }
})

client.login(token);