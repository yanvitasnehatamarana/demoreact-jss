import React from 'react';
import {  RichText, Image, Link } from '@sitecore-jss/sitecore-jss-react';

/**
 * A simple Content Block component, with a heading and rich text block.
 * This is the most basic building block of a content site, and the most basic
 * JSS component that's useful.
 */
const Promo = ({ fields }) => (
  <React.Fragment>
    <div class="promo">
    <div className='col-md-6'>
    <RichText tag="h2" className="display-4" field={fields.PromoText} />
    <RichText tag="p" className="contentDescription" field={fields.PromoText2} />
    <Link field={fields.PromoLink} className="row"></Link>
    </div>
    <div className='col-md-6'>
    <Image
      field={fields.PromoIcon}
      srcSet={[{ mw: 300 }, { mw: 100 }]}
      sizes="(min-width: 960px) 300px, 100px"
      className="img-fluid"
    />
    </div>
    </div>
  </React.Fragment>
);

export default Promo;