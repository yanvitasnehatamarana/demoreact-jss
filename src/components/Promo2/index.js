import React from 'react';
import { Text,RichText, Image, Link } from '@sitecore-jss/sitecore-jss-react';

const Promo2 = (props) => (
  <div class="promo2">
    <p>Promo2 Component</p>
    <Text field={props.fields.heading} />
    <React.Fragment>
    
  <Link field={props.fields.PromoLink} className="row">
  <div className='col-md-6'>
  <RichText tag="h2" className="display-4" field={props.fields.PromoText} />
  <RichText tag="p" className="contentDescription" field={props.fields.PromoText2} />
  </div>
  <div className='col-md-6'>
  <Image
    field={props.fields.PromoIcon}
    srcSet={[{ mw: 300 }, { mw: 100 }]}
    sizes="(min-width: 960px) 300px, 100px"
    className="img-fluid"
  />
  </div>
  </Link>
 </React.Fragment>
  </div>
  
);

export default Promo2;
