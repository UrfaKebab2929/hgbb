const Discord = require("discord.js");
const fs = require("fs");

exports.run = async (bot, message, args) => {

var ayar = args.slice(0).join(" ")
            if (!ayar) {
              var embed = new Discord.RichEmbed()
              .setTitle('1 Dil Bulunmaktadır.')
              .setColor("#0aaaeb")
              .setDescription(`
🇹🇷 \`hgbb!gkanal yardım türkçe\`
🇺🇸 \`hgbb!gkanal help english (BAKIMDA)\`
`)
              .setFooter("HG-BB", bot.user.displayAvatarURL)
              .setTimestamp()
              message.channel.send({embed});
            } else {
              if (ayar.match("ayarla")) {
            var nick = JSON.parse(fs.readFileSync("./welcome.json", "utf8"))
  if(!message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')) return message.channel.send('<:GNARGE_yasak:541003169161936906> 》`Mesajları Yönet` Yetkisine Sahip Olman Gerek!');
            var inputmessage = message.mentions.channels.first()
            if (args[0]) {
              nick[message.guild.id] = {
                nick: inputmessage.id
             };
              fs.writeFile("./welcome.json", JSON.stringify(nick), (err) => {
                if (err) console.log(err)
             });
              
              var embed = new Discord.RichEmbed()
              .setColor("#0aaaeb")
              .setDescription(`Kanal Başarıyla ${inputmessage} Olarak Ayarlandı.`)
              .setTimestamp()
              
              message.channel.send({embed});
            }
            }
            }
            

              if (ayar.match("yardım türkçe")) {

              var embed = new Discord.RichEmbed()
              .setColor("#0aaaeb")
              .setDescription(`
Merhaba Aşağıdan Gerekli Komutları Kullanarak Yardım Alabilirsiniz.
**Komutlar:**
\`hgbb!gkanal ayarla #kanal\` 
Bu Komutla Giriş Çıkış Kanalını Ayarlayabilirsiniz.
\`hgbb!gkanal resim <Link>\`
Bu Komutla Kendi Arka Planınızı Koyabilirsiniz. .jpg ve .png Olması Önerilir.
**Örnek:** https://bit.ly/2KwLCN6
\`hgbb!gkanal text <yazı>\`
Bu Komutla Giriş Çıkış Yazısını Ayarlayabilirsiniz.
\`hgbb!gkanal renk <color> \`
** Renkler: **
\`• sarı • siyah • yeşil
• kırmızı • beyaz • pembe • renkli\`
**Örnek:** \`hgbb!gkanal renk yeşil \`
\`hgbb!gkanal aç\`
Giriş - Çıkış Komutunu Aktif Hale Getirirsiniz.
\`hgbb!gkanal kapat\`
Giriş - Çıkış Komutunu Deaktif Hale Getirirsiniz.
`)
              .setFooter("HG-BB", bot.user.displayAvatarURL)
              .setTimestamp()
              message.react("🇹🇷")
              message.channel.send({embed});

              }

                if (ayar.match("resim")) {
  if(!message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')) return message.channel.send('<:GNARGE_yasak:541003169161936906> 》`Mesajları Yönet` Yetkisine Sahip Olman Gerek!');

            var status = JSON.parse(fs.readFileSync("./image.json", "utf8"))
            var inputmessage = args.slice(1).join(" ")
            if (args[0]) {
              status[message.guild.id] = {
                backgrounds: inputmessage
             };
              fs.writeFile("./image.json", JSON.stringify(status), (err) => {
                if (err) console.log(err)
             });
              
              var embed = new Discord.RichEmbed()
              .setColor("#0aaaeb")
              .setDescription(`<:GNARGE_doru:541003154494586882> Arka Plan Resimi Başarıyla Ayarlandı:`)
              .setImage(`${inputmessage}`)
              .setTimestamp()
              message.delete(2000)
              
              message.channel.send({embed});
            }
            }
  
                  if (ayar.match("yazı")) {
  if(!message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')) return message.channel.send('<:GNARGE_yasak:541003169161936906> 》`Mesajları Yönet` Yetkisine Sahip Olman Gerek!');

            var status = JSON.parse(fs.readFileSync("./imgtext.json", "utf8"))
            var inputmessage = args.slice(1).join(" ")
            if (args[0]) {
              status[message.guild.id] = {
                backgrounds: inputmessage
             };
              fs.writeFile("./imgtext.json", JSON.stringify(status), (err) => {
                if (err) console.log(err)
             });
              
              var embed = new Discord.RichEmbed()
              .setColor("#0aaaeb")
              .setDescription(`<:GNARGE_doru:541003154494586882> Yazınız Başarıyla Ayarlandı: \n**${inputmessage}**`)
              .setTimestamp()
              
              message.channel.send({embed});
            }
            }

                  if (ayar.match("renk")) {
  if(!message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')) return message.channel.send('<:GNARGE_yasak:541003169161936906> 》`Mesajları Yönet` Yetkisine Sahip Olman Gerek!');

            var warnawel = JSON.parse(fs.readFileSync("./warnawelcome.json", "utf8"))
            var inputmessage = args.slice(1).join(" ")
            if (args[0]) {
              warnawel[message.guild.id] = {
                warna: inputmessage
             };
              fs.writeFile("./warnawelcome.json", JSON.stringify(warnawel), (err) => {
                if (err) console.log(err)
             });
              
              var embed = new Discord.RichEmbed()
              .setColor("#0aaaeb")
              .setDescription(`<:GNARGE_doru:541003154494586882> Renginiz **${inputmessage}** Olarak Ayarlandı`)
              .setTimestamp()
              
              message.channel.send({embed});
            }
            }
  
            if (ayar.match("aç")) {
  if(!message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')) return message.channel.send('<:GNARGE_yasak:541003169161936906> 》`Mesajları Yönet` Yetkisine Sahip Olman Gerek!');

            var welcomesetting = JSON.parse(fs.readFileSync("./welcomeonoff.json", "utf8"));
            welcomesetting[message.guild.id] = {
                checker: 1
                };
                  fs.writeFile("./welcomeonoff.json", JSON.stringify(welcomesetting, null, 2), (err) => {
                    console.error(err)
                 })
                var embed = new Discord.RichEmbed()
                .setColor("#0aaaeb")
                .setDescription(`<:acik1:608394628911333388> Başarıyla Açıldı.`)
                .setTimestamp()
                .setFooter("<:acik1:608394628911333388> Sistem Aktif", bot.user.displayAvatarURL)
                
                message.channel.send({embed});
            }
            if (ayar.match("kapat")) {
  if(!message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')) return message.channel.send('<:GNARGE_yasak:541003169161936906> 》`Mesajları Yönet` Yetkisine Sahip Olman Gerek!');

            var welcomesetting = JSON.parse(fs.readFileSync("./welcomeonoff.json", "utf8"));
            welcomesetting[message.guild.id] = {
                checker: 0
                };
                  fs.writeFile("./welcomeonoff.json", JSON.stringify(welcomesetting, null, 2), (err) => {
                    console.error(err)
                 })
                var embed = new Discord.RichEmbed()
                .setColor("#0aaaeb")
                .setDescription(`<:kapali2:608394629435359244> Başarıyla Kapatıldı`)
                .setTimestamp()
                .setFooter("<:kapali2:608394629435359244> Sistem Kapalı", bot.user.displayAvatarURL)
                
                message.channel.send({embed});
            }
            if (ayar.match("gkanaltest")) { 
              let nick = JSON.parse(fs.readFileSync("./welcome.json", "utf8"));
              if (!nick[message.guild.id]) {
                  var embed = new Discord.RichEmbed()
                  .setDescription(`**TEST:**\n\`\`\`None\`\`\``)
                  .setColor("#0aaaeb")
                  return message.channel.send(embed)
             }
              var embed = new Discord.RichEmbed()
              .setDescription(`**TEST:**\n\`\`\`${nick[message.guild.id].nick}\`\`\``)
              .setColor("#0aaaeb")
              return message.channel.send(embed); 
           }

  
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['giriş-çıkış','vkanal'],
  permLevel: 0
}

exports.help = {
  name: 'gkanal',
  description: "",
  usage: ''
}