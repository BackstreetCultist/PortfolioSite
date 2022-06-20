import React from 'react'
import Layout from '../components/layout'

const description = 
<div>
<p>
I am a recent graduate of the University of Nottingham, earning a degree in
Computer Science with Artificial Intelligence (with Year in Industry), which is
certainly a longer degree title than any others I've come across. During my
studies, I worked for a year at Capital One UK, both as a software and quality
engineer.
</p>
<p>
My primary interests in computer science are backend software, embedded systems,
and artificial intelligence. I have experience in a number of programming
languages, software tools, and development methodologies - my preferred
languages are Java and Haskell, and I am particularly experienced writing tests
in Cucumber and Gatling. I am also an experienced technical writer, having
achieved a strong mark on my final dissertation and written several extended
pieces of documentation for Capital One.
</p>
<p>
Aside from software engineering, I have a keen interest in music (I play frankly
too many instruments, none very well), cooking, and science fiction movies and
books. I even fancy myself something of a sci-fi writer, but only as a hobby.
</p>
<p>
Feel free to get in touch with me by email at charlie@charliewilkins.tech, and <a href="https://s3.eu-west-2.amazonaws.com/charliewilkins.tech/documents/CV+CWilkins.pdf" download>click here to download my CV!</a>
</p>
</div>

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me" children={description}>
    </Layout>
  )
}

export default AboutPage
