const settings = require('../settings.json');
const Discord = require('discord.js');
const moment = require("moment");
const format = require("moment-duration-format");
exports.run = (client, message, args) => {
  var unit = ['', 'K', 'M', 'G', 'T', 'P'];
  function bytesToSize(input, precision) {
    var index = Math.floor(Math.log(input) / Math.log(1024));
    if (unit >= unit.length) return input + ' B';
    return (input / Math.pow(1024, index)).toFixed(precision) + ' ' + unit[index] + 'B'
  }
    message.channel.sendMessage('\u200B', {
        embed: {
            color: 0xddd338,
            title: `Information sur le bot discord ${client.user.username}`,
            fields: [
                {
                    name: `Mémoire utilisé`,
                    value: `${bytesToSize(process.memoryUsage().rss, 2)} (MegaBytes)`,
                    inline: true
                },
                {
                    name: `Uptime`,
                    value: `${moment.duration(client.uptime).format(" D [Jours], H [Heures], m [Minutes], s [Secondes]")}`,
                    inline: true
                },
                {
                      name: `\u200B`,
                      value: `\u200B`,
                      inline: true
                  },
                  {
                      name: `Serveurs`,
                      value: `${client.guilds.size.toLocaleString()}`,
                      inline: true
                  },
                  {
                      name: `Total d'utilisateurs`,
                      value: `${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`,
                      inline: true
                  },
                  {
                      name: `Total des Channels`,
                      value: `${client.channels.size.toLocaleString()}`,
                      inline: true
                  },
                  {
                      name: `Version de Discord.js`,
                      value: `v${Discord.version}`,
                      inline: true
                  }
              ],
              timestamp: new Date(),
              thumbnail: {
                  url: client.user.avatarURL
              }
          }
      })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["u","up"],
  permLevel: 0
};

exports.help = {
  name: 'uptime',
  description: 'Statistique en relation direct avec le bot.',
  usage: `${settings.prefix}uptime`
};
