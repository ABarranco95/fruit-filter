import './App.css';
import List from './components/List';
import Input from './components/Input';
import FruitContainer from './components/FruitContainer'


function App() {
  const fruits = ['bannana', 'apple', 'pineapple', 'strawberries']
  return (
    <div className="App">
      <FruitContainer fruits={fruits}/>
    </div>
  );
}

export default App;
