import './App.css';
import Category from './components/Category';
import Pages from './pages/Pages';
import Search from './components/Search';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import styled from 'styled-components';
import { GiKnifeFork } from 'react-icons/gi';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav>
          <GiKnifeFork />
          <Logo to={'/'}>delicious</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </Router>
    </div>
  );
}

const Logo = styled(Link)`
text-decoration: none;
font-size: 1.5rem;
font-weight: 400;
font-family: 'Lobster Two', cursive;
`
const Nav = styled.div`
padding: 1rem 0rem;
justify-content: flex-start;
align-items: center;
svg{
  font-size: 1.5rem;
}
`

export default App;
