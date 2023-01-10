// update years to current years
const reviewHeading = document.querySelector(".reviews-heading")
const copyright = document.querySelector(".copyright-paragraph")
const currentYear = new Date().getFullYear();

reviewHeading.innerText = `LaCrue Bottling Co. October ${currentYear - 1}`
copyright.innerText = `Copyright ${currentYear}  ⎮  Unplugged`;