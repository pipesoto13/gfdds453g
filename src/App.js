import React, { Component } from 'react';
import {
  Switch,
  Route,
  Redirect,
  Link,
  Router
} from 'react-router-dom';

export class App extends Component {
  render() {
    return (
        <div>
          <nav>
            <Link to='/page1'>Page 1</Link>
            <Link to='/page2'>Page 2</Link>
          </nav>
            <Switch>
              <Route exact path="/">
                <Redirect to="/page1" />
              </Route>
              <Route path='/page1' component={Page1} />
              <Route path='/page2' component={Page2} />
              <Route path='*' component={NotFound} />
            </Switch>
        </div>
    );
  }
}

// No tienes que hacer nada por debajo de esta linea
//==================================================


export const Page1 = (props) => {
  return (
    <h1>Pagina 1</h1>
  )
}

export const Page2 = (props) => {
  return (
    <h1>Pagina 2</h1>
  )
}

export const NotFound = (props) => {
  return (
    <h1>Pagina no encontrada</h1>
  )
}

/* 
Nuestra solucion es la siguiente:

En el archivo index.js envolvemos el App en el componente Router de react-router:

<Router>
  <App />
</Router>
Modificamos App.js para que quede de la siguiente manera:

export class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to='/page1'>Page 1</Link>
          <Link to='/page2'>Page 2</Link>
        </nav>

        <Switch>
          <Redirect exact from="/" to="/page1" />
          <Route path="/page1" component={Page1} />
          <Route path="/page2" component={Page2} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    )
  }
}
Primero utilizamos el componente Link de React Router para crear los vínculos a las rutas.

Luego, utilizamos los componentes Switch, Redirect y Route para definir qué componente que se va a renderizar según la ruta en la que se encuentre.

Switch se utiliza para que renderice sólo una ruta a la vez. Si se omite, y la ruta es /page1, se mostraría el componente Page1 y, debajo, NotFound.

Redirect se utiliza para que cuando ingresen a la raíz (/) redireccione a /page1.
 */