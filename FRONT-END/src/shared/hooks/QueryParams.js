import React from "react";
import {
  BrowserRouter as Router,
  Link,
  useLocation
} from "react-router-dom";

// React Router does not have any opinions about
// how you should parse URL query strings.
//
// If you use simple key=value query strings and
// you do not need to support IE 11, you can use
// the browser's built-in URLSearchParams API.
//
// If your query strings contain array or object
// syntax, you'll probably need to bring your own
// query parsing function.

export default function QueryParamsExample() {
  return (
    <Router>
      <QueryParamsDemo />
    </Router>
  );
}

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function QueryParamsDemo() {
  let query = useQuery();
  const latlng = { lat: 40 , lng: -3};

  return (
    <div>

      <Link to={`/?x=${latlng.lat}&y=${latlng.lng}`}>LatLng</Link>


      <Child x={query.get("x")} y={query.get("y")}/>

    </div>
  );
}

function Child({ x, y }) {
  return (
    <div>
      {x ? (
        <h3>
          The <code>x</code> in the query string is &quot;{x}
          &quot; & &quot;{y}
          &quot;
        </h3>
      ) : (
        <h3>There is no name in the query string</h3>
      )}
    </div>
  );
}