import React from "react";
import { GlobalStyle } from "./GlobalStyle";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Home />
        <h1>Test</h1>
        <h2>Test</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut
          iaculis ante. Vivamus volutpat purus leo, malesuada pulvinar leo
          placerat eu. Sed consectetur ante sit amet neque malesuada aliquam.
          Mauris sagittis rhoncus justo, et aliquet ante tincidunt ut. Phasellus
          porta sodales feugiat. Cras mattis nulla sed sem porta, nec ultrices
          odio consequat. Etiam et tellus vitae risus bibendum sollicitudin nec
          tincidunt tortor. Cras faucibus orci vel nunc laoreet, in iaculis
          lacus scelerisque. Vivamus est dolor, euismod vel leo non, consectetur
          feugiat nisi. Quisque pharetra nibh urna, a pharetra tortor auctor
          non. Cras vitae bibendum sem. Nullam malesuada orci vel sapien
          hendrerit molestie. Integer interdum dui a dolor condimentum sodales.
          Curabitur ipsum lectus, pellentesque vel est in, laoreet tincidunt
          lectus. Duis ac lectus in nibh pharetra dapibus. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Integer et tellus pretium, malesuada ligula fringilla, lobortis lacus.
          Donec gravida, justo non sagittis blandit, ligula leo posuere velit,
          maximus pharetra dolor elit sed mi. Phasellus vel dolor tristique,
          ornare orci sollicitudin, vestibulum nunc. Donec sit amet convallis
          sem, nec blandit massa. Quisque vulputate purus sed tellus ullamcorper
          consectetur. Sed auctor varius accumsan. Sed quis sem at magna auctor
          sodales. Aliquam at porta purus. Vivamus porta luctus nisi, ac
          vulputate dolor congue quis. Aliquam eu pellentesque leo. Nunc at
          facilisis sem. Vestibulum aliquam ut orci non sagittis. Suspendisse
          nulla libero, molestie vel est sed, fringilla ullamcorper diam.
          Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi
          tristique et mauris sed luctus. Sed accumsan mattis lorem, ut ultrices
          nisl aliquet placerat. Nunc sollicitudin auctor ante, ac pulvinar
          augue vestibulum in. Nullam dui dolor, tempor non vestibulum eu,
          placerat sit amet nisl. Vestibulum venenatis, massa et pretium
          egestas, augue enim placerat dolor, ut maximus turpis quam et libero.
          Phasellus efficitur sem erat, at facilisis turpis rhoncus id.
          Suspendisse potenti. Morbi efficitur, lacus non interdum sagittis, dui
          felis varius diam, ac efficitur lacus magna vitae est. Vivamus
          consequat velit at metus aliquam dictum. Aenean vitae vulputate velit.
          Quisque erat enim, vestibulum vel lacus non, malesuada luctus erat.
          Phasellus consequat tincidunt fringilla. Sed tristique velit id nibh
          accumsan venenatis. Vestibulum ex nibh, elementum et iaculis id,
          fermentum at tellus. Praesent sagittis lorem lectus, eu facilisis
          ligula ornare sed. Aenean vehicula egestas ante. Proin quam mi,
          facilisis sodales consequat eget, facilisis in metus. Aliquam a
          bibendum sapien. Sed quis tellus vel risus dignissim lobortis. Donec
          faucibus lectus a nisl condimentum sagittis. Praesent non gravida
          tortor. Integer metus justo, viverra ut mauris id, venenatis
          vestibulum sem. Vivamus nunc erat, laoreet eget felis ac, finibus
          tincidunt tellus. Vivamus feugiat augue et sapien consequat imperdiet.
          Sed nec dapibus purus. Nullam nulla lorem, lobortis ut arcu a, sodales
          varius ante. Etiam condimentum a elit nec ultricies. Praesent porta
          tincidunt neque vel ullamcorper. Sed euismod ligula sit amet orci
          volutpat rutrum sed at ligula. Maecenas non tincidunt nisl. Nam sit
          amet justo in sapien feugiat facilisis ac id diam. Pellentesque
          malesuada erat vitae purus sagittis ornare. Mauris condimentum leo sit
          amet felis varius, sed sodales neque rutrum. Proin felis neque, semper
          ut nisl vel, malesuada luctus quam. Praesent eget diam vel lacus
          lobortis finibus vitae non sapien.
        </p>
      </main>
      <GlobalStyle />
    </div>
  );
};

export default App;
