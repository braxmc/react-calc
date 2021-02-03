import './App.css';
import { CalcWrapper, Row, CalcButton, AppWrap } from './styles/AppElements'

import Button from './componenets/Button';

const App = () => {
  return (
    <AppWrap>
      <CalcWrapper>
        <Row>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>/</Button>
        </Row>
      </CalcWrapper>
    </AppWrap>
  );
}

export default App;
