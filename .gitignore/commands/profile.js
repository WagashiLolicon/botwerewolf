const settings = require('../settings.json');
const Discord = require('discord.js');
exports.run = (client, message, args) => {
var memberavatar = message.author.avatarURL
var membername = message.author.username
   var mentionned = message.mentions.users.first();
  var getvalueof;
  if(mentionned){
      var getvalueof = mentionned;
  } else {
      var getvalueof = message.author;
  }

  if(getvalueof.bot == true){
      var checkbot = "Bot";
  } else {
      var checkbot = "Humain";
  }
  if(getvalueof.presence.status == 'online'){
    var status = "En Ligne";
  }else {
    var status = "Non Connecté";
  }
  if(getvalueof.presence.status == 'dnd'){
    var status = "Ne pas Déranger";
  }
  if(getvalueof.presence.status == 'idle'){
    var status = "Absent";
  } else {
  if(getvalueof.presence.status == 'invisible')
    var status = "Invisible"
  }

message.channel.sendMessage({
    embed: {
      type: 'rich',
      description: '',
      fields: [{
        name: 'Pseudonyme',
        value: getvalueof.username,
        inline: true
      }, {
        name: 'ID de l\'utilisateur',
        value: getvalueof.id,
        inline: true
      },{
        name: 'Tag',
        value: getvalueof.discriminator,
        inline: true
},{
        name: 'Status',
        value: status,
        inline: true
},{
        name: 'Bot',
        value: checkbot,
        inline: true
}],
    image: {
  url: getvalueof.avatarURL
    },
      color: 0x88cc9f,
      footer: {
        text: 'by Kô',
        proxy_icon_url: ' '
      },

      author: {
        name: membername,
        icon_url: memberavatar,
        proxy_icon_url: ' '
      }
    }
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["profile"],
  permLevel: 0
};

exports.help = {
  name: 'profile',
  description: 'Information sur l\'utilisateur lié a la commande.',
  usage: `${settings.prefix}profile @mention`
};
