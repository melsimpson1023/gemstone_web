'use strict'

const config = require('./../config')
const store = require('../store')

// create a new jewelry
const createJewelry = function (data) {
  // console.log('This is data ', data)
  return $.ajax({
    url: config.apiUrl + '/jewelry',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'POST',
    data: data
  })
}
// update the jewelry
const updateJewelry = function (data) {
  // console.log('data is ', data)
  return $.ajax({
    url: config.apiUrl + '/jewelry/' + data.jewelry.id,
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
    url: config.apiUrl + '/jewelry',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'GET'
  })
}
// show the user only their gemstones
const showJewelry = function (data) {
  // console.log('This is data ', data)
  return $.ajax({
    url: config.apiUrl + '/jewelry/' + data.jewelry.id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'GET',
    data: data
  })
}
// delete the gemstone
const destroyJewelry = function (data) {
  // console.log('This is data ', data)
  return $.ajax({
    url: config.apiUrl + '/jewelry/' + data.jewelry.id,
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
