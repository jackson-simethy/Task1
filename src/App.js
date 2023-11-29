import { useState } from "react";

// used to import state in functional component - useState is a hook

import {sculptureList} from "./data/artists"

// import array of objects on artists.js

export default function App() {
  const [index, setIndex] = useState(0);

  // state for handling index

  const [showMore, setShowMore] = useState(false);

  // state for manage show more button event

  const hasNext = index < sculptureList.length - 1;

  // condition to avoid error based on list length

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  // next button click
 
  function handleMoreClick() {
    setShowMore(!showMore);
  }

  // handle more button click - it act as a negation

  let sculpture = sculptureList[index];

  // it take item of current index on state variable index
  // it take a single object of artist

  return (
    <>
      <button onClick={handleNextClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img
        src={sculpture.url}
        alt={sculpture.alt}
      />
    </>
  );
}
