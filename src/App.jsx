import { Routes, Route } from "react-router-dom";
import PublicLayout from "./layout/PublicLayout";
import LandingPage from "./pages/landingpage";

function App(){
  return(
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<LandingPage/> } />
      </Route>
    </Routes>
  )
}
export default App