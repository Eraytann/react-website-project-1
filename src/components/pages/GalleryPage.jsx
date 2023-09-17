import React from "react";
import NewsGalleryBox from "../NewsGalleryCard";
import galleryItems from "../GalleryItems";
import NewsGalleryCard from "../NewsGalleryCard";
import { Box } from "@mui/material";
import Header from "../Header";

export default function GalleryPage(){
    const customStyle={
        display:"flex",
        backgroundColor:"#6DF3DB",
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"center",
        alignItems:"center",
        paddingLeft:"5%",
        paddingRight:"5%",
    }

    return(
      <Box sx={{ flexGrow: 1 }}>
      <Header/>
        <div style={customStyle}>
         {galleryItems.map((item, index) => (      
        <NewsGalleryCard
          key={index} // Her bileşene benzersiz bir anahtar ekleyin
          img={item.img}
          content={item.content}
          title={item.title}
          buttonText={item.buttonText}
          alt={item.alt}
        />
      ))}
        </div>
        </Box>
    )
}
