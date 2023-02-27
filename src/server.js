import React from 'react';  
import ReactDOMServer from 'react-dom/server'; // (1)
import express from 'express'; // (2)
import Html from './Html'; // (3)
import App from './App'; // (4)

const app = express(); // (5)

// bundle.js가 포함된 public 디렉토리를 정적 파일로 제공해 둠
app.use('/', express.static('public'));

app.get('/sample', (req, res) => {
  ReactDOMServer.renderToNodeStream( //(6)
    <Html>
      <App/>
    </Html>
  ).pipe(res);
});

app.listen(3000, () =>{
  console.log('listening on port 3000...')
})