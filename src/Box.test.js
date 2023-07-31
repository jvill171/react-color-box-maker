import { render } from "@testing-library/react"
import Box from './Box';

// Smoke test
test('renders without crashing', () => {
  render(<Box />);
});

  
// Snapshot test
it("matches snapshot", ()=>{
    const { asFragment } = render(
        <Box/>
    );
    expect(asFragment()).toMatchSnapshot()
})