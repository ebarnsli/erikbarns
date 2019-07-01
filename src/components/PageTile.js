import ImageLoader from "react-load-image";
import React from "react";
import styled from "styled-components";

const Tile = styled.div`
    padding: 0.5rem 2rem;
    border-radius: 2rem;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`;

const LinkContainer = styled.div`
    display: flex;
    align-items: center;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;

const Link = styled.a`
    padding: 0 0.5rem;
    font-size: 0.75rem;
`;

const ImageContainer = styled.div`
    max-width: 20rem;
    padding: 1rem;
    img {
        width: 100%;
        border-radius: 2rem;
    }
    cursor: pointer;
`;

const Title = styled.div`
    padding: 1rem 0;
`;

export const PageTile = (props) =>
    <Tile>
        {props.title && <Title>{props.title}</Title>}
        <a target={"_blank"} href={props.urls[0].url}>
            <ImageContainer>
                <ImageLoader src={props.imageSrc}>
                    <img/>
                    <div>Error</div>
                    <div/>
                </ImageLoader>
            </ImageContainer>
        </a>
        <LinkContainer>
            {props.urls.map((url, index) => <Link target={"_blank"} key={index} href={url.url}>{url.text}</Link>)}
        </LinkContainer>
    </Tile>;

