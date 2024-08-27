import React, { useEffect, useState } from 'react';
import { Image, Link } from '@sitecore-jss/sitecore-jss-react';

const Header = (props) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const query = JSON.stringify({
        query: `query {
          item(path: "{A5B2BA91-8D05-4595-B29B-86A36DA9B6BA}") {
            id
            name
            displayName
            url
            parent {
              id
              name
              url
            }
            hasChildren
            children(includeTemplateIDs: ["{1A80A4B4-A5F5-554E-AD0D-0358BCD60ADD}","{F56440EE-7ACB-5BC1-B2D7-8975DE9B79A0}"]) {
              id
              name
              url
              template {
                id
              }
              hasChildren
              children(includeTemplateIDs: ["{1A80A4B4-A5F5-554E-AD0D-0358BCD60ADD}","{F56440EE-7ACB-5BC1-B2D7-8975DE9B79A0}"]) {
                id
                name
                url
                template {
                  id
                }
              }
            }
            fields(ownFields: true) {
              id
              name
              value
            }
            template {
              id
              name
              ownFields {
                id
                name
              }
            }
          }
        }`
      });

      const url = 'https://demoreact-jss.dev.local/api/demoreact-jss?sc_apikey={665F3F06-6DF7-4F3D-80A4-AED88B6BBA0D}';

      try {
        const response = await fetch(url, {
          body: query,
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log("Data----" + JSON.stringify(result.data));
        setData(result.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  
  const renderChildren = (children) => {
    return children.map((child) => (
      <li class={child.id}>
        <a href={child.url}>{child.name}</a>
        {child.children?.length > 0 && (
          <ul>
            {renderChildren(child.children)}
          </ul>
        )}
      </li>
    ));
  };
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="row header">
      <Link field={props.fields.LogoLink} className='col-md-2'>
      <Image
        field={props.fields.Logo}
        srcSet={[{ mw: 300 }, { mw: 100 }]}
        sizes="(min-width: 960px) 300px, 100px"
        className="img-fluid"
      /></Link>
      <div className='col-md-8'>
         {data ? (
        <ul>
          <li class={data.item.id}>
            <a href={data.item.url}>{data.item.name}</a>
            {data.item.children.length > 0 && (
              <ul>
                {renderChildren(data.item.children)}
              </ul>
            )}
          </li>
        </ul>
      ) : (
        <div>No data available</div>
      )}
    </div>
    <div className='col-md-2'>
      <button type='button'><Link field={props.fields.Button}>Contact</Link></button>
    </div>
    </div>
  );
};

export default Header;
