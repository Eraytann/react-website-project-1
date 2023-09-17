import React from "react";
import styled from "styled-components";

const SliderImgSelect=styled.div`
    display: flex;
    border-radius: 8px;
    justify-content: space-between;
    align-items: center;
    background-color: #6DF3DB;
    width: 10%;
    height:5%;
    padding-left: 10px;
    padding-right:10px;
    position:absolute;
    z-index:1;
    margin-top:250px;
    margin-left:2%;

    @media (min-width: 600px) and (max-height: 1400px)
    {
        width: 12%;
    }
`;

const Circle=styled.div`
    background-color: white;
    border-radius: 50%;
    width: 25px; /* Daire çapı */
    height: 25px; /* Daire çapı */

    @media (max-width: 1400px)
    {
    width: 15px; /* Daire çapı */
    height: 15px; /* Daire çapı */
    }
`;

export default function SliderSelector(){
    return(
        <div>
            <SliderImgSelect>
                <Circle></Circle>
                <Circle></Circle>
                <Circle></Circle>
            </SliderImgSelect>
        </div>
    );
}