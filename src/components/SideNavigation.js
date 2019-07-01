import React from "react";
import styled from "styled-components";
import ExpandMore from '@material-ui/icons/ExpandMore'
import ExpandLess from '@material-ui/icons/ExpandLess'
import IconButton from '@material-ui/core/IconButton';

const SideNav = styled.div`
    height: 100vh;
    width: fit-content;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
`;



export const SideNavigation = (props) =>
    <SideNav>
        <div>
            <div>
                <IconButton onClick={props.scrollUpPage}>
                    <ExpandLess/>
                </IconButton>
            </div>
            <div>
                <IconButton onClick={props.scrollDownPage}>
                    <ExpandMore/>
                </IconButton>
            </div>
        </div>
    </SideNav>;