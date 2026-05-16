
document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: '#5cbdaa',
    lineColor: '#5cbdaa'
  });
  // Removed manual centering as CSS Flexbox handles it now
}, false);

// Scroll enter animations: observe timeline item `.content` elements
document.addEventListener('DOMContentLoaded', function () {
  try {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.timeline .content').forEach(el => {
      observer.observe(el);
    });
  } catch (e) {
    // IntersectionObserver not supported; reveal all
    document.querySelectorAll('.timeline .content').forEach(el => el.classList.add('in-view'));
  }
}, false);


