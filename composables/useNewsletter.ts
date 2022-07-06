export const useNewsletter = () => {
  let email = ref(undefined)

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&')
  }

  function handleSubmit() {
    fetch('/newsletter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'newsletter',
        email: email.value,
      }),
    })
      .then(() => {
        window.alert('Inscription à la newsletter confirmée!')
        email.value = undefined
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return {
    email,
    handleSubmit,
  }
}
