import GlobalStyle from './styled/global'

import Header from './Layout/Header';
import MainPage from './Layout/MainPage';
import Footer from './Layout/Footer';

function App() {
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <MainPage/>
      <Footer />
    </>
  );
}

export default App;
