'use strict'

const store = require('./../store')

const onCreateSuccess = function (response) {
  $('#message').text('Thanks for adding a gemstone' + store.user.email)
  // create a trigger to reset the form
  $('#add-gemstone-form').trigger('reset')
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
  $('#change-password-form').hide()
  $('#add-gemstone-form').show()
  $('#sign-out-form').hide()
  $('#show-gemstone-form').show()
  $('#index-gemstone-form').show()
  $('#destroy-gemstone-form').show()
  $('#update-gemstone-form').show()
  $('#add-gemstone-form').show()
  store.user = response.user
}
const onCreateFailure = function (store) {
  $('#message').text('Create gemstone failed, try again')
  $('#add-gemstone-form').trigger('reset')
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
  $('#change-password-form').hide()
  $('#add-gemstone-form').show()
  $('#sign-out-form').hide()
  $('#show-gemstone-form').show()
  $('#index-gemstone-form').show()
  $('#destroy-gemstone-form').show()
  $('#update-gemstone-form').show()
  $('#add-gemstone-form').show()
  // clear input areas
  $('#add-gemstone-form').trigger('reset')
}
const onIndexSuccess = function () {
  $('#message').text('These are all of our gemstones for sell.')
}
const onIndexFailure = function () {
  $('#message').text('Try again')
}
const onUpgradeSuccess = function (response) {
  $('#message').text('Upgraded Gemstone Successfully')
  store.user = response.user
}
const onUpgradeFailure = function (store) {
  $('#message').text('Try again')
}
const onShowSuccess = function () {
  $('#message').text('Welcome to all of our gemstones')
}
const onShowFailure = function () {
  $('#message').text('Try again')
}
const onDestroySuccess = function () {
  $('#message').text('You have successfully deleted your gemstone.')
}
const onDestroyFailure = function () {
  $('#message').text('Try again')
}

module.exports = {
  onCreateSuccess,
  onCreateFailure,
  onIndexSuccess,
  onIndexFailure,
  onUpgradeSuccess,
  onUpgradeFailure,
  onShowSuccess,
  onShowFailure,
  onDestroySuccess,
  onDestroyFailure
}
