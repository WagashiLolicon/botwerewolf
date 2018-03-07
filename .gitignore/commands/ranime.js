const settings = require('../settings.json');
exports.run = (client, message, args) => {
	var ranime = ["Sousei No Onmyouji | ★★★★☆",
	"Yosuge No Sora | ★★☆",
	"King's Game | ★★★☆",
	"Mirai Nikki | ★★★★",
	"Masamune-Kun no Revenge | ★★★",
	"Little Witch Academia | ★★★☆",
	"Tokyo Ghoul | ★★★★",
	"Shingeki No Kyojin | ★★★★☆",
	"Btooom | ★★★☆",
	"Keijo!!!!!!!! | ★★★☆",
	"New Game! | ★★★☆",
	"Overlord | ★★★★",
	"Kakegurui | ★★★★",
	"One Room | ★★★☆",
	"Ao Haru Ride | ★★★★",
	"Classroom Of The Elite | ★★★★☆",
	"Violet Evergarden | ★★★",
	"A.I.C.O | Soon",
	"Shokugeki No Soma | ★★★★★",
	"Hai To Gensou | ★★★★",
	"Noragami | ★★★★",
	"Mikagura Gakuen | ★★★☆",
	"Hand Shaker | ★★",
	"HighSchool Dxd | ★★★☆",
	"Sword Art Online | ★★★☆",
	"Your Lie In April | ★★★★",
	"Fate/Zero | ★",
	"Danganrompa | ★★★★",
	"Seven Deadly Sins | ★★★☆",
	"Black Clover | Soon",
	"Death March to The Parrallel World | ★★★",
	"Katana Maidens | ★★",
	"Citrus | ★★★★☆",
	"The Ancient Magus Bride | ★★",
	"Steins;Gate 0 | Soon",
	"Boku No Hero Academia | ★★★★",
	"Nisekoi | ★★★☆",
	"Inazuma Eleven | ★★☆",
	"Chunibyo | ★★★☆",
	"Wakfu | ★★★☆",
	"Fairy Tail | ★★★★☆",
	"Trickster | Soon",
	"Sengoku Night Blood | ★★★☆",
	"A Silent Voice | ★★★★★",
	"Accel World | ★★☆",
	"Akashic Records | ★★★★",
	"Bakuman | ★★★☆",
	"Black Bullet | ★★★☆",
	"Blend S | ★★★☆",
	"Chaos:Head | ★★★☆",
	"Code: BREAKER | ★★★☆",
	"Code Geass | ★★★★",
	"Rakudai Kishi No Cavalry | ★★★☆",
	"D-Frag | ★★★☆",
	"DeadMan Wonderland | ★★★★☆",
	"Death Parade | ★★★★☆",
	"Erased | ★★★★★",
	"Ao No Kanata | ★★★★",
	"Gamers! | ★★★☆",
	"Danmachi | ★★★☆",
	"Kimi Ni Todoke | ★★★☆",
	"Mayo Chiki! | ★★★★☆",
	"Nagi-Asu | ★★★☆",
	"No Game No Life | ★★☆",];

		var result = Math.floor((Math.random() * ranime.length) + 1);
		          message.channel.sendMessage("", {
            embed: {
                color: 0xfdaeae,
                title: ``,
                fields: [
                    {
                        name: `Random Animé`,
                        value: ranime[result] ,
                        inline: false
                    },

                ],
                timestamp: new Date(),
                thumbnail: {
                    url: message.author.guildURL
                }
            }
        })

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ra"],
  permLevel: 0
};

exports.help = {
  name: 'ranime',
  description: 'Envoie le nom random d\'un anime.',
  usage: `${settings.prefix}ranime`
};
