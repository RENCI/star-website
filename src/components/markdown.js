import React, { useMemo } from 'react'
import { Link } from './link'
import ReactMarkdown from 'react-markdown'
import Typography from '@mui/joy/Typography';

export const Markdown = ({ src }) => {
  const componentMap = useMemo(() => ({
    a: function Anchor({ node, href, children, ...props }) {
      return <Link to={ href } { ...props }>{ children }</Link>
    },
    p: function Anchor({ node, href, children, ...props }) {
      return <Typography level="body-lg" { ...props }>{ children }</Typography>
    },
  }), [])

  return (
    <ReactMarkdown
      children={ src }
      components={ componentMap }
    />
  )
}