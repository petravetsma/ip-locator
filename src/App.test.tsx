import renderer from 'react-test-renderer'
import { App } from './App'

test('App rendered. Show loader on initial app load', () => {
  const component = renderer.create(
    <App />,
  )
  expect(component.toJSON()).toMatchSnapshot()
})