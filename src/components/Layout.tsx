import clsx from 'clsx';
import React from 'react';

type LayoutProps = {
    children: React.ReactNode;
    background?: string;
};
export const Layout: React.FC<LayoutProps> = ({ children, background }) => {
    return <section className={clsx('py-20', background)}>{children}</section>;
};
