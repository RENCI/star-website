# STAR

## Content Management

For every React component in `src/components/sections` there is a corresponding YAML content file in `src/content` with the data that component will receive as props.

### Content as YAML

Content is managed by pages, which provide metadata (like page title and path) and which sections to stack onto the page.

#### Pages

Pages live in the `src/pages` directory and look something like the following.

```yaml
# src/pages/some-page.yaml
title: Some Page
path: /some-page
hero:
  backgroundImagePath: https://picsum.photos/1200/300
  title: Welcome to Some Page!
  blurb: >
    The quick brown fox jumps over the lazy dog.
sections:
  - AboutSTAR
  - Testimonials
  - ProjectShowcase
```

#### Sections

Each of those sections listed references a section, whose content is named the same, but in kebab case. For example, the content for the `ProjectShowcase` section lives in `src/content/project-showcase.yaml`.

