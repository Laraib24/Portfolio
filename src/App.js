import './App.css';
import Sidebar from './Sidebar/sidebar';
import Container from './Container/container';
import Media from 'react-media';


function App() {
  return (<div>
    {/* <Media query="(min-width: 1024px)"> */}
      <Sidebar/>
      {/* </Media> */}
  <Container className="container"/>
  </div>);
}

export default App;
