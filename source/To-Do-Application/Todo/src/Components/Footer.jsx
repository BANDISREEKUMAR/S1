import React from 'react'
import styles from './footer.module.css'
export default function Footer() {
  return (
    <div className={styles.foot}>
        <footer >
            <div className={styles.footer_component}>
            <h4>All Copy Rights are Reserved under section by ss.</h4>
            <div><strong>Follow us:</strong>&nbsp;&nbsp;<a href="https://github.com/BANDISREEKUMAR/S1.git"><i className='fa fa-github-square'></i></a>&nbsp;
            <a href="#"><i className='fa fa-facebook-official'></i></a>&nbsp;<a href="#"><i className='fa fa-instagram'></i></a>
            </div>
            </div>
        </footer>
        
    </div>
  )
}
