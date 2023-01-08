import { BiChevronsLeft, BiChevronsRight } from 'react-icons/bi';
import NavButton from './nav-button';
import { reactBlogData as data } from '../../../data/react-docs';

interface Props {
  postNumber: number;
  setPostNumber: (postNumber: number) => void;
}

function BlogNavigation(props: Props) {
  const { postNumber, setPostNumber } = props;
  let previousTitle =
    data[postNumber - 1] === undefined ? '' : data[postNumber + 1].title;

  let nextTitle =
    data[postNumber + 1] === undefined ? '' : data[postNumber + 1].title;

  return (
    <div className='flex gap-x-16 uppercase border-t-4 font-lex border-[#424242] pt-12 mt-6'>
      {/* Previous */}
      {previousTitle && (
        <NavButton
          titlePreview={previousTitle}
          btnLabel='previous'
          icon={BiChevronsLeft}
          postNumber={postNumber}
          setPostNumber={setPostNumber}
        />
      )}

      {/* Next */}
      {nextTitle && (
        <NavButton
          titlePreview={nextTitle}
          btnLabel='next'
          icon={BiChevronsRight}
          postNumber={postNumber}
          setPostNumber={setPostNumber}
        />
      )}
    </div>
  );
}

export default BlogNavigation;
