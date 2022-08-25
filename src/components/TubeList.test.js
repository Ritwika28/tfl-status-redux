import { render as rtlRender, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store/store';
import TubeList from './TubeList';

const render = component => rtlRender(
  <Provider store={store}>
  <TubeList/>
</Provider>
)

describe("TubeList Component", ()=> {
    it("should render when api responds", async ()=>{
        render(<TubeList/>);
        await waitFor(()=>{
            screen.getByText("Bakerloo");
        })
    })
})