import axios from 'axios';
import * as React from 'react';
import { useParams } from 'react-router-dom';


const HeroDetails = () =>{

    const params = useParams() 
    const [hero , setHero] = React.useState([]);

    console.log({ params })

    React.useEffect(()=>{
        console.log('useEffect executed!')
          const fetchMarvel = async()=>{
              const marvelURL = `/.netlify/functions/marvel`
      
          try{
            const marvelResponse = await axios.get(marvelURL)
            const marvel = await marvelResponse;
            //console.log(marvel)
            const heroDetail =  marvel.data.find(item => item.id === params.id * 1) 
            setHero(heroDetail)
            console.log({ hero : heroDetail , heros : marvel.data}); 
      
      
            
      
          } 
          
          catch (error) {
            console.log(error)
          }
          
        }
      
        fetchMarvel()
      },
       [params.id]
      )

    if(!hero) return null;
   
    return(
        <>  

        <h1>{hero.name}</h1>
        <h1>{hero.slug}</h1>
        {/* <h1>{hero.biography.fullName}</h1> */}

        </>
    )
}

export default HeroDetails;