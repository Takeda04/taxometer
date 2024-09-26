import React, {FC} from 'react';
import {SvgXml} from "react-native-svg";
import {TouchableOpacity} from "react-native";

interface IHomeIconProps {
    onPress?: () => void;
}

const HomeIcon: FC<IHomeIconProps> = ({ onPress }) => {

    const xml = `
    <svg width="26" height="28" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.17974 25.6978V21.6208C9.17974 20.58 10.0296 19.7364 11.078 19.7364H14.9102C15.4136 19.7364 15.8964 19.9349 16.2524 20.2883C16.6084 20.6417 16.8084 21.121 16.8084 21.6208V25.6978C16.8052 26.1304 16.9761 26.5465 17.2832 26.8535C17.5903 27.1606 18.0081 27.3333 18.444 27.3333H21.0585C22.2796 27.3364 23.4517 26.8571 24.3163 26.001C25.1808 25.145 25.6667 23.9826 25.6667 22.7704V11.1558C25.6667 10.1766 25.2295 9.24775 24.4729 8.61952L15.5787 1.56778C14.0316 0.331375 11.8149 0.371295 10.3139 1.6626L1.62272 8.61952C0.830361 9.22923 0.356777 10.1608 0.333374 11.1558V22.7585C0.333374 25.2851 2.39655 27.3333 4.94161 27.3333H7.49643C8.40168 27.3333 9.13737 26.6082 9.14393 25.7096L9.17974 25.6978Z" fill="#FCBF00"/>
    </svg>
`;

    return (
        <TouchableOpacity
            onPress={onPress}
        >
            <SvgXml xml={xml}/>
        </TouchableOpacity>
    );
};

export default HomeIcon;

