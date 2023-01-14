import { useRouter } from 'next/router';
import { userAgent } from 'next/server';
import { IconType } from 'react-icons/lib';
import { reactBlogData as data } from '../../../data/react-docs';


interface Props {
  icon: IconType;
  btnLabel: 'previous' | 'next';
  titlePreview: string;
  postNumber: number;
  setPostNumber: (postNumber: number) => void;
}
function NavButton(props: Props) {
  const { btnLabel, titlePreview, postNumber, setPostNumber } = props;
  const router = useRouter();

  const handleClick = () => {
    console.log(postNumber);
    if (btnLabel === 'next') {
      // setPostNumber(postNumber + 1);
      router.push(data[postNumber+1].link)
    }
    if (btnLabel === 'previous') {
      // setPostNumber(postNumber - 1);
      router.push(data[postNumber-1].link)
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`flex uppercase flex-col gap-y-1 flex-1 hover:border-b-2 border-red-600 pb-2 h-16
      ${btnLabel === 'next' ? 'items-end' : ''}`}
    >
      <div
        className={`flex items-center gap-x-1
        ${btnLabel === 'next' ? 'flex-row-reverse' : ''}`}
      >
        <props.icon className='text-xl' />
        <p className='text-sm tracking-widest'>{btnLabel}</p>
      </div>
      <h6 className='text-xl'>{titlePreview}</h6>
    </button>
  );
}

export default NavButton;
