import ReactDOM from 'react-dom/client';
import App from './App';
import { createGlobalStyle } from 'styled-components';
import { setupStore } from './store';
import { Provider } from 'react-redux';
import './index.css';

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Apercu Arabic Pro';
}
`

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = setupStore();

root.render(
  <>
    <Provider store={store}>
      <Global />
      <App />
    </Provider>
  </>
);