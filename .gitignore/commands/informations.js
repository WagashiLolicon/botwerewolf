const settings = require('../settings.json');
exports.run = function(client, message, args) {
  message.delete(message.author)
          message.channel.sendMessage("", {
            embed: {
                color: 0xffffff,
                title: `Bienvenue dans WereWolf [Support]`,
                fields: [
                    {
                        name: `**__Règles Du Serveur__**`,
                        value: `**1)** Ne faites pas de publicité, sauf si il s'agit d'un partenaire.\n**2)** Pas de contenu NSFW, ce serveur est conçu pour être convivial pour tous les âges.\n**3)** Pas de spam, il en résultera d'une sanction instantanée.\n**4)** Le respect est requis pour que vous soyez reconnu en tant que membre ici.\n**5)** Utilisez chaque canal pour son propre usage. (conservez les commandes pour le channel #commandes)\n**6)** Ne demandez pas de rôles, nous surveillons toujours votre comportement et vous donnerons un rôle si vous le méritez.\n**7)** Gardez vos feedbacks pour #feedback.`,
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
  aliases: ["info", "i"],
  permLevel: 4
};

exports.help = {
  name: 'informations',
  description: 'Envoie une liste d\'informations sur le serveur support du serveur.',
  usage: `${settings.prefix}informations (Only Dev)`
};
