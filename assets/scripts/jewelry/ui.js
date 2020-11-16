'use strict'

const store = require('./../store')

const onCreateSuccess = function (response) {
  $('#messages').text('Thanks for adding a jewelry ' + response.jewelry.name + ' ' + response.jewelry.price + ' ' + response.jewelry._id)
  // create a trigger to reset the form
  $('#add-jewelry-form').trigger('reset')
  store.jewelry = response.jewelry
}
const onCreateFailure = function (store) {
  $('#messages').text('Create jewelry failed, please try again')
}
const onIndexSuccess = function (response) {
  $('#messages').text('These are all of our jewelry for sell ' + response.jewelrys.map(jewelry => {
    return jewelry.name + ' ' + jewelry.price + ' ' + jewelry._id
  }).join(', ')
  )
  store.jewelry = response.jewelrys
}
const onIndexFailure = function () {
  $('#messages').text('Try again')
}
const onUpgradeSuccess = function () {
  console.log('Upgrade Successful')
  $('#messages').text('Jewelry Upgraded Successfully')
  $('#update-jewelry-form').trigger('reset')
}
const onUpgradeFailure = function (store) {
  $('#messages').text('Try again')
}
const onShowSuccess = function (response) {
  // console.log('Show Successful')
  console.log(response)
  $('#messages').text('These are all of our jewelry for sell ' + response.jewelrys.filter(jewelry => jewelry.owner === store.user._id).map(jewelry => {
    return jewelry.name + ' ' + jewelry.price + ' ' + jewelry._id
  }).join(', ')
  )
  // $('#show-jewelry-form').trigger('reset')
}
const onShowFailure = function () {
  $('#messages').text('Try again')
}
const onDestroySuccess = function () {
  console.log('Deleted Successfully')
  $('#messages').text('You have successfully deleted your jewelry.')
  $('#destroy-jewelry-form').trigger('reset')
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
