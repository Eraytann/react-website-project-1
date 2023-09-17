import React from "react";
import Link from '@mui/material/Link';
import styled from "@emotion/styled";

const textCustom=styled.p`
    backgroundColor:red;
    padding:5px;
`

export default function ColoredTags(){
    return(
        <div>
            <Link
            style={textCustom}
            component="button"
            variant="body2"
            onClick={() => {
            console.info("I'm a button.");
             }}
            >
            #SPORTS
            </Link>
        </div>
    );
}