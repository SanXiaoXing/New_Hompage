import React from 'react';
import { DotPattern } from '@/components/magicui/dot-pattern';

function LayoutBase({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen">
      <DotPattern/>
      {children}
    </div>
  );
}

export default LayoutBase;