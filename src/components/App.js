import React, { Component } from 'react';

import Header from './header/Header';
import TimelineList from './past/TimelineList';
import Stat from './present/Stat';

import '../styles/main.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section id="video">
          <div id="player"></div>
        </section>
        <section id="intro">
          <h2>Twenty Years</h2>
          <p>That's a long time. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
          <p>Integer sapien leo, vehicula sed tincidunt sed, fermentum vel massa. Integer vel turpis eu erat placerat accumsan a non urna. Etiam vehicula consectetur nulla, ac scelerisque mi pretium nec. Sed pharetra odio augue, non pellentesque nisi sollicitudin auctor. Nam elementum, mi eu pretium eleifend.</p>
          <p>Here's to 20 more.</p>
        </section>
        <section id="past">
          <h2>Where We've Been</h2>
          <TimelineList />
        </section>
        <section id="present">
          <h2>Where We Are</h2>
          <div className="stats">
            <Stat number="65000" duration={1} label="Patients per Year" />
            <Stat number="350000" duration={1.5} label="Visits per Year" />
            <Stat number="16" duration={2} label="Practice Locations" />
            <Stat number="750" duration={2.5} label="Employees" />
          </div>
          <div className="services">
            <h3>Our Family of Services</h3>
            <ul>
              <li><a href="#">Audiology</a></li>
              <li><a href="#">Care Management</a></li>
              <li><a href="#">Chiropractic</a></li>
              <li><a href="#">Community Care & Geriatrics</a></li>
              <li><a href="#">Dental Services</a></li>
              <li><a href="#">Family Medicine</a></li>
              <li><a href="#">Health Care for the Homeless</a></li>
              <li><a href="#">Laboratory Services</a></li>
              <li><a href="#">Mental Health</a></li>
              <li><a href="#">Nutrition</a></li>
              <li><a href="#">Osteopathic Manipulation Therapy</a></li>
              <li><a href="#">Pediatrics</a></li>
              <li><a href="#">Pharmacy</a></li>
              <li><a href="#">Podiatry</a></li>
              <li><a href="#">Recovery</a></li>
              <li><a href="#">Speech Therapy</a></li>
              <li><a href="#">Walk-In Care</a></li>
              <li><a href="#">Women's Health</a></li>
              <li><a href="#">X-Ray</a></li>
            </ul>
          </div>
        </section>
        <section id="future">
          <div className="content--text">
            <h2>Where We're Going</h2>
            <p>Something inspirational about the future of PCHC. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
            <p>Integer sapien leo, vehicula sed tincidunt sed, fermentum vel massa. Integer vel turpis eu erat placerat accumsan a non urna. Etiam vehicula consectetur nulla, ac scelerisque mi pretium nec. Sed pharetra odio augue, non pellentesque nisi sollicitudin auctor. Nam elementum, mi eu pretium eleifend.</p>
          </div>
        </section>
        <section id="beyond">
          <h2>beyond</h2>
        </section>
      </div>
    );
  }
}

export default App;
