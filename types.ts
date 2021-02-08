/*
Our custom Type of the 'files.data' object we extract by parsing the .md files using gray matter.
https://www.npmjs.com/package/gray-matter#returned-object
*/
type dataTypeDeclaration = {
    [key: string]: string;
};
export type dataType = Readonly<dataTypeDeclaration>;

export enum specialDataKeys {
    title = "title",
    creator = "Creator",
    contributors = "Contributor(s)"
}

type layoutElementsTypeDeclaration = {
    data: dataType;
    html: string;
};
export type layoutElementsType = Readonly<layoutElementsTypeDeclaration>;

type remoteContentTypeDeclaration = {
    route: string;

    meta: {
        rawURL: string;
        data: dataType;
    };
};
export type remoteContentType = Readonly<remoteContentTypeDeclaration>;
export type remoteContentsType = remoteContentType[];
