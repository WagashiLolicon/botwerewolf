const settings = require('../settings.json');
exports.run = (client, message, args) => {
	var check = ":white_check_mark:"
	var ranime = ["Sousei No Onmyouji | ★★★★☆ | " + check,
	"Yosuge No Sora | ★★★★ | " + check,
	"King's Game | ★★★★ | " + check,
	"Mirai Nikki | ★★★★☆ | " + check,
	"One Punch Man | ★★★★☆ | " + check,
	"Masamune-Kun no Revenge | ★★★★ | " + check,
	"Little Witch Academia | ★★★★☆ | " + check,
	"Tokyo Ghoul | ★★★★★ | " + check,
	"Shingeki No Kyojin | ★★★★★ | " + check,
	"Btooom | ★★★★☆ | " + check,
	"Keijo!!!!!!!! | ★★★★☆ | " + check,
	"New Game! | ★★★★ | " + check,
	"Overlord | ★★★★☆ | " + check,
	"Kakegurui | ★★★★★ | " + check,
	"One Room | ★★★ | " + check,
	"Ao Haru Ride | ★★★★☆ | " + check,
	"Classroom Of The Elite | ★★★★☆ | " + check,
	"Violet Evergarden | ★★★★★ | " + check,
	"A.I.C.O | ★★★★ | " + check,
	"Shokugeki No Soma | ★★★★★ | " + check,
	"Hai To Gensou | ★★★★☆ | " + check,
	"Noragami | ★★★★★ | " + check,
	"Mikagura Gakuen | ★★★★ | " + check,
	"Hand Shaker | ★★★☆ | " + check,
	"HighSchool Dxd | ★★★★☆ | " + check,
	"Sword Art Online | ★★★★☆ | " + check,
	"Your Lie In April | ★★★★★ | " + check,
	"Fate/Zero | ★★★★★ | " + check,
	"Danganrompa | ★★★★★ | " + check,
	"Seven Deadly Sins | ★★★★★ | " + check,
	"Black Clover | ★★★★☆ | "  + check,
	"Death March to The Parrallel World | ★★★☆ | " + check,
	"Katana Maidens | ★★★ | " + check,
	"Citrus | ★★★★☆ | " + check,
	"The Ancient Magus Bride | ★★★★★ | " + check,
	"Steins;Gate  | ★★★★★ | " + check,
	"Boku No Hero Academia | ★★★★★ | " + check,
	"Nisekoi | ★★★★ | " + check,
	"Inazuma Eleven | ★★★★☆ | " + check,
	"Chunibyo | ★★★★☆ | " + check,
	"Wakfu | ★★★★☆ | "  + check,
	"Fairy Tail | ★★★★☆ | " + check,
	"Trickster | ★★★★ | " + check,
	"Sengoku Night Blood | ★★★ | " + check,
	"A Silent Voice | ★★★★★ | " + check,
	"Accel World | ★★★★☆ | " + check,
	"Akashic Records | ★★★★☆ | " + check,
	"Bakuman | ★★★★☆ | " + check,
	"Black Bullet | ★★★★☆ | " + check,
	"Blend S | ★★★★ | " + check,
	"Chaos:Head | ★★★☆ | " + check,
	"Code: BREAKER | ★★★★☆ | " + check,
	"Code Geass | ★★★★★ | " + check,
	"Rakudai Kishi No Cavalry | ★★★☆ | " + check,
	"D-Frag | ★★★★ | " + check,
	"DeadMan Wonderland | ★★★★☆ | " + check,
	"Death Parade | ★★★★☆ | " + check,
	"Erased | ★★★★★ | " + check,
	"Ao No Kanata | ★★★★ | " + check,
	"Gamers! | ★★★★ | ", + check,
	"Danmachi | ★★★★ | " + check,
	"Kimi Ni Todoke | ★★★★☆ | " + check,
	"Mayo Chiki! | ★★★★ | " + check,];

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
