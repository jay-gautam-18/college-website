import Loader from "./Components/Loader"
import Mainroutes from "./routes/Mainroutes"
import { useEffect, useState } from 'react';
const App = () => {
 

  return (
    <div className="bg-[#f9f7f1] syne-text">
      {/* <Loader  /> */}
      <Mainroutes/>
    </div>
    // <div>{msg}</div>
  )
}

export default App