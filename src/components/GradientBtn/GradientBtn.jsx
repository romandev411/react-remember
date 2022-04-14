import style from './GradientBtn.module.scss'
import React, { useState } from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

const GradientBtn = props => {
  const [active, setActive] = useState(false)

  function changeBtn () {
    setActive(!active)
  }

  return (
    <button
      className={cx(style.GradientBtn, { [style.active]: active })}
      type='button'
      onClick={changeBtn}
    >
      {props.name}
    </button>
  )
}

GradientBtn.propTypes = {
  text: PropTypes.string
}

export default GradientBtn
