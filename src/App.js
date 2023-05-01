import './App.css';
import {useState} from "react";
import AnimalShow from "./AnimalShow";
import './App.css'

function getRandomAnimal(){
    const animals =['bird','cat','cow','horse','gator','dog'];
    return animals[(Math.floor(Math.random()*animals.length))]
}
function ShowAnimals() {
    const[animals,setAnimals] = useState([])
   const handleClick = () => {
        setAnimals([...animals,getRandomAnimal()])
   };

   const renderedAnimals = animals.map((animal,index) =>
   {
       return <AnimalShow type={animal} key={index}></AnimalShow>
   });

    return (
        <div className="App">
    <button onClick={handleClick}>Add Animal</button>
            <div className="animals-list">
                {renderedAnimals}
            </div>
        </div>
    );
}

export default ShowAnimals;
