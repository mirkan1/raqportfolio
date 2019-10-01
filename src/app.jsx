import React from 'react'
import {useSpring, animated} from 'react-spring'

export function App() {
    const props = useSpring({
        marginTop: 100,
        from: { marginTop: 0 },
      })
      return (<animated.div style={props}>
          <h1>hello</h1>
          </animated.div>)
}
//now works
