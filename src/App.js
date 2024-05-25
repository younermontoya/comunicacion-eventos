import './App.css';
import { Person } from './components/Person';
import { Persons } from './components/Persons';

function App() {
  return (
    <div>
      <Persons/>
      <hr />
      <Person/>
    </div>
  );
}

export default App;
