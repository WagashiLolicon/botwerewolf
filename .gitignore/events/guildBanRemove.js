const Discord = require('discord.js');
module.exports = (guild, user) => {
let v=guild.channels;
v.find('name', 'general')?w=v.find('name', 'general'):w=v.filter(c => (c.type === 'text')).first()

w.send(`Le Membre ${user.username} a été unban`)
	const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Action:', 'Unban')
    .addField('User:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Moderator:', `${guild.client.unbanAuth.username}#${guild.client.unbanAuth.discriminator}`)
    .addField('Reason', guild.client.unbanReason);
  return guild.channels.get(guild.channels.find('name', 'mod-log').id).sendEmbed(embed);

};
