import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import AppComponent from './app';
import template from './template';
import request from 'request';

const server = express();

server.use('/assets', express.static('assets'));

server.get('/getCompoenets', (req, response) => {
  const isMobile = false;
  let initialState = { isMobile };
  //MAke api call and pass it as props

  request.get('http://google.com', function (err, res, body) {
      if (err) console.log(err)
      initialState = {
          isMobile,
          externalSite: res.statusCode
      };
      console.log(res)
      const appString = renderToString(<AppComponent {...initialState} />);
      response.send(template({
          body: appString,
          title: 'Hello World from the server',
          initialState: JSON.stringify(initialState)
      }));
  });

});

server.listen(8080);
console.log('listening');
