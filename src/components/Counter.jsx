import React, { useEffect, useState } from 'react'

export const Counter = ({count}) => {
    
    
  return (
    <div style={{textAlign:"center", fontSize:"30px", color:"white"}}>
        Persons: {count>0 ? count : "today no more birthday"}
    </div>
  )
}