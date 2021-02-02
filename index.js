const Discord = require('discord.js');
const client = new Discord.Client();
const { readdirSync } = require('fs');
const { join } = require('path');
const token = process.env.token;
const prefix = "!";
client.commands= new Discord.Collection();
require('dotenv').config();



const commandFile = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith("js"));

for (const file of commandFile) {
  const command = require(join(__dirname, "commands", `${file}`));
  client.commands.set(command.name, command);
}

client.on("error", console.error);

client.on('ready', () => {
  console.log(`${client.user.id}로 로그인 성공!`);
});

client.on("ready", function() {
    console.log("bot is Ready!\nBot Start: " + new Date().toLocaleString());
    setInterval(function() {
        var MemberCount = 0;
        client.guilds.cache.forEach(function(guild) {
            MemberCount += guild.memberCount;
        });
        client.user.setActivity(client.guilds.cache.size + "서버운영, " + MemberCount + " 사람 [" + prefix + "help]", { type: "WATCHING" });
    }, 10000);
  });




const toolFiles = readdirSync(join(__dirname, "tools")).filter(file => file.endsWith(".js"));

for (const file of toolFiles) {
    const command = require(join(__dirname, "tools", `${file}`));
    client.commands.set(command.name, command);
    let commandName = file.split(".")[0];
    console.log('Loading Tool Command: '+commandName)
}

const funFiles = readdirSync(join(__dirname, "fun")).filter(file => file.endsWith(".js"));

for (const file of funFiles) {
    const command = require(join(__dirname, "fun", `${file}`));
    client.commands.set(command.name, command);
    let commandName = file.split(".")[0];
    console.log('Loading Fun Command: '+commandName)
}

const manageFiles = readdirSync(join(__dirname, "manage")).filter(file => file.endsWith(".js"));

for (const file of manageFiles) {
    const command = require(join(__dirname, "manage", `${file}`));
    client.commands.set(command.name, command);
    let commandName = file.split(".")[0];
    console.log('Loading Manage Command: '+commandName)
}

