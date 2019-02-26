import * as React from 'react'
import { render } from 'react-dom'
import { hello } from './hello'

const w = 'World'
console.log('%c' + hello(w), 'color:red;')

render(
  <div className='hello-world'>Hello World</div>,
  document.getElementById('app')
)
