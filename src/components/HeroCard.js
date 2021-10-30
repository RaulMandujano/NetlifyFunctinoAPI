import React,{useEffect} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import HeroModal from './HeroModal';

const HeroCard = (props) => {

    const { name, images, family, combat, durability, intelligence, power, speed, strength } = props;

    useEffect(() => {


    }, [])
  return (
    <Card sx={{ maxWidth: 290, float: 'left', }}>
      <CardMedia
        component="img"
        height="440"
        image={images}
        alt="heroes"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>

        <Typography sx={{height: 100}} variant="body2" color="text.secondary">
          {family}
        </Typography>
      </CardContent>


      <CardActions>
        <Button size="small">Share</Button>

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
  );
}

export default HeroCard;