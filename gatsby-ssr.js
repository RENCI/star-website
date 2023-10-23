import React from "react"
import { Layout } from "./src/components/layout"
import { CssVarsProvider } from '@mui/joy/styles';
import theme from './src/styles/theme'

export const wrapPageElement = ({ element, props }) => {
  return (
    <CssVarsProvider theme={theme}>
      <Layout {...props}>{element}</Layout>
    </CssVarsProvider>
  )
}