import axios from 'axios'
import * as React from 'react'
import { useParams } from 'react-router-dom'

import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'

import Divider from '@mui/material/Divider'

const HeroDetails = () => {
  const params = useParams()
  const [hero, setHero] = React.useState(null)

  console.log({ params })

  React.useEffect(() => {
    console.log('useEffect executed!')
    const fetchMarvel = async () => {
      const marvelURL = `https://akabab.github.io/superhero-api/api/id/${params.id}.json`

      try {
        const marvelResponse = await axios.get(marvelURL)
        const marvel = await marvelResponse
        //console.log(marvel)

        setHero(marvel.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchMarvel()
  }, [params.id])

  if (!hero) return null

  return (
    <div>
      <Card sx={{ display: 'flex' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h1">
            {hero.name}
          </Typography>
          <Typography variant="h6" color="text.secondary" component="div">
            {hero.biography?.fullName}
          </Typography>
          <Divider />
          <br />
          <Typography variant="h5" color="text.secondary" component="div">
            Place of Birth: {hero.biography?.placeOfBirth}
          </Typography>
          <br />
          <Typography variant="h5" color="text.secondary" component="div">
            Ocupation: {hero.work?.occupation}
          </Typography>
          <br />
          <Typography variant="h5" color="text.secondary" component="div">
            Aliases: {hero.biography?.aliases}
          </Typography>
          <br />
          <Typography variant="h5" color="text.secondary" component="div">
            Height: {hero.appearance?.height}
          </Typography>
          <br />
          <Typography variant="h5" color="text.secondary" component="div">
            Weight: {hero.appearance?.weight}
          </Typography>
          <br />
          <Typography variant="h5" color="text.secondary" component="div">
            Hair Color: {hero.appearance?.hairColor}
          </Typography>
          <br />
          <Typography variant="h5" color="text.secondary" component="div">
            First Appearance: {hero.biography?.firstAppearance}
          </Typography>
        </CardContent>

        <CardMedia
          component="img"
          sx={{ width: 300 }}
          image={hero.images?.md}
          alt="Live from space album cover"
        />
      </Card>
    </div>
  )
}

export default HeroDetails
