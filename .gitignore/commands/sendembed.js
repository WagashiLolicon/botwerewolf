const settings = require('../settings.json');
exports.run = function(client, message, args) {
  message.delete(message.author)
          message.channel.sendMessage("", {
            embed: {
                color: 0x837591,
                title: `Embed edité par ${message.author.username}`,
                fields: [
                    {
                        name: message.content.split(' ')[1],
                        value: message.content.split(' ').slice(2).join(' '),
                        inline: true
                    },

                ],
                timestamp: new Date(),
                thumbnail: {
                    url: message.author.guildURL
                }
            }
        })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["se"],
  permLevel: 0
};

exports.help = {
  name: 'sendembed',
  description: 'Envoie un embed edité.',
  usage: `${settings.prefix}sendembed + titre + texte, exemple: /sendembed No-Space Your Text`
};
