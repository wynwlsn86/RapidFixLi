import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <p>&copy; Noah Duel, 2019</p>
        <div className='footer-icons'>
          <a href='#'><i class="fab fa-facebook-f fa-2x fa-inverse"></i></a>
          <a href='#'><i class="fab fa-instagram fa-2x fa-inverse"></i></a>
        </div>
      
      </footer>
    )
  }
}
