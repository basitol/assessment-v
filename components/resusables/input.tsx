// components/ui/input.tsx
import React, {forwardRef} from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <input
      ref={ref}
      {...props}
      className={`border px-4 py-2 rounded-md ${props.className}`}
    />
  );
});

Input.displayName = 'Input';

export {Input};
