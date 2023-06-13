import logo from './logo.svg';
import './App.css';
import './components/Header'
import Head from './components/Header';
import Head1 from './components/KeepHead';
import Foot from './components/KeepFooter';
 import Box from './components/TextBox';
function App() {
  return (
    <div className="App">
      <Head1></Head1>
      <div className='Boxess'>
      <Box x={"wergw wbwmb3 wege"} y={"ergrh bghre brh fbreh"}></Box>
      <Box x="32" y="45" im="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="></Box>
      </div>
      
      <Foot></Foot>
    </div>
  );
}

export default App;
