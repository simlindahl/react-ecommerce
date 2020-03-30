import styled from "styled-components";

import CustomButton from "../custom-button/custom-button.component";

export const CollectionItemContainer = styled.div`
    width: 21vw;
    display: flex;
    flex-direction: column;
    height: 460px;
    align-items: center;
    position: relative;

    &:hover {        
        * {
            opacity: 0.85;
            display: flex;
        }
    }

    @media screen and (max-width: 800px) {
        width: 44vw;

        &:hover {        
            * {
                opacity: unset;
                display: flex;
            }
        }
    }
`;

export const ImageContainer = styled.div`
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
`;

export const CollectionItemButton = styled(CustomButton)`
    position: absolute;
    bottom: 80px;
    opacity: 0;
    width: 80%;

    @media screen and (max-width: 800px) {
        opacity: 0.9;
        min-width: unset;
        padding: 0 10px;
    }
`;

export const CollectionFooterContainer = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
`;

export const NameSpan = styled.span`
    width: 90%;
    margin-bottom: 15px;
`;

export const PriceSpan = styled.span`
    width: 10%;
`;