import renderer from 'react-test-renderer'
import { Loader } from './Loader'

it('Loader is loaded', () => {

    const component = renderer.create(
        <Loader />,
    )
    expect(component.toJSON()).toMatchSnapshot()
})