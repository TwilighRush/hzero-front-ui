import React from "react";

import Layout from "./layouts/DefaultLayout";
import Page from "./pages";

const App: React.FC = () => {
  return (
    <Layout>
      <Page />
    </Layout>
  );
};

export default App;
