const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      people: [
        {
          imageurl:
            "https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_7ffe21c7.jpeg?region=130%2C147%2C1417%2C796",
          description:
            "Luke Skywalker was a Tatooine farmboy who rose from humble beginnings to become one of the greatest Jedi the galaxy has eve known. Along with his friends Princess Leia and Han Solo, Luke battled the evil Empire, discovered the truth of his parentage, and ended the tyranny of the Sith. A generation later, the location of the famed Jedi master was one of the galaxy’s greatest mysteries. Haunted by Ben Solo’s fall to evil and convinced the Jedi had to end, Luke sought exile on a distant world, ignoring the galaxy’s pleas for help. But his solitude would be interrupted – and Luke Skywalker had one final, momentous role to play in the struggle between good and evil.",
          Name: "Luke Skywalker",
          Birthplace: "Tatooine",
          Affiliation: "Rebel Alliance, Jedi Order",
          Species: "Human",
          Occupation: "Jedi Knight",
          Height: "1.72 meters",
          LightsaberColor: "Blue",
          Master: "Yoda, Obi-Wan Kenobi",
          Apprentices: "Ben Solo (Kylo Ren)",
        },
        {
          imageurl:
            "https://lumiere-a.akamaihd.net/v1/images/leia-organa-main_9af6ff81.jpeg?region=187%2C157%2C1400%2C786",
          description:
            " Princess Leia Organa was one of the greatest leaders of the Rebel Alliance, fearless on the battlefield and dedicated to ending the Empire’s tyranny. Daughter of Padmé Amidala and Anakin Skywalker, sister of Luke Skywalker, and with a soft spot for scoundrels, Leia ranked among the galaxy’s great heroes. But life under the New Republic proved difficult for her. Sidelined by a new generation of political leaders, she struck out on her own to oppose the First Order as founder of the Resistance. These setbacks in her political career were accompanied by more personal losses, which she endured with her seemingly inexhaustible will.",
          Name: "Leia Organa",
          Birthplace: "Alderaan",
          Affiliation: "Rebel Alliance, New Republic, Resistance",
          Species: "Human",
          Occupation: "Princess, Senator, General",
          Height: "1.5 meters",
          BlasterType: "Defender sporting blaster",
          Master: "Luke Skywalker",
          Apprentices: "Ben Solo (Kylo Ren)",
        },
        {
          imageurl:
            "https://lumiere-a.akamaihd.net/v1/images/obi-wan-kenobi-main_3286c63c.jpeg?region=0%2C0%2C1280%2C721",
          description:
            "A legendary Jedi Master, Obi-Wan Kenobi was a noble man and gifted in the ways of the Force. He trained Anakin Skywalker, served as a general in the Republic Army during the Clone Wars, and guided Luke Skywalker as a mentor.",
          Name: "Obi-Wan Kenobi",
          Birthplace: "Stewjon",
          Affiliation: "Jedi Order, Galactic Republic, Rebel Alliance",
          Species: "Human",
          Occupation: "Jedi Master, General",
          Height: "1.82 meters",
          LightsaberColor: "Blue, later Green",
          Master: "Qui-Gon Jinn",
          Apprentices: "Anakin Skywalker, Luke Skywalker",
        },

        {
          imageurl:
            "https://lumiere-a.akamaihd.net/v1/images/han-solo-main_a4c8ff79.jpeg?region=0%2C0%2C1920%2C1080",
          description:
            "Han Solo rose from an impoverished childhood on the mean streets of Corellia to become one of the heroes of the Rebel Alliance. As captain of the Millennium Falcon, Han and his co-pilot Chewbacca came to believe in the cause of galactic freedom, joining Luke Skywalker and Princess Leia Organa in the fight against the Empire. After the Battle of Endor, Han faced difficult times in a chaotic galaxy, leading to a shattering confrontation with his estranged son Ben.",
          Name: "Han Solo",
          Birthplace: "Corellia",
          Affiliation:
            "Galactic Empire (formerly), Rebel Alliance, New Republic",
          Species: "Human",
          Occupation: "Smuggler, Pilot, General",
          Height: "1.8 meters",
          BlasterType: "DL-44 heavy blaster pistol",
          Partner: "Chewbacca",
          Ships: "Millennium Falcon",
          LightsaberColor: "N/A",
          Master: "N/A",
          Apprentices: "N/A",
        },
        {
          imageurl:
            "https://lumiere-a.akamaihd.net/v1/images/chewie-main_906097a5.jpeg?region=0%2C1%2C768%2C432",
          description:
            "A legendary Wookiee warrior and Han Solo’s longtime co-pilot, Chewbacca continues to serve as faithful first mate to carry out daring missions against the First Order behind the controls of the Millennium Falcon. Known as Chewie to his closest friends, he was part of a core group of rebels who restored freedom to the galaxy during the reign of the Galactic Empire. Known for his short temper and accuracy with a bowcaster, Chewie also has a big heart and unwavering loyalty to his friends.",
          Name: "Chewbacca",
          Birthplace: "Kashyyyk",
          Affiliation: "Rebel Alliance, New Republic, Resistance",
          Species: "Wookiee",
          Occupation: "Smuggler, Warrior, First Mate (Millennium Falcon)",
          Height: "7 feet 6 inches",
          Partner: "Han Solo",
          Ships: "Millennium Falcon",
          LightsaberColor: "N/A",
          Master: "Yoda (briefly, according to Legends)",
          Apprentices: "None",
        },
        {
          imageurl:
            " https://lumiere-a.akamaihd.net/v1/images/Yoda-Retina_2a7ecc26.jpeg?region=0%2C0%2C1536%2C864",
          description:
            "Yoda was a legendary Jedi Master and stronger than most in his connection with the Force. Small in size but wise and powerful, he trained Jedi for over 800 years, playing integral roles in the Clone Wars, the instruction of Luke Skywalker, and unlocking the path to immortality. ",
          Name: "Yoda",
          Birthplace: "Unknown (Secreted on Dagobah during the Jedi Purge)",
          Affiliation: "Jedi Order, Galactic Republic, Rebel Alliance",
          Species: "Unknown (Yoda's species)",
          Occupation: "Jedi Master, Grand Master of the Jedi Order",
          Height: "66 centimeters",
          LightsaberColor: "Green",
          Master: "N/A",
          Apprentices:
            "Count Dooku (formerly), Qui-Gon Jinn, Obi-Wan Kenobi, Mace Windu,Luke Skywalker",
        },
        {
          imageurl:
            "https://lumiere-a.akamaihd.net/v1/images/darth-vader-main_4560aff7.jpeg?region=0%2C67%2C1280%2C720",
          description:
            "Once the heroic Jedi Knight named Anakin Skywalker, Darth Vader was seduced by the dark side of the Force. Forever scarred by his defeat on Mustafar, Vader was transformed into a cybernetically-enhanced Sith Lord. At the dawn of the Empire, Vader led the Empire’s eradication of the Jedi Order and the search for survivors. He remained in service of the Emperor -- the evil Darth Sidious -- for decades, enforcing his Master’s will and seeking to crush the Rebel Alliance and other detractors. But there was still good in him…",
          Name: "Darth Vader",
          Birthplace: "Tatooine",
          Affiliation:
            "Galactic Republic (formerly), Sith Order, Galactic Empire",
          Species: "Human",
          Occupation:
            "Sith Lord, Jedi Knight (formerly), Galactic Emperor's enforcer",
          Height: "2.03 meters",
          LightsaberColor: "Red",
          Master: "Darth Sidious (Emperor Palpatine)",
          Apprentices: "Ahsoka Tano",
        },
        {
          imageurl:
            "https://lumiere-a.akamaihd.net/v1/images/r2-d2-main_f315b094.jpeg?region=273%2C0%2C951%2C536",
          description:
            "A reliable and versatile astromech droid, R2-D2 has served Padmé Amidala, Anakin Skywalker, and Luke Skywalker in turn, showing great bravery in rescuing his masters and their friends from many perils. A skilled starship mechanic and fighter pilot's assistant, he has an unlikely but enduring friendship with the fussy protocol droid C-3PO.",
          Name: "R2-D2",
          Birthplace: "Naboo",
          Affiliation:
            "Galactic Republic, Rebel Alliance, New Republic, Resistance",
          Species: "Astromech droid",
          Occupation: "Astromech droid, Heroic companion",
          Height: "0.96 meters",
          LightsaberColor: "N/A",
          Master: "Anakin Skywalker, Luke Skywalker, Leia Organa",
          Apprentices: "N/A",
        },
      ],
      planets: [
        {
          imageurl:
            "https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg",
          description:
            "Tatooine is a harsh desert planet with vast dunes and rocky canyons. It's known for its iconic twin sunsets and features settlements like Mos Eisley, a notorious spaceport in the Outer Rim.",
          Name: "Tatooine",
        },
        {
          imageurl:
            "https://static.wikia.nocookie.net/starwars/images/8/84/CoruscantGlobeE1.png/revision/latest/scale-to-width-down/500?cb=20130123002137",
          Name: "Coruscant",
          description:
            "Coruscant is a city-covered planet with layers of towering skyscrapers. The surface is entirely urbanized, serving as the political, cultural, and economic center of the galaxy. The Senate Building and Jedi Temple are prominent landmarks.",
        },
        {
          imageurl:
            "https://static.wikia.nocookie.net/starwars/images/5/50/Endor_FFGRebellion.png/revision/latest?cb=20170529052722",
          Name: "Endor",
          description:
            "Endor is a forested moon orbiting the gas giant of the same name. The moon's surface is covered with dense woodlands, home to the primitive yet resourceful Ewoks. The Battle of Endor was a pivotal conflict fought here.",
        },
        {
          imageurl:
            "https://static.wikia.nocookie.net/starwars/images/f/f0/Naboo_planet.png/revision/latest/scale-to-width-down/350?cb=20190210065915",
          Name: "Naboo",
          description:
            "Naboo is a picturesque planet with diverse landscapes, including rolling plains, lakes, and dense forests. The capital city, Theed, is known for its elegant architecture. Naboo is politically significant and was the site of conflicts during the Clone Wars.",
        },
        {
          imageurl:
            "https://static.wikia.nocookie.net/starwars/images/1/1d/Hoth_SWCT.png/revision/latest?cb=20160630022322",
          Name: "Hoth",
          description:
            "Hoth is an icy planet with frigid temperatures. It features vast tundra and ice caves. The Rebel Alliance established Echo Base here, which became the target of a major Imperial assault in the Galactic Civil War.",
        },
        {
          imageurl:
            "https://static.wikia.nocookie.net/starwars/images/e/ea/Kashyyyk-SW-MTHC.png/revision/latest?cb=20230810014826",
          Name: "Kashyyyk",
          description:
            "Kashyyyk is a lush, tree-covered planet with immense wroshyr trees. The Wookiees, a towering and furry species, call Kashyyyk home. The planet is integral to the Star Wars universe due to its significance in Wookiee culture.",
        },
        {
          imageurl:
            "https://static.wikia.nocookie.net/starwars/images/b/b2/Mustafar_FFGRebellion.png/revision/latest?cb=20190819193802",
          Name: "Mustafar",
          description:
            "Mustafar is a volcanic planet with rivers and lakes of molten lava. The planet's harsh environment is featured prominently in 'Star Wars: Episode III - Revenge of the Sith' during the intense lightsaber duel between Anakin Skywalker and Obi-Wan Kenobi.",
        },
        {
          imageurl:
            "https://static.wikia.nocookie.net/starwars/images/f/ff/Jakku-PoeDameronFlightLog.png/revision/latest/scale-to-width-down/350?cb=20170720130554",
          Name: "Jakku",
          description:
            "Jakku is a remote desert planet with wide expanses of sand and the wreckage of old starships scattered across the landscape. Rey's story begins on Jakku, and the planet holds relics of the Galactic Civil War.",
        },
      ],
      vehicles: [],
      favorites: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      addtoFavorites: (name, category) => {
        const store = getStore();
        console.log("This is my character");
        setStore({
          favorites: [...store.favorites, { name: name, category: category }],
        });
      },

      deleteFavorite: (index) => {
        const store = getStore();
        let newFavorites = store.favorites.filter((item, i) => i !== index);
        setStore({ favorites: newFavorites });
      },

      loadSomeData: () => {
        fetch("https://swapi.dev/api/people/")
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setStore({ people: data.results });
          })
          .catch((err) => console.error(err));

        fetch("https://swapi.dev/api/planets/")
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setStore({ planets: data.results });
          })
          .catch((err) => console.error(err));

        fetch("https://swapi.dev/api/vehicles/")
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setStore({ vehicles: data.results });
          })
          .catch((err) => console.error(err));
      },

      changeColor: (index, color) => {
        const store = getStore();

        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
