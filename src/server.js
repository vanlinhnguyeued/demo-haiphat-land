import App from "./App";
import React from "react";
import { StaticRouter } from "react-router-dom";
import express from "express";
import { renderToString } from "react-dom/server";
import serialize from "serialize-javascript";
import { Provider } from "react-redux";
import qs from "qs";
import configureStore from "./configureStore";
import { fetchCounter } from "./api";
const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);
const publicFolder =
  process.env.NODE_ENV === "production"
    ? path.join(__dirname, "../build/public")
    : "public";

const server = express();
server
  .disable("x-powered-by")
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .use(express.static(publicFolder))
  .get("/*", (req, res) => {
    fetchCounter((apiResult) => {
      // Read the counter from the request, if provided
      const params = qs.parse(req.query);
      const counter = parseInt(params.counter, 10) || apiResult || 0;

      const context = {};
      const store = configureStore();
      const markup = renderToString(
        <StaticRouter context={context} location={req.url}>
          <Provider store={store}>
            <App />
          </Provider>
        </StaticRouter>
      );
      const finalState = store.getState();
      if (context.url) {
        res.redirect(context.url);
      } else {
        res.status(200).send(
          `<!doctype html>
          <html lang="">
          <head>
              <meta http-equiv="X-UA-Compatible" content="IE=edge" />
              <meta charset="utf-8" />
              <title>Khát vọng - Chân thành - Sáng tạo</title>
              <meta name="viewport" content="width=device-width, initial-scale=1">
              <link href="https://fonts.googleapis.com/css?family=Inconsolata:400,700|Open+Sans:400,400i,600,700" rel="stylesheet">
              <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
              <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/weather-icons/2.0.9/css/weather-icons.min.css">
              <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/weather-icons/2.0.9/css/weather-icons-wind.min.css">
              <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
              <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet">
              <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
              <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
              <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
              <link href="/css/styles.css" rel="stylesheet">
              <link href="/css/App.css" rel="stylesheet">
              ${
                assets.client.css
                  ? `<link rel="stylesheet" href="${assets.client.css}">`
                  : ""
              }
              ${
                process.env.NODE_ENV === "production"
                  ? `<script src="${assets.client.js}" defer></script>`
                  : `<script src="${assets.client.js}" defer crossorigin></script>`
              }
          </head>
          <body>
              <div id="root">${markup}</div>
              <!--Start of Tawk.to Script-->
              <script type="text/javascript">
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/5eeb0d114a7c6258179ad717/default';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
              })();
              </script>
              <!--End of Tawk.to Script-->
              <div class="zalo-chat-widget" data-oaid="3351030087761930427" data-welcome-message="Rất vui khi được hỗ trợ bạn!" data-autopopup="1000" data-width="350" data-height="420"></div>
              <script>
                window.__PRELOADED_STATE__ = ${serialize(finalState)}
              </script>
              <script src="https://sp.zalo.me/plugins/sdk.js"></script>
              <script type="text/javascript" src="/js/imagesloaded.pkgd.min.js"></script>
              <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
          </body>
        </html>`
        );
      }
    });
  });

export default server;
