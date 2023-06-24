import renderer from 'react-test-renderer'
import { Button } from './Button'
import { vi } from 'vitest';

describe('Test button component', () => {

    it('Button rendered with SVG', () => {

        const component = renderer.create(
            <Button onClick={() => null} />,
        )
        expect(component.toJSON()).toMatchSnapshot()
    })

    it('When button clicked, handler invoked', () => {

        const clickHandler = vi.fn();

        const button = renderer.create(
            <Button onClick={clickHandler} />,
        )
        button.root.findByType('button').props.onClick();

        expect(clickHandler).toHaveBeenCalledTimes(1);
    })
})