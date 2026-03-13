// query selection
const searchBtn = document.querySelector(".search-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const searchBox = document.querySelector(".search-box");
const searchInput = document.querySelector("input");
const searchdata = document.querySelector(".search-data");

// Active function
searchBtn.onclick = () => {
  searchBox.classList.add("active");
  searchInput.classList.add("active");
  searchBtn.classList.add("active");
  cancelBtn.classList.add("active");
  // condition checking using if statement
  if (searchInput.value != "") {
    let values = searchInput.value;
    searchdata.classList.remove("active");
    searchdata.innerHTML =
      "You just typed " +
      "<span style='font-weight: 500;'>" +
      values +
      "</span>";
  } else {
    searchdata.innerHTML = "";
  }
};
// Cancel button function
cancelBtn.onclick = () => {
  searchBox.classList.remove("active");
  searchInput.classList.remove("active");
  searchBtn.classList.remove("active");
  cancelBtn.classList.remove("active");
  searchdata.classList.add("active");
  searchInput.value = "";
};
