import { useState } from 'react';
import './App.css';
import { CatsByBreed, CatsByCategory, CatsByExtension, Favorites, RandomCats } from './cats/pages';
import { CatProvider } from './cats/context/CatContext';
import Layout from './shared/components/Layout';
import { Nav } from './cats/components';

function App() {
  const [view, setView] = useState("");
  const [title, setTitle] = useState("API Cat Gallery");

  return (
    <>
      <CatProvider>
        <Layout title={title}>
          <Nav view={view} setView={setView} setTitle={setTitle} />

          {view === "random" && <RandomCats />}
          {view === "breed" && <CatsByBreed />}
          {view === "category" && <CatsByCategory />}
          {view === "extension" && <CatsByExtension />}
          {view === "favorites" && <Favorites />}
        </Layout>
      </CatProvider>
    </>
  )
}

export default App
