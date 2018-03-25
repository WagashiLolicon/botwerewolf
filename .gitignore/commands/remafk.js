const settings = require('../settings.json');
exports.run = (client, message, params) => {
const fs = require("fs");

let afk = JSON.parse(fs.readFileSync("./afks.json", "utf8"));
if (afk[message.author.id]) {
delete afk[message.author.id];
if (message.member.nickname === null) {
message.channel.send("Vous êtes desormais actif, je viens de vous retirer votre afk.");
}else{
message.channel.send("Vous êtes desormais actif, je viens de vous retirer votre afk");
}
fs.writeFile("./afks.json", JSON.stringify(afk), (err) => { if (err) console.error(err);});
}else{
message.channel.send("Erreur! Vous n'êtes pas Afk.");
}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [''],
  permLevel: 0
};

exports.help = {
  name: 'remafk',
  description: 'Permet d\'enlever le afk.',
  usage: `${settings.prefix}remafk`
};
