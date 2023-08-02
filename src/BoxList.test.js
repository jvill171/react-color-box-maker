import { render, fireEvent } from "@testing-library/react"
import BoxList from './BoxList';
import Box from "./Box";

const addBox = (boxList, height="4", width="4", bgColor='#FF0000') =>{
    const inBG = boxList.getByLabelText("Color");
    const inWidth = boxList.getByLabelText("Width");
    const inHeight = boxList.getByLabelText("Height");

    fireEvent.change(inBG, { target: { value: bgColor } });
    fireEvent.change(inWidth, { target: { value: width } });
    fireEvent.change(inHeight, { target: { value: height } });
    const btnSubmit = boxList.getByText("Submit");
    fireEvent.click(btnSubmit);
}

// Smoke test
test('renders without crashing', () => {
  render(<BoxList />);
});

// Snapshot test
it("matches snapshot", ()=>{
    const { asFragment } = render(
    <BoxList/>);
    expect(asFragment()).toMatchSnapshot()
})

it("can add a new box", ()=>{
    const boxList = render(<BoxList/>)

    //No boxes exist yet
    expect(boxList.queryByText("X")).not.toBeInTheDocument();
    
    // Add Box
    addBox(boxList)
    
    // Verify box exists
    const rmBtn = boxList.getByText("X");
    expect(rmBtn).toBeInTheDocument();
    expect(rmBtn.parentElement).toHaveStyle(`
        width: 4em;
        height: 4em;
        background-color: #FF0000;
    `);

    // Expect form to be set to default values
    expect(boxList.getByLabelText("Color").value).toEqual("#ffffff")
    expect(boxList.getByLabelText("Width").value).toEqual("2")
    expect(boxList.getByLabelText("Height").value).toEqual("2")
})

it("can remove a box", ()=>{
    const boxList = render(<BoxList/>);
    // Add box
    addBox(boxList);

    // Remove box
    const rmBtn = boxList.getByText("X");
    fireEvent.click(rmBtn);

    expect(rmBtn).not.toBeInTheDocument();

})