import "./App.css";
import { Switch, Route } from "react-router-dom";
import FirstPage from "./pages/First-Page/first-page.component";
import AddScore from "./pages/Add-Scor/add-score.component";
import SecondPage from "./pages/See-Score/see-score.component";
import Header from "./components/Header/header.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={FirstPage} />
        <Route exact path="/add-score" component={AddScore} />
        <Route exact path="/score" component={SecondPage} />
      </Switch>
    </div>
  );
}
//bolneal cu sunt gata sa joc ad dispara posibilitatea de a mai adauga jucatori si sa apara ceva pe
//statistics si pagina de adaugat obiecte daca nu sa apara sa apese butonul de joc
export default App;
