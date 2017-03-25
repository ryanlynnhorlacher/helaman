
var likes = document.getElementById('likes')
var num = 0

var increaseLikes = document.getElementById('increaseLikes')
var decreaseLikes = document.getElementById('decreaseLikes')

increaseLikes.addEventListener('click', increase)

decreaseLikes.addEventListener('click', decrease)

function increase() {
	console.log('happending')
	num += 1
	likes.innerHTML = num
}

function decrease() {
	num -= 1
	likes.innerHTML = num
}