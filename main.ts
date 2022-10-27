let x = 0
let y = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        led.plot(x, 0)
        basic.pause(200)
        basic.clearScreen()
        x += 1
        if (x > 4) {
            x = 0
        }
    }
})
basic.forever(function () {
	
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        led.plot(x - 1, y)
        basic.pause(200)
        basic.clearScreen()
        y += 1
        if (y > 4) {
            y = 0
        }
    }
})
