import './App.css';
import {Title, Text} from "./styles.js";
import data from "./data.js";
import List from "./components/List.js"

function App() {

    

  return (
    <div>
      <Title>Sayed Mahmood's life... basically</Title>
      {/* <Info>My name is Sayed Mahmood Almohri. I was born in Nov 22nd, 1998.</Info>
      <Info>I got into Kuwait University after I graduated from high school in 2016. I got into the college of Engineering where I studied Computer Engineering.</Info>
      <Info>I have graduated with an "acceptable" GPA on March 16th, 2021.</Info>
      <Info>Nerd fact about me, I really enjoy Mathematics 🙈, and was really good at it during high school and college.</Info>
      <Info>I was chosen to represent Kuwait in the Gulf Mathematics Olympiad</Info> */}
      <List />
    </div>
  );
}

export default App;
