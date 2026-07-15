import { cn } from '../../utils/cn';

function SectionHeader({ title, subtitle, className, align = 'center' }) {
  return (
    <div
      className={cn(
        'mx-auto max-w-2xl',
        align === 'center' && 'text-center',
        className
      )}
    >
      <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">{title}</h2>
      {subtitle && <p className="mt-3 text-body text-slate-600">{subtitle}</p>}
    </div>
  );
}

export default SectionHeader;
