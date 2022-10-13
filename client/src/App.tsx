import styled from 'styled-components';
import Flex from './components/Flex';
import Main from './components/Main';
import Footer from './components/Footer';

const Wrapper = styled.div`
width: 100%;
min-height: 100vh;
background: #fff;
position: relative;
overflow: hidden;
`

function App() {
  return (
    <Wrapper>
      <Flex direction='column'>
        <Main />
        <Footer />
      </Flex>
    </Wrapper>
  );
}

export default App;
