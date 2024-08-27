import React from 'react';
import { RichText, Text, Image, Link } from '@sitecore-jss/sitecore-jss-react';

const Destination = (props) => {

  const response = '{\"statusCode\":200,\"error\":null,\"message\":\"Success\",\"data\":{\"page\":1,\"count\":8,\"total\":9,\"communities\":[{\"communityId\":\"a228d000000XzrpAAC\",\"projectName\":\"Grove Fountain Views\",\"description\":\"Saadiyat Grove is a living, breathing, evolving destination that’s redefining culture. Across extraordinary lifestyle-oriented districts, you’ll find Grove Gallery Views with stunning partial Louvre Abu Dhabi Museum views, green loop or boulevard views. Overring studios, one and two-bedrooms apartments, Gallery Views are ultimate response for luxury inspired lifestyle\",\"communityLocation\":[\"24.4539\",\"54.3773\",\"Saadiyat Island\"],\"availability\":[{\"count\":1,\"key\":\"Studio\"}],\"unitTypes\":[\"Apartment\"],\"bedrooms\":[\"Studio\"],\"sellingPrice\":1330000,\"unitsAvailable\":1,\"completionDate\":\"2025-05-31\",\"projectLabel\":\"Grove Fountain Views\",\"id\":\"9RuSq48BA8WPNjhpSEcG\",\"checksum\":\"c5cb284728414f5fc5fb235e213a99a8a703656c5e57cb3a3a6591c910bbd554\",\"heading\":[],\"frontImage\":[\"https://cdn.aldar.com/-/media/project/damascus/damascus/gallery/community_grove_gallery_views/cr_thegrovebuilding5_cgi07_02.jpg?rev=0e26a51e09cf4c14a1e04952ffc7c3c7&extension=\"]},{\"communityId\":\"a228d000000XzrMAAS\",\"projectName\":\"Grove Gallery Views\",\"description\":\"Saadiyat Grove is a living, breathing, evolving destination that’s redefining culture. Across extraordinary lifestyle-oriented districts, you’ll find Grove Gallery Views with stunning partial Louvre Abu Dhabi Museum views, green loop or boulevard views. Overring studios, one and two-bedrooms apartments, Gallery Views are ultimate response for luxury inspired lifestyle\",\"communityLocation\":[\"24.5363524\",\"54.4038659\",\"Saadiyat Island\"],\"availability\":[{\"count\":1,\"key\":\"Studio\"}],\"unitTypes\":[\"Apartment\"],\"bedrooms\":[\"Studio\"],\"sellingPrice\":1270000,\"unitsAvailable\":1,\"completionDate\":\"2025-05-31\",\"projectLabel\":\"Grove Gallery Views\",\"id\":\"3RuSq48BA8WPNjhpSEcG\",\"checksum\":\"4505861123b190bc03e11e89887908f6e25d019d9dc4523a783d0be3c913cf71\",\"heading\":[],\"frontImage\":[\"https://cdn.aldar.com/-/media/project/damascus/damascus/gallery/community_grove_gallery_views/grovebuilding_studio_1.jpg?rev=c0b010a4a65546809df8d52ee4452132&extension=\"]},{\"communityId\":\"a228d000000Xzs0AAC\",\"projectName\":\"Grove Museum Views\",\"description\":\"Saadiyat Grove is a living, breathing, evolving destination that’s redefining culture. Across extraordinary lifestyle oriented districts, you’ll find Grove Museum Views - a place that is a tranquil retreat based in the heart of inspiration. Offering studios, one and two-bedroom apartments, Museum Views are directly connected to the retail space, green loop and vibrant streets and amenities within the community.\",\"communityLocation\":[\"24.5354772\",\"54.4009567\",\"Saadiyat Island\"],\"availability\":[{\"count\":1,\"key\":\"2\"}],\"unitTypes\":[\"Apartment\"],\"bedrooms\":[\"2\"],\"sellingPrice\":3600000,\"unitsAvailable\":1,\"completionDate\":\"2025-05-31\",\"projectLabel\":\"Grove Museum Views\",\"id\":\"6xuSq48BA8WPNjhpSEcG\",\"checksum\":\"cef1121d6bd599e7105697a265f786b3e1a5b3abe8a0b91197cf9a9daf489c74\",\"heading\":[\"A Grove Like No Other\"],\"frontImage\":[\"https://cdn.aldar.com/-/media/project/damascus/damascus/gallery/community_grove_museum_views/grove-museum-views_front_image.jpg?rev=3280d94ddf544d69800f48587007b7be&extension=\"]},{\"communityId\":\"a228d000000Xzs4AAC\",\"projectName\":\"Louvre Abu Dhabi Residences\",\"description\":\"As the first and only branded residence in the world to carry the Louvre name, the Louvre Abu Dhabi Residences by Aldar delivers a unique and holistic standard of living – featuring unparalleled views, designs, spaces, amenities and services. The Louvre Abu Dhabi Residences will be part of Saadiyat Grove, the new address for inspired living in the UAE and new cultural epicentre of the world.\",\"communityLocation\":[\"24.5345863\",\"54.3995467\",\"Saadiyat Island\"],\"availability\":[{\"count\":1,\"key\":\"Studio\"}],\"unitTypes\":[\"Apartment\"],\"bedrooms\":[\"Studio\"],\"sellingPrice\":1550000,\"unitsAvailable\":1,\"completionDate\":\"2025-03-31\",\"projectLabel\":\"Louvre Abu Dhabi Residences\",\"id\":\"7BuSq48BA8WPNjhpSEcG\",\"checksum\":\"95e8250e4dddabb65ab3b55844a47b1864b8e6159c35ac128baec474efae2261\",\"heading\":[\"Everyday Inspired\"],\"frontImage\":[\"https://cdn.aldar.com/-/media/project/damascus/damascus/gallery/community_louvre_abu_dabhi/louvre_residences_frontimage.jpg?rev=989ce22188664c9282f6825096029f16&extension=\"]},{\"communityId\":\"a228d000000YksGAAS\",\"projectName\":\"Manarat Living\",\"description\":\"Manarat Living\",\"communityLocation\":[\"24.5322618\",\"54.4156584\",\"Saadiyat Island\"],\"availability\":[{\"count\":1,\"key\":\"Studio\"},{\"count\":1,\"key\":\"1\"},{\"count\":2,\"key\":\"2\"}],\"unitTypes\":[\"Apartment\"],\"bedrooms\":[\"2\",\"1\",\"Studio\"],\"sellingPrice\":950000,\"unitsAvailable\":4,\"completionDate\":\"2026-02-28\",\"projectLabel\":\"Manarat Living\",\"id\":\"-BuSq48BA8WPNjhpSEcG\",\"checksum\":\"8a666aa417e5a5c73616030bcd5bc4362f840ee815a473b0fe5498e16d016df6\",\"heading\":[\"It Starts Here\"],\"frontImage\":[\"https://cdn.aldar.com/-/media/project/damascus/damascus/gallery/community_manarat_living/manarat-living_front_image.jpg?rev=dcfd9a2d936b498399c555ec2a755942&extension=\"]},{\"communityId\":\"a228d000000Yn9tAAC\",\"projectName\":\"Saadiyat Lagoons\",\"description\":\"Saadiyat Lagoons Phase 2 - Al Sidr\",\"communityLocation\":[\"24.5273252\",\"54.4496639\",\"Saadiyat Island\"],\"availability\":[{\"count\":1,\"key\":\"5\"}],\"unitTypes\":[\"Villa\"],\"bedrooms\":[\"5\"],\"sellingPrice\":9115483.5,\"unitsAvailable\":1,\"completionDate\":\"2027-02-28\",\"projectLabel\":\"Saadiyat Lagoons\",\"id\":\"7huSq48BA8WPNjhpSEcG\",\"checksum\":\"9fc327650b422cca0ddf4d97f0bdc8788f6b5ce41760428d7bca4a0a3844a6f5\",\"heading\":[\"A Grove Like No Other\"],\"frontImage\":[\"https://cdn.aldar.com/-/media/project/damascus/damascus/gallery/community_saadiyat_lagoons_phase2_alsidr/saadiyat-lagoons-_al-sidr_front_image.jpg?rev=dfc64917a8af4b638aa312f242e9f8ae&extension=\"]},{\"communityId\":\"a228d000000XzrXAAS\",\"projectName\":\"Saadiyat Reserve The Dunes\",\"description\":\"SaadiyatReserve\",\"communityLocation\":[\"24.4539\",\"54.3773\",\"Saadiyat Island\"],\"availability\":[{\"count\":1,\"key\":\"5\"}],\"unitTypes\":[\"Villa\"],\"bedrooms\":[\"5\"],\"sellingPrice\":10200000,\"unitsAvailable\":1,\"completionDate\":\"2023-12-31\",\"projectLabel\":\"Saadiyat Reserve The Dunes\",\"id\":\"4BuSq48BA8WPNjhpSEcG\",\"checksum\":\"26ddba42fb4c1d3b5081aa4a947eebdae7c2c086231049491cf5a73994bfe0e3\",\"heading\":[],\"frontImage\":[\"https://cdn.aldar.com/-/media/project/damascus/damascus/gallery/community_saadiyat_reserve_dunes/saadiyat-reserve-the-dunes.jpg?rev=e4d0843b61914b5f8636d992f20deef1&extension=\"]},{\"communityId\":\"a228d000000Z0MMAA0\",\"projectName\":\"The Source\",\"description\":\"The Source\",\"communityLocation\":[\"24.5358057\",\"54.4030758\",\"Saadiyat Island\"],\"availability\":[{\"count\":2,\"key\":\"2\"}],\"unitTypes\":[\"Apartment\"],\"bedrooms\":[\"2\"],\"sellingPrice\":3655000,\"unitsAvailable\":2,\"completionDate\":\"2026-09-30\",\"projectLabel\":\"The Source\",\"id\":\"-huSq48BA8WPNjhpSEcG\",\"checksum\":\"e8216ed33f5e4cc8a7ccfb7a60a15a62ea8ac2cf860db2ee655c64dd5e103247\",\"heading\":[\"All is Well\"],\"frontImage\":[\"https://cdn.aldar.com/-/media/project/damascus/damascus/gallery/community_the_source/mz_thegrovep03-01_cgi04_10_10k.jpg?rev=ae36c91772494b0882c9a44f654a0620&extension=\"]}]}}';
  const responseObject = JSON.parse(response);
  const data = responseObject.data;
  const pageurl = "/properties/en/communities/";
  return(
  <div>
    <div class='DestinationBanner_wrapper'>
        <div class='DestinationBanner_image'>
          <Image
            field={props.fields.destFrontImage}
            srcSet={[{ mw: 600 }, { mw: 600 }]}
            sizes="(min-width: 960px) 300px, 100px"
            className="img-fluid destfront-image"
          />
          </div>
          <div class='DestinationBanner_textwrapper'>
            <Text tag="h1" className="destName" field={props.fields.destName} />
            <Text tag="h2" className="destTitle" field={props.fields.destTitle} /> 
          </div>
    </div>
    <div class="explore_section">
        <Text tag="span" className="destHeading" field={props.fields.destHeading} />
        <span className="destShortDescription"><p>{props.fields.destShortDescription.value} </p></span>
    </div>

    <div className='Communities-section'>
    <span class="DestinationGallery_heading" data-lang="en">Communities</span>
    <ul class='Communitieslist'> 
      {data ? data.communities.map((community)=>(  
          <li class="CommunitiesInDestination_communityList__item__CUsDC aos-init aos-animate" data-aos="fade-up" id={community.communityId}>
            <div class="CommunityCard_community_link__tCcqV">
            <div class="CommunityCard_community__Hopeu">
            <img class="CommunityCard_community_image__pC_oz" src={community.frontImage} alt="" width="1440" height="400"/>
            <div class="CommunityCard_community_nameBlk__vqXrK aos-init aos-animate" data-aos="zoom-in" data-aos-delay="400">
            <p class="CommunityCard_community_nameBlk_title__VtH_K" data-lang="en">{community.projectName}</p>
            <p class="CommunityCard_community_nameBlk_subText__6T9ML" data-lang="en">{community.heading}</p>
            <p class="CommunityCard_community_nameBlk_details__iClxi" data-lang="en">
              <a href={pageurl +  community.communityId}>Community Details &gt;</a>
              </p>
            </div>
            <div class="CommunityCard_community_cardBlk__ImPKs">
            <div class="CommunityCard_community_cardBlk__tag__5Fd5s aos-init aos-animate" data-aos="fade-up"><span class="Tag_tagElement__OTsTF undefined" data-lang="en">Under Construction</span></div>
            <div class="CommunityCard_community_cardBlk__details__67S2g aos-init aos-animate" data-aos="fade-up">
               <p class="CommunityCard_community_cardBlk__details_price__5BpsF"><span data-lang="en">Starting at:  </span><span class=" TextElement_textWrapper__VDJkO" data-notranslate="true">AED <span>{community.sellingPrice}</span></span></p>
               <p class="CommunityCard_community_cardBlk__details_complDate__2TllM"><span data-lang="en">Completion Date:</span><span data-lang="en">{community.completionDate}</span></p>
               <span class="CommunityCard_community_cardBlk__details_unitTypes__Ewbvk TextElement_textWrapper__VDJkO" data-lang="en">Apartment</span>
               <div class="Availability_avilability__XIc6N">
                  <p data-lang="en">Availability:  </p>
                  <div class="Availability_avilability_content__jvBOo">
                     <p class="Availability_avilability_content__item__hbn_u">
                      <span data-lang="en">
                        {community.availability?.length>0 && (
                           community.availability.map((item) => (
                            item.key.value ))
                          )}; <span>Beds</span></span></p>
                  </div>
               </div>
               <div class="CommunityCard_community_cardBlk__details_location__FdM6E">
                  <div class="InteractiveMap_location__TgXWC">
                     <span class="InteractiveMap_locationIcon__6J_Fk">
                        <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M6.47375 15.0048L6.03808 14.6314C5.43746 14.1285 0.193115 9.59926 0.193115 6.28625C0.193115 2.81756 3.00506 0.00561523 6.47375 0.00561523C9.94244 0.00561523 12.7544 2.81756 12.7544 6.28625C12.7544 9.59929 7.51004 14.1285 6.91191 14.6339L6.47375 15.0048ZM6.47375 1.36367C3.75638 1.36675 1.55428 3.56885 1.5512 6.28622C1.5512 8.36753 4.77772 11.6924 6.47375 13.2141C8.1698 11.6918 11.3963 8.36501 11.3963 6.28622C11.3932 3.56885 9.19115 1.36678 6.47375 1.36367Z" fill="#43494F"></path>
                           <path d="M6.47372 8.77557C5.09876 8.77557 3.98413 7.66094 3.98413 6.28598C3.98413 4.91102 5.09876 3.79639 6.47372 3.79639C7.84868 3.79639 8.96331 4.91102 8.96331 6.28598C8.96331 7.66094 7.84871 8.77557 6.47372 8.77557ZM6.47372 5.04115C5.78624 5.04115 5.22893 5.59847 5.22893 6.28595C5.22893 6.97343 5.78624 7.53074 6.47372 7.53074C7.1612 7.53074 7.71852 6.97343 7.71852 6.28595C7.71852 5.59847 7.16123 5.04115 6.47372 5.04115Z" fill="#43494F"></path>
                        </svg>
                     </span>
                     <span title="Saadiyat Island" class="InteractiveMap_locationLabel__cuGFo" data-original-title="7986221846493205" data-lang="en">Saadiyat Island</span>
                  </div>
               </div>
            </div>
            <span class="CommunityCard_community_cardBlk__button__lP6hr aos-init aos-animate" data-aos="fade-left">
               <div class="LeadGenerationButton_leadGenWrapper__xvHUb"><button class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium LeadGenerationButton_leadGenWrapper__button__dZpth css-p8sz92" tabindex="0" type="button" data-lang="en">Register Interest<span class="MuiTouchRipple-root css-w0pj6f" data-lang="en"></span></button></div>
            </span>
         </div>
         </div>
          </div>
          </li>
        
      )) : (
        <div>No data available</div>
      )}</ul>
    </div>


    <div className='destGallery-section'>
    <span class="DestinationGallery_heading" data-lang="en">Destination Gallery</span>
    <ul class='DestinationGallery_list'>{props.fields.destGallery &&
        props.fields.destGallery.map((listItem, index) => (
          <li key={`destGallery-${index}`} className="DestinationGallery_listitem">
            <Image
              field={listItem.fields.Image}
              srcSet={[{ mw: 179 }, { mw: 179 }]}
              sizes="(min-width: 960px) 300px, 100px"
              className="destGallery-image img-fluid"
            />
          </li>
        ))}</ul>
      </div>
      <div class='KioskBanner_wrapper'>
        <div class='KioskBanner_imagesection'>
            <Image
              field={props.fields.destKioskImage}
              srcSet={[{ mw: 600 }, { mw: 600 }]}
              sizes="(min-width: 960px) 300px, 100px"
              className="img-fluid destKioskImage-image"
            />
      </div>
      <div class='KioskBanner_textlinksection'>
          <RichText tag="div" className="destDescription" field={props.fields.destDescription} />
          <Link field={props.fields.destKioskUrl} className='button destKioskUrl'></Link>
     </div>
    </div>
    <div class='shapefuture_wrapper'>
        <RichText tag="div" className="destLongDescription" field={props.fields.destLongDescription} />
    </div>
    <div className='destHighlights-section'>
    <span class="destHighlights_heading" data-lang="en">Destination Highlights</span>
    <ul class='destHighlights-list'>{props.fields.destHighlights &&
        props.fields.destHighlights.map((listItem, index) => (
          <li key={`destHighlights-${index}`} className="destHighlights-listitem">
            <Image
              field={listItem.fields.Image}
              srcSet={[{ mw: 400 }, { mw: 400 }]}
              sizes="(min-width: 960px) 300px, 100px"
              className="destHighlights-image img-fluid"
            />
          </li>
        ))}</ul>
      </div>
  </div>
);
};

export default Destination;
