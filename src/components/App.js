import React, { Component } from 'react';
import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import { faGlobe } from '@fortawesome/fontawesome-free-solid';

import Header from './header/Header';
import TimelineList from './past/TimelineList';
import Stat from './present/Stat';
import Services from './present/Services';
import Video from './video/Video';
import LinkIcons from './common/LinkIcons';

import '../styles/main.css';

fontawesome.library.add(brands, faGlobe);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section id="video">
          <Video/>
        </section>
        <section id="intro" className="section-intro">
          <div className="section-intro__image"></div>
          <div className="section-intro__content">
            <h2>Twenty Years</h2>
              <p>Since 1998, Penobscot Community Health Care (PCHC) has been committed to improving the health and well-being of our patients and the Maine communities we serve. Our vision has always been clear – a community in which everyone has access to quality, cost effective health care regardless of circumstance, where a people are empowered to advocate for their personal goals and needs and are supported by community based resources, and where health encompasses physical and emotional wellness, personal dignity, and a sense of belonging.</p>
              <p>Things have certainly changed in the last 20 years, whether you were one of Dr. Barbara Vereault’s first patients when we opened our doors in 1998 or if you were patient #65,000 at one of our 16 practice locations in Bangor, Brewer, Old Town, Winterport, Belfast, or Jackman, one thing has remain the same – your health is our mission.</p>
              <p>YOU are the reason PCHC is 20 Years Strong! We’ve got lots planned for our 20th anniversary and we hope you’ll help us celebrate!</p>
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
        <section id="future" className="section-future">
          <div className="section-future__image"></div>
          <div className="section-future__content">
            <h2>Where We're Going</h2>
              <p>At PCHC, your health is our mission. No matter where you might be on life’s journey, we believe in the potential of all of our patients. And we want to be able to provide you the right kind of care, where you need it, when you need it. In our first 20 years and 20 years forward, we will continue to work for continuous improvement - in the compassion, effectiveness, efficiency of our care, in your patient experience, in our systems, and in the joy of health care for our growing team of providers and staff. We will continue to innovate and work with community partners to better care for you, your family, and our communities.</p>
              <p>Your Health. Our Mission. 20 Years Strong.</p>
          </div>
        </section>
        <section id="more" className="section-more">
          <a href="https://pchc.com/?utm_source=pchc20" className="btn">Learn More at PCHC.com</a>
          <LinkIcons />
        </section>
      </div>
    );
  }
}

export default App;
