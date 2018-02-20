import React, { Component } from 'react';

import Header from './header/Header';
import TimelineList from './past/TimelineList';
import Stat from './present/Stat';
import Services from './present/Services';

import VideoMP4 from '../video/pchc20-logo-reveal_1080p.mp4';
import VideoWEBM from '../video/pchc20-logo-reveal_1080p.webm';

import '../styles/main.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section id="video">
          <video loop muted autoPlay>
            <source src={VideoMP4} type="video/mp4" />
            <source src={VideoWEBM} type="video/webm" />
          </video>
        </section>
        <section id="intro" className="section-intro">
          <div className="section-intro__image"></div>
          <div className="section-intro__content">
            <h2>Twenty Years</h2>
            <p>That's a long time. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
            <p>Integer sapien leo, vehicula sed tincidunt sed, fermentum vel massa. Integer vel turpis eu erat placerat accumsan a non urna. Etiam vehicula consectetur nulla, ac scelerisque mi pretium nec. Sed pharetra odio augue, non pellentesque nisi sollicitudin auctor. Nam elementum, mi eu pretium eleifend.</p>
            <p>Here's to 20 more.</p>
          </div>
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
            <Services />
          </div>
        </section>
        <section id="future">
          <div className="content--text">
            <h2>Where We're Going</h2>
            <p>Something inspirational about the future of PCHC. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
            <p>Integer sapien leo, vehicula sed tincidunt sed, fermentum vel massa. Integer vel turpis eu erat placerat accumsan a non urna. Etiam vehicula consectetur nulla, ac scelerisque mi pretium nec. Sed pharetra odio augue, non pellentesque nisi sollicitudin auctor. Nam elementum, mi eu pretium eleifend.</p>
          </div>
        </section>
        <section id="more" className="section-more">
          <a href="https://pchc.com/">Learn More at PCHC.com</a>
        </section>
      </div>
    );
  }
}

export default App;
