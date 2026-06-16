import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold transition-colors',
  {
    variants: {
      variant: {
        primary: 'bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20',
        secondary:
          'bg-secondary/10 text-secondary border border-secondary/20 hover:bg-secondary/20',
        success: 'bg-green-500/10 text-green-400 border border-green-500/20 hover:bg-green-500/20',
        warning: 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 hover:bg-yellow-500/20',
        danger: 'bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/20',
        outline: 'border-2 border-border text-foreground hover:border-primary/50',
        subtle: 'bg-muted text-muted-foreground hover:bg-muted/80',
      },
      size: {
        sm: 'px-2 py-0.5 text-xs',
        default: 'px-3 py-1 text-xs',
        lg: 'px-4 py-1.5 text-sm',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, size, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(badgeVariants({ variant, size, className }))}
      {...props}
    />
  )
);
Badge.displayName = 'Badge';

export { Badge, badgeVariants };
