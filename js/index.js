const onLoad = () => {
  //set copy write year
  const setCopyWriteYear = () => {
    const span = document.getElementById("year");
    span.innerText = new Date().getFullYear().toString();
  };
  setCopyWriteYear();
};

window.onLoad = onLoad();
