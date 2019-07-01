import {AppTile} from "./AppTile";
import React from "react";

const Page = (props) =>
    <FullPage ref={(ref) => props.pages[props.index] = ref}>
        <Title>
            {props.title}
        </Title>
        <GridBoi>
            {props.pageData.map((tile, index) => <AppTile
                key={index}
                imageSrc={tile.imageSrc}
                urls={tile.urls}
            />)}
        </GridBoi>
    </FullPage>;