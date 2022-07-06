export const useContact = () => {
  let firstName = ref(undefined)
  let lastName = ref(undefined)
  let email = ref(undefined)
  let message = ref(undefined)

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&')
  }

  function handleSubmit() {
    fetch('/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        prenom: firstName.value,
        nom: lastName.value,
        email: email.value,
        message: message.value,
      }),
    })
      .then(() => {
        window.alert('votre message a bien été envoyé !')
        firstName.value = undefined
        lastName.value = undefined
        email.value = undefined
        message.value = undefined
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return {
    firstName,
    lastName,
    email,
    message,
    handleSubmit,
  }
}
