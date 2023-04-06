import React from 'react';

interface PrimaryButtonProps {
  text: string;
  isDisabled?: boolean;
  fullSize?: boolean;
  onButtonClick?: (e?: React.MouseEvent<HTMLElement>) => void;
}

const PrimaryButton = ({
  text,
  onButtonClick,
  fullSize = false,
  isDisabled = false,
}: PrimaryButtonProps) => {
  const buttonClicked = (e?: React.MouseEvent<HTMLElement>) => {
    if (onButtonClick) {
      onButtonClick(e);
    }
  };

  const getSize = () => {
    return fullSize ? 'w-full' : 'w-button';
  };

  return (
    <button
      className={`${getSize()} h-button uppercase text-white text-sm font-bold tracking-sm bg-darkOrange hover:bg-mainOrange`}
      disabled={isDisabled}
      onClick={buttonClicked}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
