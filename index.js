const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js')
keepAlive()

client.on('ready', async () => {


    console.clear();

    console.log(`${client.user.tag} - rich presence started!`
               )
const r = new Discord.RichPresence()
    .setApplicationId('1092454051809067010')
    .setType("STREAMING") //STREAMING, PLAYING, LISTENING.
    .setURL('https://twitch.tv/developer') // or your yt url
    .setState('Until The Very End.🌙')
    .setName('They Not Like Us. 🌙')
    .setDetails(' I Will Let You Suffer..🗿')
    .setStartTimestamp(Date.now())
  // remove this if you dont want the timestamp (the time it started the rpc)
    /*.setParty({         
        max: 9999999,
        current: 6789,
        id: Discord.getUUID(),
    })*/
    
    //.setStartTimestamp(Date.now())
    .setAssetsLargeImage('https://media.discordapp.net/attachments/608711476219478045/1325451139524722739/29802a97f874c01c06d90d9ff87a3eb5.gif?ex=677dd051&is=677c7ed1&hm=10407845bea21a54cfb84a35f8918e43fc3962857f4b4a86642319f544cb3843&=') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('Typee shii.. ') //Text when you hover the Large image
    .addButton('Join', 'https://discord.gg/rkKgd8ynsN')
  .addButton('Discord', 'https://discord.gg/rkKgd8ynsN')
     client.user.setActivity(r);
     client.user.setPresence({ status: "idle" }); //dnd, online, idle, offline
})

const mySecret = "OTMxNTEyMzE3MzY2MTA4MjEw.GfL_6I.vmL1wkJATlIIAj0ORrsWJlwJjIMW46UTnEcw3c"
client.login(mySecret)






















// Copyright to mrnekrozyt 2021-2023
// Support Server:https://discord.gg/pSJ5JkmH6N
// Source Code: https://github.com/mrnekrozyt/Streaming-24-7-RPC/
