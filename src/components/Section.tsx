/**
 * Section.tsx
 * Styled section component with neobrutalism design.
 */

'use client';

// Node Modules
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

// Lib
import { cn } from 'lib/utils';

const sectionVariants = cva(
  'border-4 border-border bg-white shadow-shadow-lg',
  {
    variants: {
      size: {
        default: 'mb-12 p-8',
        sm: 'mb-8 p-6',
        lg: 'mb-16 p-10',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
);

const sectionTitleVariants = cva('font-black', {
  variants: {
    size: {
      default: 'mb-4 text-3xl',
      sm: 'mb-3 text-2xl',
      lg: 'mb-6 text-4xl',
      xl: 'mb-2 text-5xl tracking-tight sm:text-6xl',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

type SectionProps = React.ComponentProps<'section'> &
  VariantProps<typeof sectionVariants> & {
    asChild?: boolean;
  };

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'section';
    return (
      <Comp
        className={cn(sectionVariants({ size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Section.displayName = 'Section';

type SectionTitleProps = React.ComponentProps<'h2'> &
  VariantProps<typeof sectionTitleVariants> & {
    asChild?: boolean;
  };

export const SectionTitle = React.forwardRef<
  HTMLHeadingElement,
  SectionTitleProps
>(({ className, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'h2';
  return (
    <Comp
      className={cn(sectionTitleVariants({ size, className }))}
      ref={ref}
      {...props}
    />
  );
});
SectionTitle.displayName = 'SectionTitle';

export { sectionVariants, sectionTitleVariants };
