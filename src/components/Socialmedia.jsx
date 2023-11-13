import { IoLogoInstagram, IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";

import '../styles/components/Socialmedia.sass'

const socialNetworks = [
    { name: "linkedin", link: "https://www.linkedin.com/in/douglas-oliveira-5927751b2/" ,icon: <IoLogoLinkedin /> },
    { name: "github", link: "https://github.com/dougladmo/" ,icon: <IoLogoGithub /> },
    { name: "instagram", link: "https://www.instagram.com/dougladmo_" ,icon: <IoLogoInstagram /> },
]

export default function Socialmedia() {
  return (
    <section id="social-networks">
        {socialNetworks.map((network) => (
            <a target="blank_" href={network.link} key={network.name} id={network.name} className='social-btn'>{network.icon}</a>
        ))}
    </section>
  )
}
