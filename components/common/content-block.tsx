import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  subHeading: string;
}

function ContentBlock(props: Props) {
  const { children, subHeading } = props;

  return (
    <div className='relative'>
      <h3 className={`text-xl mb-2 font-lex`}>{subHeading}</h3>

      <div className='flex flex-col gap-y-4'>
        <div className='flex flex-col gap-y-2'>{children}</div>
      </div>
    </div>
  );
}
export default ContentBlock;
