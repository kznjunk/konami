module.exports = function konami (cb) {
    let startX
    let startY
    let currentIndex = 0
    const konami = [ 38, 38, 40, 40, 37, 39, 37, 39, 66, 65 ]

    if (!document || !cb) return

    start()

    return { dispatch }

    function start () {
        document.addEventListener('keyup', listenKeyboard, false)
        document.addEventListener('touchstart', listenTouchStart, false)
        document.addEventListener('touchmove', listenTouchMove, false)
        document.addEventListener('click', listenTouchClick, false)
    }

    function dispatch () {
        document.removeEventListener('keyup', listenKeyboard, false)
        document.removeEventListener('touchstart', listenTouchStart, false)
        document.removeEventListener('touchmove', listenTouchMove, false)
        document.removeEventListener('click', listenTouchClick, false)
    }

    function listenKeyboard (e) {
        const isKeyCodeValid = e.keyCode === konami[currentIndex]

        isKeyCodeValid ? currentIndex++ : currentIndex = 0

        if (currentIndex === konami.length) {
            cb()
            dispatch()
        }
    }

    function listenTouchStart (e) {
        startX = e.touches[0].clientX
        startY = e.touches[0].clientY
    }

    function listenTouchMove (e) {
        if (startX === null || startY === null) return

        let keyMove
        const currentX = e.touches[0].clientX
        const currentY = e.touches[0].clientY
        const diffX = startX - currentX
        const diffY = startY - currentY
        const isHorizontalSlide = Math.abs(diffX) > Math.abs(diffY)

        if (isHorizontalSlide) {
            keyMove = diffX > 0 ? 37 : 39
        } else {
            keyMove = diffY > 0 ? 38 : 40
        }

        const isKeyMoveValid = keyMove === konami[currentIndex]
        isKeyMoveValid ? currentIndex++ : currentIndex = 0

        startX = null
        startY = null

        e.preventDefault()
    }

    function listenTouchClick () {
        const isKeyCodeValid = currentIndex >= (konami.length - 2)

        if (isKeyCodeValid) {
            currentIndex++

            if (currentIndex === konami.length) {
                cb()
                stop()
            }
        } else {
            currentIndex = 0
        }
    }
}
