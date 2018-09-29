import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './app';
import template from './template';
import request from 'request';

const server = express();

server.use('/assets', express.static('assets'));

server.get('/goo', (req, response) => {
  const isMobile = false;
  let initialState = { isMobile };
  //MAke api call and pass it as props

  request.get('http://google.com', function (err, res, body) {
      if (err) console.log(err)
      initialState = {
          isMobile,
          externalSite: body
      };
      console.log(res)
      const appString = renderToString(<App {...initialState} />);
      response.send(template({
          body: appString,
          title: 'Hello World from the server',
          initialState: JSON.stringify(initialState)
      }));
  });


});

server.listen(8080);
console.log('listening');
