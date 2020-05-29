AOS.init({
  startEvent: 'load',
  once: true,
  duration: 800,
  offset: 200,
  disable: function() {
    return window.innerWidth < 992;
  }
});