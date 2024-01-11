export type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
};

export type ComponentItem<T = object> = {
    type: string;
    props: T;
};

export type LayoutProps = {
    className?: string;
};

export type LayoutSection = {
    type: string;
    props: LayoutProps;
    components: ComponentItem[];
};

export type PostFormData = {
    // userId: number;
    // id: number;
    title: string;
    body: string;
};
