import React, { useEffect } from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'

import Typography from '@mui/material/Typography'
import HeroModal from './HeroModal'
import HoverRating from './HoverRating'
import { CardActionArea } from '@mui/material'

import IconButton from '@mui/material/IconButton'

import { useHistory } from 'react-router-dom'

const HeroCard = (props) => {
  const {
    id,
    name,
    images,
    family,
    combat,
    durability,
    intelligence,
    power,
    speed,
    strength,
  } = props

  const history = useHistory()

  const handleInfoClick = () => {
    history.push(`/herodetails/${id}`)
  }

  useEffect(() => {}, [])
  return (
    <Card sx={{ maxWidth: 290, float: 'left', margin: '15px' }}>
      <CardActionArea onClick={handleInfoClick}>
        <CardMedia component="img" height="440" image={images} alt="heroes" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>

          <Typography sx={{ height: 100 }} variant="h6" color="text.secondary">
            {family}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <IconButton aria-label="add to favorites"></IconButton>

        <HoverRating />

        <HeroModal
          combat={combat}
          durability={durability}
          intelligence={intelligence}
          power={power}
          speed={speed}
          strength={strength}
        />
      </CardActions>
    </Card>
  )
}


export default HeroCard
