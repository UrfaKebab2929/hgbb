const Discord = require('discord.js')
const fs = require('fs')

exports.run = async (client, message, args) => {
  
	  if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(':no_entry: Yazılı Giriş kanalını Ayarlaman için `Yönetici` yetkisine sahip olman gerek.')  

    let sayac = JSON.parse(fs.readFileSync("./ayarlar/giris.json", "utf8"));
        if(!sayac[message.guild.id]) {
            const embed = new Discord.RichEmbed()
                .setDescription(`Yazılı Giriş Çıkış Kanalını Ayarlamadığınız İçin Kapatamazsın!`)
        .setFooter('HG-BB', client.user.avatarURL)
              .setColor("#0aaaeb")
                .setTimestamp()
            message.channel.send({embed})
            return
        }
        delete sayac[message.guild.id]
        fs.writeFile("./ayarlar/giris.json", JSON.stringify(sayac), (err) => {
            console.log(err)
        })
        const embed = new Discord.RichEmbed()
            .setDescription(`Yazılı Giriş Çıkış Başarıyla Kapatıldı!`)
      .setFooter('HG-BB', client.user.avatarURL)
              .setColor("#0aaaeb")
            .setTimestamp()
        message.channel.send({embed})
        return
    }

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['yazılıgirişçıkışsıfırla','yzçk','yazılı-giriş-çıkış-kapat','yazılıgkanalkapat','ygkanalkapat'],
  permLevel: 0
};

exports.help = {
  name: 'yazılıgirişçıkışkapat', 
  description: 'Sayaçı, sıfırlar!',
  usage: 'sayaç-sıfırla'
};
   