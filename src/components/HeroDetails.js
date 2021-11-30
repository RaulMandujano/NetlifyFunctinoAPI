import * as React from 'react';
import { useParams } from 'react-router-dom';
import MarvelContexts from '../contexts/MarvelContexts';

const HeroDetails = () =>{

    const params = useParams() 
    const  memberData = MarvelContexts()

    const member =  memberData.hero.find(item => item.name === params.name)

    console.log(member)

    return(
        <h1>Hero Details</h1>
    )
}

export default HeroDetails;