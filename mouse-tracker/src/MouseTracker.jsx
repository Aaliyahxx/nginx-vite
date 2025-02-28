import { useEffect, useState } from 'react'

function MouseTracker() {

    const [mousePos, setMousePos] = useState({x: 0, y: 0})

    useState(() => {
        function handleMoveMouse(e){
            setMousePos({x: e.clientX, y: e.clientY})
        };
        window.addEventListener('mousemove', handleMoveMouse);

        return () => {
          window.removeEventListener('mousemove', handleMoveMouse)  
        };
    }, [])
    
  return (
    <div>
        <h1>Mouse Tracker</h1>
        <label:text>
            <strong>X: {mousePos.x}, Y: {mousePos.y}</strong>
        </label:text>
    </div>
  )
}

export default MouseTracker
