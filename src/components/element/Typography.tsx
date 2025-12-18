import React from 'react';

type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'sh1'
  | 'sh2'
  | 'sh3'
  | 'body'
  | 'body-small'
  | 'button'
  | 'button-small'
  | 'button-xsmall'
  | 'caption'
  | 'caption-small'
  | 'caption-xsmall'
  | 'overline'
  | 'overline-small'
  | 'overline-xsmall';

interface TypographyProps {
  variant: TypographyVariant;
  children: React.ReactNode;
  className?: string;
}

const Typography: React.FC<TypographyProps> = ({ variant, children, className = '' }) => {
  const styles: Record<TypographyVariant, string> = {
    h1: 'text-[56px] leading-[84px] font-bold',
    h2: 'text-[48px] leading-[72px] font-semibold',
    h3: 'text-[40px] leading-[60px] font-semibold',
    h4: 'text-[32px] leading-[48px] font-semibold',
    h5: 'text-[24px] leading-[36px] font-semibold',
    h6: 'text-[20px] leading-[30px] font-semibold',
    sh1: 'text-[24px] font-normal',
    sh2: 'text-base font-semibold',
    sh3: 'text-sm font-semibold',
    body: 'text-[16px] leading-[24px] font-normal',
    'body-small': 'text-sm font-normal',
    button: 'text-base font-bold',
    'button-small': 'text-sm font-bold',
    'button-xsmall': 'text-xs font-bold',
    caption: 'text-xs font-normal',
    'caption-small': 'text-[10px] leading-[14px] font-normal',
    'caption-xsmall': 'text-[8px] leading-[12px] font-normal',
    overline: 'text-xs font-semibold',
    'overline-small': 'text-[10px] leading-[14px] font-semibold',
    'overline-xsmall': 'text-[8px] leading-[12px] font-semibold',
  };

  return <div className={`${styles[variant]} ${className}`}>{children}</div>;
};

export default Typography;
