function test(bandName,albumName,songName) {
    let time = (bandName.length*albumName.length)*songName.length/2;
    let rtations=Math.ceil(time/2.5)
    console.log(`The plate was rotated ${rtations} times`)
} test('Rammstein', 'Sehnsucht',

'Engel')
