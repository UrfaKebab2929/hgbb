const Discord = require('discord.js');

module.exports.run = async(bot, message, args) =>{
  let embed = new Discord.RichEmbed()
  .setTitle("Yeniden Başlatma!")
  .setDescription("Maalesef Bu Komutu Sadece Botun Sahibi Kullanabilir.")
  .setColor("#cdf785");
  if(message.author.id !== '334975384380506112') return message.channel.send(embed);
  
message.channel.send(`Yeniden Başlıyor ${Math.floor(bot.ping)}ms`).then(() =>{
process.exit(1);
})
 }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['reboot'],
  permLevel: 0
};

exports.help = {
  name: 'restart',
  description: 'chati temizler.',
  usage: 'temizle'
};