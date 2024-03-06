const readMores = document.querySelectorAll(".read-more-button");

readMores.forEach(readMore => {
  readMore.addEventListener('click', (e) => {
    const target = document.querySelector(readMore.getAttribute("x-target"));
    const isShowing = readMore.getAttribute("x-showing");
    if (isShowing === 'true') {
      target.setAttribute("x-initial-height", target.offsetHeight + "px");
      target.style.maxHeight = '0px';
      readMore.innerHTML = 'Read More 🞃';
      readMore.setAttribute('x-showing', 'false');
    } else {
      target.style.maxHeight = target.getAttribute("x-initial-height");
      readMore.innerHTML = 'Read Less 🞁';
      readMore.setAttribute('x-showing', 'true');

      // Clear the max-height in case the screne got resized and it is cut
      target.addEventListener('transitionend', () => {
        if (target.style.maxHeight !== "0px") {
          target.style.maxHeight = '';
        }
        target.removeEventListener('transitionend', this);
      });
    }


  });

  // We start with everything visible and activate the functionality here - so if JS is disabled all information is there from the get-go
  readMore.click();
});