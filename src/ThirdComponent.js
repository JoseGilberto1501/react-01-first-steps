import React from 'react'
import { ReactPropTypes } from 'react'

export const ThirdComponent = ({name,lastName,medical_record}) => {   


  return (
    <div>
        <h1>Communication between components</h1>

        <ul>
            <li>{name}</li>
            <li>{lastName}</li>
            <li>{medical_record.bloodType}</li>
            <li>{medical_record.status}</li>
        </ul>
    </div>
  )
}
