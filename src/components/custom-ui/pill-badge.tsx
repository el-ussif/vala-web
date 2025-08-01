import React from 'react';

interface PillBadgeProps {
    label: string;
    bgColor?: string;
    iconBg?: string;
    icon?: React.ReactNode;
    className?: string;
}

const PillBadge: React.FC<PillBadgeProps> = ({
                                         label,
                                         bgColor = '#6947B8',
                                         iconBg = '#6947B8',
                                         icon = <DefaultIcon />,
                                         className = ''
                                     }) => {
    return (
        <div
            className={`flex ${bgColor} rounded-full h-[32px] items-center whitespace-nowrap ${className}`}>
            <div className={`${iconBg} px-1 h-full flex items-center rounded-l-full`}>
                {icon}
            </div>
            <span className="text-2xl px-2 font-medium">{label}</span>
        </div>
    );
};

// Icône par défaut (votre SVG)
const DefaultIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_1_28" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="24">
            <rect x="0.000488281" width="24" height="24" fill="#D9D9D9"/>
        </mask>
        <g mask="url(#mask0_1_28)">
            <path
                d="M7.97549 17L12.0005 15.175L16.0255 17L16.4005 16.625L12.0005 6L7.60049 16.625L7.97549 17ZM12.0005 22C10.6172 22 9.31715 21.7375 8.10049 21.2125C6.88382 20.6875 5.82549 19.975 4.92549 19.075C4.02549 18.175 3.31299 17.1167 2.78799 15.9C2.26299 14.6833 2.00049 13.3833 2.00049 12C2.00049 10.6167 2.26299 9.31667 2.78799 8.1C3.31299 6.88333 4.02549 5.825 4.92549 4.925C5.82549 4.025 6.88382 3.3125 8.10049 2.7875C9.31715 2.2625 10.6172 2 12.0005 2C13.3838 2 14.6838 2.2625 15.9005 2.7875C17.1172 3.3125 18.1755 4.025 19.0755 4.925C19.9755 5.825 20.688 6.88333 21.213 8.1C21.738 9.31667 22.0005 10.6167 22.0005 12C22.0005 13.3833 21.738 14.6833 21.213 15.9C20.688 17.1167 19.9755 18.175 19.0755 19.075C18.1755 19.975 17.1172 20.6875 15.9005 21.2125C14.6838 21.7375 13.3838 22 12.0005 22Z"
                fill="white"
            />
        </g>
    </svg>
);

export default PillBadge;
