import 'normalize.css';
import './App.css'
import { Header } from './components/Header/header'
import { ThemeProvider } from '@emotion/react';
import { Theme } from './themes/Theme';
import { HeroSection } from './components/HeroSection';


function App() {

  return (
    <>
      <ThemeProvider theme={Theme}>
        <Header />
        <HeroSection />
      </ThemeProvider>
    </>
  )
}

export default App
