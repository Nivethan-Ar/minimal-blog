import { IconType } from 'react-icons/lib';

interface Props {
  icon: IconType;
  btnLabel: 'previous' | 'next';
  titlePreview: string;
  postNumber: number;
  setPostNumber: (postNumber: number) => void;
}
function NavButton(props: Props) {
  const { btnLabel, titlePreview, postNumber, setPostNumber } = props;

  const handleClick = () => {
    console.log(postNumber);
    if (btnLabel === 'next') {
      setPostNumber(postNumber + 1);
    }
    if (btnLabel === 'previous') {
      setPostNumber(postNumber - 1);
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
