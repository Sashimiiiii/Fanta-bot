const Discord = require('discord.js');
const fs = require('fs');
var stream = require("ytdl-core");

module.exports = {
	name: 'decide',
	description: "ouai mais c'est pas toi qui décide",
}


module.exports.run = async (bot, message, args) => {
  

    var voiceChannel = message.member.voiceChannel;
    message.delete();
    if (message.member.voice.channel) {
        const connection = await message.member.voice.channel.join();
        const dispatcher = connection.play("./sons/c'est pas toi qui décide.mp3", {
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
    name: "decide"
}