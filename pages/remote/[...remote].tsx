import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import { getRemoteRoutes, getMeta } from "../../remote_posts";
import markdownParsing from "../../utils/markdown_parsing";
import Layout from "../../components/layout/layout";
import { generatePaths, generateRoute } from "next-dynamic-route-generator";
import { layoutElementsType } from "../../types";

//queryParam to pass on next-dynamic-route-generator.
const queryParam = "remote";

const post: React.FC<layoutElementsType> = ({ data, html }) => {
    return <Layout data={data} html={html}></Layout>;
};
export default post;

export const getStaticProps: GetStaticProps = async (path) => {
    const route = generateRoute({ params: path.params, queryParam });
    const meta = getMeta(route);
    const markdownFile = await axios.get(meta?.rawURL as string);
    const parsed = await markdownParsing(markdownFile.data);

    const props: layoutElementsType = {
        data: meta?.data ?? {},
        html: parsed.html
    };

    return {
        props
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const routes = getRemoteRoutes();
    const paths = generatePaths({ routes, queryParam });

    return {
        paths,
        fallback: false
    };
};
