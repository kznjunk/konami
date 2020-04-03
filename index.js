module.exports = function konami (cb) {
    let currentIndex = 0
    const konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

    document.addEventListener('keyup', listenKonami, false)

    function listenKonami(e) {
        const keyCode = e.keyCode
        const isKeyCodeValid = keyCode === konami[currentIndex]

        isKeyCodeValid ? currentIndex++ : currentIndex = 0

        if (currentIndex === konami.length) {
            cb()
            document.removeEventListener('keyup', listenKonami, false)
        }
    }
}
