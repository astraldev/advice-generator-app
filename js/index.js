var icons = {
  'dice': '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg>',
  'divider-sm': '<svg width="295" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z"/><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>',
  'divider-lg': '<svg width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>'
}

if (window) {
  const quote_el = document.getElementById("quote-text");
  const quote_id = document.getElementById("quote-id");
  const url = 'https://api.adviceslip.com/advice';
  const initialQuote = {slip: {id: 0, advice: "Waiting for quote..."}}

  function updateIcons() {
      let icon_els = document.querySelectorAll('.ico')
      icon_els.forEach(el => {
          let classlist = el.classList
          let icon;
          classlist.forEach(klass => {
              if (klass.search('ico-') != -1) icon = klass.replace('ico-', '')
          })
          if (icon && icons.hasOwnProperty(icon)) {
              el.classList.remove('ico')
              el.innerHTML = icons[icon] += el.innerHTML
          }

      })
  }
  function setQuote(quote){
    let quote_text = quote.slip.advice;
    quote_el.innerText = `"${quote_text}"`
    let id = quote.slip.id;
    quote_id.innerText = `Quote #${id}`
  }
  function updateQuote(){
    fetch(url)
      .then( response => response.json().then( data=> setQuote(data) ))
  }
  setQuote(initialQuote)
  updateQuote()
  updateIcons()
}