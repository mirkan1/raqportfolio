import React from 'react'
import {useSpring, animated} from 'react-spring'

function myContent(contentState) {
  switch (contentState) {
    case "aboutme":
      return (
        <div>
            <h1>about me!</h1>
        </div> )
      case "myprojects":
        return (
          <div>
            <h1>my projects!</h1>
          </div>)
      case "mycertificates":
        return (
          <div>
              <h1>my certificates!</h1>
            </div>)
      default:
        return (
          <div>
            <h1>Hello WOrld!</h1>
        </div> )
    }
}

export function Content(val) {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  })
  return (
    <animated.div style={props}>
      {myContent(val.contentState)}
    </animated.div>
  )
}

//export default { Content }