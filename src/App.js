import './App.css';
import Cards from './pages/card';
import Sidebar from './Sidebar/sidebar';
import { makeStyles } from '@material-ui/core/styles';
import Services from './services/services';
import Profile from './profile/profile';
import About from './About/about';
import Feed from './feed/feed';
import Work from './work/work';
import Workcard from './workcard/workcard'


function App() {
  return (<div><Sidebar></Sidebar>
  <Profile></Profile>
  <About></About>
  <Services></Services>
  <Feed></Feed>
  <Work></Work>
  </div>);
}

export default App;
