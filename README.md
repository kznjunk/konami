# konami code

This should work in this way:
```js
const konami = require('@kznjunk/konami')(showSecret)

if (konami) konami.start()

function showSecret () {
  console.log('yay!')
}
```

You can cancel if needed:
```js
konami.stop()
```

With the keyboard:

`↑ ↑ ↓ ↓ ← → ← → B A`

With touch screens:

`↑ ↑ ↓ ↓ ← → ← → *click* *click*`
