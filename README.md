# konami code

This should work in this way:
```js
const konami = require('@kznjunk/konami')(showSecret)

function showSecret () {
  console.log('yay!')
}
```

You can cancel if needed:
```js
if (konami) konami.dispatch()
```

Combinations are:

`↑ ↑ ↓ ↓ ← → ← → B A`

or

`↑ ↑ ↓ ↓ ← → ← → *screen click* *screen click*`
