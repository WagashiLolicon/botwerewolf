module.exports = member => {
let v=guild.channels;
v.find('name', 'general')?w=v.find('name', 'general'):w=v.filter(c => (c.type === 'text')).first()

w.send(`Le Membre ${member.user.username} a rejoint le serveur dite lui bonjour`)
};

