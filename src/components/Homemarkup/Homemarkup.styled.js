import styled from 'styled-components'


export const FilmsList = styled.ul`
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 60px;
`;


export const FilmItem = styled.li`
    position: relative;

    list-style: none;
    width: 395px;
    margin-bottom: 20px;
    transition-property: transform;
    transition-duration: .5s;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    &:hover{
        transform: scale(1.02);
    }

`;

export const FilmPhoto = styled.img`
    width: 395px;
    height: 574px;
    margin-bottom: 12px;
    position: relative;
    border-radius: 5px;
`;

export const FilmTitle = styled.h2`
margin-bottom: 50px;
`;


export const FilmButton = styled.button`
    width: 40%;
    height: 30px;
    color: #fff;
    cursor: pointer;
    background-color: #0039e6;
    border: none;
    border-radius: 5px;
    transition: background-color .3s linear;
    position: absolute;
    top: 0;
    right: 0;

    &:hover{
        background-color: #0000ff;
    }
`;