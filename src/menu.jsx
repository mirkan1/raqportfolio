import React from 'react'
import './index.css'

export function Menu(props) {
  return (
    <div className="menu-list" style={{"font-size": "100px"}} align="right">
      <div>
        <h6 className="menu-list-child" id="aboutme" onClick={props.toggleFunc}>About</h6>
      </div>
      <div>
        <h6 className="menu-list-child" id="myprojects" onClick={props.toggleFunc}>Projects</h6>
      </div>
      <div>
        <h6 className="menu-list-child" id="mycertificates" onClick={props.toggleFunc}>Certificates</h6>
      </div>
    </div>
  )
}

// export default { Menu }