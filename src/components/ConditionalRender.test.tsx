import { ConditionalRender } from './ConditionalRender'
import { render, screen } from '@testing-library/react'

describe('Test conditional render', () => {

    const childrenText = 'Children';
    const alternativeText = 'Alternative';

    const component = (innerText: string) => <>{innerText}</>;

    it('When condition is true render children component', async () => {

        const condition = true;

        render(
            <ConditionalRender condition={condition} alternative={component(alternativeText)}>
                {component(childrenText)}
            </ConditionalRender>,
        )

        expect(screen.getByText(childrenText))
    })

    it('When condition is false render alternative component', () => {

        const condition = false;

        render(
            <ConditionalRender condition={condition} alternative={component(alternativeText)}>
                {component(childrenText)}
            </ConditionalRender>,
        )

        expect(screen.getByText(alternativeText))
    })
})