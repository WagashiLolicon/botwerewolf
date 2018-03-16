const settings = require('../settings.json');
exports.run = (client, message, args) => {
	let user = {};
	if(message.mentions.users.first()) user = message.mentions.users.first();
	else user = message.author;

	message.channel.send({
		embed: {
			description: `Avatar de **${user.username}#${user.discriminator}**\nImage Non Affiché ? [clique ici](${user.avatarURL})`,
			image: { url: user.avatarURL },
			color: 0xFFFFFF
		}
	});
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: 1,
};

exports.help = {
	name: "avatar",
	description: "Montre ton avatar.",
	usage: `${settings.prefix}avatar <user>`
};