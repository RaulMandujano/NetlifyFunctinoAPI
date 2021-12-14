import axios from 'axios'
import React,{useState,useEffect} from 'react'
import HeroCard from '../components/HeroCard';


  function MarvelContexts({ publisher = 'Marvel Comics'}) {
    
    const [allHeroes,setAllHeroes]=useState([]);
    const [searchTerm, setSearchTerm]= useState("");


useEffect(()=>{
  console.log('useEffect executed!')
    const fetchMarvel = async()=>{
        const marvelURL = `/.netlify/functions/marvel`

    try{
      const marvelResponse = await axios.get(marvelURL)
      const marvel = await marvelResponse;
      //console.log(marvel)

      setAllHeroes(marvel.data.filter(el => el.biography?.publisher === publisher)); 


      

    } 
    
    catch (error) {
      console.log(error)
    }
    
  }

  fetchMarvel()
},
 [publisher]
)
  const renderHero = hero=>{
                        
    return(
      <HeroCard
        key={hero.id}
        id={hero.id}
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
    
  }

  return (

    <React.Fragment>
        <div className="FilterSearchBar">
          <input type="text" value={searchTerm} placeholder="Search..." onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
        </div>
        
        <ul>
          
          {
          searchTerm.length > 2 ? 
          allHeroes.filter(hero => hero.name.toLowerCase().includes(searchTerm.toLowerCase())).map(renderHero)
          :
          allHeroes.map(renderHero)
          }
        </ul>

    </React.Fragment>
    
  );
}

export default MarvelContexts;