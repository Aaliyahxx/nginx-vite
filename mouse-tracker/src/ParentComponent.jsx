import { useState } from "react"
import MouseTracker from "./MouseTracker";

export default function ParentComponent() {
    const [showComponent, setShowComponent] = useState(true);

    const toggleComponent = () => {
        setShowComponent((showComponent) => !showComponent)
    };

    return (
        <div>
            {showComponent && <MouseTracker/>}
            
            <button
                onClick={toggleComponent}
                > {showComponent ? 'Unmount Tracker' : 'Mount Tracker'}
            </button>

        </div>
    )
}
