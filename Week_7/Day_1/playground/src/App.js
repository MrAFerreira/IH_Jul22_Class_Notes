// To use local images we need to import them first
import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button';
import StudentCard from './components/StudentCard/StudentCard';
import Navbar from './components/Navbar/Navbar';
import StudentList from './components/StudentList/StudentList';
import ReactPlayer from 'react-player';

//Create a component called StudentCard
//Use an image
//Create an object that has name, cohort, city
//At the end of the card, a link to github
//Import it inro App.js and display it

//jsx - javascript extended

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

//This is okay - passing variables into jsx
let name = 'Letícia';
let ta = {
  name: 'xico',
  profession: 'qa',
};

let myLink = 'https://static.independent.co.uk/2020/09/22/09/Untitled.png?width=1200';

//Don't do this - it's weird :|
let myh1 = <h1>React is cool</h1>;

{
  /* 
  //Original App component, it is just commented out because it was getting too big :)

function App() {
  return (
    <div className="App">
      {/* To use them we just pass their name into the src attribute 
      <img src={logo} alt="logo for react" />
      <img src={myLink} alt="logo for react" />
      <h1> Hello {name}</h1>
      {/*
    Using string methods
   <h3>
        Hello {ta.name.toUpperCase()}. Are you a {ta.profession.toLowerCase()}?
      </h3> *
      {/* Using our own functions: 
      <h3 style={{ backgroundColor: 'red', fontFamily: 'mono' }}>
        Hello {capitalize(ta.name)}. Are you a {capitalize(ta.profession)}?
      </h3>
      <Button></Button>
      <Button />
      {/* Same as
       <a href="https://www.google.com">
      <button> Visit Google</button>
    </a>
      
      <label htmlFor=""></label>
      <btn className="btn btn-yellow" onClick={() => alert('Hello')}>
        Click me
      </btn>
    </div>
  );
} */
}

function App() {
  return (
    <div>
      <Navbar />
      <ReactPlayer
        url="https://www.youtube.com/watch?v=4ezz8TsN82Y"
        playing
        controls
        volume={0.5}
      />
      <StudentList>
        <StudentCard
          firstName="Luiz"
          cohort="WebDev"
          city="Lisbon"
          week={7}
          isSuccedding={true}
          favouritePokemon={{ name: 'Slowpoke', type: 'Water' }}
        />
        <hr />
        <StudentCard
          firstName="Gabriela"
          cohort="Data"
          city="Barcelona"
          week={7}
          favouritePokemon={{ name: 'Slowpoke', type: 'Water' }}
        />
        <hr />
        <StudentCard
          firstName="Adriana"
          cohort="UxUi"
          city="Mexico City"
          week={7}
          favouritePokemon={{ name: 'Slowpoke', type: 'Water' }}
        />
        <hr />
      </StudentList>
    </div>
  );
}

export default App;
