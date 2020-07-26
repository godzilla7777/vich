import React, { useState } from 'react';
import { HomeMainContainer } from './HomeStyle';

export function Home() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <HomeMainContainer>
        Add contents here, in systematic way and not in chanapuly way @Ananthu Vijay
    </HomeMainContainer>
  );
}