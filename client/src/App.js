import "./styles/app.scss";
import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";
import { MainDisplay } from "./components/MainDisplay";
import { QueryInterface } from "./components/MainDisplay";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <>
      <GlobalProvider>
        <Banner />
        <MainDisplay />
      </GlobalProvider>
      <Footer />
    </>
  );
}

export default App;
