const settings = require('../settings.json');
exports.run = (client, message, args) => {
const dateFormat = require('dateformat');
const now = new Date();
dateFormat(now, 'dddd, mmmm dS, yyyy, h:MM:ss TT');
 const millis = new Date().getTime() - message.guild.createdAt.getTime();
    const days = millis / 1000 / 60 / 60 / 24;

    const owner = message.guild.owner.user || {};

    const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
const Discord = require('discord.js');
    
    return message.channel.sendMessage( {
                  embed: {
                      color: 0xb6e9f1,
                      title: ``,
                      fields: [
                          {
                              name: `\nServer Créer le`,
                              value: `${dateFormat(message.guild.createdAt)}`,
                              inline: true
                          },
                          {
                              name: `\nJours depuis la création`,
                              value: `${days.toFixed(0)}`,
                              inline: true
                          },
                          {
                              name: `\nDefault Channel`,
                              value: `${message.guild.defaultChannel}`,
                              inline: true
                          },
                          {
                              name: `\nRegion`,
                              value: `${message.guild.region}`,
                              inline: true
                          },
                          {
                              name: `\nNombre de Membres`,
                              value: `${message.guild.members.filter(m => m.presence.status !== 'offline').size} / ${message.guild.memberCount}`,
                              inline: true
                          },
                          {
                              name: `\nOwner`,
                              value: `${owner.username || 'None'}`,
                              inline: true
                          },
                          {
                              name: `Text Channels`,
                              value: `${message.guild.channels.filter(m => m.type === 'text').size}`,
                              inline: true
                          },
                          {
                              name: `\nVoice Channels`,
                              value: `${message.guild.channels.filter(m => m.type === 'voice').size}`,
                              inline: true
                          },
                          {
                              name: `\nVerification Level`,
                              value: `${verificationLevels[message.guild.verificationLevel]}`,
                              inline: true
                          },
                          {
                              name: `\nRoles`,
                              value: `${message.guild.roles.size}`,
                              inline: true
                          },

                      ],
                      timestamp: new Date(),
                      thumbnail: {
                          url: client.user.avatarURL
                      }
                  }
              });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["si"],
  permLevel: 0
};

exports.help = {
  name: 'serverinfo',
  description: 'Envoie toute les informations lié au serveur.',
  usage: `${settings.prefix}serverinfo`
};