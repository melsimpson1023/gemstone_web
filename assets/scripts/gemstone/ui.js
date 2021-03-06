'use strict'

const store = require('./../store')

const onCreateSuccess = function (response) {
  $('#messages').text('Thanks for adding a gemstone ' + response.gemstone.name + ' ' + response.gemstone.price + ' ' + response.gemstone._id)
  // create a trigger to reset the form
  $('#add-gemstone-form').trigger('reset')
  store.gemstone = response.gemstone
}
const onCreateFailure = function (store) {
  $('#messages').text('Create gemstone failed, please try again')
}
const onIndexSuccess = function (response) {
  $('#messages').text('These are all of our gemstones for sell ' + response.gemstones.map(gemstone => {
    return gemstone.name + ' ' + gemstone.price + ' ' + gemstone._id
  }).join(', ')
  )
  store.gemstone = response.gemstones
}
const onIndexFailure = function () {
  $('#messages').text('Try again')
}
const onUpgradeSuccess = function () {
  console.log('Upgrade Successful')
  $('#messages').text('Gemstone Upgraded Successfully')
  $('#update-gemstone-form').trigger('reset')
}
const onUpgradeFailure = function (store) {
  $('#messages').text('Try again')
}
const onShowSuccess = function (response) {
  // console.log('Show Successful')
  console.log(response)
  $('#messages').text('These are all of our gemstones for sell ' + response.gemstones.filter(gemstone => gemstone.owner === store.user._id).map(jewelry => {
    return jewelry.name + ' ' + jewelry.price + ' ' + jewelry._id
  }).join(', ')
  )
}
const onShowFailure = function () {
  $('#messages').text('Try again')
}
const onDestroySuccess = function () {
  console.log('Deleted Successfully')
  $('#messages').text('You have successfully deleted your gemstone.')
  $('#destroy-gemstone-form').trigger('reset')
}
const onDestroyFailure = function () {
  $('#messages').text('Try again')
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
