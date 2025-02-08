import { useState, useEffect } from "react";
import Layout from "./components/Layout";
import { Contacts } from "./components/Contact";
import { Calls } from "./components/Calls";
import { Profile } from "./components/Profile";

function App() {
  const [navChoice, setNavChoice] = useState("Calls");
  const [callState, setCallState] = useState("idle");

  useEffect(() => {
    // if (window.electron && window.electron.getPlatform) {
    //   window.electron.getPlatform().then((platform) => {
    //     if (platform !== "darwin") {
    //       window.close();
    //     }
    //   });
    // }
  }, []);

  return (
    <>
      <Layout setNavChoice={setNavChoice} navChoice={navChoice}>
        {navChoice === "Contacts" ? (
          <Contacts setCallState />
        ) : navChoice === "Calls" ? (
          <Calls />
        ) : (
          <Profile />
        )}
      </Layout>
    </>
  );
}

export default App;