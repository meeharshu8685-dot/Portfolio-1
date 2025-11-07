
import React from 'react';
import { ArrowDownIcon } from './Icons';

interface SectionProps {
  id?: string;
  title: string;
  children: React.ReactNode;
  isCollapsible?: boolean;
  isOpen?: boolean;
  onTitleClick?: () => void;
}

export const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ id, title, children, isCollapsible = false, isOpen = false, onTitleClick }, ref) => {
    return (
      <section ref={ref} id={id} className="py-16 sm:py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div
            className="text-center mb-12"
            onClick={isCollapsible ? onTitleClick : undefined}
            style={{ cursor: isCollapsible ? 'pointer' : 'default' }}
            role={isCollapsible ? 'button' : undefined}
            aria-expanded={isCollapsible ? isOpen : undefined}
            tabIndex={isCollapsible ? 0 : -1}
            onKeyDown={isCollapsible ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onTitleClick?.(); } } : undefined}
          >
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter inline-flex items-center justify-center select-none">
              {title}
              {isCollapsible && (
                <ArrowDownIcon className={`w-6 h-6 ml-3 transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
              )}
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mt-4"></div>
          </div>
          
          {(!isCollapsible) ? (
            children
          ) : (
            <div className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
              <div className="overflow-hidden">
                {children}
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }
);
