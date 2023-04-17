import NavBar from "./components/nav.component";
import "./assets/home.css"
import Email from "./components/email.component";
import MessageBox from "./components/box.component";

function App() {
  return (
    <div className="maindiv">
    <NavBar />
    <Email/>
    <hr />
    <MessageBox/>
    </div>
  );
}

export default App;
