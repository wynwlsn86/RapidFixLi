import React, { Component } from 'react'
import aboutImg from '../../assets/about-img.jpeg'

export default class Home extends Component {
  render() {
    return (
      <div className='home' id={'about'}>
        <div className='center-heading'>
          <h1 className='card-title'>ABOUT US</h1>
        </div>
        <div className='center-heading'>
          <div className='underline'> </div>
        </div>
        <div className='home-card-about'>
          <p className='about-text'>Here at RapidFix we specialize in Cell Phone, Tablet and Computer Repairs. Long Island based and have been in business for the past 8 years! The most affordable repair service on the island yet we will never sacrifice quality. Feel free to contact us with any of your repair needs. We are open Monday - Saturday between the hours of 10am to 7pm. See you in a flash!
          <br/>
          <br/>
          We are open Monday - Saturday between the hours of 10am to 7pm. See you in a flash!</p>
          <img src={aboutImg} alt='Desktop Setup' />
        </div>
        <div className='center-heading'>
          <h1 className='card-title' id={'services'}>OUR SERVICES</h1>
        </div>
        <div className='center-heading'>
          <div className='underline'> </div>
        </div>
        <div className='home-card-services'>
          <div className='home-card-child'>
            <i class="fas fa-phone-alt fa-6x"></i>
            <h2>Cell Phone Repair</h2>
            <p>iPhone 6/6+ Screen Repair: $74.99</p>
            <p>iPhone 6s/6s+ Screen Repair: $89.99</p>
            <p>iPhone 7/8 Screen Repair: $99.99</p>
            <p>iPhone 7/8+ Screen Repair: $109.99</p>
            <p>iPhone X Screen Repair: $179.99</p>
            <p>iPhone XS Screen Repair: $249.99</p>
            <p>iPhone XR Screen Repair: $149.99</p>
            <p>iPhone 6/7/8 Battery Repair: $64.99</p>
            <p>iPhone X/XS/XR Battery Repair: $89.99</p>
            <br/>
            <p>Samsung Devices: Call For a Quote</p>
          </div>
          <div className='home-card-child'>
            <i class="fas fa-tablet-alt fa-6x"></i>
            <h2>Tablet Repair</h2>
            <p>iPad Mini 1/2/3 Screen Repair: $99.99</p>
            <p>iPad Mini 4 Screen Repair: $139.99</p>
            <p>iPad 2/3/4 Screen Repair: $99.99</p>
            <p>iPad Air 5th/6th Gen Screen Repair: $129.99</p>
            <p>Pad Air 2/iPad Pro: Call For a Quote</p>
            <br/>
            <p>Samsung Devices: Call For a Quote</p>
          </div>
          <div className='home-card-child'>
            <i class="fas fa-laptop-medical fa-6x"></i>
            <h2>Computer Repair</h2>
            <p>General Computer Repair: $99.99</p>
              <p>(Virus Removal, Software Installation, Software Updates, Data Transfer)</p>
              <br/>
            <p>All computer repairs that require parts will be charged at the part cost. The $99.99 General Repair Cost will be added to the part cost.</p>
            <br/>
            <p>Free Diagnosis! </p>
          </div>
          <div className='home-card-child'>
            <i class="fas fa-toolbox fa-6x"></i>
            <h2>General Service Calls</h2>
            <p>Whether you need your phone fixed, computer repaired, or even need your Amazon Echo set up for you, we will be there in a flash! We service the following communities: Oceanside, Baldwin, Freeport, Merrick, Island Park, Long Beach, Rockville Centre, East Rockaway, and Lynbrook</p>
          </div>
          <div className='home-card-child'>
            <i class="fas fa-robot fa-6x"></i>
            <h2>Custom PC Builds</h2>
            <p>If you're one of those people who cannot decide on what computer to get, we can build one for you to your exact specifications.</p>
          </div>
          <div className='home-card-child'>
            <i class="fas fa-chart-bar fa-6x"></i>
            <h2>Wholesale Parts Supplier</h2>
            <p>We also offer purchasing of cell phone parts to local businesses who specialize in cell phone repair. Must have proper documentation!</p>
          </div>
        </div>
        <div className='home-card' id={'contact'}>
          <div className='center-heading'>
            <h1 className='card-title'>CONTACT</h1>
          </div>
          <div className='center-heading'>
            <div className='underline'> </div>
          </div>
            <div className='quote-parent'>
              <div className='quote-child'>
                <p>Feel free to give us a call, shoot us a text, send us an email or even fill out the form!</p>
                <br/>
                <p>Phone: 516-619-6165</p>
                <p>Email: Noah@RapidFixli.com</p>
                <br/>
                <p>Hours of Operation:</p>
                <br/>
                <p>Monday thru Saturday</p>
                <br/>
                <p>10am-7pm</p>
              </div>
              <div className='quote-child-form'>
                <form className='quote-form-grid'>
                  <input type='text' name='fname' id='fname' classnName='form-quarter' placeholder='FIRST NAME'/>
                  <input type='text' name='lname' id='lname' classnName='form-quarter' placeholder='LAST NAME' />
                  <input type='text' name='email' id='email' classnName='form-quarter' placeholder='EMAIL' />
                  <input type='text' name='phone' id='phone' classnName='form-quarter' placeholder='PHONE #'/>
                  <select name="services" id="services" className='form-half'>
                    <option value="" disabled selected>SELECT YOUR SERVICE</option>
                    <option value="volvo">CELL PHONE REPAIR</option>
                    <option value="volvo">TABLET REPAIR</option>
                    <option value="saab">COMPUTER REPAIR</option>
                    <option value="fiat">HOUSE CALL</option>
                    <option value="audi">OTHER</option>
                  </select>
                  <div id='empty'></div>
                  <input type='text' name='comment' id='comment' placeholder='COMMENTS' />
                  <button id='button'>Request a quote</button>
                </form>
              </div>
            </div>

        </div>
      </div>
    )
  }
}
