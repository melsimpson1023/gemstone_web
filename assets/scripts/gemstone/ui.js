'use strict'

const store = require('./../store')

const onCreateSuccess = function (response) {
  $('#message').text('Thanks for adding a gemstone' + response.user)
  // create a trigger to reset the form
  $('#add-gemstone-form').trigger('reset')
  store.gemstone = response.gemstone
}
const onCreateFailure = function (store) {
  $('#message').text('Create gemstone failed, please try again')
  // $('#add-gemstone-form').trigger('reset')
}
const onIndexSuccess = function (response) {
  $('#message').text('These are all of our gemstones for sell.' + response.user)
  // $('#index-gemstone-form').trigger('reset')
  //  $('#sign-up-form').hide()
  //  $('#sign-in-form').hide()
  //  $('#change-password-form').hide()
  //  $('#add-gemstone-form').show()
  //  $('#sign-out-form').show()
  //  $('#show-gemstone-form').show()
  //  $('#index-gemstone-form').show()
  //  $('#destroy-gemstone-form').show()
  //  $('#update-gemstone-form').show()
  //  $('#add-gemstone-form').show()
  // clear input areas
}
const onIndexFailure = function () {
  $('#message').text('Try again')
  // $('#index-gemstone-form').trigger('reset')
}
const onUpgradeSuccess = function () {
  $('#message').text('Show Gemstones Successfully')
  $('#index-gemstone-form').trigger('reset')
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
  $('#destroy-gemstone-form').trigger('reset')
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
