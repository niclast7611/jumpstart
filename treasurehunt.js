const treasure = (location) => {

    if (location === win) {
        document.getElementById(`treasure${win}`).innerHTML = '💰'

    } else if (location === bomb) {
        document.getElementById(`treasure${bomb}`).innerHTML = '💣'

    } else {
        document.getElementById(`treasure${location}`).innerHTML = '🌴'

    }
}


var win = Math.floor(Math.random() * 8)
var bomb = Math.floor(Math.random() * 8)
