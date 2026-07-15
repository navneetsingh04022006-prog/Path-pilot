import { cn } from '../../utils/cn';

const variants = {
  default: 'bg-secondary text-secondary-foreground',
  success: 'bg-success-light text-emerald-800',
  warning: 'bg-warning-light text-amber-800',
  error: 'bg-error-light text-red-800',
  accent: 'bg-accent-light text-teal-800',
};

function Badge({ className, variant = 'default', children, ...props }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-caption font-medium',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

export default Badge;
