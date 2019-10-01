import React from 'react'
import './index.css'

export function Menu(props) {
  return (
    <div className="menu-list" style={{"font-size": "100px"}} align="right">
      <div>
        <h6 id="aboutme" onClick={props.toggleFunc}>About me</h6>
      </div>
      <div>
        <h6 id="myprojects" onClick={props.toggleFunc}>My projects</h6>
      </div>
      <div>
        <h6 id="mycertificates" onClick={props.toggleFunc}>My certificates</h6>
      </div>
      <div>
        <h6 id="mypast" onClick={props.toggleFunc}>My past</h6>
      </div>
      <div>
        <h6 id="tag4" onClick={props.toggleFunc}>Tag4</h6>
      </div>
      <div>
        <h6 id="tag5" onClick={props.toggleFunc}>Tag5</h6>
      </div>
    </div>
  )
}

// export default { Menu }