import GlobalStyle from './styled/global'

import Header from './Page/Header';
import MainPage from './Page/MainPage';
import Footer from './Page/Footer';

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
