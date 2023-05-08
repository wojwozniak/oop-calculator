import '../index.css';
import Calculator from './Calculator';

const Main: React.FunctionComponent = () => {
  return (
    <div id="app">
      <p id="brand">Vadowitz</p>
      <p id="brand-text">Electronic Calculator</p>
      <Calculator />
    </div>
  );
}

export default Main;