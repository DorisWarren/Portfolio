import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import posed from 'react-pose'
import { moveInBottom } from '../atoms/Transitions'
import { ReactComponent as Logo } from '../../images/butterfly.svg'
import styles from './LogoUnit.module.css'
import { useResume } from '../../hooks/use-resume'

LogoUnit.propTypes = {
  minimal: PropTypes.bool,
  isResume: PropTypes.bool
}

function LogoUnit({ minimal }) {
  const { basics } = useResume()
  const Animation = posed.div(moveInBottom)

  return (
    <Animation>
      <Link className={minimal ? styles.minimal : styles.logounit} to={'/'}>
        <Logo className={styles.logo} />
        <h1 className={`p-name ${styles.title}`}>
          {basics.name.toLowerCase()}
        </h1>
        <p className={`p-job-title ${styles.description}`}>
          {basics.label.toLowerCase()}
        </p>
      </Link>
    </Animation>
  )
}

export default memo(LogoUnit)
