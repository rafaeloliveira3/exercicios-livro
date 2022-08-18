'use strict'

const sectionAShow = function () {
    hide()
    const sectionShow = document.getElementById('exA')
    sectionShow.classList.add('show')
}
const sectionBShow = function () {
    hide()
    const sectionTest = document.getElementById('exB')
    sectionTest.classList.add('show')
}
const sectionCShow = function () {
    hide()
    const sectionShow = document.getElementById('exC')
    sectionShow.classList.add('show')
}
const sectionFShow = function () {
    hide()
    const sectionShow = document.getElementById('exF')
    sectionShow.classList.add('show')
}
const sectionJShow = function () {
    hide()
    const sectionShow = document.getElementById('exJ')
    sectionShow.classList.add('show')
}
const sectionNShow = function () {
    hide()
    const sectionShow = document.getElementById('exN')
    sectionShow.classList.add('show')
}

function hide (){
    Array.from(document.querySelectorAll('section')).forEach((section) => section.classList.remove('show'));
}
document.getElementById('exA-exiber').addEventListener('click', sectionAShow)
document.getElementById('exB-exiber').addEventListener('click', sectionBShow)
document.getElementById('exC-exiber').addEventListener('click', sectionCShow)
document.getElementById('exF-exiber').addEventListener('click', sectionFShow)
document.getElementById('exJ-exiber').addEventListener('click', sectionJShow)
document.getElementById('exN-exiber').addEventListener('click', sectionNShow)