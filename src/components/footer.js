import React from 'react';

import './footer.css';

function Footer () {
  return (
    <section className="footer">
      &copy; {process.env.REACT_APP_FOOTER_TEXT}
    </section>
  )
}

export default Footer;
