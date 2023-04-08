import React, { useEffect } from 'react';
import { useWindowSize } from '../../hooks/useWindowSize';
import { SCREENSIZE } from '../../utils/constants';

interface Props {
  show?: boolean;
  hideLg?: boolean;
  hideMd?: boolean;
  hideSm?: boolean;
  children?: JSX.Element;
  onClose?: () => void;
}

export default function ModalContainer({
  show = false,
  hideLg = false,
  hideMd = false,
  hideSm = false,
  onClose,
  children,
}: Props) {
  const [width] = useWindowSize();

  useEffect(() => {
    if (show) {
      if (width < SCREENSIZE.MD) {
        hideMainBodyScrollbar();
      } else if (width >= SCREENSIZE.MD) {
        showMainBodyScrollbar();
        if (width > 967 && onClose) {
          onClose();
        }
      }
    } else {
      showMainBodyScrollbar();
    }
  }, [width, show, onClose]);

  const getVisibility = () => {
    let visibility = '';
    visibility += hideSm ? '' : 'fixed ';
    visibility += hideMd ? 'md:hidden ' : 'md:fixed ';
    visibility += hideLg ? 'lg:hidden ' : 'lg:fixed ';
    return visibility;
  };

  const hideMainBodyScrollbar = () => {
    let scrollBarWidth = window.innerWidth - document.body.offsetWidth;
    document.body.style.marginRight = `${scrollBarWidth}px`;
    document.body.style.overflow = 'hidden';
  };

  const showMainBodyScrollbar = () => {
    let scrollBarWidth = window.innerWidth - document.body.offsetWidth;
    document.body.style.marginRight = `-${scrollBarWidth}px`;
    document.body.style.overflow = 'auto';
  };

  const shadedClicked = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e.currentTarget.id);

    //   if (onShadeClick) {
    //     onShadeClick();
    //   }
  };

  return show ? (
    <aside
      id='modalContainer'
      className={`${getVisibility()} z-modalBg w-screen h-screen bg-modalShade`}
    >
      {/* Container to enable scrolling when the height of the dialog is greater than the window height*/}
      <div className='z-modalBg fixed w-full h-full overflow-y-auto'>
        {/* Container of the dialog so it is above the shade and the modal */}
        <div id='dialog' className='z-modalDialog w-full h-max flex flex-col'>
          {/* Children must be place inside a div so that the height of its
          contents will not be affected by the shade */}
          {children}
        </div>
      </div>
    </aside>
  ) : (
    <></>
  );
}
