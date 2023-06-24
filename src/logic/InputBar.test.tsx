import renderer from 'react-test-renderer'
import { InputBar } from './InputBar'
import { render, screen } from '@testing-library/react'

test('Input bar have title IP Locator', () => {

  const title = 'IP Locator';

  render(
    <InputBar handleClick={() => null} />,
  )

  expect(screen.getByText(title)).toBeInTheDocument()
})