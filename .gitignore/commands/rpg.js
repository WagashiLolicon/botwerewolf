const settings = require('../settings.json');
exports.run = (client, message, args) => {
	
	var nom = ["Aihï",
	"Antho",
	"Belem",
	"Haiiden",
	"Hiiro",
	"Jin",
	"Kabade",
	"Kichi",
	"Yuki",
	"Minjo",
	"Sargae",
	"WagSka",
	"Necsky",
	"Nijimiya",
	"Kimitchi",
	"Seigen",];
	
	var sexe = ["Homme",
	"Femme",
	"Androgine",
	"Homme",
	"Femme",
	"Androgine",
	"Homme",
	"Femme",
	"Androgine",
	"Homme",
	"Femme",
	"Androgine",
	"Homme",
	"Femme",
	"Androgine",
	"Homme",
	"Femme",
	"Androgine",];

	var osex = ["Hétéro",
	"Lesbienne/Gay",
	"Bisexuelle",
	"Hétéro",
	"Lesbienne/Gay",
	"Bisexuelle",
	"Hétéro",
	"Lesbienne/Gay",
	"Bisexuelle",
	"Hétéro",
	"Lesbienne/Gay",
	"Bisexuelle",
	"Hétéro",
	"Lesbienne/Gay",
	"Bisexuelle",];

	var race = ["Elfe",
	"Neko",
	"Gobelin",
	"Humain",
	"Ondin",
	"Oréade",
	"Tengus",
	"Kobolds",
	"Dhampir",
	"Drow",
	"Sylphe",
	"Sulis",
	"Strix",
	"Vanaras",
	"Kitsune",
	"Gripplis",
	"Nagagis",
	"Duergars",];

	var classe = ["Mage",
	"Acrobate",
	"Paladin",
	"Tank",
	"Salvateur",
	"Guerrier",
	"Moine",
	"Rodeur",
	"Conjurateur",
	"Prince",
	"Ninja",
	"Pistolier",
	"Spirite",
	"Cinetiste",
	"AntiPaladin",
	"Permanente",
	"Magus",
	"Ensorceleur",];

	var coiffure = ["Aïdar",
	"Ombré hair",
	"Frange",
	"Coiffure (Japon)",
	"Chignon",
	"Tonsure",
	"Tresse",
	"Lissage japonais",
	"Coupe pixie",
	"Crête iroquoise",
	"Yuko (coiffure)",
	"Tresse française",
	"Shimada",
	"Raie",
	"Queue-de-cheval",
	"Brushing",
	"Fontange",
	"Guazze",];

	var colorhair = ["Blond Platine",
	"Brun",
	"Chatain",
	"Blanc",
	"Rose",
	"Rouge",
	"Bleu",
	"Blond",
	"Roux",
	"Noir",
	"Pourpre",
	"Blond Platine",
	"Brun",
	"Chatain",
	"Blanc",
	"Rose",
	"Rouge",
	"Bleu",
	"Blond",
	"Roux",
	"Noir",
	"Pourpre",];

	var coloreyes = ["Bleu Vide",
	"Marron",
	"Vert",
	"Bleu",
	"Rouge",
	"Violet",
	"Rouge Vide",
	"Noir",
	"Orange",
	"Magenta",
	"Cyan",
	"Bleu Vide",
	"Marron",
	"Vert",
	"Bleu",
	"Rouge",
	"Violet",
	"Rouge Vide",
	"Noir",
	"Orange",
	"Magenta",
	"Cyan",];

	var caracter = ["Timide",
	"Joyeux",
	"Depressif",
	"Colérique",
	"Yandere",
	"Tsundere",
	"Surpris",
	"Sadique",
	"Joueur",
	"Suicidaire",
	"Amicale",
	"Ambitieux",
	"Angelique",
	"Avare",
	"Autoritaire",
	"Chanceux",
	"Brave",
	"Serviable",
	"Cultivé",
	"Cupide",
	"Egoiste",
	"Emotif",];

	var coloring = ["Bleu",
	"Jaune",
	"Orange",
	"Violet",
	"Noir",
	"Blanc",
	"Gris",
	"Magenta",
	"Cyan",
	"Vert",
	"Beige",
	"Marron",
	"Rouge",
	"Vert Prairie",
	"Bleu Ciel",
	"Rose",
	"Rouge Tomate",
	"Pourpre",
	"Bordeau",];


	var sport = ["FootBall",
	"FootBall Américain",
	"Rugby",
	"Danse",
	"Kendo",
	"Judo",
	"Art Martiaux",
	"Escrime",
	"Gymnastique",
	"Ski Alpin",
	"Ski de Fond",
	"BaseBall",
	"Badminton",
	"Curling",
	"Équitation",
	"Escalade",
	"Golf",
	"HandBall",
	"BasketBall",
	"Javelot",
	"Lancer de disque",
	"Musculation",];

	var fruit = ["Pomme",
	"Poire",
	"Abricot",
	"Raisin",
	"Cassis",
	"Groseille",
	"Framboise",
	"Fraise",
	"Cerise",
	"Passion",
	"Mangue",
	"Ananas",
	"Kaki",
	"Kiwi",
	"Grenade",
	"Marron",
	"Litchi",
	"Noix",
	"Myrtille",
	"Orange",
	"Pamplemouse",
	"Prune",];

	var animal = ["Chien",
	"Chat",
	"Aigle",
	"Éléphant",
	"Orque",
	"Baleine",
	"Zèbre",
	"Cheval",
	"Boeuf",
	"Souris",
	"Hirondelle",
	"Fourmis",
	"Scarabé",
	"Kiwi",
	"Tigre",
	"Lyon",
	"Serpent",
	"Rat",
	"Ocelot",
	"Pélican",
	"Poussin",
	"Renard",];

	var element = ["Feu",
	"Terre",
	"Eau",
	"Air",
	"Feu",
	"Terre",
	"Eau",
	"Air",
	"Feu",
	"Terre",
	"Eau",
	"Air",
	"Feu",
	"Terre",
	"Eau",
	"Air",
	"Feu",
	"Terre",
	"Eau",
	"Air",];

	var lieu = ["Ciel",
	"Enfer",
	"Océan",
	"Asie",
	"Europe",
	"Amerique",
	"Afrique",
	"Sous Terre",
	"Volcan",
	"Ciel",
	"Enfer",
	"Océan",
	"Asie",
	"Europe",
	"Amerique",
	"Afrique",
	"Sous Terre",
	"Volcan",
	"Asie",
	"Europe",
	"Amerique",
	"Afrique",];


	var age = Math.floor(Math.random()*45) + 1;
	var taille = Math.floor(Math.random()*90) + 1;
	var poids = Math.floor(Math.random()*6) + 1;

		var result = Math.floor((Math.random() * nom.length) + 1);

//--------------------------------------------------------------------------------------

		         message.channel.sendMessage("", {
            embed: {
                color: 0xffffff,
                title: `Personnage __R__ole__P__lay__G__ames`,
                fields: [
                    {
                        name: `Nom du Personnage`,
                        value: ":busts_in_silhouette: " + nom[result],
                        inline: true
                    },
                    {
                        name: `Age du Personnage`,
                        value: ":birthday: " + age + " ans",
                        inline: true
                    },
                    {
                        name: `Sexe du Personnage`,
                        value: "♀/♂ " + sexe[result],
                        inline: true
                    },
                    {
                        name: `Orientation Sexuelle`,
                        value: ":peach: " + osex[result],
                        inline: true
                    },
                    {
                        name: `Race du Personnage`,
                        value: ":white_flower: " + race[result],
                        inline: true
                    },
                    {
                        name: `Classe du Personnage`,
                        value: ":dragon: " + classe[result],
                        inline: true
                    },
                    {
                        name: `Coiffure du Personnage`,
                        value: ":person_with_blond_hair: " + coiffure[result],
                        inline: true
                    },
                    {
                        name: `Couleur de Cheveux`,
                        value: ":haircut: " + colorhair[result],
                        inline: true
                    },
                    {
                        name: `Couleurs de Yeux`,
                        value: ":eye: " + coloreyes[result],
                        inline: true
                    },
                    {
                        name: `Taille du Personnage`,
                        value: ":walking: 1," + taille + " mètre",
                        inline: true
                    },
                    {
                        name: `Poids du Personnage`,
                        value: ":poultry_leg: " +  poids + "5 kg",
                        inline: true
                    },
                    {
                        name: `Caractère Principal`,
                        value: ":space_invader: " + caracter[result],
                        inline: true
                    },
                    {
                        name: `Couleur Préfèrée`,
                        value: ":large_blue_diamond: " + coloring[result],
                        inline: true
                    },
                    {
                        name: `Sport Préféré`,
                        value: ":football: " + sport[result],
                        inline: true
                    },
                    {
                        name: `Fruit Préféré`,
                        value: ":apple: " + fruit[result],
                        inline: true
                    },
                    {
                        name: `Animal Préféré`,
                        value: ":dog: " + animal[result],
                        inline: true
                    },
                    {
                        name: `Élement`,
                        value: ":fire: " + element[result],
                        inline: true
                    },
                    {
                        name: `Lieu`,
                        value: ":island: " + lieu[result],
                        inline: true
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
  name: 'rpg',
  description: 'Créer aléatoirement un personnage pour du RolePlay.',
  usage: `${settings.prefix}rpg`
};
