import React from "react";
import { styled } from '@mui/material/styles';
import Header from "../Header";
import BigCardBox from "../BigCardBox";
import SmallCardBox from "../SmallCardBox";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    //padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


const customStyle={ //slidercontainer'ın içindeki gallery öğelerini düzenlemek içi
    backgroundColor:"#6DF3DB",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    paddingLeft:"5%",
    paddingRight:"5%",
    paddingBottom:"3%",
};


export default function ContentPage(){
    return(
        <Box sx={{ flexGrow: 1 }}>
        <Header/>
        <Grid container spacing={0} >
          <Grid item xs={12}>
            <Item>     
            <div style={customStyle}>
                <BigCardBox
                headerTitle="Title"
                title="This is the second title"
                content="a benevolent smile"
                />     
            </div>    
            </Item>
          </Grid>
          <Grid item xs={12}>
            <Item>
            <div className="SliderContainer" style={customStyle}>
                <SmallCardBox
                headerTitle="Title"
                title="This is the second title"
                content="a benevolent smile"
            />
            <SmallCardBox
                headerTitle="Title"
                title="This is the second title"
                content="a benevolent smile"
            />
            </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
    );
}


