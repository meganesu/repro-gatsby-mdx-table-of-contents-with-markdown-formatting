# Minimum repro: MDX table of contents with Markdown formatting in headings

## Problem

When MDX files use Markdown formatting in headings (like bold, italics, inline code, or links), the `tableOfContents` field on the MDX node doesn't show the correct heading `title`.

To see the issue, start the dev server and go to `localhost:8000`.

## Potential solution

I was able to get the table of contents titles to display correctly by changing `node_modules/gatsby-plugin-mdx/dist/remark-infer-toc-meta.js` ([lines 52-54](https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-plugin-mdx/src/remark-infer-toc-meta.ts#L52-L54)) to this:

```js
if (item.type === `text` || item.type === `inlineCode`) {
  if (typedCurrent.title) {
    typedCurrent.title = typedCurrent.title + item.value;
  }
  else {
    typedCurrent.title = item.value;
  }
}
```
