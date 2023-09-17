import React from "react";
import { styled } from '@mui/material/styles';
import { Card, CardMedia, Grid, Paper } from "@mui/material";
import ColoredTags from "./ColoredTags";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function ContentRightCard(props){
    const {cardHeight,cardMaxWidth,img,title} = props;
    
    return(
        <Grid item xs={4} md={4}>
                <Grid container spacing={1}>
                    <Grid item xs={12} md={12}>
                            <Item>
                                <Card sx={{ maxWidth: cardMaxWidth }}>
                                    <CardMedia
                                    sx={{ height: cardHeight }}
                                    image={img}
                                    title={title}
                                    />
                                </Card>
                                <ColoredTags>dskfşsdkfşs</ColoredTags>
                            </Item> 
                    </Grid>
                </Grid>
        </Grid>
    )
}
