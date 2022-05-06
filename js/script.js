(function () {
  const form = document.querySelector('#contact-form')
  const emailInput = document.querySelector('#contact-email')
  const telephoneInput = document.querySelector('#telephone')
  function showErrorMessage (input, message) {
    const container = input.parentElement // The .input-wrapper

    // Remove an existing error
    const error = container.querySelector('.error-message')
    if (error) {
      container.removeChild(error)
    }

    // Now add the error, if the message is not empty
    if (message) {
      const error = document.createElement('div')
      error.classList.add('.error-message')
      error.innerText = message
      container.appendChild(error)
    }
  }

  function validateEmail () {
    const value = emailInput.value

    if (!value) {
      showErrorMessage(emailInput, 'E-mail is a required field.')
      return false
    }

    if (value.indexOf('@') === -1) {
      showErrorMessage(emailInput, 'You must enter a valid e-mail address.')
      return false
    }

    showErrorMessage(emailInput, null)
    return true
  }

  function validateTelephone () {
    const value = telephoneInput.value

    if (!value) {
      showErrorMessage(telephoneInput, 'Telephone is a required field.')
      return false
    }

    if (value.length < 10) {
      showErrorMessage(telephoneInput, 'The Telephone number needs to be at least 10 characters long.')
      return false
    }

    showErrorMessage(telephoneInput, null)
    return true
  }

  function validateForm () {
    const isValidEmail = validateEmail()
    const isValidTelephone = validateTelephone()
    return isValidEmail && isValidTelephone
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault() // Do not submit to the server
    if (validateForm()) {
      console.log('Success!')
    }
  })
})()
