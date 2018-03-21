const settings = require('../settings.json');
exports.run = (client, message, args) => {
	function sendKiwi(channel, sender, receiver) {
		if(receiver.bot === true) return message.channel.send(`:kiwi: ➜ **${sender.username}** a décidé de donner un kiwi à **<@${receiver.id}>**... Je suis un bot tu sais ? tu n'as pas d'ami ? ツ >.<`);
		else if(receiver.id === sender.id) return message.channel.send(`:kiwi: ➜ Pourquoi se donner ses propres kiwis **<@${sender.id}>** ツ ?`);
		else return message.channel.send(`:kiwi: ➜ **${sender.username}** viens de donner un kiwi à **<@${receiver.id}>** ツ`);
	}

	if(message.mentions.users.first()) return sendKiwi(message.channel, message.author, message.mentions.users.first());
	else if(args && system.getUser(message, args)) return sendKiwi(message.channel, message.author, system.getUser(message, args).user);
	else return message.channel.send(`Essaye avec: \`/kiwi <user>\``);
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ["kw"],
	permLevel: 1,
};

exports.help = {
	name: `kiwi`,
	description: `Donne un kiwi a quelqu'un pour le rendre heureux !`,
	usage: `${settings.prefix}kiwi <user>`
};