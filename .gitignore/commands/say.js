const settings = require('../settings.json');
exports.run = (client, message, args) => {
	message.channel.send({
		embed: {
			author: {
				name: `Message de ${message.author.username}`,
				icon_url: message.author.avatarURL
			},
			description: `${args}`,
			color: 0x360721
		}
	}).then(message.delete());
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [""],
	permLevel: 1,
};

exports.help = {
	name: `say`,
	description: `Répète ce que tu as dis.`,
	usage: `${settings.prefix}say <text>`
};