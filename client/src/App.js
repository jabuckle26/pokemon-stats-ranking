import "./styles/app.scss";
import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";
import { Descriptor } from "./components/Descriptor";
import { QueryInterface } from "./components/QueryInterface";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <>
      <GlobalProvider>
        <Banner />
        <body>
          <Descriptor />
          <QueryInterface />
        </body>
      </GlobalProvider>
      <Footer />
    </>
  );
}

export default App;
