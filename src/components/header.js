import React from 'react';

function Header() {
    return (
      <div className='header-container'>
        <section className='header-subscription'>
          <p className='footer-subscription-heading'>
            Felix qui potuit rerum cognoscere causas
          </p>
          <p className='footer-subscription-text'>
            Her går header-sub text. .
          </p>
        </section>

        <section class='social-media'>
          <div class='social-media-wrap'>
            <div class='header-logo'>
                MANFELT
                <i class='fab fa-typo3' />
            </div>
            <small class='website-rights'>Magnus Manfelt N. Bergh © 2020</small>
            <div class='social-icons'>
            </div>
          </div>
        </section>
      </div>
    );
  }

export default Header;