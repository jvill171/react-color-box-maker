import { render } from "@testing-library/react"
import AddBoxForm from './AddBoxForm';

// Smoke test
test('renders without crashing', () => {
    render(<AddBoxForm />);
});
  
// Snapshot test
it("matches snapshot", ()=>{
    const { asFragment } = render(<AddBoxForm />);
    expect(asFragment()).toMatchSnapshot()
})