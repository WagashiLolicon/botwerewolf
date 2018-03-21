const settings = require('../settings.json');
exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.sendMessage("", {
            embed: {
                color: 0x9b3e3e,
                title: `Liste des commandes:`,
                fields: [
                    {
                        name: `[Use ${settings.prefix}help <commandname> pour plus de détail]`,
                        value: `\n\n${client.commands.map(c => `***${settings.prefix}${c.help.name}**${' '.repeat(longest - c.help.name.length)}: ${c.help.description}*`).join('\n')}`,
                        inline: true
                    },

                ],
                timestamp: new Date(),
                thumbnail: {
                    url: message.author.guildURL
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
                    },

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
  permLevel: 4
};

exports.help = {
  name: 'help',
  description: 'Envoie toute la liste des commandes effectuable.',
  usage: `${settings.prefix}help + commande`
};
