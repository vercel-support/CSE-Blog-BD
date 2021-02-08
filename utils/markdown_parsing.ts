import remark from "remark";
import remarkHTML from "remark-html";
import prism from "remark-prism";
import autolinker from "autolinker";
import matter from "gray-matter";
import sanitizeHTML from "sanitize-html";
import { layoutElementsType } from "../types";

const markdownParsing = async (
    markdownFile: string
): Promise<layoutElementsType> => {
    const { data, content } = matter(markdownFile);
    const result = await remark().use(remarkHTML).use(prism).process(content);
    const html = sanitizeHTML(autolinker.link(result.toString()));
    return { data, html };
};

export default markdownParsing;
