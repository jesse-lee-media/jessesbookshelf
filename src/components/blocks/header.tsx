import type { ComponentProps } from 'react';

import { PayloadImage } from '@/components/ui/payload-image';
import type { PayloadHeaderBlock } from '@/payload/payload-types';
import { cn } from '@/utils/cn';

interface HeaderProps extends ComponentProps<'header'> {
  block: PayloadHeaderBlock;
}

export const HeaderBlock = ({ className, block: { heading, image }, ...props }: HeaderProps) => (
  <header className={cn('flex flex-col items-center gap-8 text-center', className)} {...props}>
    {typeof image === 'string' ? null : (
      <PayloadImage
        {...image}
        className="h-48 w-48 rounded border-3 border-violet-400 shadow-lg shadow-violet-300/50"
      />
    )}
    <h1 className="text-3xl font-bold xs:text-4xl">{heading}</h1>
  </header>
);
