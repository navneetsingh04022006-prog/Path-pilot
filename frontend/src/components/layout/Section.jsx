import { cn } from '../../utils/cn';

function Section({ id, className, children, variant = 'default' }) {
  const backgrounds = {
    default: 'bg-surface',
    muted: 'bg-surface-muted',
    primary: 'bg-primary-light',
  };

  return (
    <section id={id} className={cn('py-16 sm:py-20', backgrounds[variant], className)}>
      {children}
    </section>
  );
}

export default Section;
