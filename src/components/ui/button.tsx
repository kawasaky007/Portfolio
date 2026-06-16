/* Base Button Component with Design System Variants */

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        // Solid Variants
        default:
          'bg-primary text-primary-foreground hover:bg-primary/90 active:scale-95 shadow-md',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/90 active:scale-95 shadow-md',
        outline:
          'border-2 border-primary text-primary hover:bg-primary/5 active:bg-primary/10',
        ghost: 'hover:bg-primary/10 text-primary active:bg-primary/20',
        // Subtle Variants
        subtle: 'bg-primary/10 text-primary hover:bg-primary/20 active:bg-primary/30',
        'subtle-secondary':
          'bg-secondary/10 text-secondary hover:bg-secondary/20 active:bg-secondary/30',
        // Link Variant
        link: 'text-primary underline-offset-4 hover:underline h-auto p-0',
        // Destructive
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90 active:scale-95',
        // Glass Morphism
        glass:
          'bg-white/10 backdrop-blur-md border border-white/20 text-foreground hover:bg-white/20 active:bg-white/30',
      },
      size: {
        xs: 'h-8 px-3 text-xs',
        sm: 'h-9 px-3 text-sm',
        default: 'h-10 px-4',
        lg: 'h-11 px-6 text-base',
        xl: 'h-12 px-8 text-base',
        icon: 'h-10 w-10',
        'icon-sm': 'h-8 w-8',
        'icon-lg': 'h-12 w-12',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      fullWidth: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, ...props }, ref) => (
    <button
      className={cn(buttonVariants({ variant, size, fullWidth, className }))}
      ref={ref}
      {...props}
    />
  )
);
Button.displayName = 'Button';

export { Button, buttonVariants };
