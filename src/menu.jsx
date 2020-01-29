import React from 'react'


export function Menu(props) {
  function blink(e, min_dividedBy_sec=5) {
    var e = document.getElementById("blinkyBlink")
    console.log('The link was clicked.', e);
  }
  return (
    <div id="menu" className="rect-border">
    <h1 align="center">Menu</h1>
    <div className="menu-list" align="left" style={{ paddingLeft: "1.8vw",height: "30vh"}}>
      <ol style={{listStyle: "square",}}>
          <li className="menu-list-child" id="about" onClick={props.toggleFunc}>About</li>
          <li className="menu-list-child" id="bio" onClick={props.toggleFunc}>Biography</li>
          <li className="menu-list-child" id="myprojects" onClick={props.toggleFunc}>Project</li>
          <li className="menu-list-child" id="mycertificates" onClick={props.toggleFunc}>Certificates</li>
          <li className="menu-list-child" id="contact" onClick={props.toggleFunc}>Contact</li>
        </ol>
    </div>
        <hr style={{width: 'auto', margin: "4vh 1.5vw 0 1.5vw"}} size="4" color="#232020"></hr>
        
        <div id="brochureSide" style={{
          display: "flex", 
          flexDirection: "column", 
          alignItems: 'center', 
          justifyContent: "space-between",
          height: "15vh",
          paddingTop: "2.5vh",}}>
          <a href="https://github.com/mirkan1" target="_blank" rel="noopener noreferrer" >github</a>
          <a href="https://www.facebook.com/R.mirkan" target="_blank" rel="noopener noreferrer" >facebook</a>
          <a href="https://twitter.com/mirkanOFmirkan" target="_blank" rel="noopener noreferrer" >twitter</a>
          <a href="https://linkedin.com/raq" target="_blank" rel="noopener noreferrer" >linkedin</a>
          <a id="blinkyBlink" onClick={props.onClick}
            style={{
            textDecoration: "underline",
            cursor: "pointer",
            zIndex: 2,
          }}>fire</a>
        </div>
    </div>
  )
}


