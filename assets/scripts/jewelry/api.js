'use strict'

const config = require('./../config')
const store = require('../store')

// create a new jewelry
const createJewelry = function (data) {
<<<<<<< HEAD
  // console.log('This is data ', data)
  return $.ajax({
    url: config.apiUrl + '/jewelry',
=======
  console.log('This is data ', data)
  return $.ajax({
    url: config.apiUrl + '/jewelrys',
>>>>>>> develop
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'POST',
    data: data
  })
}
// update the jewelry
const updateJewelry = function (data) {
<<<<<<< HEAD
  // console.log('data is ', data)
  return $.ajax({
    url: config.apiUrl + '/jewelry/' + data.jewelry.id,
=======
  console.log('data is ', data)
  return $.ajax({
    url: config.apiUrl + '/jewelrys/' + data.jewelry.id,
>>>>>>> develop
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'PATCH',
    data: data
  })
}
const indexJewelry = function () {
  // console.log('This is data ', data)
  return $.ajax({
<<<<<<< HEAD
    url: config.apiUrl + '/jewelry',
=======
    url: config.apiUrl + '/jewelrys',
>>>>>>> develop
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'GET'
  })
}
<<<<<<< HEAD
// show the user only their gemstones
const showJewelry = function (data) {
  // console.log('This is data ', data)
  return $.ajax({
    url: config.apiUrl + '/jewelry/' + data.jewelry.id,
=======
// show the user only their jewelry
const showJewelry = function (data) {
  console.log('This is data ', data)
  return $.ajax({
    url: config.apiUrl + '/jewelrys/' + data.jewelry.id,
>>>>>>> develop
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'GET',
    data: data
  })
}
<<<<<<< HEAD
// delete the gemstone
const destroyJewelry = function (data) {
  // console.log('This is data ', data)
  return $.ajax({
    url: config.apiUrl + '/jewelry/' + data.jewelry.id,
=======
// delete the jewelry
const destroyJewelry = function (data) {
  // console.log('This is data ', data)
  return $.ajax({
    url: config.apiUrl + '/jewelrys/' + data.jewelry.id,
>>>>>>> develop
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'DELETE'
  })
}

module.exports = {
  createJewelry,
  updateJewelry,
  indexJewelry,
  showJewelry,
  destroyJewelry
}
