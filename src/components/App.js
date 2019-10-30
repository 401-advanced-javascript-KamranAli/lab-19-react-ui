import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Character from './Character';
import bepisian from './assets/bepisian.jpeg';
import blimblam from './assets/blimblam.jpeg';
import chris from './assets/chris.jpeg';
import lawyermorty from './assets/lawyermorty.jpeg';
import tumblorkian from './assets/tumblorkian.jpeg';
import MCHaps from './assets/mchaps.jpeg';
import vampireMaster from './assets/vampiremaster.jpeg';
import photographyRapter from './assets/photographyraptor.jpeg';
import greasyGrandma from './assets/greasygrandma.jpeg';
import ryan from './assets/ryan.jpeg';

export default function App() {
  return (
    <>
      <Header />
      <Footer />
      <Character
        img={bepisian}
        name="Bepisian"
        species="Alien" />
      <Character
        img={blimblam}
        name="Blimblam"
        species="Alien" />
      <Character
        img={chris}
        name="Chris"
        species="Organic Gun" />
      <Character
        img={lawyermorty}
        name="Lawyer Morty"
        species="Human" />
      <Character
        img={tumblorkian}
        name="Tumblorkian"
        species="Alien" />
      <Character
        img={MCHaps}
        name="MCHaps"
        species="Human" />
      <Character
        img={vampireMaster}
        name="Vampire Master"
        species="vampire" />
      <Character
        img={photographyRapter}
        name="Photography Raptor"
        species="Parasite" />
      <Character
        img={greasyGrandma}
        name="Greasy Grandma"
        species="Grandma" />
      <Character
        img={ryan}
        name="Ryan Mehta"
        species="Mehta-Human" />
    </>
  );
}
