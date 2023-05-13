import './NavBar.css'
import { Link } from 'react-router-dom'
export default function NavBar(){
    return(
        <div className="Nav-comp">
            <div className="Nav-container">
                <div className="Nav-Logo">
               <Link to={'/'}>  <h1>ADMIN</h1></Link>
              <a href='https://gowashe.in/' target={'_blank'} style={{textDecoration:"none"}} rel="noreferrer"> <span style={{color:"rgb(47, 255, 0)",paddingLeft:"10px"}}>GO</span><span style={{color:" rgb(0, 0, 158)"}}>WASH</span><span>Expert</span></a>
                </div>
              
            </div>
        </div>
    )
}