import React from 'react';
import { cn } from '@/lib/utils';

const CardSection = ({ className = '', children, ...props }) => (
  <div
    className={cn(
      'rounded-sm p-8 flex flex-col shadow-lg',
      className
    )}
    style={{
      background: 'linear-gradient(135deg, rgba(53,168,161,0.2) 0%, rgba(26,36,44,0.95) 100%)',
      ...props.style
    }}
    {...props}
  >
    {children}
  </div>
);

export default CardSection; 