import React from 'react'
import PropTypes from 'prop-types'

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

ThirdComponent.propTypes = {
  name:PropTypes.string.isRequired,
  lastName:PropTypes.string.isRequired,
  medical_record: PropTypes.object
}

ThirdComponent.defaultProps = {
  name:"Jose 2",
  lastName:"Zuniga 2",
  medical_record: PropTypes.object
}