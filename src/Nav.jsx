import React from 'react'

const Nav = () => {
  return (
    <div>
       <nav style={{
        width:'100%',
        margin:0,
        padding:0,
        height:60,
        backgroundColor:"black",
        border:"3px solid red"
 
      }}>
       <ul style={{
        paddingTop:17,
        margin:0,
        listStyle:"none",
        display:"flex",
        justifyContent:'space-evenly',
      
       }}>
       <li><a href="#" style={{
        textDecoration:"none",
        color:"white",
        display:"block"
       }}>Home</a></li>
       <li><a href="#" style={{
        textDecoration:"none",
        color:"white",
   
        display:"block"
       }}>Images</a></li>
       <li><a href="#" style={{
        textDecoration:"none",
        color:"white",
        
        display:"block"
       }}>Videos</a></li>
       <li><a href="#" style={{
        textDecoration:"none",
        color:"white",
      
        display:"block"
       }}>Movies</a></li>
       <li><a href="#" style={{
        textDecoration:"none",
        color:"white",
        display:"block"
       }}>Contact Us</a></li>
       </ul>
      </nav>
    </div>
  )
}

export default Nav
