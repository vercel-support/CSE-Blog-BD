import { GetStaticPaths, GetStaticProps } from "next";
import getPaths, { generateRoute } from "next-dynamic-route-generator";
import markdownParsing from "../utils/markdown_parsing";
import Layout from "../components/layout/layout";
import { layoutElementsType } from "../types";
import { readFile } from "../utils/lib";

//queryParam to pass on next-dynamic-route-generator.
const queryParam = "slug";

const post: React.FC<layoutElementsType> = ({ data, html }) => {
    return <Layout data={data} html={html}></Layout>;
};
export default post;

export const getStaticProps: GetStaticProps = async (param) => {
    let route: string = generateRoute({
        params: param.params,
        queryParam,
        dirPath: "posts",
        extension: ".md"
    });

    const markdownFile = await readFile(route, "utf8");

    return { props: await markdownParsing(markdownFile) };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = await getPaths({
        dirPath: "posts",
        queryParam,
        extension: "md"
    });

    return {
        paths,
        fallback: false
    };
};
