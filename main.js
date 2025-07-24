// Mobile optimizations
document.addEventListener('DOMContentLoaded', function() {
  // Function to update PageFrameWrapper class based on screen size
  function updatePageFrameWrapperClass() {
    const pageFrameWrapper = document.getElementById('PageFrameWrapper');
    if (pageFrameWrapper) {
      if (window.innerWidth > 768) {
        pageFrameWrapper.className = 'PageFrameWrapper';
      }else {
        pageFrameWrapper.className = 'PageFrameWrapperCustom';
      }
    }
  }

  // Update class on page load
  updatePageFrameWrapperClass();
  window.addEventListener('resize', updatePageFrameWrapperClass);
  // Handle orientation change
  window.addEventListener('orientationchange', function() {
    setTimeout(function() {
      window.scrollTo(0, 0);
      updatePageFrameWrapperClass(); // Update class after orientation change
    }, 100);
  });
});

function genItem(parent) {
    const oneItem = document.createElement("a");
    oneItem.setAttribute("href", item.url)
    const image = document.createElement("img");
    image.setAttribute("src", item.image)
    image.setAttribute("alt", item.des)
    image.setAttribute("width", "100%")
    image.classList.add("img-item")
    const description = document.createElement("div");
    description.textContent = item.des;
    description.classList.add("des-item");
    oneItem.classList.add("grid-item");
    oneItem.appendChild(image)
    oneItem.appendChild(description)
    parent.appendChild(oneItem);
}


for (item of dataExample) {
    const itemsList = document.querySelector("#one-panel-list");
    genItem(itemsList)
}

function removeAllItemSearch() {
    const itemsList = document.querySelector("#search-panel-list");
    while (itemsList.lastElementChild) {
        itemsList.removeChild(itemsList.lastElementChild);
    }
}
const allItems = dataExample;

function searchFunc() {
    removeAllItemSearch();
    let input, filter;
    input = document.getElementById("myInput");
    filter = input.value.toLowerCase();
    const searchImg = document.getElementById("searchDM");
    const nors = document.getElementById("nors");
    if (filter != "") {
        searchImg.classList.add("hidden")
        let rs = allItems.filter(item => item.des.toLowerCase().includes(filter))
        if (rs.length) {
            for (item of rs) {
                const itemsList = document.querySelector("#search-panel-list");
                genItem(itemsList)
            }
            rs = []
            nors.classList.add("hidden")
        } else {
            removeAllItemSearch()
            nors.classList.remove("hidden")
        }
    } else {
        removeAllItemSearch();
        searchImg.classList.remove("hidden")
        nors.classList.add("hidden")
    }
}




