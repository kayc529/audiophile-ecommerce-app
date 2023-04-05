import React from 'react';

interface PrimaryButtonProps {
  text: string;
  isDisabled?: boolean;
  onButtonClick?: (e?: React.MouseEvent<HTMLElement>) => void;
}

const PrimaryButton = ({
  text,
  onButtonClick,
  isDisabled = false,
}: PrimaryButtonProps) => {
  const buttonClicked = (e: React.MouseEvent<HTMLElement>) => {
    if (onButtonClick) {
      onButtonClick(e);
    }
  };

  return (
    <button
      className='w-button h-button uppercase text-white text-sm font-bold tracking-sm bg-darkOrange hover:bg-mainOrange'
      disabled={isDisabled}
      onClick={buttonClicked}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
