let bpm = 108
let w = bpm * 18
let h = w / 2
let q = w / 4
let e = w / 8
let sx = w / 16
let song = [
    {r: false, n: Note.G, d: q + e}, // last
    {r: false,n: Note.G, d: e}, // chri-
    {r: false,n: Note.G, d: e}, // -st
    {r: false,n: Note.F, d: q}, // -mas
    {r: false,n: Note.C, d: e},
    // second bar
    {r: false,n: Note.G, d: e}, // I
    {r: false,n: Note.G, d: e}, // gave
    {r: false,n: Note.A, d: q}, // you
    {r: false,n: Note.F, d: q + e}, // my
    {r: false,n: Note.C, d: e}, // heart
    // third bar
    {r: false,n: Note.G, d: e}, // but
    {r: false,n: Note.G, d: e}, // the 
    {r: false, n: Note.A, d: q }, // next
    {r: false, n: Note.F, d: q + e}, // day
    {r: false, n: Note.F, d: e }, // you
    // fourth
    {r: false, n: Note.E, d: e }, // gave
    {r: false, n: Note.F, d: e }, // it
    { r: false, n: Note.E, d: e }, // a
    { r: false, n: Note.D, d: e }, // way
    { r: false,n: Note.D, d:h }, // y---
    // fifth bar
    { r: false,n: Note.A, d: q+e }, // this
    { r: false,n: Note.G, d: e }, // yea
    { r: false,n: Note.G, d: q }, // r---
    { r: false,n: Note.D, d: e }, // to
    { r: false,n: Note.D, d: e}, // save
    // sixth
    { r: false, n: Note.A, d: e},
    {r: false, n: Note.Bb, d: e},
    { r: false,n: Note.A, d: e }, // me
    { r: false,n: Note.G, d: e }, // from
    { r: false,n: Note.G, d: q + e }, // tears
    { r: false, n: Note.F, d: e },
    // sevent bar
    { r: false, n: Note.F, d: e }, // ill
    { r: false, n: Note.E, d: e }, // give
    { r: false, n: Note.F, d: e }, // it
    { r: false, n: Note.E, d: e }, // to --
    { r: false, n: Note.E, d: e }, // -- some 
    { r: false, n: Note.F, d: q }, // some
    { r: false, n: Note.E, d: e }, // spec
    // eigth
    { r: false, n: Note.E, d: e }, // cial
    { r: false, n: Note.C, d: e }, // cial
    {r: false, n: Note.C, d: h},
    { r: true, n: Note.C, d: q }
]
basic.forever(function () {
    song.forEach(part => {
        if (part.r) {
            music.rest(part.d)
        } else {
            music.playTone(part.n, part.d)
        }
    })
})
