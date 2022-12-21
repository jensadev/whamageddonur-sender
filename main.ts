radio.setGroup(666)

input.onButtonPressed(Button.A, function () {
    basic.pause(1000)
    radio.sendValue("start", 0)
    basic.pause(1000)
    intro.forEach(part => {
        if (part.r) {
            music.rest(part.d)
        } else {
            music.playTone(part.n, part.d)
        }
    })
    refr.forEach(part => {
        if (part.r) {
            music.rest(part.d)
        } else {
            music.playTone(part.n, part.d)
        }
    })
})

// radio.sendNumber(0)
radio.onReceivedValue(function(name: string, value: number) {
    
})

let bpm = 106
let w = bpm * 18
let h = w / 2
let q = w / 4
let e = w / 8
let sx = w / 16
// music.setTempo(106)

music.setVolume(200)

let intro = [
{ r: false, n: Note.C, d: w },
// second
    { r: false, n: Note.C, d: h },
{ r: false, n: Note.C, d: e },
{ r: false, n: Note.D, d: e },
{ r: false, n: Note.E, d: e },
{ r: false, n: Note.F, d: e },
// third
    { r: false, n: Note.G, d: q },
{ r: false, n: Note.F, d: e },
{ r: false, n: Note.D, d: e },
{ r: false, n: Note.D, d: h },
// fourth
    { r: false, n: Note.D, d: h },
{ r: false, n: Note.C, d: e },
{ r: false, n: Note.A, d: e },
{ r: false, n: Note.F, d: e },
{ r: false, n: Note.D, d: e },
// fifth
    { r: false, n: Note.E, d: w },
// sixth
    { r: false, n: Note.E, d: h },
{ r: false, n: Note.D, d: e },
{ r: false, n: Note.Bb, d: e },
{ r: false, n: Note.G, d: e },
{ r: false, n: Note.E, d: e },
// seventh
    { r: false, n: Note.C, d: w },
// eigth
    { r: false, n: Note.C, d: w }
]
let refr = [
{ r: false, n: Note.G, d: q + e },
{ r: false, n: Note.G, d: e },
{ r: false, n: Note.G, d: e },
{ r: false, n: Note.F, d: q },
{ r: false, n: Note.C, d: e },
// second bar
    { r: false, n: Note.G, d: e },
{ r: false, n: Note.G, d: e },
{ r: false, n: Note.A, d: q },
{ r: false, n: Note.F, d: q + e },
{ r: false, n: Note.C, d: e },
// third bar
    { r: false, n: Note.G, d: e },
{ r: false, n: Note.G, d: e },
{ r: false, n: Note.A, d: q },
{ r: false, n: Note.F, d: q + e },
// fourth
    { r: false, n: Note.E, d: e },
{ r: false, n: Note.F, d: e },
{ r: false, n: Note.E, d: e },
{ r: false, n: Note.D, d: e },
{ r: false, n: Note.D, d: h },
// fifth bar
    { r: false, n: Note.A, d: q + e },
{ r: false, n: Note.G, d: e },
{ r: false, n: Note.G, d: q },
{ r: false, n: Note.D, d: e },
{ r: false, n: Note.D, d: e },
// sixth
    { r: false, n: Note.A, d: e },
{ r: false, n: Note.Bb, d: e },
{ r: false, n: Note.A, d: e },
{ r: false, n: Note.G, d: e },
{ r: false, n: Note.G, d: q + e },
{ r: false, n: Note.F, d: e },
// sevent bar
    { r: false, n: Note.F, d: e },
{ r: false, n: Note.E, d: e },
{ r: false, n: Note.F, d: e },
{ r: false, n: Note.E, d: e },
{ r: false, n: Note.E, d: e },
{ r: false, n: Note.F, d: q },
{ r: false, n: Note.E, d: e },
// eigth
    { r: false, n: Note.E, d: e },
{ r: false, n: Note.C, d: e },
{ r: false, n: Note.C, d: h },
{ r: true, n: Note.C, d: q }
]


basic.forever(function () {
    led.setBrightness(62)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . # # # .
        `)
    led.setBrightness(119)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # # # .
        # # # # #
        `)
    led.setBrightness(165)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        # # # # #
        # # # # #
        `)
    led.setBrightness(206)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        # # # # #
        # # # # #
        `)
    led.setBrightness(255)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        # # # # #
        # # # # #
        `)
    led.setBrightness(204)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        # # # # #
        # # # # #
        `)
    led.setBrightness(169)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        # # # # #
        # # # # #
        `)
    led.setBrightness(105)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . # # # .
        `)
    led.setBrightness(49)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # # # .
        # # # # #
        `)
})

