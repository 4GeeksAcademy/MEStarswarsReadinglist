import React, { useState, useEffect, useContext } from 'react';
import { FavoritesContext } from './Favorites';
import EntityCard from './components/EntityCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/workspaces/MEStarswarsReadinglist/src/index.css'

function App() {
  const {store, actions} = useContext(FavoritesContext);
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [vehicles, setVehicles] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const peopleRes = await fetch('https://www.swapi.tech/api/people');
      const peopleData = await peopleRes.json();
      setPeople(peopleData.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  fetchData();
}, []);

useEffect(() => {
  const fetchData = async () => {
    try {
      const planetsRes = await fetch ('https://www.swapi.tech/api/planets')
      const planetsData = await planetsRes.json();
      setPlanets(planetsData.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  fetchData();
}, []);

useEffect(() => {
  const fetchData = async () => {
    try {
      const vehiclesRes = await fetch ('https://www.swapi.tech/api/vehicles')
      const vehiclesData = await vehiclesRes.json();
      setVehicles(vehiclesData.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  fetchData();
}, []);

  return (
    <div style={{ 
      backgroundImage: 'url("https://png.pngtree.com/png-clipart/20231006/original/pngtree-star-wars-png-free-download-png-image_13130372.png")', 
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
      padding: '20px'
    }}>
      <div className="characters-heading-container">
        <div className="characters-heading">
          <h1>Characters</h1>
        </div>
      </div>
      <div className="characters-container">
      {
        people.map(({uid, name, url}) => {
          return (
            <EntityCard key={uid} data={{uid, name, url, type:"characters"}} />
          )
        })
      }
      </div>
      <div className="characters-heading-container">
      <div className="characters-heading">
      <h1>Planets</h1>
      </div>
      </div>
      <div className="characters-container">
      {
      planets.map(({ uid, name, url }) => {
        return(
          <EntityCard key={uid} data={{ uid, name, url, type:"planets" }} />
          )
        })
      }
      </div>
      <div className="characters-heading-container">
      <div className="characters-heading">
      <h1>Vehicles</h1>
      </div>
      </div>
      <div className="characters-container">
      {vehicles.map(({ uid, name, url }) => {
        return(
          <EntityCard key={uid} data={{ uid, name, url, type:"vehicles" }} />
          )
        })
      }
      </div>
    </div>
  )
}

export default App