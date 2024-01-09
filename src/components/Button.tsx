import clsx from 'clsx';
import React from 'react';
import { MouseEvent } from 'react';

type ButtonProps = {
    children: React.ReactNode;
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
    className?: string;
};

export const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    className,
}) => {
    return (
        <button
            className={clsx(
                'rounded-lg',
                'px-4',
                'py-2',
                'bg-black',
                'text-white',
                className
            )}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
