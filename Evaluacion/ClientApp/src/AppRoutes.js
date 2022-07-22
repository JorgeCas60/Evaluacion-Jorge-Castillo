import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import Portada from './components/Portada'
import EnvioMensaje from './components/EnvioMensaje'

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },
  {
    path: '/portada',
    element: <Portada />
  },
  {
    path: '/envio-mensaje',
      element: <EnvioMensaje />
  }
];

export default AppRoutes;
