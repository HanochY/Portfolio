import CardSection from "./components/card-section"
import Card from "./components/card"
import MiniCardSection from "./components/mini-card-section"
import MiniCard from "./components/mini-card"

export default function Page() {
  return (
    <section>
      <h1 className="mb-4 text-2xl font-semibold tracking-tighter">
        Hello! My name is Hanoch Yarkoni.
      </h1>
      <p className="mb-8 text-sm">
        {
        `I am a Software Engineer from Israel with 3 years of experience specializing in Cybersecurity, Networking, and IoT/OT security.\n
        I love the process of creation, tackling complex problems, thinking outside the box, and eventually seeing it come to fruition with a great impact.\n
        Always ready to learn new things and achieve new goals!`
        }
      </p>
      <CardSection title='My Experience'>
        <Card title="IDF Cyber Defense Corps" imageSource="/assets/images/cyber-defense-idf.png">
        <h3 className="mt-1 font-semibold">Software Engineer Team Lead</h3> 
        <p className="mb-1">Mar 2024 - Apr 2025 | Full-time</p>
        <h3 className="mt-1 font-semibold">Software Engineer</h3>
        <p className="mb-1">Aug 2022 - Mar 2024 | Full-time</p>
        </Card>
      </CardSection>
      <CardSection title='My Education'>
      <Card title="Israeli Open University" imageSource="/assets/images/openu.png">
        <h3 className="mt-1 font-semibold">B.Sc. Computer Science</h3> 
        <p className="mb-1">Dec 2023 - </p>
        </Card>
        <Card title="Basmach - IDF School of Computer Science" imageSource="/assets/images/BSMCH.jpg">
        <h3 className="mt-1 font-semibold">Cyber Security Engineer</h3> 
        <p className="mb-1">Mar 2022 - Aug 2022</p>
        </Card>
      </CardSection>
      <br></br>
      <MiniCardSection title="My Social Media">
        <a href="https://www.linkedin.com/in/hanoch-yarkoni-919236286/"><MiniCard title="LinkedIn" imageSource="/assets/images/linkedin.png"/></a>
        <a href="https://github.com/HanochY"><MiniCard title="GitHub" imageSource="/assets/images/github.png"/></a>
        <a href="https://medium.com/@hanochyarkoni"><MiniCard title="Medium" imageSource="/assets/images/medium.jpeg"/></a>
        <MiniCard title="hanochyarkoni@gmail.com" imageSource="/assets/images/gmail.png"/>
      </MiniCardSection>
    </section>
  )
}
