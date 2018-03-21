const settings = require('../settings.json');
exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send({embed: {
    color: 0xffffff,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "",
    url: "",
    description: "",
    fields: [{
        name: "Coeur",
        value: "help, Information, reload, say, sendembed, serverinfo, support, uptime", 
      },
      {
        name: "Modération",
        value: "clear",
      },
      {
        name: "Fun",
        value: "8ball, kiwi, qi, rpg",
      },
      {
        name: "Utile",
        value: "ping, ranime, vote",
      },
      {
        name: "Nsfw",
        value: "✘",
      },
      {
        name: "――――",
        value: `➜ Le prefix actuel de ce bot est ${settings.prefix}
➜ [Invitation](${settings.invite})
➜ [Support](${settings.support})
➜ [PayPal](https://www.paypal.me/Wagashi)`,
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Yameteᴼᶰᶦᶦˢᵃᵐᵃ"
    }
  }
        })
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
       message.channel.sendMessage("", {
            embed: {
                color: 0x9b3e3e,
                title: `Réalisation de la Commande`,
                fields: [
                    {
                        name: `**/${command.help.name}**`,
                        value: `\n${command.help.description}\nusage: ${command.help.usage}\nvariante(s): **${command.conf.aliases}**`,
                        inline: true
                    }

                ],
                timestamp: new Date(),
                thumbnail: {
                    url: message.author.guildURL
                }
            }
        })
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp'],
  permLevel: 0
};

exports.help = {
  name: 'help',
  description: 'Envoie toute la liste des commandes effectuable.',
  usage: `${settings.prefix}help + commande`
};
