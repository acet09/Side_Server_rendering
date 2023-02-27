import React from 'react';

const Html = (props) => {
  return (
    <html>
      <head>
        <meat charSet="UTF-8" />
        <title>Server Side Rendering</title>
      </head>
      <body>
        <div id='root'>{props.children}</div>
        <script type='text/javascript' src='bundle.js'></script>
      </body>
    </html>
  );
};

export default Html