import { useEffect, useState } from 'react';

// Tricks VSCode so that syntax highlighting for the graphql query can be seen
const gql = String.raw;

const deets = `
    name
    _id
    image {
      asset {
        url
        metadata {
          lqip
        }
      }
    }
`;

export default function useLatestData() {
  // hotslices
  const [hotSlices, setHotSlices] = useState();
  // slicemasters
  const [sliceMasters, setSliceMasters] = useState();

  //  Use a side effect to fetch the data from the grapql endpoint
  useEffect(() => {
    // when the component loads, fetch the data
    fetch(process.env.GATSBY_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: gql`
          query {
            StoreSettings(id: "downtown") {
              name
              slicemaster {
                ${deets}
              }
              hotSlices {
                ${deets}
              }
            }
          }
        `,
      }),
    }).then((res) =>
      res
        .json()
        .then((res) => {
          //    Todo: Check for errors
          setHotSlices(res.data.StoreSettings.hotSlices);
          setSliceMasters(res.data.StoreSettings.slicemaster);
          //    set the data to state
        })
        .catch((err) => console.log(err))
    );
  }, []);

  return {
    hotSlices,
    sliceMasters,
  };
}
