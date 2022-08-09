/* modal email */

window.onload = function () {
  let timerInterval
  Swal.fire({
    icon: 'sucess',
    title: 'Email enviado com sucesso',
    // html: '<a href="http://127.0.0.1:5500"><h2>Retornar a página principal</h2></a>',
    timer: 4000,
    color: '#01444e',
    confirmButtonColor: '#01444e',
    cancelButtonColor: '#01444e',
    iconColor: '#01444e',
    linkColor: '#01444e',
    didOpen: () => {
      Swal.showLoading()
      const b = Swal.getHtmlContainer().querySelector('b')
      timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft()
      }, 100)
    },
    willClose: () => {
      clearInterval(timerInterval)
    }
  }).then(result => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      window.location.replace('http://127.0.0.1:5500')
    }
  })
}
