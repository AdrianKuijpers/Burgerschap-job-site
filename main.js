const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
let email = document.getElementById('exampleInputEmail1')
let text = document.getElementById('exampleFormControlTextarea1')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')

if (alertTrigger) {
   
  alertTrigger.addEventListener('click', () => {
    if (email.value == "" || text.value == ""){
        alert('Wij missen nog wat gegevens...')
    } else {
        alert('Je bericht is gestuurd!')
    }
    
  })
}