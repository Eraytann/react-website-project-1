import React from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { CardMedia } from "@mui/material";
import ContentRightCard from "./ContentRightCard";
import ColoredTags from "./ColoredTags";

const customStyle={ //slidercontainer'ın içindeki gallery öğelerini düzenlemek içi
    backgroundColor:"#6DF3DB",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    paddingLeft:"5%",
    paddingRight:"5%",
    paddingBottom:"3%",
};

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function NewsContent(){
    return(
        <Box sx={{ flexGrow: 1 }}>
            <div style={customStyle}>
            <Grid container spacing={1} >
                <Grid item xs={8} md={8}>
                    <Item>
                        <h2 style={{ backgroundColor: '#6DF3DB' , borderTopLeftRadius:'4px', borderTopRightRadius:'4px'}}>Title</h2>
                        <p>Lorem ipsum dolar sit</p>
                    </Item>
                </Grid>        
                <Grid item xs={4} md={4}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={12}>
                    <Item>
                        <Card sx={{ maxWidth: 550 }}>
                            <CardMedia
                            sx={{ height: 300 }}
                            image="https://images.pexels.com/photos/2889030/pexels-photo-2889030.jpeg"
                            title="green iguana"
                            />
                        </Card>
                    </Item>
                        </Grid>
                        <Grid item xs={12} md={12}>
                    <Item>
                        <Card sx={{ maxWidth: 550 }}>
                            <CardMedia
                            sx={{ height: 150 }}
                            image="https://images.pexels.com/photos/14675000/pexels-photo-14675000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            title="green iguana"
                            />
                        </Card>
                    </Item>
                        </Grid>
                        <Grid item xs={12} md={12}>
                    <Item>
                    <Card sx={{ maxWidth: 550 }}>
                        <CardMedia
                        sx={{height:150}}
                        image="https://images.pexels.com/photos/2889030/pexels-photo-2889030.jpeg"
                        title="resim başlıgı"
                    />
                    </Card>                
                    </Item>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    </Box>
    )
}

/*
                   <ContentRightCard
                        img="https://images.pexels.com/photos/2889030/pexels-photo-2889030.jpeg"
                        title="resim başlıgı"
                        cardHeight={300}
                        cardMaxWidth={600}
                    />
                    <ContentRightCard
                        img="https://images.pexels.com/photos/14675000/pexels-photo-14675000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        title="resim başlıgı"
                        cardHeight={150}
                        cardMaxWidth={600}
                    />

*/