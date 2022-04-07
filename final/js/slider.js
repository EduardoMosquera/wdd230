document.ready(function() {
  
  let sliderInstance = document.getElementByClassName("bxslider").bxSlider();
  document.getElementById("add-slide").click(function(e) {
    e.preventDefault();
    
    document.getElementByClassName("bxslider")
      .last()
      .append(
        '<li><img src="https://placeholdit.imgix.net/~text?txtsize=61&amp;txt=650%C3%97350&amp;w=650&amp;h=350" /></li>'
      );
    
    let currentSlide = sliderInstance.getCurrentSlide();
    
    sliderInstance.reloadSlider({
      startSlide: currentSlide,
      auto: true,
      autoControls: true,
      stopAutoOnClick: true,
      pager: true
    });
  });
});