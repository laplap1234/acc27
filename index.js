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

    })
          
      

client.login(token);
