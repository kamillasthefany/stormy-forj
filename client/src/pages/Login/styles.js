import styled from 'styled-components';
import background from './../../assets/background.svg';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  //background-color: #F2F2F2;
  background-image: url(${background});
  // background-size: cover;
  background-size: contain;
  height: 100vh;
  width:100%;  
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 480px;
  min-height: 70%;
  border-radius: 7px;
  //box-shadow: 5px white;
  box-shadow: 0px 2px 2px 1px rgba(238, 236, 236, 0.2);
  background-color: white;
`;

export const CardTitle = styled.div` 
  justify-content: center;
  align-content: center;
  align-self: center;
  color: #696f7d;
  padding: 30px;
`;

export const CardForm = styled.div`
  flex-direction: column;
  display: flex;
  flex-wrap: wrap;
  margin: 10%;
  
`;
export const CardFooter = styled.div`
  align-self: center;
  color: #696f7d;
`;