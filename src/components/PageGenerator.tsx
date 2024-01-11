import { Hero } from '@homework-task/components/Hero';
import { ItemsShowcase } from '@homework-task/components/ItemsShowcase';
import ListUsers from '@homework-task/components/ListUsers';
import PostForm from '@homework-task/components/PostForm';
import { TrustBar } from '@homework-task/components/TrustBar';
import { ComponentItem, LayoutSection } from '@homework-task/types';

type PageGeneratorProps = {
    layoutSpec: LayoutSection[];
};

const componentMapping: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: React.ComponentType<any>;
} = {
    componentHero: Hero,
    componentItemsShowcase: ItemsShowcase,
    componentTrustBar: TrustBar,
    componentListUsers: ListUsers,
    componentPostForm: PostForm,
    //componentFormGenerator:FormGenerator,
};

const PageGenerator: React.FC<PageGeneratorProps> = ({ layoutSpec }) => {
    const generateComponent = (component: ComponentItem) => {
        const Component = componentMapping[component.type];
        if (!Component) {
            return null;
        }
        return <Component {...component.props} />;
    };

    const generateSection = (section: LayoutSection) => {
        return (
            <div {...section.props}>
                {section.components.map((component, idx) => (
                    <div key={idx}>{generateComponent(component)}</div>
                ))}
            </div>
        );
    };

    return (
        <>
            {layoutSpec.map((section, idx) => (
                <div key={idx}>{generateSection(section)}</div>
            ))}
        </>
    );
};

export default PageGenerator;
