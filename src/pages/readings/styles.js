import styled from 'styled-components'


export const OuterContainer = styled.div`
display: flex;
flex-direction: column;
background: #e8e8e4;
`
export const ReadingContainer = styled.div`
align-items: flex-start;
flex-grow: 4;
display: flex;
flex-direction: row;
justify-content: space-evenly;
height: 800px;
padding: 20px;
width: 100%;
border-radius: 4px;
margin-top: 2rem;
margin-bottom: 10px;
margin-left: auto;
margin-right: auto;
`
export const ColumnContainer = styled.div`
background-color: #ebecf0;
width: 300px;
max-height: 570px;
margin-right: 20px;
border-radius: 3px;
padding: 8px 8px;
flex-grow: 0;
`
export const ColumnTitle = styled.div`
padding: 6px 16px 12px;
font-weight: bold;
`
export const CardContainer = styled.div`
background-color: #fff;
cursor: pointer;
margin-bottom: 0.5rem;
padding: 0.5rem 1rem;
max-width: 300px;
border-radius: 3px;
box-shadow: #091e4240 0px 1px 0px 0px;
`