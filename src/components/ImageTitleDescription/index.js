import React from 'react';
import { Text, RichText, Image } from '@sitecore-jss/sitecore-jss-react';

const ImageTitleDescription = (props) => {
  const  cssClass = props.fields.class.value;
  return (
  <div class='ImageTitleDescription'>
    <div class={cssClass}>
      <Image
      field={props.fields.Image}
      srcSet={[{ mw: 300 }, { mw: 100 }]}
      sizes="(min-width: 960px) 300px, 100px"
      className="itd-image img-fluid"
    />
    <Text tag="h3" field={props.fields.Title} class='itd-title'/>
    <RichText tag="p" field={props.fields.Description} class='itd-description'/>
    </div>
  </div>
);
};

export default ImageTitleDescription;
