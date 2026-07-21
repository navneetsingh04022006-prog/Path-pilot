import { cn } from '../../utils/cn';

function Card({ className, children, ...props }) {
  return (
    <div
      className={cn(
        'rounded-card border border-border dark:border-slate-800 bg-surface dark:bg-slate-900 p-6 shadow-card transition-all hover:shadow-card-hover',
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
    <h3 className={cn('text-heading text-slate-900 dark:text-slate-100', className)} {...props}>
      {children}
    </h3>
  );
}

function CardDescription({ className, children, ...props }) {
  return (
    <p className={cn('text-caption text-slate-500 dark:text-slate-400', className)} {...props}>
      {children}
    </p>
  );
}

function CardContent({ className, children, ...props }) {
  return (
    <div className={cn('text-body text-slate-600 dark:text-slate-300', className)} {...props}>
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
