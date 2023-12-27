import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap/";

function LearnMore(){
    const location = useLocation();
    const { type, index } = location.state

    const [data, setData] = useState()

    useEffect(() => {
        const fetchData = async () => {
          try {
        if (type === 'characters') {
            const peopleRes = await fetch(`https://www.swapi.tech/api/people/${index}`);
            const peopleData = await peopleRes.json();
            setData(peopleData.result.properties);
        }
        else if (type === 'planets') {
            const planetRes = await fetch(`https://www.swapi.tech/api/planets/${index}`);
            const planetData = await planetRes.json();
            setData(planetData.result.properties);
        }
        else if (type === 'vehicles') {
            const vehicleRes = await fetch(`https://www.swapi.tech/api/vehicles/${index}`);
            const vehicleData = await vehicleRes.json();
            setData(vehicleData.result.properties);
        }
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchData();
      }, []);

    return (
        <Card style={{ width: "18rem", margin: "30px" }}>
          <Card.Img
            variant="top"
            src={`https://starwars-visualguide.com/assets/img/${type}/${index}.jpg`}
            onError={(e) => {
              e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
            }}
          /> 
        { data && 
          <Card.Body>
            <Card.Title>{data.name}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
        {type === 'characters' && 
         <Card.Text>
            Eye Color: {data.eye_color} <br/>
            Height: {data.height} <br/>
            Hair Color: {data.hair_color} <br/>
            Skin Color: {data.skin_color} <br/>
            Birth Year: {data.birth_year} <br/>
            Gender: {data.gender} <br/>
         </Card.Text>
        }
        {type === 'planets' &&
        <Card.Text>
            Climate: {data.climate} <br/>
            Diameter: {data.diameter} <br/>
            Gravity: {data.gravity} <br/>
            Orbital Period: {data.orbital_period} <br/>
            Population: {data.population}<br/>
        </Card.Text>
        }
        {type === 'vehicles' &&
        <Card.Text>
        Model: {data.model} <br/>
        Vehicle Class: {data.vehicle_class} <br/>
        Manufacturer: {data.manufacturer} <br/>
        Cost in Credits: {data.cost_in_credits} <br/>
        Length: {data.length} <br/>
        Crew: {data.crew} <br/>
        Passengers: {data.passengers} <br/>
        Max Atmosphering Speed: {data.max_atmosphering_speed} <br/>
        Cargo Capacity: {data.cargo_cpacity} <br/>
        </Card.Text>
        }
          </Card.Body>
        }
        </Card>
      );
}

export default LearnMore;