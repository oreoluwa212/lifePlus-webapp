import React from "react";

export default function checkLoggedInUser() {
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    return loggedInUser;
  }, []);
}
