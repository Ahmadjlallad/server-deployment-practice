"use strict"
module.exports = function (req, _, next) {
    req.timeStamp = new Date()
    next()
}