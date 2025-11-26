// Small interactive behavior: nav toggle, contact form handler, year
document.addEventListener('DOMContentLoaded',function(){
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('navToggle');
  if(toggle){
    toggle.addEventListener('click',()=>{
      if(nav.style.display==='block') nav.style.display=''; else nav.style.display='block';
    });
  }

  const year = document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();

  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit',function(e){
      e.preventDefault();
      // Simple front-end feedback: in real use, wire to backend or form provider
      alert('Thanks — your message was captured locally. Replace this with a backend endpoint to send messages.');
      form.reset();
    });
  }

  // Timeline interactivity: click to focus an item
  const timelineItems = document.querySelectorAll('.timeline-item');
  if(timelineItems && timelineItems.length){
    // set first as active by default
    timelineItems[0].classList.add('active');
    timelineItems.forEach(item=>{
      item.addEventListener('click',()=>{
        timelineItems.forEach(i=>i.classList.remove('active'));
        item.classList.add('active');
        // scroll into view a bit (smooth)
        item.scrollIntoView({behavior:'smooth',block:'center'});
      });
    });
  }
});
