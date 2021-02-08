import { remoteContentType, remoteContentsType } from "./types";

const remoteContents: remoteContentsType = [
    {
        route: "bangla-programming-resources",
        meta: {
            rawURL:
                "https://raw.githubusercontent.com/me-shaon/bangla-programming-resources/master/README.md",
            data: {
                title: "",
                creators: "",
                contributors: "",
                Description:
                    "এই পোষ্ট টি Github এ শাওন ভাইয়ের(Username: me-shaon) 'bangla-programming-resources' Repository থেকে নেয়া হয়েছে। Repository Link: https://github.com/me-shaon/bangla-programming-resources/blob/master/README.md"
            }
        }
    },

    {
        route: "bangla-programming-blogs",
        meta: {
            rawURL:
                "https://raw.githubusercontent.com/hasancse91/Programming-Problem-In-Bengali/master/Bangla%20programming%20blog%20list.md",
            data: {
                title: "",
                creators: "",
                contributors: "",
                Description:
                    "এই পোষ্ট টি Github এ Hasan Abdullah(Username: hasancse91) ভাইয়ের 'Programming-Problem-In-Bengali' Repository থেকে নেয়া হয়েছে। Repository Link: https://github.com/hasancse91/Programming-Problem-In-Bengali/blob/master/Bangla%20programming%20blog%20list.md"
            }
        }
    },

    {
        route: "algorithm_data_structure_programming_technique_list_with_links",
        meta: {
            rawURL:
                "https://raw.githubusercontent.com/hasancse91/Programming-Problem-In-Bengali/master/Algorithm%2C%20Data%20Structure%20Programming%20Technique%20List%20with%20LINKS.md",
            data: {
                title: "",
                creators: "",
                contributors: "",
                Description:
                    "এই পোষ্ট টি Github এ Hasan Abdullah(Username: hasancse91) ভাইয়ের 'Programming-Problem-In-Bengali' Repository থেকে নেয়া হয়েছে। Repository Link: https://github.com/hasancse91/Programming-Problem-In-Bengali/blob/master/Algorithm%2C%20Data%20Structure%20Programming%20Technique%20List%20with%20LINKS.md"
            }
        }
    },

    {
        route: "geometry_resources",
        meta: {
            rawURL:
                "https://raw.githubusercontent.com/hasancse91/Programming-Problem-In-Bengali/master/Geometry%20Resources.md",
            data: {
                title: "",
                creators: "",
                contributors: "",
                Description:
                    "এই পোষ্ট টি Github এ Hasan Abdullah(Username: hasancse91) ভাইয়ের 'Programming-Problem-In-Bengali' Repository থেকে নেয়া হয়েছে। Repository Link: https://github.com/hasancse91/Programming-Problem-In-Bengali/blob/master/Geometry%20Resources.md"
            }
        }
    },

    {
        route: "inspirational_posts_about_programming",
        meta: {
            rawURL:
                "https://raw.githubusercontent.com/hasancse91/Programming-Problem-In-Bengali/master/Inspirational%20Post%20about%20Programming.md",
            data: {
                title: "",
                creators: "",
                contributors: "",
                Description:
                    "এই পোষ্ট টি Github এ Hasan Abdullah(Username: hasancse91) ভাইয়ের 'Programming-Problem-In-Bengali' Repository থেকে নেয়া হয়েছে। Repository Link: https://github.com/hasancse91/Programming-Problem-In-Bengali/blob/master/Inspirational%20Post%20about%20Programming.md"
            }
        }
    },

    {
        route: "programming_language_tutorial_link",
        meta: {
            rawURL:
                "https://raw.githubusercontent.com/hasancse91/Programming-Problem-In-Bengali/master/Programming%20Language%20Tutorial%20Link.md",
            data: {
                title: "",
                creators: "",
                contributors: "",
                Description:
                    "এই পোষ্ট টি Github এ Hasan Abdullah(Username: hasancse91) ভাইয়ের 'Programming-Problem-In-Bengali' Repository থেকে নেয়া হয়েছে। Repository Link: https://github.com/hasancse91/Programming-Problem-In-Bengali/blob/master/Programming%20Language%20Tutorial%20Link.md"
            }
        }
    }
];

let pathToMeta = new Map<
    remoteContentType["route"],
    remoteContentType["meta"]
>();

remoteContents.forEach((value) => {
    pathToMeta.set(value.route, value.meta);
});

export const getRemoteRoutes = (): string[] => {
    return remoteContents.map((value) => value.route);
};

export const getMeta = (
    route: Readonly<string>
): remoteContentType["meta"] | undefined => {
    return pathToMeta.get(route);
};
