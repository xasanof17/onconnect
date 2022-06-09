import React from 'react';
import Aside from '../components/Aside/Aside';
import Contact from '../components/Contact/Contact';
import Navbar from '../components/Navbar/Navbar';
import '../components/User/User.scss'


const Home = () => {
  return (
    <>
      <Navbar />
      <main className="profile__content">
        <Aside class={'active'} />
        <Contact />
      </main>
    </>

  )
}

export default Home;