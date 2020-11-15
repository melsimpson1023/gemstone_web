'use strict'

const store = require('./../store')

const onCreateSuccess = function (response) {
  $('#message').text('Thanks for adding a jewelry ' + response.jewelry.name + ' ' + response.jewelry.price + ' ' + response.jewelry._id)
  // create a trigger to reset the form
  $('#add-jewelry-form').trigger('reset')
  store.jewelry = response.jewelry
}
const onCreateFailure = function (store) {
  $('#message').text('Create jewelry failed, please try again')
}
const onIndexSuccess = function (response) {
  $('#message').text('These are all of our jewelry for sell ' + response.jewelrys.map(jewelry => {
    return jewelry.name + ' ' + jewelry.price + ' ' + jewelry._id
  }).join(', ')
  )
  store.jewelry = response.jewelrys
}
const onIndexFailure = function () {
  $('#message').text('Try again')
}
const onUpgradeSuccess = function () {
  console.log('Upgrade Successful')
  $('#message').text('Jewelry Upgraded Successfully')
  $('#update-jewelry-form').trigger('reset')
}
const onUpgradeFailure = function (store) {
  $('#message').text('Try again')
}
const onShowSuccess = function (response) {
  // console.log('Show Successful')
  console.log(response)
  $('#message').text('These are all of our jewelry for sell ' + response.jewelrys.filter(jewelry => jewelry.owner === store.user._id).map(jewelry => {
    return jewelry.name + ' ' + jewelry.price + ' ' + jewelry._id
  }).join(', ')
  )
  // $('#show-jewelry-form').trigger('reset')
}
const onShowFailure = function () {
  $('#message').text('Try again')
}
const onDestroySuccess = function () {
  console.log('Deleted Successfully')
  $('#message').text('You have successfully deleted your jewelry.')
  $('#destroy-jewelry-form').trigger('reset')
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
