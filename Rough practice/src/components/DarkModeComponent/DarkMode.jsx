import React from 'react'

export const setDarkMode = () =>{
    document.querySelector('body').setAttribute('app-theme', 'dark')
}

export const setLightMode = () =>{
    document.querySelector('body').setAttribute('app-theme', 'light')
}

const DarkMode = () => {

  return (
    <div>
      
    </div>
  )
}

export default DarkMode
