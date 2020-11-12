'use strict'

const store = require('./../store')

const onCreateSuccess = function (response) {
  $('#message').text('Thanks for adding a gemstone ' + response.gemstone.name + ' ' + response.gemstone.price + ' ' + response.gemstone._id)
  // $('#message').text('This is the price ' + response.gemstone.price)
  // $('#message').text('This is the id of the gemstone ' + response.gemstone._id)
  // create a trigger to reset the form
  $('#add-gemstone-form').trigger('reset')
  store.gemstone = response.gemstone
}
const onCreateFailure = function (store) {
  $('#message').text('Create gemstone failed, please try again')
  // $('#add-gemstone-form').trigger('reset')
}
const onIndexSuccess = function (response) {
  $('#message').text('These are all of our gemstones for sell ' + response.gemstones.map(gemstone => {
    return gemstone.name + ' ' + gemstone.price + ' ' + gemstone._id
  }).join(', ')
  )
  store.gemstone = response.gemstones
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
  console.log('Upgrade Successful')
  $('#message').text('Gemstones Upgraded Successfully')
  $('#update-gemstone-form').trigger('reset')
}
const onUpgradeFailure = function (store) {
  $('#message').text('Try again')
}
const onShowSuccess = function (response) {
  console.log('Show Successful')
  console.log(response)
  // store.gemstone = response.gemstone
  $('#message').text('These are all of our gemstones for sell ' + response.gemstones.filter(gemstone => gemstone.owner === store.user._id).map(gemstone => {
    return gemstone.name + ' ' + gemstone.price + ' ' + gemstone._id
  }).join(', ')
  )
  // $('#response').text(`${response.gemstone.name}`)
  // $('#response').text(`${response.gemstone.name}`)
  // $('#response').text(`$
  //  $('#response').text(`${response.gemstone.name + ' ' + response.gemstone.price + ' ' + response.gemstone._id}`)
  // $('#message').text('Here is your gemstone ' + response.gemstone.name + ' ' + response.gemstone.price + ' ' + response.gemstone._id)
  $('#show-gemstone-form').trigger('reset')
}
const onShowFailure = function () {
  $('#message').text('Try again')
}
const onDestroySuccess = function () {
  console.log('Deleted Successfully')
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
