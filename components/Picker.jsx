import React from 'react'

export default function Picker() {
  return (
    <div id="navbar" >
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor} </div>
    </div>
  )
}
