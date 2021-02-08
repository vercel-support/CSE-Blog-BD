import React from "react";
import styles from "./meta_data.module.scss";
import AnchorifyText from "react-anchorify-text";

type propsType = {
    tag: string;
    data: string;
};

const MetaData: React.FC<propsType> = (props) => (
    <div className={styles.metaData}>
        <p>
            <b>{props.tag + ": "}</b>
            {/* The props.data should not be under <p> because that would create another line */}
            <AnchorifyText text={props.data}></AnchorifyText>
        </p>
    </div>
);

export default MetaData;
