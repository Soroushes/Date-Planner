import * as React from 'react';
import {Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import View from "./pages/view";
import ShowPlan from "./containers/ShowPlan";
const App : React.FC = ()=>{
    return(
        <Routes>
            <Route path={'/'} element={<Main/>} />
            <Route path={'/new'} element={<Main/>} />
            <Route path={'/edit/:id'} element={<ShowPlan/>} />
            <Route path={'/view/:id'} element={<View/>} />
        </Routes>
    )
}
export default App ;