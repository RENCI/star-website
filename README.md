# STAR

## Content Management

For every React component in `src/components/sections` there is a corresponding YAML content file in `src/content` with the data that component will receive as props.

### Content as YAML

Content is managed by pages, which provide metadata (like page title and path) and which sections to stack onto the page.

#### Theme

The site-wide content lives in `src/content/theme/index.yaml`. For now, we'll have to dig into the code to see what's available.

#### Pages

Pages live in the `src/pages` directory and look something like the following.

```yaml
# src/pages/some-page.yaml
title: Some Page
path: /path/to/some-page
description: Incididunt laborum culpa tempor sunt nostrud laborum qui id officia.
hero:
  backgroundImagePath: "../images/some-page-hero.jpg"
  title: Welcome to Some Page!
  blurb: >
    Lorem ipsum tempor pariatur amet anim excepteur veniam sit enim sit nisi culpa proident excepteur eiusmod aliqua ut. Lorem ipsum proident sed esse sit adipisicing sit tempor incididunt deserunt id magna ut ut in labore et est.
sections:
  - section-name-1
  - section-name-2
  - section-name-3
```

The following fields are available for `src/pages/*.yaml` files: todo.

#### Sections

Each of the sections listed references a section's YAML file of the same name. For example, the content for the `project-showcase` section lives in `src/content/sections/project-showcase.yaml`.

Unlike pages, each section file (`src/content/sections/*.yaml`) has its own unique set of fields available. For now, we'll have to dig into the code to see what's available.

