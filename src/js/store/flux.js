const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      people: [
        {
          imageurl:
            "https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_7ffe21c7.jpeg?region=130%2C147%2C1417%2C796",
          description:
            "Luke Skywalker was a Tatooine farmboy who rose from humble beginnings to become one of the greatest Jedi the galaxy has ever known. ",
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
			imageurl: "https://lumiere-a.akamaihd.net/v1/images/leia-organa-main_9af6ff81.jpeg?region=187%2C157%2C1400%2C786",
			description: "Princess Leia Organa was one of the greatest leaders of the Rebel Alliance, fearless on the battlefield and dedicated to ending the Empire’s tyranny.",
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
      ],
      planets: [],
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
		console.log("This is my character")
        setStore({ favorites: [...store.favorites, {name: name, category: category}] });
      },

      deleteItem: (i) => {
        const store = getStore();
        let newFavorites = store.favorites.filter((item, index) => {
          return i != index;
        });
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
