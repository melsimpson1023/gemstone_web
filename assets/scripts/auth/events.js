'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')

const onSignUp = function (event) {
  event.preventDefault()
  // get the form from the event
  const form = event.target
  console.log(event)
  // get data from form
  const data = getFormFields(form)
  // send data to the api
  api.signUp(data)
  // handle successful response
    .then(ui.signUpSuccess)
    // handle failed response
    .catch(ui.signInFailure)
}
const onSignIn = function (event) {
  event.preventDefault()
  // get the form from the event
  const form = event.target
  // get the data from the form
  const data = getFormFields(form)
  // send data to api
  api.signIn(data)
  // handle successful response
    .then(ui.signInSuccess)
    // handle failed response
    .catch(ui.signInFailure)
}
const onChangePassword = function (event) {
  event.preventDefault()
  // get the form from the event
  const form = event.target
  // use getFormFields to get data from the form
  const data = getFormFields(form)
  // send data in AJAX request to the api
  api.changePassword(data)
  // handle successful response
    .then(ui.onChangePasswordSuccess)
    // handle failed response
    .catch(ui.onChangePasswordFailure)
}
const onSignOut = function (event) {
  event.preventDefault()
  // send data in AJAX request to the api
  api.signOut()
  // handle successful response
    .then(ui.onSignOutSuccess)
    // handle failed response
    .catch(ui.onSignOutFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}
