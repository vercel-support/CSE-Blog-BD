type propsType = {
    children: string;
};

const Article: React.FC<propsType> = (props) => (
    <article dangerouslySetInnerHTML={{ __html: props.children }}></article>
);

export default Article;
