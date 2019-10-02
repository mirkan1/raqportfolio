import React from 'react'
import './index.css'

export function Menu(props) {
  return (
    <div className="menu-list" style={{"font-size": "100px"}} align="right">
      <div>
        <h6 className="menu-list-child" id="aboutme" onClick={props.toggleFunc}>About me</h6>
      </div>
      <div>
        <h6 className="menu-list-child" id="myprojects" onClick={props.toggleFunc}>My projects</h6>
      </div>
      <div>
        <h6 className="menu-list-child" id="mycertificates" onClick={props.toggleFunc}>My certificates</h6>
      </div>
    </div>
  )
}

// export default { Menu }