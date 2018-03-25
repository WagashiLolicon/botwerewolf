const settings = require('../settings.json');
exports.run = (client, message, args) => {
var sayings = [":speech_balloon:  Je ne comprend vraiment pas ta logique",
  ":8ball: :speech_balloon: Je pense que tu es Loup Garou.",
  ":8ball: :speech_balloon: Pourquoi me demandes-tu de faire cela ?",
  ":8ball: :speech_balloon: Je sens un Loup-Garou tout proche !",
  ":8ball: :speech_balloon: Plus un bruit !",
  ":8ball: :speech_balloon: A ce que je vois tu es le Loup Garou Blanc !",
  ":8ball: :speech_balloon: Penses-tu réellement que faire cette commandes était utile ?",
  ":8ball: :speech_balloon: Outlook good",
  ":8ball: :speech_balloon: Oui...",
  ":8ball: :speech_balloon: Regarde là-bas ! Un Pigeon",
  ":8ball: :speech_balloon: Bye, Bye...",
  ":8ball: :speech_balloon: Je ne veux pas te répondre !",
  ":8ball: :speech_balloon: Un Problème ? Tag @Kô / Wagashi 🦑#4297 !",
  ":8ball: :speech_balloon: Je ne peux pas prèdire qui tu es !",
  ":8ball: :speech_balloon: Je me concentre, c'est bon je sais ! J'aime beaucoup mon développeur.",
  ":8ball: :speech_balloon: Je ne peux pas le dire.",
  ":8ball: :speech_balloon: Ma réponse est non !",
  ":8ball: :speech_balloon: Ma source me dit que tu es un Loup Garou.",
  ":8ball: :speech_balloon: *Regarde par la fenètre* Oh! J'ai cru appercevoir un Loup Garou...",
  ":8ball: :speech_balloon: Très Utile...",
  ":8ball: :speech_balloon: Bien Joué !",
  ":8ball: :speech_balloon: Pourquoi pas...",
  ":8ball: :speech_balloon: J'aime beaucoup les humains !",
  ":8ball: :speech_balloon: Tu es un random...",
  ":8ball: :speech_balloon: Tu as un problème ? Contact le support !",
  ":8ball: :speech_balloon: Lâche-Moi !",
  ":8ball: :speech_balloon: Je crois que je suis tombé amoureux de toi :heart:.",
  ":8ball: :speech_balloon: Pourquoi causes-tu avec un bot ? Ta vie est si intense !",
  ":8ball: :speech_balloon: Je crois que bien la sorcière peut sauver quelqu'un mais aussi en tuer une",
  ":8ball: :speech_balloon: Arrête de me ping sans raison !",
  ":8ball: :speech_balloon: Pourquoi tu me critiques ? :cry: ",
  ":8ball: :speech_balloon: Tu ne vas pas bien ?",
  ":8ball: :speech_balloon: Excuse-moi d'être aussi froid.",
  ":8ball: :speech_balloon: Ahah...",
  ":8ball: :speech_balloon: ...",
  ":8ball: :speech_balloon: Tu veux vraiment une réponse à cette question ?",
  ":8ball: :speech_balloon: Stop ! Arrête de me ping !",
  ":8ball: :speech_balloon: Il se pourrait que la question posé n'est aucun but.",
  ":8ball: :speech_balloon: Personellement je trouve que tu es vraiment idiot!",
  ":8ball: :speech_balloon: Pourquoi Spam-tu cette commande ?",
  ":8ball: :speech_balloon: Idiot...",
  ":8ball: :speech_balloon: Pourquoi es-tu un enfant ?",
  ":8ball: :speech_balloon: J'aime te sentir prêt de moi!"];

			var result = Math.floor((Math.random() * sayings.length) + 1);
			message.reply(sayings[result]);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["8b"],
  permLevel: 0
};

exports.help = {
  name: '8ball',
  description: 'Demande moi ce que tu veux!',
  usage: `${settings.prefix}8ball`
};
