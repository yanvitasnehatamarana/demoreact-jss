import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const GraphQLComponent = (props) => (
  <div>
    <p>GraphQLComponent Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default GraphQLComponent;
