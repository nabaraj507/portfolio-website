  
   //---------------------skills scroll-----------------------------
  function openTab(contentId, clickedElement) {
    const allContents = document.querySelectorAll('.tab-contents');
    const allTabs = document.querySelectorAll('.tab-links');

    // Hide all tab contents
    allContents.forEach(function(content) {
      content.classList.remove('active');
    });

    // Remove active-link from all tab links
    allTabs.forEach(function(tab) {
      tab.classList.remove('active-link');
    });

    // Show selected content and add active style
    document.getElementById(contentId).classList.add('active');
    clickedElement.classList.add('active-link');
  }
  



  const halfCircle = document.getElementById('socialHalfCircle');

  // Toggle every 30 seconds
  setInterval(() => {
    halfCircle.classList.toggle('hidden');
  }, 3000);


// ---------------show in small screen --------------
    var sidemenu= document.getElementById("sidemenu");

    function openmenu(){
        sidemenu.style.right = "0";
    }
    function closemenu(){
        sidemenu.style.right = "-200px";
    }


    // --------------------connnetc with google sheet------------------------

  const scriptURL = 'https://script.google.com/macros/s/AKfycbxLfXkW0QCberV7pHjVX-eRC-4KwBuNhHyE9ziI0ueQQ3FFOivW4oHDw61247wtSNm8IA/exec'
  const form = document.forms['submit-to-google-sheet']
const msg= document.getElementById("msg")
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
      })
      .catch(error => console.error('Error!', error.message))
  })