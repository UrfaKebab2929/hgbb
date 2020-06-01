const Discord = require('discord.js')
const fs = require('fs')
 
exports.run = async (client, message, args) => {

	  if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(':no_entry: Yazılı Giriş kanalını Ayarlaman için `Yönetici` yetkisine sahip olman gerek.')  

        let profil = JSON.parse(fs.readFileSync("./ayarlar/giris.json", "utf8"));
  var mentionedChannel = message.mentions.channels.first();
  const s1 = new Discord.RichEmbed()
  .setDescription('Giriş Çıkış Kanalı Belirt!')
              .setColor("#0aaaeb")
                        .setTimestamp()
  if (!mentionedChannel && args[0] !== "sıfırla") return message.channel.send(s1);
 
 
        if(args[0] === "sıfırla") {
                if(!profil[message.guild.id]) {
                        const embed = new Discord.RichEmbed()
                                .setDescription(`Yazılı Giriş Çıkış Kanalını Ayarlamadığınız İçin Kapatamazsın!`)
              .setColor("#0aaaeb")
                                .setTimestamp()
                        message.channel.send({embed})
                        return
                }
                delete profil[message.guild.id]
                fs.writeFile("./ayarlar/giris.json", JSON.stringify(profil), (err) => {
                        console.log(err)
                })
                const embed = new Discord.RichEmbed()
                        .setDescription(`Yazılı Giriş Çıkış Başarıyla Kapatıldı!`)
              .setColor("#0aaaeb")
                        .setTimestamp()
                message.channel.send({embed})
                return
        }
 
 
        if(!profil[message.guild.id]){
                profil[message.guild.id] = {
                        sayi: args[0],
      kanal: mentionedChannel.id
                };
        }
       
        profil[message.guild.id].sayi = args[0]
  profil[message.guild.id].kanal = mentionedChannel.id
       
        fs.writeFile("./ayarlar/giris.json", JSON.stringify(profil), (err) => {
                console.log(err)
        })
 
        const embed = new Discord.RichEmbed()
                .setDescription(`Yazılı Giriş Çıkış Kanalı ${mentionedChannel} Olarak Ayarlandı!`)
                .setFooter('HG-BB', client.user.avatarURL)
              .setColor("#0aaaeb")
                .setTimestamp()
        message.channel.send({embed})
}
 
exports.conf = {
        enabled: true,
        guildOnly: true,
        aliases: ['yazılıgirişçıkış','ygç','ygkanal'],
        permLevel: 0,
        kategori: "moderasyon"
}
 
exports.help = {
        name: 'yazılı-giriş-çıkış',
        description: 'Sayaç, ayarlar!',
        usage: 'sayaç-ayarla [sayı/sıfırla] [kanal]'
}
   