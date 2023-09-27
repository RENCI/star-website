# STAR

## Content Management

For every React component in `src/components/sections` there is a corresponding YAML content file in `src/content` with the data that component will receive as props.

### Content as YAML

Content is managed by pages, which provide metadata (like page title and path) and which sections to stack onto the page.

#### Theme

The site-wide config or theme content lives in `src/content/theme/index.yaml`, and the following confirugations are available.

| Field           | Type    | Required? | Usage                       |
|-----------------|---------|-----------|-----------------------------|
| **metadata**    | obj     |    ✅     |                             |
| - title         | string  |    ✅     | window title & seo title    |
| - description   | string  |    ✅     | seo description             |
| - site_url      | string  |    ❌     |                             |
|||||
| **navigation**  | [link]  |    ✅     | main menu items to render   |
|||||
| link            | obj     |           |                             |
| - label         | string  |    ✅     | menu link text label        |
| - path          | string  |    ✅     | path to link to             |
|||||
| **footer**      | obj     |           |                             |
| - copyright     | string  |    ✅     | text after copyright notice |

##### Example Theme

```yaml
metadata:
  title: STAR
  description: RENCI'S STAR Programs
  site_url: https://star.renci.org/
navigation:
  - label: Students
    path: /students
  - label: Staff
    path: /staff
  - label: Positions
    path: /positions
footer:
  copyright: RENCI
```

#### Pages

Pages live as YAML files in the `src/pages` directory and have the following fields available.

| Field                       | Type   | Required? | Usage                                |
|-----------------------------|--------|-----------|--------------------------------------|
| **title**                   | string |    ✅     | window title & seo title             |
| **path**                    | string |    ✅     | route to access page                 |
| **description**             | string |    ❌     | seo description                      |
|||||
| **hero**                    | obj    |    ❌     | decorative section at top of page    |
| - background_image_path     | string |    ✅     | - image for hero background          |
| - title                     | string |    ✅     | - large main hero text               |
| - blurb                     | string |    ✅     | - medium hero subtitle               |

##### Example Page

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

#### Sections

Each of the sections appearing in a page's `sections` array must reference a YAML file of the same name in `src/content/sections`. For example, the content for the `project-showcase` section lives in `src/content/sections/project-showcase.yaml`.

Unlike pages, each section file (`src/content/sections/*.yaml`) has its own unique set of fields available. For now, we'll have to dig into the code to see what's available.

