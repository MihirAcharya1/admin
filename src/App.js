
import './App.css'
import Staffs from './pages/Staffs';
import NavBar from './component/NavBar';
import Dbicon from './img/database.png'
import Usericon from './img/teamwork.png';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <NavBar />
      <div>
        <Staffs/>
      </div>
      
    </div>
  )
}