This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Theme/Styling used is [CHAKRA-UI](https://chakra-ui.com/getting-started "CHAKRA-UI")
## Getting Started

Running dev server:

```bash
# use nvm to ensure correct node version
nvm use
# install dependencies
yarn
# start local dev
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# File Structure
```shell
├── src/
│   ├── components/
│   │   ├── util/    (reusable utiliy components)
│   │   │   ├── Container.js    (sample)
│
│   │   ├── blocks/    (for creating main section components)
│   │   │   ├── Hero.js    (sample)
│
├── public/
│   ├── images/
│   │   ├── hero    (sample)
│   │   │   ├── image-filename.jpg
│
├── pages/ (You can check the sections structure in index.js but no need to touch)
├── utils/ (common reusable functions. you can check but no need to touch)
├── theme/ (theme styles.  you can check but no need to touch)
```

###### FINAL NOTE:
- Ideally you will only need to update the main section components in the folder **src/components/blocks/**
- As an example how a section component should look like, have a look at **src/components/blocks/SampleSection.js**
- A 12 grid guideline is added so that we can make a pixel perfect copy of the design.

# Code conventions for components
- Always have clean spacing and tab for JSX/HTML.
- Always code mobile first.
- Use theme defaults for **colors/breakpoints/font-family** (can be found in src/theme/index.js).
- For **any styles related to font**, add underneath the component code as an object called texts, and then deconstruct it later. see below for a sample.
- Other styling can then be added as a component prop or you can use the sx prop. [see Chakra ui docs for that](https://chakra-ui.com/docs/styled-system/the-sx-prop "see Chakra ui docs for that").
- **ALWAYS use src/components/util/Img.js** when adding an image to the dom. see below for an example of usage.

See a sample below for deconstruction of font styles, responsive styling, component prop styling and/or utilising the sx prop.

```javascript
export default function Sample() {

  return (
    <Text
      as='h2'
      {...texts.heading}
      mb={{base: '20px', d: '60px'}}
      sx={{
        p: '30px',
        '@media(min-width: 1720px)' : {
         p: '35px',
        }
      }}
    >
      Sample heading here
    </Text>
  )
}

// font styles
const texts = {
  heading: {
    color: 'primary',
    fontFamily: 'heading',
    fontWeight: 'medium',
    fontSize: {base: '18px', sm: '21px', d: '40px'},
    lineHeight: {base: '28px', d: '50px'},
  },
}
```

## Reusable utility components explained
- **src/components/util/Container.js**:  for adding a quick max-width centered element that is using the theme defaults for max width for containers.
- **src/components/util/Figure.js**:  easy creation of `<figure>` element
- **src/components/util/Img.js**:  always use this for adding `<img>` element. **MUST:** add dimension string prop '{width}x{height}'. example: `<Img dimension='250x300' src='./images/section/name.jpg' />`
- **src/components/util/PreLine.js**:  for easy creation of text with a white-space setting of pre-line.