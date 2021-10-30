import axios from 'axios'
import React,{useState,useEffect} from 'react'
import HeroCard from '../components/HeroCard';


  function MarvelContexts() {
    
    const [allHeroes,setAllHeroes]=useState([]);

useEffect(()=>{
  console.log('useEffect executed!')
    const fetchMarvel = async()=>{
        const marvelURL = `/.netlify/functions/marvel`

    try{
      const marvelResponse = await axios.get(marvelURL)
      const marvel = await marvelResponse;
      console.log(marvel)

      setAllHeroes(marvel.data); 

      

    } 
    
    catch (error) {
      console.log(error)
    }
    
  }

  fetchMarvel()
},
 []
)

  return (

    <React.Fragment>
 
        <ul>
          {allHeroes.map(hero=>{
                        
            return(
              <HeroCard
                key={hero.id}
                name={hero.name}
                images={hero.images.sm}
                family={hero.connections.groupAffiliation}
                relatives={hero.connections.relatives}
                

                combat={hero.powerstats.combat}
                durability={hero.powerstats.durability}
                intelligence={hero.powerstats.intelligence}
                power={hero.powerstats.power}
                speed={hero.powerstats.speed}
                strength={hero.powerstats.strength}
              />
            )
            
          })}
        </ul>

    </React.Fragment>
  );
}

export default MarvelContexts;