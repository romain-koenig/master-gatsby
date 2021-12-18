import React from 'react';
import { Link } from 'gatsby';

export default function error404Page() {
  return (
    <div>
      <p>Sorry, you are lost... Please go back HOME</p>
      <Link to="/">HOME</Link>
    </div>
  );
}
