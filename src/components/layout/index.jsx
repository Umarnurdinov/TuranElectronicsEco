import axios from "axios";
import React, { useEffect } from "react";

function Layout({ children }) {
  useEffect(() => {
    axios("https://turaneletronic.onrender.com/basket/");
  });

  return <>{children}</>;
}

export default Layout;
