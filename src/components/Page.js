import {PageTile} from "./PageTile";
import React from "react";
import styled from "styled-components";
import {FullPage, Title} from "../App";

const TileGrid = styled.div`
    display: grid;
    width:100%;
    max-width: 1000px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`


export const Page = (props) =>
    <FullPage ref={(ref) => props.pages[props.index] = ref}>
        <Title>
            {props.title}
        </Title>
        <TileGrid>
            {props.pageData.map((tile, index) => <PageTile
                key={index}
                imageSrc={tile.imageSrc}
                urls={tile.urls}
            />)}
        </TileGrid>
    </FullPage>;