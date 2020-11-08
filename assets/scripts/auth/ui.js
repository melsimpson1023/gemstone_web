'use strict'

const store = require('./../store')

const onSignUpSuccess = function (store) {
  $('#message').text('Thanks for signing up ' + store.user.email)
  // create a trigger reset to empty the form
  $('#sign-up-form').trigger('reset')
}
const onSignUpFailure = function () {
  $('#message').text('Sign up failed, try again')
  // this below is to clear the input areas
  $('#sign-up-form').trigger('reset')
}
const onSignInSuccess = function (response) {
  $('#message').text('Congradulations')
  // save user in the api resonse to our store object
  store.user = response.user
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
  $('#change-password-form').show()
  $('#add-gemstone-form').show()
  $('#sign-out-form').show()
  $('#show-gemstone-form').show()
  $('#index-gemstone-form').show()
  $('#destroy-gemstone-form').show()
  $('#update-gemstone-form').show()
  $('#add-gemstone-form').show()
}
const onSignInFailure = function () {
  $('#message').text('Sign in failed, try again')
  // this below is to clear the input areas
  $('#sign-in-form').trigger('reset')
}
const onChangePasswordSuccess = function () {
  $('#message').text('Changed password successfully')
  // this below is to clear the input areas
  $('#change-password-form').trigger('reset')
}
const onChangePasswordFailure = function () {
  $('#message').text('Change password failed, try again')
  // this below is to clear the input areas
  $('#change-password-form').trigger('reset')
}
const onSignOutSuccess = function () {
  $('#message').text('Signed out successfully')
  // this below is to clear the input areas
  $('#sign-in-form').trigger('reset')
  $('#sign-up-form').show()
  $('#sign-in-form').show()
  $('#change-password-form').hide()
  $('#sign-out-form').hide()
  $('#add-gemstone-form').hide()
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess
}
