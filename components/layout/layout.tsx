import React from "react";
import Article from "../article";
import GithubProfile from "../github_profile/github_profile";
import MetaData from "../meta_data/meta_data";
import { layoutElementsType, specialDataKeys } from "../../types";
import styles from "./layout.module.scss";

const Layout: React.FC<layoutElementsType> = (props) => (
    <>
        <h1>{props.data.title}</h1>

        <div className={styles.layout}>
            {props.data.creators ? (
                <GithubProfile
                    tag={specialDataKeys.creator}
                    profiles={props.data.creators}
                ></GithubProfile>
            ) : null}

            {props.data.contributors ? (
                <GithubProfile
                    tag={specialDataKeys.contributors}
                    profiles={props.data.contributors}
                ></GithubProfile>
            ) : null}

            {Object.entries(props.data)
                .filter(
                    (entry) =>
                        entry[0] !== "title" &&
                        entry[0] !== "creators" &&
                        entry[0] !== "contributors"
                )
                .map((entry) => (
                    <MetaData
                        tag={entry[0]}
                        data={entry[1]}
                        key={entry[0]}
                    ></MetaData>
                ))}
        </div>

        <Article>{props.html}</Article>
    </>
);

export default Layout;
