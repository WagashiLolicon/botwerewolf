const settings = require('../settings.json');
exports.run = (client, message, args) => {
  message.delete(message.author)
return message.channel.sendMessage( {
  embed: {
      color: 3447003,
      title: ``,
      fields: [
          {
              name: `Discord Support : **WereWolf [Support]**`,
              value: `\nInvitation: https://discord.gg/9KqaVnR`,
              inline: true
          },

                      ],
                      timestamp: new Date(),
                      thumbnail: {
                          url: client.user.avatarURL
                      }
                  }
              }).then(response => { response.delete(50000) });;
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sp"],
  permLevel: 0
};

exports.help = {
  name: 'support',
  description: 'Permet de rejoindre le Serveur Discord du Support.',
  usage: `${settings.prefix}support`
};