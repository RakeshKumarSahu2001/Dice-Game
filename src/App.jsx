import { useState } from "react";
import Home from "./Components/Home.jsx"
import Start from "./Components/Start.jsx";

function App(){
    const [change,setChange]=useState("false")
    const changePage=()=>{
    setChange((pre)=>!pre)
      }

    return (<>
    {
        change?<Home changePage={changePage} />:<Start changePage={changePage} />
    }

    </>)
}
export default App;