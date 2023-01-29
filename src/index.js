import React from "react"
import ReactDOM from "react-dom/client"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./sass/stylesheet.scss"
import "./index.scss"
import { App } from "./App"
import { reportWebVitals } from "./reportWebVitals"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)

reportWebVitals()