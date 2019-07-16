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
            <h1 className='card-title'>ABOUT US</h1>
          </div>
          <div className='center-heading'>
            <div className='underline'> </div>
          </div>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

          Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?" "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

          Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?" "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

          Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
        </div>
      </div>
    )
  }
}
