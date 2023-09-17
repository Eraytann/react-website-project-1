import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Badge } from '@mui/material';

const customStyle={ //slidercontainer'ın içindeki gallery öğelerini düzenlemek içi
    backgroundColor: "#6DF3DB",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(365px, 1fr))", // Kartların otomatik olarak sıralanmasını sağlar
    justifyContent: "center", // Kartları ortalar
    alignItems: "center",
    padding: "5% 1% 3%", // Üst, alt ve yan boşlukları ayarlar
}

const cardStyle={
    maxWidth: 365,
    minHeight:400,
    borderRadius:"2%"
}

export default function NewsGalleryCard(props){
    return(
        <div style={customStyle}>
        <Card sx={cardStyle}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="350"
            image={props.img}
            alt={props.alt}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {props.title} 
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {props.content} 
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions style={{display: "flex", justifyContent: "space-between", marginRight:"10px"}}>
          <Button size="small" color="primary">
          {props.buttonText} 
          </Button>
        <Badge color="secondary" variant="dot">
        </Badge>
        </CardActions>
      </Card>
      </div>
    )
}

