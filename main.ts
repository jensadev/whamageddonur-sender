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
    {r: false,n: Note.F, d: e}, // -mas
    {r: false,n: Note.F, d: e},
    {r: false,n: Note.C, d: e}, // I
    {r: false,n: Note.G, d: e}, // gave
    {r: false,n: Note.G, d: e}, // you
    {r: false,n: Note.A, d: q}, // my
    {r: false,n: Note.F, d: q + e}, // heart
    // third bar
    {r: false,n: Note.D, d: e}, // but
    {r: false,n: Note.G, d: e}, // the 
    {r: false,n: Note.G, d: e}, // very
    {r: false, n: Note.A, d: q }, // next
    {r: false, n: Note.F, d: q + e}, // day
    //{ r: true, n: Note.D, d: e }, // rest
    {r: false, n: Note.F, d: e }, // you
    {r: false, n: Note.E, d: e }, // gave
    {r: false, n: Note.F, d: e }, // it
    { r: false, n: Note.E, d: e }, // a
    { r: false, n: Note.D, d: e }, // way
    { r: false,n: Note.D, d:h+q }, // y---
    // fifth bar
   // {r: true, n: Note.D, d: q}, // rest
    { r: false,n: Note.A, d: q+e }, // this
    { r: false,n: Note.G, d: e }, // yea
    { r: false,n: Note.G, d: q }, // r---
//    { r: true, n: Note.D, d: e },
    { r: false,n: Note.D, d: e }, // to
    { r: false,n: Note.D, d: e}, // save
    { r: false, n: Note.A, d: e},
    {r: false, n: Note.D3, d: e},
    { r: false,n: Note.Bb, d: e }, // me
    { r: false,n: Note.A, d: e }, // from
    { r: false,n: Note.G, d: q + e }, // tears

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
