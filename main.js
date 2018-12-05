// answer 1
var avgPrice = items.reduce(function (itemA, itemB) {
	return itemA + itemB.price
}, 0) / items.length

document.querySelector("#answer1").innerHTML = `The average price is ${avgPrice.toFixed(2)}.`

// answer 2
var priceRange = items.filter(function(item) {
	if (item.price >= 14.00 && item.price <= 18.00 && item.currency_code === "USD") {
		return true
	} else {
		return false
	}
})

var priceArr = priceRange.map(function(item) {
	return item.title
}).join(`\n`)

document.querySelector("#answer2").innerHTML = priceArr

// answer 3
var gbpName = ''
var gbpPrice = 0

items.forEach(function(item) {
	if (item.currency_code === "GBP") {
		gbpName = item.title
		gbpPrice = item.price
	}
})

document.querySelector("#answer3").innerHTML = `${gbpName} costs \u00A3${gbpPrice}.`

// answer 4
var bigWoodArr = items.filter(function(item) {
	if (item.materials.indexOf("wood") !== -1) {
		return true
	} else {
		return false
	}
})

var woodysRoundup = bigWoodArr.map(function(item) {
	return item.title
}).join(` is made of wood.\n`)

document.querySelector("#answer4").innerHTML = woodysRoundup