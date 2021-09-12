
import './App.css';
import {Router} from '@reach/router';
import Header from './componenets/Header';
import AllCartoons from './componenets/AllCartoons';
import NewCartoon from './componenets/NewCartoon';
import EditCartoon from './componenets/EditCartoon';
import OneCartoon from './componenets/OneCartoon';


function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <AllCartoons default/>
        <NewCartoon path ="/cartoon/new"/>
        <OneCartoon path ="/cartoon/:id"/>
        <EditCartoon path ="/cartoon/edit/:id"/>
      </Router>
    </div>
  );
}

export default App;
