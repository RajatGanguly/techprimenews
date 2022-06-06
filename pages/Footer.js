import React from 'react'
import styles from '../styles/Home.module.css'

function Footer() {
  return (
    <div><footer className={styles.footer}>
    <a
      href="https://dotcodegroup.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      Powered by{' '}Dot Code
    </a>
  </footer></div>
  )
}

export default Footer