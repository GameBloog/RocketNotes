import React from "react"
import ReactDOM from "react-dom/client"
import GlobalStyle from "./styles/global.js"
import { ThemeProvider } from "styled-components"

import { AuthProvider } from "./hooks/auth"

import theme from "./styles/theme.js"
import { Routes } from "./routes"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)
