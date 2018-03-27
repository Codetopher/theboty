const Discord = require('discord.js');
const client = new Discord.Client();

let messageObject = {
    sent: "Your aid has been sent.",
    deny: "Your aid has been denied. You may contact the Collectors for more information."
   
};

client.on("message", message => {
    if(message.content.toLowerCase().startsWith("!dm")) {
        let args = message.content.split(" ").slice(1);
        let user = message.guild.member(args[0].replace(/[<@!>]/g,"")).user;
        let keyword= args[1];

        if(keyword in messageObject){
            return user.send(messageObject[keyword]);
        }
        return message.channel.send("That is not a valid keyword!");
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
