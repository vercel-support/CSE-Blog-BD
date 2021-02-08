import React from "react";
import styles from "./github_profile.module.scss";

type propsType = {
    tag: string;
    profiles: string;
};

const GithubProfile: React.FC<propsType> = (props) => (
    <div className={styles.githubProfile}>
        <p>
            <b>{props.tag + ": "}</b>
            {props.profiles
                .split(" ")
                .filter((profile) => profile !== "")
                .map((profile, index) => (
                    <React.Fragment key={profile}>
                        {/* Adding a comma(',') and a space(" ") before each
                        element except the first(0 th)to separate anchor
                        elements.  */}
                        {index ? (
                            <>
                                {", "}
                                <a href={"https://github.com/" + profile}>
                                    {profile}
                                </a>
                            </>
                        ) : (
                            <a href={"https://github.com/" + profile}>
                                {profile}
                            </a>
                        )}
                    </React.Fragment>
                ))}
        </p>
    </div>
);

export default GithubProfile;
