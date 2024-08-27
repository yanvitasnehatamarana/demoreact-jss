// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * Adds the Destination component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function(manifest) {
  manifest.addComponent({
    name: 'Destination',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'destId', type: CommonFieldTypes.SingleLineText },
      { name: 'destName', type: CommonFieldTypes.SingleLineText },
      { name: 'destFrontImage', type: CommonFieldTypes.Image },
      { name: 'destGallery', type: CommonFieldTypes.ContentList },
      { name: 'destVideo', type: CommonFieldTypes.ContentList },
      { name: 'destDescription', type: CommonFieldTypes.RichText },
      { name: 'destBroucher', type: CommonFieldTypes.ContentList },
      { name: 'destKioskImage', type: CommonFieldTypes.Image },
      { name: 'destKioskUrl', type: CommonFieldTypes.GeneralLink },
      { name: 'destLatitude', type: CommonFieldTypes.SingleLineText },
      { name: 'destLongitude', type: CommonFieldTypes.SingleLineText },
      { name: 'destHighlights', type: CommonFieldTypes.ContentList },
      { name: 'destCommunityIds', type: CommonFieldTypes.SingleLineText },
      { name: 'destTitle', type: CommonFieldTypes.SingleLineText },
      { name: 'destHeading', type: CommonFieldTypes.SingleLineText },
      { name: 'destShortDescription', type: CommonFieldTypes.MultiLineText },
      { name: 'destLongDescription', type: CommonFieldTypes.RichText },
    ],
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}
