import React from "react";

function generateBlob(userData) {
  // converting the image buffer from the server to a blob so browser understands it
  if (userData.avatar) {
    const blob = new Blob([Int8Array.from(userData.avatar.data.data)], {
      type: userData.avatar.contentType,
    });

    const image = window.URL.createObjectURL(blob);
    return image;
  } else {
    return "";
  }

}

export default generateBlob;
