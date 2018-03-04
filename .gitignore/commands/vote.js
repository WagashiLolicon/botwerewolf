const settings = require('../settings.json');
const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'votes');
  if (!modlog) return message.reply('Je n\'arrive pas a trouver le channel #votes, si celui-ci n\'a pas encore été crééé je vous demande de le créer afin de pouvoir utiliser la commande suivante.');
  if (reason.length < 1) return message.reply('Tu as besoin de mettre une raison pour pouvoir voter une personne.');
  if (message.mentions.users.size < 1) return message.reply('Tu dois mentionné quelqu\'un lorsque tu utilises cette commande.').catch(console.error);
  const embed = new Discord.RichEmbed()
  .setColor(0x9c56bd)
  .setTimestamp()
  .addField('Action:', 'Vote')
  .addField('Villageois:', `${user.username}#${user.discriminator}`)
  .addField('Vote Par:', `${message.author.username}#${message.author.discriminator}`)
  .addField('Raison', reason);
  return client.channels.get(modlog.id).sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["v"],
  permLevel: 0
};

exports.help = {
  name: 'vote',
  description: 'Votes une personnes lors du Loup Garou.',
  usage: `${settings.prefix}vote @mention + raison(s)`
};