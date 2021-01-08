$(function(){
  $('a[rel=lightbox]').lightBox({
    containerResizeSpeed: 250,
    fixedNavigation: true
  });
  $('a[rel=2ndlightbox]').lightBox({
    overlayBgColor: '#fff',
    overlayOpacity: 0.7
  });
});