
import './App.css';
import {Router} from '@reach/router';
import Header from './components/Header';
import AllPets from './components/AllPets';
import NewPets from './components/NewPets';
import EditPet from './components/EditPets';
import OnePet from './components/OnePet';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <AllPets default path ="/pet"/>
        <NewPets path = "/pet/new"/>
        <OnePet path = "/pet/:id"/>
        <EditPet path ="/pet/edit/:id"/>
      </Router>
    </div>
  );
}

export default App;
