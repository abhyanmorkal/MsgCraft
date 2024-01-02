import React from 'react'


const IconFrame = ({title,src,alt}) => {
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
      <img src={src} alt={alt} />
      <p>{title}</p>
    </div>
  )
}

export default IconFrame