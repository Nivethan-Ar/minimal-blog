export type Data = {
  section: string;
  title: string;
  body: {
    subHeading: string;
    paragraphs: { __html: string; code?: string }[];
  }[];
};
