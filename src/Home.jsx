import React from 'react'
import { useState } from 'react'
import {useSelector} from 'react-redux'
import LeftNav from './LeftNav.jsx'
import Header from './header.jsx'
import image from './asset/health.jpg'
function Home() {
  const [click, setclick] = useState(false)
  const video =[
    {
      id:1,
      vid:'i0K9r73abuc'
    },
    {
      id:2,
      vid:"Sxddnugwu-8"
    },
    {
      id:3,
      vid:'eUDTHzCw5YE?si=Y-dt65UoweMsLEDb'
    },
    {
      id:4,
      vid:'blbv5UTBCGg?si=xaTdvsqBXyvR6aE4'
    }
    
  ]

  
  return (
   <>
   <Header/>
   <div className='grid'>
    <div><LeftNav/></div>
    <div>
    <h1 className='head'>Welcome Back!</h1>
     <div id='box'>
       <h3>How are you feeling today?</h3>
       <dl className='feeling'>
       <div onClick={()=> {setclick(true); alert("Glad you are Happy")}}>
       <dt className='feel'><i className="fa-regular fa-face-laugh"></i></dt>
       <dd>Happy</dd></div>
       <div onClick={()=> {setclick(true); alert("Happy to see you calm")}}>
       <dt className='feel' style={{ backgroundColor: "rgb(46, 137, 247)" , borderColor:"rgb(46, 137, 247)"   }}><i className="fa-solid fa-yin-yang"></i></dt>
       <dd>Calm</dd></div>
       <div onClick={()=> {setclick(true); alert("Happy to hear that")}}>
       <dt className='feel' style={{ backgroundColor: "teal" , borderColor:"teal", }}><i className="bi bi-emoji-sunglasses"></i></dt>
       <dd>Relax</dd></div>
       <div onClick={()=> {setclick(true); alert("Anger could be the burst of sadness. Think Positively")}}>
       <dt className='feel' style={{ backgroundColor: "red" , borderColor:"red"}}><i className="fa-solid fa-face-angry"></i></dt>
       <dd>Angry</dd></div>
       <div onClick={()=> {setclick(true); alert("Do not leave hope and try your best")}}>
       <dt className='feel' style={{ backgroundColor: "rgb(61, 61, 61)" , borderColor:"rgb(61, 61, 61)"}}><i className="fa-solid fa-face-frown"></i></dt>
       <dd>Gloomy</dd></div>
       <div onClick={()=> {setclick(true); alert("You'll be fine just take deep breath")}}>
       <dt className='feel' style={{ backgroundColor: "black" , borderColor:"black"}}><i className="fa-solid fa-face-grimace"></i></dt>
       <dd>Scared</dd></div>
       </dl>
     </div>

     
      <h2>Take a Moment for yourself </h2>
        
      <div>
        {
          video.map((x) => {
            return (
              <iframe
              className='yoga'
              width="240"
              height="200"
              src={`https://www.youtube.com/embed/${x.vid}`}
              title={`YouTube video player - ${x.vid}`}
              frameborder= '0'
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            )
                
          })
        }
      </div>
      <h2 id="remember">Remember That 😊</h2>
      <img src={image}  id="struggle" />
       
       <h2 id="special" >Only For You</h2>
       <iframe width="90%" height="30%" src="https://www.youtube.com/embed/AzZpiZPxvq0?si=svO4ImNgUXX0acwx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen id="video"></iframe>
    </div>
    </div>

    <footer style={{ backgroundColor: '#e1e6eb', padding: '20px', textAlign: 'center' }} id="footer"> 
      <div style={{ maxWidth: '800px', margin: 'auto' }}>
        <p style={{ fontSize: '14px', color: '#333' }}>
          &copy; 2024 MOODLIFT. All rights reserved.
        </p>
        <p style={{ fontSize: '12px', color: '#666' }}>
          STAY HEALTHY AND WEALTHY
        </p>
      </div>
    </footer>

   </>
  )
}

export default Home