const Discord = require('discord.js');
const prefix = require('../ayarlar.json')

exports.run = async (client, message, params, args) => {

  if (!params[0]) {
          if(message.channel.type == "dm")  return;
  if(message.channel.type !== "text") return;
  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
  .setAuthor(`HGBB`, client.user.avatarURL)
  .setThumbnail(client.user.avatarURL)
            .setDescription('Bota Destek Ol [Hemen Tıkla](http://pnd.tl/0nxpINZ) ')
  .addField(`HG - BB Komutlar`, `\nMerhaba Prefiximiz \`hgbb!\` Lütfen Komutları Dikkat Ederek Yazınız. \n\n\`hgbb!gkanal yardım türkçe\` Yazarak Türkçe Ayarlamalı Giriş Çıkış'ı Nasıl Ayarlacağınızı ve Gerekli Ayarları Nasıl Yapmanız Gerektiğini Gösterir. \n\n\`hgbb!gkanal help english [YAKINDA]\` = Coming Soon \n\n\`hgbb!yazılıgirişçıkış \` = Bu Giriş Çıkış Sistemi ise Sadece Kendi Yazınızı Ayarlayarak, Sadece Düz Yazı Olarak Ayarladığınız Kanala Atar`)
  .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
  .addField("» Linkler", ` \n[Davet Et](https://discordapp.com/oauth2/authorize?client_id=607239880967192597&scope=bot&permissions=805314616)` + "**  **" + `\n[Destek Sunucusu](yakında)`  + "**  **" + `\n [Web Sitesi](yakında)  `, false);

return message.channel.sendMessage(yardım)
  }
};
  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['komut', 'komutlar', 'command', 'yardım', 'help', 'halp', 'y', 'h', 'commands'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'yardım',
    description: 'yardım',
    usage: 'yardım'
  };
