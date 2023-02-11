import React from "react";
import styles from './About.module.css'
import image from '../../assets/yo.jpg'
import linked from '../../assets/logoo.png'

function About() {
    return(
        <div className={styles.div}>
            <h1 className={styles.h1}>Welcome to my first App!</h1>
            <h2 className={styles.h2}>My name is Damian Figueroa</h2>
            <p className={styles.p}>My name is Damian Figueroa and I am a passionate student of technology and programming. I am currently pursuing my M3 at soyHenry! and have a strong desire to continue learning and creating innovative projects. My goal is to use my skills and knowledge to develop effective and accessible solutions for different industries. Outside of the tech world, I enjoy reading, traveling, and playing sports. I am excited to share my work and insights with you through this app.</p>
            <img src={image}
                alt="Damian Figueroa" className={styles.imagen}
            />
            <p>You can connect with me on LinkedIn <a href="https://www.linkedin.com/in/damian-figueroa-b27b8399/ ">

            <img src={linked} alt='logo' className={styles.linked} />  </a> </p>
            {/* https://www.linkedin.com/in/damian-figueroa-b27b8399/ */}
        </div>
    )
}

export default About;