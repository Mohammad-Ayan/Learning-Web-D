import "./App.css"
import Title from "./Title.jsx";
import ProductTab from "./ProductTab.jsx";
import MsgBox from "./MsgBox.jsx";
import MsgBox2 from "./MsgBox2.jsx"


function App() {
  return (
    <>
      <MsgBox userName="" textColor="purple"/>
      <MsgBox2 userName="Mohd Ayan" textColor="#C62E2E"/>
      <ProductTab />

    </>
  );
}


export default App
