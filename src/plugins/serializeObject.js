/**
 * @module plugins/serializeObject
 * @description Serialize object Jquery form extention,
 * have nothing to export just attaching itself to jquery
 */

import {each} from 'lodash'
import $ from 'jquery'

$.fn.serializeObject = function () {
  var sdata = $(this).serializeArray()
  var data = {}

  each(sdata, function (el) {
    data[el.name] = el.value
  })

  return data
}
