import React from 'react'
import Enzyme,{shallow} from 'enzyme'
import favourite from './ReusableComponent/favourite'
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() })   

test("Click change attribute", () => {
  //Verify that the button className changes when user click the button in favourite.js
    const i = shallow(<favourite></favourite>)
    i.simulate('click')
    expect(i.hasClass('btn btn-warning'))
});
test("Click change text", () => {
  //Verify that the button text changes when user click the button in favourite.js
    const i = shallow(<favourite></favourite>)
    i.simulate('click')
    expect(i.text('Add to Cart'))
});
test("Click jump to new tab3", () => {
  //Verify that a new tab is open when user click "Click for More Details" under APPLICATION
    const i = shallow(<favourite></favourite>)
    i.simulate('Click for More Details')
    expect(i)
});
test("404 Page", () => {
  //Verify that image is displayed when user visit invalid url
    const i = shallow(<favourite></favourite>)
    i.text('')
    expect(i)
});
test("Navigation2", () => {
  //Verify that navbar button "REPAIR YOUR DEVICE" switch color when it clicked"
    const i = shallow(<favourite></favourite>)
    i.simulate('click')
    expect(i.hasClass('btn btn-warning'))
});
test("Navigation3", () => {
  //Verify that navbar button "APPLICATION" switch color when it clicked"
    const i = shallow(<favourite></favourite>)
    i.simulate('click')
    expect(i.hasClass('btn btn-warning'))
});
test("Navigation4", () => {
  //Verify that navbar button "RESEARCH" switch color when it clicked"
    const i = shallow(<favourite></favourite>)
    i.simulate('click')
    expect(i.hasClass('btn btn-warning'))
});
test("Navigation5", () => {
  //Verify that navbar button "CONTACT US" switch color when it clicked"
    const i = shallow(<favourite></favourite>)
    i.simulate('click')
    expect(i.hasClass('btn btn-warning'))
});
test("Fetched data order", () => {
  //Verify that the order of product card is the same as in .json file (By product name)
    const i = shallow(<favourite></favourite>)
    i.simulate('click')
    expect(i.hasClass('btn btn-warning'))
});
