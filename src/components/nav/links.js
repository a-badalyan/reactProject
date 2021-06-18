import React from "react";
import { NavLink } from "react-router-dom";

function Links(prop) {
  return (
    <section>
      <NavLink to={prop.url}> {prop.text} </NavLink>
    </section>
  );
}

export default Links;
