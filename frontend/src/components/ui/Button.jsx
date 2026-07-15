import { Loader2 } from 'lucide-react';
import { cn } from '../../utils/cn';

const variants = {
  primary:
    'bg-primary text-primary-foreground hover:bg-primary-hover focus-visible:ring-primary',
  secondary:
    'bg-secondary text-secondary-foreground hover:bg-secondary-hover focus-visible:ring-slate-400',
  danger:
    'bg-error text-error-foreground hover:bg-red-600 focus-visible:ring-error',
  ghost:
    'bg-transparent text-slate-700 hover:bg-slate-100 focus-visible:ring-slate-400',
};

const sizes = {
  sm: 'h-8 px-3 text-caption',
  md: 'h-10 px-4 text-body',
  lg: 'h-12 px-6 text-subheading',
};

function Button({
  children,
  className,
  variant = 'primary',
  size = 'md',
  type = 'button',
  disabled = false,
  loading = false,
  ...props
}) {
  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      disabled={isDisabled}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-button font-medium transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        'disabled:pointer-events-none disabled:opacity-50',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {loading && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
      {children}
    </button>
  );
}

export default Button;
