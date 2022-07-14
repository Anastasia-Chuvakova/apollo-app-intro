import {useQuery, gql} from '@apollo/client';

import "./styles/locations.css";
import React from 'react'

//define the query we want to execute by wrapping it in the gql template literal gql`...`;
const GET_LOCATIONS = gql`
query GetLocations {
  locations {
    id
    name
    description
    photo
  }
}
`;

//define component that will execute our GET_LOCATIONS query with the useQuery hook
function DisplayLocations(){
  const{loading, error, data} = useQuery(GET_LOCATIONS);

//Apollo Client automatically tracks a query's loading and error states,
// which are reflected in the loading and error properties.
//When the result of your query comes back, it's attached to the data property.
  if(loading) return <p>Loading into Space Data</p>;
  if(error) return <p>You Have An Error :(</p>;
  
  return data.locations.map(({id, name, description, photo}) => (
    <div key={id} className="container__locations-data">
      <div className='location__name-img'>
      <h3>{name}</h3>
      <img width="300" height="200" alt="locations" src={`${photo}`}/>
      </div>
     
      <div className='container__description-data'>
      <h2>About this destination:</h2>
      <p>{description}</p>
      </div>
     
    </div>
  ));
}

//add <DisplayLocations/> to our existing component tree:
export default function App() {
  return (
    <div  className="container__data">
      <h1>Apollo-App Space Travel Destinations 🚀</h1>
      <DisplayLocations />
    </div>
    
  )
}

