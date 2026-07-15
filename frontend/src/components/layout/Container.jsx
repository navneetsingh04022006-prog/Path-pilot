import { cn } from '../../utils/cn';

function Container({ className, children, as: Component = 'div', ...props }) {
  return (
    <Component
      className={cn('mx-auto w-full max-w-content px-4 sm:px-6 lg:px-8', className)}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Container;
