const Discord = require('discord.js');





exports.run = async (client, message, params, args) => {
    if (!params[0]) {

    if(message.channel.type == "dm")  return;
  if(message.channel.type !== "text") return;

  
  const yardım = new Discord.RichEmbed()
  
  .setColor('#F2DD0C')
      .setAuthor(`Gnarge`, client.user.avatarURL)
       .setDescription("[Botu sunucuya ekle](https://discordapp.com/oauth2/authorize?client_id=607239880967192597&scope=bot&permissions=805314616) ")
      .setThumbnail(client.user.avatarURL)
      .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
  return message.channel.sendMessage(yardım);
    }
};


  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['davet', 'invite', 'davett', 'd'],
    permLevel: 0,
   kategori: "Kullanıcı"

  };
  
  exports.help = {
    name: 'davet',
    description: 'Botun davetini Gösterir.',
    usage: 'davet'
  };