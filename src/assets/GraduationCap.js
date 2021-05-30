import React from "react";

const GraduationCap = (props) => {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
            <path
                d="M1 12L16 4L31 12L16 20L1 12Z"
                stroke="black"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M23.5 30V16L16 12"
                stroke="black"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M27.5 13.8667V20.6818C27.5004 20.8975 27.4307 21.1075 27.3013 21.2802C26.4592 22.4007 22.9066 26.5 16 26.5C9.09339 26.5 5.54077 22.4007 4.69869 21.2802C4.56932 21.1075 4.49959 20.8975 4.5 20.6818V13.8667"
                stroke="black"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default GraduationCap;