client.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;

    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);

        const command = args.shift().toLowerCase();

        if(!client.commands.has(command)) return;


        try {
            client.commands.get(command).run(client, message, args);

        } catch (error){
            console.error(error);
        }
    }
})
client.on('message', (message) => {
  if (message.content == "!초대코드2") {
    client.guilds.cache.array().forEach((x) => {
      x.channels.cache
        .find((x) => x.type == "text")
        .createInvite({ maxAge: 0 }) // maxAge: 0은 무한이라는 의미, maxAge부분을 지우면 24시간으로 설정됨
        .then((invite) => {
          message.channel.send(invite.url)
        })
        .catch((err) => {
          if (err.code == 50013) {
            message.channel.send(`**${x.channels.cache.find((x) => x.type == "text").guild.name}** 채널 권한이 없어 초대코드 발행 실패`)
          }
        })
    })
  } else if (message.content == "!초대코드") {
    if (message.channel.type == "dm") {
      return message.reply("dm에서 사용할 수 없는 명령어 입니다.")
    }
    message.guild.channels.cache
      .get(message.channel.id)
      .createInvite({ maxAge: 0 }) // maxAge: 0은 무한이라는 의미, maxAge부분을 지우면 24시간으로 설정됨
      .then((invite) => {
        message.channel.send(invite.url)
      })
      .catch((err) => {
        if (err.code == 50013) {
          message.channel.send(`**${message.guild.channels.cache.get(message.channel.id).guild.name}** 채널 권한이 없어 초대코드 발행 실패`)
        }
      })

      }

      client.on('message', (message) => {
        if (message.content.startsWith("시발") || message.content.startsWith("ㅅㅂ")) {
          message.delete();
          message.delete();
          const discord = new Discord.MessageEmbed()
          .setColor('#0099ff')
          .setTitle('욕설감지')
          .setAuthor(message.author.username, message.author.avatarURL())
          .setDescription('욕하지마 시발년아~')
          .setImage('')
          message.channel.send(discord)
          }
          if (message.content.startsWith("^ㅣ발") || message.content.startsWith("^^ㅣ발")) {
            message.delete();
            message.delete();
            const discord = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('욕설감지')
            .setAuthor(message.author.username, message.author.avatarURL())
            .setDescription('욕하지마 시발년아~')
            .setImage('')
            message.channel.send(discord)
            }
            if (message.content.startsWith("tlqkf") || message.content.startsWith("tl발")) {
              message.delete();
              message.delete();
              const discord = new Discord.MessageEmbed()
              .setColor('#0099ff')
              .setTitle('욕설감지')
              .setAuthor(message.author.username, message.author.avatarURL())
              .setDescription('욕하지마 시발년아~')
              .setImage('')
              message.channel.send(discord)
              }
              if (message.content.startsWith("애미") || message.content.startsWith("애비")) {
                message.delete();
                message.delete();
                const discord = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('욕설감지')
                .setAuthor(message.author.username, message.author.avatarURL())
                .setDescription('욕하지마 시발년아~')
                .setImage('')
                message.channel.send(discord)
                }
                if (message.content.startsWith("보지") || message.content.startsWith("ㅂㅈ")) {
                  message.delete();
                  message.delete();
                  const discord = new Discord.MessageEmbed()
                  .setColor('#0099ff')
                  .setTitle('욕설감지')
                  .setAuthor(message.author.username, message.author.avatarURL())
                  .setDescription('욕하지마 시발년아~')
                  .setImage('')
                  message.channel.send(discord)
                  }
                  if (message.content.startsWith("ㅈㅈ") || message.content.startsWith("자지")) {
                    message.delete();
                    message.delete();
                    const discord = new Discord.MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle('욕설감지')
                    .setAuthor(message.author.username, message.author.avatarURL())
                    .setDescription('욕하지마 시발년아~')
                    .setImage('')
                    message.channel.send(discord)
                    }
                    if (message.content.startsWith("섹스") || message.content.startsWith("ㅅㅅ")) {
                      message.delete();
                      message.delete();
                      const discord = new Discord.MessageEmbed()
                      .setColor('#0099ff')
                      .setTitle('욕설감지')
                      .setAuthor(message.author.username, message.author.avatarURL())
                      .setDescription('욕하지마 시발년아~')
                      .setImage('')
                      message.channel.send(discord)
                      }
                      if (message.content.startsWith("색스") || message.content.startsWith("ㅄ")) {
                        message.delete();
                        message.delete();
                        const discord = new Discord.MessageEmbed()
                        .setColor('#0099ff')
                        .setTitle('욕설감지')
                        .setAuthor(message.author.username, message.author.avatarURL())
                        .setDescription('욕하지마 시발년아~')
                        .setImage('')
                        message.channel.send(discord)
                        }
                        if (message.content.startsWith("병신") || message.content.startsWith("개세끼")) {
                          message.delete();
                          message.delete();
                          const discord = new Discord.MessageEmbed()
                          .setColor('#0099ff')
                          .setTitle('욕설감지')
                          .setAuthor(message.author.username, message.author.avatarURL())
                          .setDescription('욕하지마 시발년아~')
                          .setImage('')
                          message.channel.send(discord)
                          }
        if (message.content.startsWith("니애미") || message.content.startsWith("창녀")) {
          message.delete();
          message.delete();
          const discord = new Discord.MessageEmbed()
          .setColor('#0099ff')
          .setTitle('욕설감지')
          .setAuthor(message.author.username, message.author.avatarURL())
          .setDescription('욕하지마 시발년아~')
          .setImage('')
          message.channel.send(discord)
          }})})

          client.on('message', (message) => {
            if(message.content===`서버정보`) {
              const filterLevels = {
                DISABLED: 'Off',
                MEMBERS_WITHOUT_ROLES: 'No Role',
                ALL_MEMBERS: 'Everyone'
              };
              
              const verificationLevels = {
                NONE: 'None',
                LOW: 'Low',
                MEDIUM: 'Medium',
                HIGH: '(╯°□°）╯︵ ┻━┻',
                VERY_HIGH: '┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻'
              };
              
              const regions = {
                brazil: 'Brazil',
                europe: 'Europe',
                hongkong: 'Hong Kong',
                india: 'India',
                japan: 'Japan',
                russia: 'Russia',
                singapore: 'Singapore',
                southafrica: 'South Africa',
                sydeny: 'Sydeny',
                'us-central': 'US Central',
                'us-east': 'US East',
                'us-west': 'US West',
                'us-south': 'US South'
              };
              const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
                const members = message.guild.members.cache;
                const channels = message.guild.channels.cache;
                const emojis = message.guild.emojis.cache;
            
                const embed = new Discord.MessageEmbed()
                  .setDescription(`**Guild information for __${message.guild.name}__**`)
                  .setColor("#FF8000")
                  .setThumbnail(message.guild.iconURL({ dynamic: true }))
                  .addField('정보', [
                    `**❯ 이름:** ${message.guild.name}`,
                    `**❯ 아이디:** ${message.guild.id}`,
                    `**❯ 지역:** ${regions[message.guild.region]}`,
                    `**❯ 부스트 티어:** ${message.guild.premiumTier ? `Tier ${message.guild.premiumTier}` : 'None'}`,
                    `**❯ 필터:** ${filterLevels[message.guild.explicitContentFilter]}`,
                    `**❯ 보안 레벨:** ${verificationLevels[message.guild.verificationLevel]}`,
                    '\u200b'
                  ])
                  .addField('통계', [
                    `**❯ 역할 수:** ${roles.length}`,
                    `**❯ 이모지 수:** ${emojis.size}`,
                    `**❯ 일반 이모지 수:** ${emojis.filter(emoji => !emoji.animated).size}`,
                    `**❯ 애니매이션 이모지 수:** ${emojis.filter(emoji => emoji.animated).size}`,
                    `**❯ 총 멤버 수:** ${message.guild.memberCount}`,
                    `**❯ 유저 수:** ${members.filter(member => !member.user.bot).size}`,
                    `**❯ 봇 수:** ${members.filter(member => member.user.bot).size}`,
                    `**❯ 채팅 채널 수:** ${channels.filter(channel => channel.type === 'text').size}`,
                    `**❯ 음성 채널 수:** ${channels.filter(channel => channel.type === 'voice').size}`,
                    `**❯ 부스트 수:** ${message.guild.premiumSubscriptionCount || '0'}`,
                    '\u200b'
                  ])
                  .addField('상태', [
                    `**❯ 온라인:** ${members.filter(member => member.presence.status === 'online').size}`,
                    `**❯ 자리비움:** ${members.filter(member => member.presence.status === 'idle').size}`,
                    `**❯ 다른 용무 중:** ${members.filter(member => member.presence.status === 'dnd').size}`,
                    `**❯ 오프라인:** ${members.filter(member => member.presence.status === 'offline').size}`,
                    '\u200b'
                  ])
                  .addField(`역할 [${roles.length - 1}]`, roles.length < 10 ? roles.join(', ') : roles.length > 10 ? this.client.utils.trimArray(roles) : 'None')
                  .setTimestamp();
                message.channel.send(embed);
              }})
      

client.login(token);
