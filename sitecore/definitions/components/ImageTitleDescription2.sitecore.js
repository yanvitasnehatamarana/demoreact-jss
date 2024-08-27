// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * Adds the ImageTitleDescription2 component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function(manifest) {
  manifest.addComponent({
    name: 'ImageTitleDescription2',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'Title', type: CommonFieldTypes.SingleLineText },
      { name: 'Image', type: CommonFieldTypes.Image },
      { name: 'Description', type: CommonFieldTypes.RichText },
      { name: 'class', type: CommonFieldTypes.SingleLineText },
      { name: 'Link', type: CommonFieldTypes.GeneralLink},
    ],
    placeholders: ['jss-section'],
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}
