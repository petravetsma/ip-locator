import { Input } from './Input'
import { render, screen } from '@testing-library/react'

describe('Test input component', () => {

    it('Input with provided input rendered', async () => {

        const inputValue = 'inputValue';

        render(
            <Input value={inputValue} onChange={() => null} />
        )

        expect(screen.getByDisplayValue(inputValue)).toBeInTheDocument();
    })

    it('Input with provided placeholder rendered', () => {

        const inputValue = 'inputValue';
        const placeholder = 'placeholder'

        render(
            <Input value={inputValue} onChange={() => null} placeholder={placeholder} />
        )

        expect(screen.getByPlaceholderText(placeholder)).toHaveValue(inputValue);
    })
})