let etages = ""
etages = prompt("Let's create a pyramide, tell me how many floors do you want?")
let tile = "#"

while (etages !=0) {
	console.log(`${tile}`)
	tile += "#"
	etages -=1
}
