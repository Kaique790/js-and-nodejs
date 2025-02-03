const gulp = require('gulp');
const { series } = gulp;

function antes1 (cb) {
    console.log('Task de antes1...')

    return cb()
}
function antes2 (cb) {
    console.log('Task de antes2...')

    return cb()
}
function copiar (cb) {
    console.log('Task de copiar...')

    return cb()
}
function fim (cb) {
    console.log('fim...')

    return cb()
}

module.exports.default = series(
    antes1,
    antes2,
    copiar,
    fim,
)