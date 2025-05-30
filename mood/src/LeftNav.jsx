import React from 'react'
import introspect from './asset/introspect.jpg'
import { useState } from 'react'
import { Link } from 'react-router-dom';
function LeftNav() {
  const [width , setWidth] = useState(20);
 const [isWide , setisWide] = useState(false)
     let handleClick = () => {
    let burger = document.querySelector('.hamburger')
    
    burger.addEventListener("click", () => {
    if(isWide){
    setWidth(20);
    setisWide(false);
    } 
    else{
      setWidth(width + 100); 
      setisWide(true);
    }
  })
  }
  // handleClick();
  return (
    <ul className='navBar' style={{ width: `${width}px` }}>
     <Link to="/"><li className='icon'><i className="fa-solid fa-house"></i> <span>Home</span></li></Link>
     <Link to="/task"><li className='icon'><i className="fa-solid fa-list-check"></i><span>Task</span></li></Link>
    <Link to='/intro'><li className='icon'><img src={introspect} height="20px" width="20px"/>
    <span>Introspect</span></li></Link>
     {/* <Link to="/journal"><li className='icon'><i className="fa-solid fa-book-journal-whills"></i><span>Journal</span></li></Link> */}
     <li className='icon' style={{cursor:'pointer'}}> <i className="fa-solid fa-gear"></i><span>Settings</span></li>
    </ul>
  )
}

export default LeftNav