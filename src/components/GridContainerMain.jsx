import React from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MainSlider from "./MainSlider";
import SliderSelector from "./SliderSelector";
import BigCardBox from "./BigCardBox";
import SmallCardBox from "./SmallCardBox";

const customStyle={ //slidercontainer'ın içindeki gallery öğelerini düzenlemek içi
    backgroundColor:"#6DF3DB",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    paddingLeft:"5%",
    paddingRight:"5%",
    paddingBottom:"3%",
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    //padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function GridContainerMain(){
    return(
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0} >
          <Grid item xs={12}>
            <Item >
            <div style={customStyle}>
                <MainSlider  
                    img="https://images.pexels.com/photos/895259/pexels-photo-895259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    width="300px"
                    height="630px"
            />
                <MainSlider 
                    img="https://images.pexels.com/photos/16798486/pexels-photo-16798486/free-photo-of-agaclar-kirsal-bolge-akarsu-pencereler.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    width="300px"
                    height="630px"
            />
                <MainSlider 
                    img="https://images.pexels.com/photos/15327222/pexels-photo-15327222/free-photo-of-kent-arabalar-sokak-binalar.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    width="560px"
                    height="630px"
            />
            </div>
            </Item>
          </Grid>
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

/*
import React from "react";/*
import MainSlider from "./MainSlider";
import SliderSelector from "./SliderSelector";
import styled from "styled-components";
import GridContainerMain from "./GridContainerMain";
const Slider=styled.div`
display:flex;
padding-bottom:5%;
`;

const FlexContainer=styled.div`
display: flex;
flex-direction: column;
background-color: #6DF3DB;
justify-content: center;
align-items: center;
height: 80vh;
gap: 5px;
margin: 0;
padding: 10px;
`; 
        <FlexContainer>
                <SliderSelector/>

        <Slider>
        <MainSlider  
        img="https://images.pexels.com/photos/895259/pexels-photo-895259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        width="300px"
        height="630px"
        />
        <MainSlider 
        img="https://images.pexels.com/photos/16798486/pexels-photo-16798486/free-photo-of-agaclar-kirsal-bolge-akarsu-pencereler.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        width="300px"
        height="630px"
        />
        <MainSlider 
        img="https://images.pexels.com/photos/15327222/pexels-photo-15327222/free-photo-of-kent-arabalar-sokak-binalar.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        width="560px"
        height="630px"
        />
        </Slider>
                <GridContainerMain/>
        </FlexContainer>

*/