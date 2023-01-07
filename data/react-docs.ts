export const data: Data = [
  {
    section: 'getting started',
    title: 'installation',
    body: [
      {
        subHeading: 'React is a UI library & not a framework',
        paragraphs: [
          {
            __html:
              'react docs starting with a clarification that what react is doing is breaking ui code into pieces called components and not routing and data management which is done by a framework for example nextjs',
            code: 'code sample here',
          },
        ],
      },
      {
        subHeading:
          'New docs still recommends Create React App(CRA) for learning',
        paragraphs: [
          {
            __html:
              'They mentions the limitations of CRA, like providing a bad performance, slower loading time, slower builds. i&apos;m sure why you need CRA even for learning on 2023 instead of a tool like vite but fortunatily the new docs also mentions alternatives like vite and parcel',
          },
        ],
      },
      {
        subHeading: 'Next.js is recommended for Production Use',
        paragraphs: [
          {
            __html:
              'For a product ready app the docs suggest Next.js as a way to go. Other recommendations are Remix, Gatsby & Razzle',
          },
        ],
      },
      {
        subHeading: 'VS Code gets more focus as a recommended code editor',
        paragraphs: [
          {
            __html:
              'I think there is no big suprises here, personally i also use VS Code to pretty much everything and only other editor i love to master is Neovim(which is missing in this list) and it&apos;s totally fine if you use any of their recommended editors like Webstorm, Sublime Text or Vim, just pick your favorite weapon and be very good at it.',
          },
        ],
      },
      {
        subHeading: 'ESLint as the default choice for linter',
        paragraphs: [
          {
            __html:
              'Code linters highlight problems in your code during development. ESLint is the only thing mentioned on the docs for linting',
          },
        ],
      },
      {
        subHeading: 'Use Prettier for code formatting instead of ESLint',
        paragraphs: [
          {
            __html:
              'The opinionated nature of Prettier helps us remove the conversations like "use semicolon at the end or not" or as mentioned in the docs "using tabs vs spaces" and ESLint configurations often feels overwhelming. They also recommends to turn on the "format on save" option on VS Code or in your favorite editor',
          },
        ],
      },
      {
        subHeading: 'React Developer Tools for both React & React Native',
        paragraphs: [
          {
            __html:
              'In order to debug a React App you can install the React Developer Tools browser extension which is available on Chrome, Firebox & Edge. if you use any chromium based browsers like Brave or Vivaldi it will also work fine. for debug on Safari you need to install react-devtools npm package globally',
          },
        ],
      },
    ],
  },
];

type Data = {
  section: string;
  title: string;
  body: {
    subHeading: string;
    paragraphs: { __html: string; code?: string }[];
  }[];
}[];