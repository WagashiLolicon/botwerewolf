const settings = require('../settings.json');
exports.run = (client, message, params) => {
const fs = require("fs");

let afk = JSON.parse(fs.readFileSync("./afks.json", "utf8"));
if (afk[message.author.id]) {
return message.channel.send(`Erreur! Tu es déjà Afk ${message.author.username} Idiot!`);
}else{
let args1 = message.content.split(" ").slice(1);
if (args1.length === 0) {
afk[message.author.id] = {"reason" : true};
message.delete();
message.channel.send(`Tu es desormais AFK, Effectue **${settings.prefix}remafk** pour retirer ton afk`).then(x => DeleteQueue.add(x, 10000));
}else{
afk[message.author.id] = {"reason" : args1.join(" ")};
message.delete();
message.channel.send(`Tu es desormais AFK, Effectue **${settings.prefix}remafk** pour retirer ton afk`).then(x => DeleteQueue.add(x, 10000));
}
fs.writeFile("./afks.json", JSON.stringify(afk), (err) => { if (err) console.error(err);});
}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [''],
  permLevel: 0
};

exports.help = {
  name: 'afk',
  description: 'Permet de vous mettre "afk" lorsque vous faites quelque chose.',
  usage: `${settings.prefix}afk + raison`
};
