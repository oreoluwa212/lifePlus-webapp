import React from "react";

function generateBlob(imgData) {
  // converting the image buffer from the server to a blob so browser understands it
  const blob = new Blob([Int8Array.from(imgData.avatar.data.data)], {
    type: imgData.avatar.contentType,
  });

  const image = window.URL.createObjectURL(blob);
  return image;
}

export default generateBlob;
