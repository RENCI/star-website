import React from "react"
import { Layout } from "./src/components/layout"
import { CssVarsProvider } from '@mui/joy/styles';
import theme from './src/styles/theme'
import { PositionsProvider } from './src/components/positions'

export const wrapPageElement = ({ element, props }) => {
  return (
    <CssVarsProvider theme={theme}>
      <PositionsProvider>
        <Layout {...props}>{element}</Layout>
      </PositionsProvider>
    </CssVarsProvider>
  )
}