const onLoad = () => {
  //go to top functionality
  $("#go-to-top").click(function () {
    $("html, body").animate({ scrollTop: "0px" }, 300);
    return false;
  });

  //set copy write year
  const span = document.getElementById("year");
  span.innerText = new Date().getFullYear().toString();
};

window.onLoad = onLoad();
