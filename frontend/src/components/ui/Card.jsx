import { cn } from '../../utils/cn';

function Card({ className, children, ...props }) {
  return (
    <div
      className={cn(
        'rounded-card border border-border bg-surface p-6 shadow-card transition-shadow hover:shadow-card-hover',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function CardHeader({ className, children, ...props }) {
  return (
    <div className={cn('mb-4 flex flex-col gap-1', className)} {...props}>
      {children}
    </div>
  );
}

function CardTitle({ className, children, ...props }) {
  return (
    <h3 className={cn('text-heading text-slate-900', className)} {...props}>
      {children}
    </h3>
  );
}

function CardDescription({ className, children, ...props }) {
  return (
    <p className={cn('text-caption text-slate-500', className)} {...props}>
      {children}
    </p>
  );
}

function CardContent({ className, children, ...props }) {
  return (
    <div className={cn('text-body text-slate-600', className)} {...props}>
      {children}
    </div>
  );
}

function CardFooter({ className, children, ...props }) {
  return (
    <div className={cn('mt-4 flex items-center gap-3', className)} {...props}>
      {children}
    </div>
  );
}

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
