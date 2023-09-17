import React from "react";
import styled from "styled-components";

const FlexItem=styled.img`
    max-width: 100%;
    min-height: 100%;
    border-radius: 8px;
    border: 2px solid white;
    position:relative;
    object-fit:cover;
`;

export default function MainSlider(props){
    const { width, height} = props;
    return(
        <div>
        <FlexItem src={props.img} style={{ width: width, height: height}} />
        </div>
    );
}