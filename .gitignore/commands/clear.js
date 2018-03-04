const settings = require('../settings.json');
exports.run = function(client, message, args) {
  let messagecount = parseInt(args.join(' '));
  message.channel.fetchMessages({
    limit: messagecount
  }).then(messages => message.channel.bulkDelete(messages));
  message.channel.sendMessage("***Les " + args + " messages ont bien été supprimé.***").then(response => { response.delete(5000) });;

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["prune", "purge"],
  permLevel: 2
};

exports.help = {
  name: 'clear',
  description: 'Nettoie X nombres de messages dans le channel.',
  usage: `${settings.prefix}clear <number>`
};
