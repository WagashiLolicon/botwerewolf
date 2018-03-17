const settings = require('../settings.json');
exports.run = (client, message, args) => {
	function sendCookie(channel, sender, receiver) {
		if(receiver.bot === true) return message.channel.send(`:kiwi: • **${sender.username}** a donné un kiwi à **<@${receiver.id}>**.. Oh tu es seul ? Désolé pour toi >.<`);
		else if(receiver.id === sender.id) return message.channel.send(`:kiwi: • Tu aimes tes propres kiwis **<@${sender.id}>** ?`);
		else return message.channel.send(`:kiwi: • **${sender.username}** a donné un kiwi à**<@${receiver.id}>**`);
	}

	if(message.mentions.users.first()) return sendCookie(message.channel, message.author, message.mentions.users.first());
	else if(args && system.getUser(message, args)) return sendCookie(message.channel, message.author, system.getUser(message, args).user);
	else return message.channel.send(`Try with : \`/kiwi <user>\``);
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [""],
	permLevel: 0,
};

exports.help = {
	name: `kiwi`,
	description: `Give a cookie to someone!`,
	usage: `${settings.prefix}kiwi <user>`
};
