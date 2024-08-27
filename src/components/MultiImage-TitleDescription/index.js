import React from 'react';
import { Text, RichText, Image } from '@sitecore-jss/sitecore-jss-react';

const MultiImageTitleDescription = (props) => {
  const  cssClass = props.fields.class.value;
  const ImageList = props.fields.MultiImage;
  return (
  <div class='MultiImageTitleDescription'>
    <div class={cssClass}>
      <div class='image-section'>
    {ImageList &&
        ImageList.map((listItem, index) => (
          <div class={`ImageListItem-${index} MultiImage`}>
            <Image
              field={listItem.fields.Image}
              srcSet={[{ mw: 179 }, { mw: 179 }]}
              sizes="(min-width: 960px) 300px, 100px"
              className="mitd-image img-fluid"
            />
          </div>
        ))}
        </div>
        <div class='text-section'>
          <Text tag="h3" field={props.fields.Title} class='mitd-title'/>
          <RichText tag="p" field={props.fields.Description} class='mitd-description'/>
        </div>
    </div>
  </div>
);
};

export default MultiImageTitleDescription;

