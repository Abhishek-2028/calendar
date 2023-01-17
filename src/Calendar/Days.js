import React from 'react'
import "../style-css/Date.css"
import styled from 'styled-components';

const Ptag =styled.p`color:white`;;

const Days = () => {

  const Days=["Su","Mo","Tu","We","Th","Fr","Sa"]

  return (
    <div>
      <div className='p-div'>
        {Days.map((d)=>(<Ptag>{d}</Ptag>))}
      </div>
    </div>
  )
}

export default Days
