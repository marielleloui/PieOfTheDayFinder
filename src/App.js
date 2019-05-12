import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Pies from './containers/Pies/Pies';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>PIE OF THE DAY</h1>   
            <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Pies />
      </div>
      
    );
  }
}

// function App() {
  // const [ piesState, setPiesState ] = useState({
  //   pies: [
  //     { name: "Meat Pie", cost: Math.floor(Math.random()*30) },
  //     { name: "Fruit Pie", cost: Math.floor(Math.random()*30) }
  //   ]
  // });

  // const switchPieHandler = (newName) => {
  //   setPiesState({
  //     pies: [
  //       { name: newName, cost: Math.floor(Math.random()*30) },
  //       { name: "Fruit Pie", cost: Math.floor(Math.random()*30) }
  //     ]
  //   });
  // };

  // const pieChangedHandler = (event) => {
  //   setPiesState({
  //     pies: [
  //       { name: "Meat Pie", cost: Math.floor(Math.random()*30) },
  //       { name: event.target.value, cost: Math.floor(Math.random()*30) }
  //     ]
  //   });
  // }

  // const style = {
  //   backgroundColor: 'white',
  //   font: 'inherit',
  //   border: '1px solid blue',
  //   padding: '8px',
  //   cursor: 'pointer'
  // };

  
// }

export default App;

// <h1>Hi, I'm a React App</h1>
//     <p>This is really working!</p>
//     <button
//       style={style}
//       onClick={switchPieHandler.bind(this, "Beef Pie")}>Switch Pie</button>
//     <Pie
//       name={piesState.pies[0].name}
//       cost={piesState.pies[0].cost}/>
//     <Pie
//       name={piesState.pies[1].name}
//       cost={piesState.pies[1].cost}
//       click={switchPieHandler.bind(this, "Bacon & Cheese Pie")}
//       changed={pieChangedHandler}>Pie of the Day</Pie>

//       <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>