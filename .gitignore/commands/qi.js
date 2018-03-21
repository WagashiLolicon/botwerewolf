const settings = require('../settings.json');
exports.run = (client, message, args) => {
	var qi = Math.floor(Math.random()*130) + 1;
	if(qi > 121) return message.channel.sendMessage("", {
            embed: {
                color: 0x3e9ffa,
                title: ``,
                fields: [
                    {
                        name: `Test de Quotient Intellectuel`,
                        value: `Ton QI est de **` + qi + `**. Tu es quelqu'un de Doué !`,
                        inline: false
                    },

                ],
                timestamp: new Date(),
                thumbnail: {
                    url: message.author.guildURL
                }
            }
        })
	else if(qi > 111) return message.channel.sendMessage("", {
            embed: {
                color: 0x3e9ffa,
                title: ``,
                fields: [
                    {
                        name: `Test de Quotient Intellectuel`,
                        value: `Ton QI est de **` + qi + `**. Tu as une intelligence supérieure à la moyenne !`,
                        inline: false
                    },

                ],
                timestamp: new Date(),
                thumbnail: {
                    url: message.author.guildURL
                }
            }
        })
    else if(qi > 90) message.channel.sendMessage("", {
            embed: {
                color: 0x3e9ffa,
                title: ``,
                fields: [
                    {
                        name: `Test de Quotient Intellectuel`,
                        value: `Ton QI est de **` + qi + `**. Tu as une intelligence moyenne !`,
                        inline: false
                    },

                ],
                timestamp: new Date(),
                thumbnail: {
                    url: message.author.guildURL
                }
            }
        })
    else if(qi < 89) message.channel.sendMessage("", {
            embed: {
                color: 0x3e9ffa,
                title: ``,
                fields: [
                    {
                        name: `Test de Quotient Intellectuel`,
                        value: `Ton QI est de **` + qi + `**. Tu as une intelligence inférieure à la moyenne !`,
                        inline: false
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
  aliases: ["q"],
  permLevel: 0
};

exports.help = {
  name: 'qi',
  description: 'Te permet de voir ton qi.',
  usage: `${settings.prefix}qi`
};