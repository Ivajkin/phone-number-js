function createTelLinks() {
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      $("a.phone-number")
         .each(function()
         {
            this.href = 'tel:' + $(this).html()
                                        .replace(' ','')
                                        .replace(' ','')
                                        .replace(' ','')
                                        .replace('-','')
                                        .replace('-','')
                                        .replace('-','')
                                        .replace('(','')
                                        .replace(')','');
         });
  }
}

function onload() {
  if(!$ || !$(document) || !$(document).ready) {
    console.log("There is no jQuery proper version. Нет подходящей версии jQuery.");
  } else {
    $(document).ready(createTelLinks);
  }
}
