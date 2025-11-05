import React from 'react';

interface SectionProps {
  id?: string;
  title: string;
  children: React.ReactNode;
}

export const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ id, title, children }, ref) => {
    return (
      <section ref={ref} id={id} className="py-16 sm:py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter">
              {title}
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mt-4"></div>
          </div>
          {children}
        </div>
      </section>
    );
  }
);