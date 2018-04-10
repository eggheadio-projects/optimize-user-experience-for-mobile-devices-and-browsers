$('#menu-icon').on('click', () => {
  $('nav').toggle()
})

$('nav').on('click', () => {
  $('nav').toggle()
}).children().on('click', () => {
  return false
})