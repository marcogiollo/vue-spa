
function getTimeStamp() {
  return (new Date()).getTime();
}

function getDocumentHeight() {
  return window.innerWidth;
}

export {
  getTimeStamp,
  getDocumentHeight
};
