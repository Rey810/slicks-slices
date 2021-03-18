import { useEffect, useState } from 'react';

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
        query: `
                  query {
  StoreSettings(id: "downtown"){
    name
    slicemaster {
      name
    }
    hotSlices {
      name
    }
  }
}
                  `,
      }),
    }).then((res) =>
      res.json().then((res) => {
        //    Todo: Check for errors
        setHotSlices(res.data.StoreSettings.hotSlices);
        setSliceMasters(res.data.StoreSettings.slicemaster);
        //    set the data to state
        console.log(res.data);
      })
    );
  }, []);

  return {
    hotSlices,
    sliceMasters,
  };
}
