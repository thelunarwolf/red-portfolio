import React from 'react'
import styles from './about-details.module.css'

export default function AboutDetails() {
    return (
        <div className={styles.about_component}>
            <section className={styles.left_section}>
                <h1 className={styles.title}>
                    <span>Hello~</span><br />
                    <span>I&apos;m Virija Tejavath</span><br />
                    <span>UI/UX Designer</span>
                </h1>
                <p>
                    I am currently learning UX Design and working on personal projects. Previously, I worked as an HR at a healthcare start-up where I learned how teams work together and found my calling to design. What I love about design is how it affects everyone&apos;s life daily. Moreover, it helps us in building empathy towards all kinds of people. When I am not designing, you can find me illustrating, reading comics and learning Japanese.
                </p>
                <p>
                    I value communication, personal growth, support, kindness and balance. Learning and purposeful work cultures interest me.<br />
                    Presently, I am available for collaborations and fun side projects.
                </p>
                <p className={styles.download}>Download Resume</p>
            </section>
            <section className={styles.right_section}>
                <div className={styles.image}></div>
                <h1 className={styles.title}>“I am passionate about creating experiences that communicate”</h1>
            </section>
        </div>
    )
}
