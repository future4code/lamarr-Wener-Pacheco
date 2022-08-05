
import { GlobalStyle } from './GlobalStyle.js';
import {users} from './MockupDeDados.js';
import{Homepage} from './components/Homepage/Homepage';


function App() {

  return (
    <div className="App">
      <GlobalStyle/>
      
      
      <Homepage results = {users}/>
      
        
    </div>
  );
}

export default App;