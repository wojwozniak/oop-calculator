import React, { useEffect, useState } from 'react'


type ScreenProps = {
    display: string;
}

const Screen:React.FunctionComponent<ScreenProps> = ({display}) => {
  
  // State of screen size
  const [cl, newCl] = useState("");

  // Make screen larger if there is more than nine signs on the screen (it will be passed to screen as a property)
  useEffect(() => {
    if (display.length > 9) {
      newCl("big-screen");
    } else {
      newCl("");
    }
  },[display])
  
  return (
        <div id="screen" className={cl}>
          <p id="screen-display" className={cl}>{display}</p>
      </div>
  )
}

export default Screen