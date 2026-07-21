import { cn } from '../../utils/cn';

function Label({ className, children, htmlFor, required = false, ...props }) {
  return (
    <label
      htmlFor={htmlFor}
      className={cn('mb-1.5 block text-caption font-medium text-slate-700 dark:text-slate-300', className)}
      {...props}
    >
      {children}
      {required && (
        <span className="ml-0.5 text-error" aria-hidden="true">
          *
        </span>
      )}
    </label>
  );
}

export default Label;
