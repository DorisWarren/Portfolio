import React from 'react'
import { useResume } from '../../hooks/use-resume'
import Icon from '../../components/atoms/Icon'
import styles from './Header.module.css'

export default function Header() {
  const { basics } = useResume()
  const { name, label, email, website } = basics

  return (
    <>
      <header>
        <p>Résumé</p>
        <h1 className={styles.title}>{name}</h1>
        <h2 className={styles.label}>{label}</h2>
      </header>

      <div>
        <ul className={styles.contact}>
          <li>
            <a href={website}>
              <Icon name="Compass" />
              Portfolio
            </a>
          </li>
          <li>
            <Icon name="Mail" />
            <a href={`mailto:${email}`}>Email</a>
          </li>
          <li className={styles.languages}>
            <Icon name="Globe" />
          </li>
        </ul>
      </div>
    </>
  )
}
