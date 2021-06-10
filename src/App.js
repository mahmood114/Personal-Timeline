import logo from './logo.svg';
import './App.css';
import styled from "styled-components";

function App() {
  
  const Title = styled.h1`
    text-align: center;
  `;
  const Description = styled.p`
    text-align: center;
    
  `;

  return (
    <div>
      <Title>Sayed Mahmood's life... basically</Title>
      <Description>My name is Sayed Mahmood Almohri. I was born in Nov 22nd, 1998.</Description>
      <Description>I got into Kuwait University after I graduated from high school in 2016. I got into the college of Engineering where I studied Computer Engineering.</Description>
    </div>
  );
}

export default App;
