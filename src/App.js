import logo from './logo.svg';
import './App.css';
import ECardItem from './components/ECardItem';

function App() {
  const cssNames = 'App '+ 'glow';
  return (
    <div className='App'>  
      <div className={cssNames}><h1>FAREWELL</h1><h5>ALL THE BEST ROY!</h5></div>
      <div className='App-section'>
        <div>Left Panel</div>
        <div><ECardItem/></div>
        <div>Right Panel</div>
      </div>
      
    </div>




    
  );
}

export default App;
