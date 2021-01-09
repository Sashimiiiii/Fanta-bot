const Discord = require('discord.js');
const fs = require('fs');
var stream = require("ytdl-core");

module.exports = {
	name: 'tg',
	description: "ta gueule",
}


module.exports.run = async (bot, message, args) => {
  


    message.delete();
    if (!message.guild.me.hasPermission("SPEAK")) {
        message.channel.send("j'ai pas les permissions :(")
        return;
    }
    if (message.member.voice.channel) {
        const connection = await message.member.voice.channel.join();
        const dispatcher = connection.play('./sons/tg.mp3', {
            volume: 0.5,
        });

        //dispatcher.setVolume(0.1);
        //dispatcher.on("end", end => {
          //  console.log("left channel");

      } else {
        message.reply('Il faut etre dans le : channel vocal');
    
    }
    
    
    

        }
module.exports.help = {
    name: "tg"
}