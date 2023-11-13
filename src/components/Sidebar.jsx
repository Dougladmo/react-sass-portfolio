import Socialmedia from './Socialmedia'
import InformationContainer from './InformationContainer'

import '../styles/components/sidebar.sass'

import Profile from '../assets/profile.jpeg'

export default function Sidebar() {
  return (
    <aside id='sidebar'>
      <img src={Profile} alt="foto de perfil" />
      <p className="title">Front-end Developer</p>
      <Socialmedia />
      <InformationContainer />
      <a href="#" className='btn'>
        Download Currículo
        </a>
    </aside>
  )
}
