import * as React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/header"
import Footer from "./components/footer"

const App = () => {
  return (
    <React.StrictMode>
      <Header />
      <main>Olá mundo!</main>
      <Footer />
    </React.StrictMode>
  );
};

createRoot(document.getElementById("root") as Element).render(<App />);
