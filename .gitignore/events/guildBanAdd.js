module.exports = (guild, user) => {
let v=guild.channels;
let w 
v.find('name', 'general')?w=v.find('name', 'general'):w=v.filter(c => (c.type === 'text')).first()

w.send(`${member.user.username}`)
};
