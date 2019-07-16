import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Landing extends Component {
  render() {
    return (
      <div className='landing-bg'>
        <h1 className='landing-heading'>RAPIDFIX</h1>
        <h2 className='landing-sub-heading'>CELL PHONE, TABLET, & COMPUTER REPAIR</h2>
        <button className='enter-button'>
          <Link to='/services'>
            <h2>Eat my ass NOW</h2>
          </Link>
        </button>
      </div>
    )
  }
}
