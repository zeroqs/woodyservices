import './scss/App.scss';
import Header from "./components/Header/Header";
import Routers from "./components/Header/Route/Routers";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";


function App({state}) {
  return (
    <div className="App">
      <div className="preview" id="preview">
        <Header Counter={state.HeaderInfo.Counter} textHeader={state.HeaderInfo}/>
      </div>
      <ScrollToTop />
      <Routers Team={state.Team}
               CareInfo={state.CareInfo}
               CardInfo={state.CardInfo}
               RepairInfo={state.RepairInfo}
               HeaderText={state.HeaderInfo}
               Review={state.Review}
               ProtectCards = {state.ProtectCards}
               Brands = {state.Brands}
               RepairCustom = {state.RepairCustom}
               Models = {state.Models}
      />
    </div>
  );
}

export default App;
