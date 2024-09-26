import React from 'react';
import {SvgXml} from "react-native-svg";
import {useTheme} from "../context/ThemeContext";

const Logo = () => {
    const { theme } = useTheme();

    const xml = `
        <svg xmlns="http://www.w3.org/2000/svg" width="139" height="204" viewBox="0 0 139 204" fill="none">
            <mask id="mask0_16_18053" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="13" y="5" width="113" height="140">
            <path d="M125.426 5.73071H13.0823V144.088H125.426V5.73071Z" fill="white"/>
            </mask>
            <g mask="url(#mask0_16_18053)">
            <path d="M52.4959 91.9544L49.9685 86.8926C21.8829 102.266 37.5172 136.199 57.4577 140.229C33.9407 115.858 44.3512 97.891 52.4959 91.9544Z" fill="white" stroke="white"/>
            <path d="M78.0542 48.085V41.8983L81.799 40.2111L86.6672 40.586L83.6714 45.5541L78.0542 48.085Z" fill="white" stroke="white"/>
            <path d="M60.2666 47.9913V41.8046L56.5218 40.1173L51.6536 40.4923L54.6494 45.4604L60.2666 47.9913Z" fill="white" stroke="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M53.6195 17.8078C51.8408 15.3393 46.467 10.4775 39.2021 10.7774C43.1965 7.40282 54.743 2.54714 68.9731 10.1212C73.4669 6.80912 85.7497 2.30351 98.9314 10.7774C94.9993 10.9961 86.7047 12.7084 84.9821 17.8078C93.4703 13.9333 114.847 13.7771 109.885 34.1182C115.471 38.7738 126.324 50.9535 125.051 62.427C122.773 59.2399 116.288 52.8845 108.574 52.9595C123.085 69.5511 132.26 115.483 82.0798 140.136L81.5181 140.417C84.1395 136.636 88.7081 126.038 86.0119 113.889C85.7625 119.264 81.9301 132.787 68.5986 143.885C68.5986 139.677 65.2845 132.82 62.2224 126.486C60.8514 123.65 59.531 120.919 58.5814 118.576C56.1473 110.077 57.4392 91.3358 82.0798 84.3617C78.8657 84.0494 71.9689 82.7307 70.0966 79.956L68.8795 79.7685C67.5063 80.9249 63.3934 83.3868 57.926 83.9868L53.4323 77.8001C63.0751 79.7685 73.0737 68.6325 60.2665 63.8331V58.7713C63.7304 59.4274 72.0626 60.3461 77.6797 58.7713V63.8331C70.5647 66.9265 67.962 77.7251 86.0119 77.4251C89.9439 76.4877 95.973 69.9636 89.3822 58.1151L95.1866 47.429C93.5014 35.5243 82.0798 14.3395 69.4412 28.8689L68.8795 29.3376C64.2921 22.5259 50.5301 17.8078 43.1341 47.429L48.5641 57.2715C46.3172 60.7278 43.5461 69.2602 50.4365 75.7378C40.7937 78.394 22.8375 90.3797 28.1551 117.076C19.8853 105.64 8.64473 76.8064 29.8402 52.9595C25.8458 53.5846 16.9394 56.4278 13.2695 62.802C13.5504 56.2092 16.9394 41.4485 28.2486 35.1493C25.0656 26.5254 29.1848 9.37139 53.6195 17.8078ZM38.4352 37.6396C39.055 35.0524 41.6469 28.6497 47.0574 23.736C40.181 20.6979 27.3869 26.1049 38.4352 37.6396ZM91.1609 24.0102C93.1895 25.7286 97.733 30.9281 99.6803 37.9772C105.485 33.1964 106.421 19.3233 91.1609 24.0102Z" fill="white"/>
            <path d="M39.2022 10.7772L39.1419 10.7056L38.9327 10.8822L39.2061 10.8709L39.2022 10.7772ZM53.6196 17.8076L53.5889 17.8962L53.8682 17.9926L53.6956 17.7527L53.6196 17.8076ZM68.9732 10.121L68.929 10.2037L68.981 10.2314L69.0286 10.1965L68.9732 10.121ZM98.9314 10.7772L98.9366 10.8708L99.2253 10.8548L98.9819 10.6983L98.9314 10.7772ZM84.9821 17.8076L84.8933 17.7775L84.8241 17.9827L85.021 17.8929L84.9821 17.8076ZM109.885 34.118L109.794 34.0957L109.78 34.1527L109.825 34.19L109.885 34.118ZM125.051 62.4269L124.975 62.4816L125.118 62.6803L125.144 62.4374L125.051 62.4269ZM108.574 52.9593L108.573 52.8656L108.369 52.8678L108.504 53.0212L108.574 52.9593ZM82.0799 140.136L82.0387 140.052L82.0379 140.052L82.0799 140.136ZM81.5182 140.417L81.441 140.364L81.5601 140.501L81.5182 140.417ZM86.0119 113.889L86.1033 113.869L85.9183 113.885L86.0119 113.889ZM68.5987 143.885H68.5051V144.085L68.6586 143.957L68.5987 143.885ZM58.5814 118.576L58.4915 118.602L58.4926 118.607L58.4945 118.611L58.5814 118.576ZM82.0799 84.3615L82.1053 84.4519L82.0889 84.2682L82.0799 84.3615ZM70.0966 79.9558L70.1741 79.9034L70.1513 79.8696L70.1108 79.8632L70.0966 79.9558ZM68.8795 79.7684L68.8938 79.6758L68.8518 79.6694L68.8192 79.6968L68.8795 79.7684ZM57.9261 83.9866L57.8504 84.0417L57.8822 84.0859L57.9362 84.0799L57.9261 83.9866ZM53.4323 77.7999L53.451 77.708L53.2147 77.66L53.3567 77.855L53.4323 77.7999ZM60.2665 63.8329H60.1729V63.8982L60.2336 63.9207L60.2665 63.8329ZM60.2665 58.7711L60.2838 58.6792L60.1729 58.6582V58.7711H60.2665ZM77.6798 58.7711H77.7734V58.6477L77.6543 58.6807L77.6798 58.7711ZM77.6798 63.8329L77.7168 63.9192L77.7734 63.8944V63.8329H77.6798ZM86.0119 77.4249L86.0134 77.5187H86.0235L86.0336 77.516L86.0119 77.4249ZM89.3822 58.1149L89.2998 58.0703L89.2751 58.1157L89.3002 58.1607L89.3822 58.1149ZM95.1866 47.4288L95.2686 47.4738L95.2836 47.4464L95.2791 47.4157L95.1866 47.4288ZM69.4412 28.8687L69.5012 28.9407L69.5068 28.9358L69.5117 28.9302L69.4412 28.8687ZM68.8795 29.3374L68.802 29.3899L68.8597 29.4757L68.9394 29.4094L68.8795 29.3374ZM43.1342 47.4288L43.0434 47.4063L43.0344 47.4419L43.0522 47.4742L43.1342 47.4288ZM48.5641 57.2713L48.6426 57.3226L48.6733 57.2754L48.6461 57.2259L48.5641 57.2713ZM50.4365 75.7376L50.4612 75.828L50.6222 75.7838L50.5005 75.6694L50.4365 75.7376ZM28.1551 117.076L28.0793 117.131L28.2469 117.058L28.1551 117.076ZM29.8402 52.9593L29.9102 53.0216L30.0837 52.8266L29.8258 52.8667L29.8402 52.9593ZM13.2696 62.8018L13.176 62.7981L13.3507 62.8487L13.2696 62.8018ZM28.2487 35.1491L28.2942 35.2311L28.3643 35.1921L28.3365 35.1167L28.2487 35.1491ZM38.4352 37.6394L38.3676 37.7042L38.4863 37.8282L38.5262 37.6613L38.4352 37.6394ZM47.0574 23.7358L47.1203 23.8052L47.227 23.7083L47.095 23.65L47.0574 23.7358ZM91.161 24.01L91.1333 23.9204L90.9696 23.9707L91.1003 24.0816L91.161 24.01ZM99.6803 37.977L99.5901 38.0019L99.6283 38.1411L99.7399 38.0494L99.6803 37.977ZM39.2061 10.8709C46.4281 10.5727 51.7753 15.4086 53.5435 17.8624L53.6956 17.7527C51.9063 15.2698 46.5062 10.3818 39.1984 10.6836L39.2061 10.8709ZM69.017 10.0382C54.7497 2.44437 43.1625 7.3089 39.1419 10.7056L39.2626 10.8489C43.2308 7.49637 54.7363 2.64953 68.929 10.2037L69.017 10.0382ZM98.9819 10.6983C85.7606 2.19885 73.4351 6.71594 68.9177 10.0455L69.0286 10.1965C73.4987 6.90194 85.7389 2.40783 98.8808 10.8561L98.9819 10.6983ZM85.0708 17.8376C85.9183 15.3283 88.3891 13.6394 91.1625 12.5494C93.9317 11.461 96.9781 10.9797 98.9366 10.8708L98.9261 10.6836C96.9526 10.7934 93.8857 11.2776 91.0939 12.3749C88.3059 13.4706 85.7681 15.1875 84.8933 17.7775L85.0708 17.8376ZM109.976 34.1403C111.22 29.0404 110.816 25.2114 109.364 22.4002C107.911 19.5884 105.417 17.8088 102.508 16.7934C96.6965 14.7649 89.2054 15.7768 84.9431 17.7223L85.021 17.8929C89.247 15.9638 96.6879 14.9605 102.446 16.9705C105.323 17.9744 107.772 19.7276 109.197 22.4863C110.623 25.2455 111.031 29.025 109.794 34.0957L109.976 34.1403ZM125.144 62.4374C125.784 56.6691 123.376 50.7336 120.119 45.665C116.861 40.5947 112.744 36.379 109.945 34.046L109.825 34.19C112.611 36.5126 116.715 40.7145 119.962 45.7666C123.21 50.8202 125.591 56.7111 124.958 62.4167L125.144 62.4374ZM108.575 53.0531C112.406 53.0159 115.938 54.5757 118.798 56.5472C121.659 58.5184 123.842 60.8963 124.975 62.4816L125.127 62.3725C123.982 60.7707 121.784 58.377 118.905 56.3928C116.025 54.4085 112.456 52.8281 108.573 52.8656L108.575 53.0531ZM82.1211 140.22C107.237 127.881 117.51 110.209 119.679 93.5366C121.847 76.8715 115.918 61.2139 108.645 52.8978L108.504 53.0212C115.741 61.2964 121.655 76.9004 119.494 93.5122C117.333 110.117 107.103 127.738 82.0387 140.052L82.1211 140.22ZM81.5601 140.501L82.1218 140.22L82.0379 140.052L81.4762 140.333L81.5601 140.501ZM85.9205 113.909C88.6096 126.027 84.0515 136.599 81.441 140.364L81.5949 140.47C84.2275 136.673 88.8063 126.048 86.1033 113.869L85.9205 113.909ZM68.6586 143.957C82.011 132.841 85.8546 119.293 86.1055 113.893L85.9183 113.885C85.67 119.234 81.8492 132.732 68.5388 143.813L68.6586 143.957ZM62.1382 126.527C63.6694 129.695 65.2621 132.989 66.472 136.018C67.6827 139.049 68.5051 141.8 68.5051 143.885H68.6923C68.6923 141.761 67.8572 138.981 66.6458 135.948C65.4328 132.913 63.8376 129.612 62.3067 126.445L62.1382 126.527ZM58.4945 118.611C59.4457 120.957 60.7676 123.692 62.1382 126.527L62.3067 126.445C60.9354 123.608 59.6164 120.88 58.6679 118.541L58.4945 118.611ZM82.0544 84.2715C69.7113 87.765 63.2043 94.21 60.0928 100.857C56.9831 107.5 57.2688 114.334 58.4915 118.602L58.6713 118.55C57.4595 114.319 57.1745 107.533 60.2624 100.937C63.3481 94.345 69.8079 87.9326 82.1053 84.4519L82.0544 84.2715ZM70.0191 80.0083C70.4991 80.72 71.296 81.3315 72.2622 81.8535C73.2298 82.3762 74.3742 82.813 75.558 83.1718C77.925 83.8895 80.4588 84.2982 82.0709 84.4549L82.0889 84.2682C80.4865 84.1126 77.9651 83.7057 75.6123 82.9922C74.4357 82.6356 73.304 82.2033 72.3513 81.6885C71.3971 81.1729 70.6302 80.5794 70.1741 79.9034L70.0191 80.0083ZM68.8653 79.861L70.0824 80.0485L70.1108 79.8632L68.8938 79.6758L68.8653 79.861ZM57.9362 84.0799C63.4238 83.4778 67.5539 81.0072 68.9398 79.8404L68.8192 79.6968C67.4591 80.8419 63.3631 83.2959 57.9159 83.8936L57.9362 84.0799ZM53.3567 77.855L57.8504 84.0417L58.0017 83.9315L53.508 77.7448L53.3567 77.855ZM60.2336 63.9207C63.4226 65.116 65.1726 66.6983 65.8713 68.3533C66.569 70.0054 66.2294 71.7527 65.1906 73.3023C63.1081 76.4077 58.2361 78.6851 53.451 77.708L53.4136 77.8917C58.2709 78.8835 63.22 76.5772 65.346 73.4066C66.411 71.8183 66.772 70.0046 66.044 68.2802C65.3171 66.5592 63.5136 64.9499 60.2991 63.7452L60.2336 63.9207ZM60.1729 58.7711V63.8329H60.3602V58.7711H60.1729ZM77.6543 58.6807C74.8596 59.4644 71.3837 59.629 68.1688 59.5142C64.9558 59.3995 62.0112 59.0062 60.2838 58.6792L60.2489 58.8633C61.9854 59.1921 64.9393 59.5866 68.1624 59.7013C71.384 59.8164 74.8828 59.6526 77.7048 58.8614L77.6543 58.6807ZM77.7734 63.8329V58.7711H77.5861V63.8329H77.7734ZM86.0104 77.3312C81.5054 77.4062 78.2995 76.7883 76.1343 75.7778C73.9706 74.7684 72.8501 73.3702 72.5 71.8801C72.1495 70.3875 72.5674 68.7834 73.5197 67.356C74.4716 65.9289 75.9538 64.6856 77.7168 63.9192L77.6423 63.7471C75.8482 64.5273 74.3368 65.7935 73.3639 67.2517C72.391 68.7099 71.9521 70.3668 72.3176 71.9229C72.6839 73.4816 73.8526 74.9202 76.0549 75.9476C78.2557 76.9746 81.4931 77.594 86.0134 77.5187L86.0104 77.3312ZM89.3002 58.1607C92.5862 64.0676 92.7184 68.6319 91.5549 71.8295C90.3903 75.0309 87.924 76.873 85.9902 77.3338L86.0336 77.516C88.0318 77.0398 90.5461 75.1508 91.7309 71.8936C92.9176 68.6327 92.769 64.011 89.4638 58.0695L89.3002 58.1607ZM95.1042 47.3842L89.2998 58.0703L89.4642 58.1599L95.2686 47.4738L95.1042 47.3842ZM69.5117 28.9302C72.6595 25.3113 75.7179 23.9315 78.5545 24.0587C81.395 24.186 84.0388 25.825 86.353 28.3001C90.9831 33.2511 94.2534 41.5042 95.0937 47.4419L95.2791 47.4157C94.4346 41.4487 91.1516 33.157 86.4897 28.1718C84.1582 25.6788 81.4717 24.0018 78.5632 23.8714C75.6508 23.7408 72.5419 25.1614 69.3705 28.8072L69.5117 28.9302ZM68.9394 29.4094L69.5012 28.9407L69.3813 28.7967L68.8196 29.2654L68.9394 29.4094ZM43.225 47.4517C46.9215 32.6469 52.1999 26.4649 57.0898 24.8096C61.9742 23.1563 66.5222 26.0048 68.802 29.3899L68.9571 29.2849C66.6495 25.8584 62.0225 22.942 57.0299 24.6319C52.0434 26.32 46.7428 32.5893 43.0434 47.4063L43.225 47.4517ZM48.6461 57.2259L43.2162 47.3834L43.0522 47.4742L48.4821 57.3166L48.6461 57.2259ZM50.5005 75.6694C47.0776 72.4512 46.0559 68.726 46.1674 65.3747C46.279 62.0193 47.527 59.0388 48.6426 57.3226L48.4857 57.2203C47.3544 58.9604 46.0933 61.9739 45.9802 65.3684C45.8671 68.7665 46.905 72.5464 50.3725 75.8059L50.5005 75.6694ZM28.2469 117.058C25.5931 103.735 28.7474 94.0915 33.7604 87.4481C38.776 80.8014 45.657 77.1512 50.4612 75.828L50.4118 75.6473C45.5733 76.9799 38.6549 80.651 33.611 87.3353C28.5645 94.0229 25.3995 103.721 28.0633 117.094L28.2469 117.058ZM29.7703 52.8971C19.1524 64.8434 16.6584 78.041 17.8551 89.6813C19.0514 101.319 23.9362 111.402 28.0793 117.131L28.2309 117.021C24.1043 111.315 19.2338 101.262 18.0414 89.6622C16.8491 78.0653 19.3326 64.9225 29.9102 53.0216L29.7703 52.8971ZM13.3507 62.8487C15.1728 59.6841 18.2987 57.3901 21.4749 55.8086C24.6502 54.2274 27.8662 53.3632 29.8547 53.0519L29.8258 52.8667C27.8198 53.1805 24.5854 54.0504 21.3915 55.6406C18.1984 57.2308 15.0363 59.5457 13.1885 62.7549L13.3507 62.8487ZM28.2031 35.0672C22.5245 38.2301 18.8385 43.515 16.5376 48.8281C14.2366 54.1412 13.3169 59.491 13.176 62.7981L13.3631 62.8059C13.5031 59.5199 14.4183 54.1929 16.7094 48.9027C19.0004 43.6125 22.6636 38.3673 28.2942 35.2311L28.2031 35.0672ZM53.6499 17.7189C41.415 13.4946 34.2283 15.6662 30.5063 20.0198C26.7928 24.3636 26.5606 30.8462 28.1609 35.1816L28.3365 35.1167C26.7537 30.8282 26.9896 24.4218 30.6486 20.1417C34.2993 15.8714 41.3897 13.6842 53.5889 17.8962L53.6499 17.7189ZM38.5262 37.6613C39.1426 35.0886 41.7265 28.7039 47.1203 23.8052L46.9945 23.6663C41.5674 28.5953 38.9674 35.016 38.3442 37.6176L38.5262 37.6613ZM47.095 23.65C45.3578 22.8825 43.2514 22.6498 41.2434 22.9115C39.2359 23.1732 37.318 23.9305 35.962 25.1531C34.6032 26.3784 33.8108 28.0699 34.0615 30.1846C34.3117 32.2942 35.5982 34.813 38.3676 37.7042L38.5028 37.5745C35.748 34.6984 34.4909 32.2159 34.2474 30.1625C34.0046 28.1141 34.7691 26.481 36.0873 25.2924C37.4082 24.1013 39.2875 23.3555 41.2676 23.0974C43.2473 22.8394 45.3185 23.0701 47.0196 23.8215L47.095 23.65ZM91.1003 24.0816C93.1176 25.7905 97.6488 30.9746 99.5901 38.0019L99.7706 37.9519C97.8173 30.8812 93.261 25.6666 91.2213 23.9385L91.1003 24.0816ZM99.7399 38.0494C101.206 36.8415 102.362 35.0627 103.032 33.1497C103.702 31.2369 103.89 29.1812 103.41 27.4184C102.929 25.6522 101.777 24.1823 99.7781 23.4547C97.784 22.7288 94.9585 22.7456 91.1333 23.9204L91.1883 24.0996C94.9934 22.931 97.7731 22.9244 99.714 23.6309C101.65 24.3357 102.763 25.7541 103.229 27.4679C103.697 29.1851 103.516 31.2011 102.856 33.0876C102.195 34.9738 101.057 36.722 99.6208 37.9046L99.7399 38.0494Z" fill="white"/>
            </g>
            <path d="M15.5745 177.52C11.6011 177.52 8.61447 176.587 6.61447 174.72C4.64113 172.827 3.65447 169.8 3.65447 165.64C3.65447 161.56 4.7478 158.587 6.93447 156.72C9.12113 154.853 12.0145 153.92 15.6145 153.92C23.1878 153.92 26.9745 157.693 26.9745 165.24C26.9745 169.053 26.0411 172.053 24.1745 174.24C22.3345 176.427 19.4678 177.52 15.5745 177.52ZM15.4145 172.8C16.1611 172.8 16.7878 172.68 17.2945 172.44C17.8011 172.173 18.2011 171.72 18.4945 171.08C19.0545 169.987 19.3345 168.2 19.3345 165.72C19.3345 163.293 19.0545 161.533 18.4945 160.44C17.9345 159.32 16.9078 158.733 15.4145 158.68C14.8545 158.68 14.2678 158.747 13.6545 158.88C13.0678 158.987 12.6945 159.147 12.5345 159.36C12.2145 159.733 11.9611 160.533 11.7745 161.76C11.6145 162.96 11.5345 164.28 11.5345 165.72C11.5345 167.96 11.7478 169.6 12.1745 170.64C12.4678 171.413 12.8811 171.973 13.4145 172.32C13.9478 172.64 14.6145 172.8 15.4145 172.8ZM48.9496 177H41.5096L37.7096 169.52C37.3363 168.747 36.8429 168.253 36.2296 168.04V177H29.3896V153L36.2296 152.72V166.36C36.8696 166.093 37.4163 165.547 37.8696 164.72L41.2696 158.6L48.7496 158.56L44.8696 164.8C44.2563 165.787 43.5896 166.573 42.8696 167.16C43.4829 167.827 44.1763 168.84 44.9496 170.2L48.9496 177ZM60.9572 177L60.3172 174.48C59.0906 176.48 57.3839 177.48 55.1972 177.48C53.4105 177.48 51.9439 176.987 50.7972 176C49.6772 174.987 49.1172 173.573 49.1172 171.76C49.1172 170.64 49.4372 169.667 50.0772 168.84C50.7439 167.987 51.6505 167.387 52.7972 167.04C54.2905 166.613 56.5972 166.373 59.7172 166.32C59.7172 164.56 59.6372 163.627 59.4772 163.52C59.3439 163.413 58.9172 163.36 58.1972 163.36C57.7439 163.36 57.1172 163.387 56.3172 163.44C55.0372 163.493 53.3039 163.64 51.1172 163.88C50.9039 162.44 50.7439 160.893 50.6372 159.24C52.0505 158.947 53.5305 158.707 55.0772 158.52C56.6239 158.307 58.0105 158.2 59.2372 158.2C61.3706 158.2 62.9706 158.56 64.0372 159.28C65.1039 159.973 65.7972 160.893 66.1172 162.04C66.4372 163.187 66.5839 164.64 66.5572 166.4L66.5172 172.28L66.6372 177H60.9572ZM57.5172 173C58.2106 173 58.9439 172.867 59.7172 172.6V169.64H59.3972C57.4239 169.64 56.3305 169.747 56.1172 169.96C55.9839 170.093 55.8772 170.293 55.7972 170.56C55.7439 170.827 55.7172 171.08 55.7172 171.32C55.7172 171.96 55.8639 172.4 56.1572 172.64C56.4505 172.88 56.9039 173 57.5172 173ZM88.2777 158.6L83.4777 174C82.5443 176.96 81.7043 179.107 80.9577 180.44C80.211 181.8 79.4643 182.747 78.7177 183.28C78.291 183.573 77.611 183.8 76.6777 183.96C75.771 184.12 74.7843 184.2 73.7177 184.2C72.1177 184.2 70.8377 184.053 69.8777 183.76C69.851 183.12 69.8777 182.333 69.9577 181.4C70.0377 180.493 70.1443 179.72 70.2777 179.08C71.3977 179.133 72.491 179.16 73.5577 179.16C74.3577 179.16 74.9577 179.147 75.3577 179.12C75.7577 178.347 76.131 177.533 76.4777 176.68L73.7177 176.52L67.5577 158.6H74.7977L77.9977 171.48L78.0377 172.24H78.1577L81.0377 158.6H88.2777ZM115.342 164.36V175.76C113.556 176.347 111.862 176.773 110.262 177.04C108.662 177.307 107.316 177.44 106.222 177.44C102.596 177.44 99.7556 176.493 97.7023 174.6C95.6489 172.707 94.6223 169.8 94.6223 165.88C94.6223 161.88 95.7023 158.893 97.8623 156.92C100.022 154.92 103.062 153.92 106.982 153.92C109.036 153.92 111.502 154.227 114.382 154.84C114.382 155.373 114.329 156.173 114.222 157.24C114.116 158.28 114.009 159.013 113.902 159.44L112.462 159.4C110.702 159.347 109.329 159.32 108.342 159.32C105.382 159.32 103.769 159.493 103.502 159.84C103.076 160.347 102.769 161.133 102.582 162.2C102.422 163.267 102.342 164.293 102.342 165.28C102.342 167.067 102.542 168.453 102.942 169.44C103.342 170.427 103.956 171.12 104.782 171.52C105.609 171.92 106.729 172.12 108.142 172.12H108.302V164.36H115.342ZM126.855 177.52C123.655 177.52 121.255 176.773 119.655 175.28C118.081 173.76 117.295 171.373 117.295 168.12C117.295 166.333 117.455 164.773 117.775 163.44C118.121 162.08 118.535 161.133 119.015 160.6C119.628 159.907 120.748 159.333 122.375 158.88C124.028 158.427 125.575 158.2 127.015 158.2C130.455 158.2 132.908 158.933 134.375 160.4C135.841 161.867 136.575 164.213 136.575 167.44C136.575 170.907 135.788 173.453 134.215 175.08C132.641 176.707 130.188 177.52 126.855 177.52ZM126.975 172.84C128.015 172.84 128.695 172.48 129.015 171.76C129.335 171.013 129.495 169.707 129.495 167.84C129.495 166.533 129.428 165.533 129.295 164.84C129.161 164.12 128.908 163.6 128.535 163.28C128.188 162.933 127.641 162.76 126.895 162.76C125.828 162.76 125.215 162.853 125.055 163.04C124.841 163.227 124.668 163.813 124.535 164.8C124.401 165.787 124.335 166.813 124.335 167.88C124.335 169.693 124.508 170.973 124.855 171.72C125.228 172.467 125.935 172.84 126.975 172.84Z" fill="white"/>
        </svg>
    `;

    const lightXml = `
        <svg xmlns="http://www.w3.org/2000/svg" width="139" height="204" viewBox="0 0 308 472" fill="none">
            <path d="M30.0126 456.17C21.0726 456.17 14.3526 454.07 9.85257 449.87C5.41257 445.61 3.19257 438.8 3.19257 429.44C3.19257 420.26 5.65257 413.57 10.5726 409.37C15.4926 405.17 22.0026 403.07 30.1026 403.07C47.1426 403.07 55.6626 411.56 55.6626 428.54C55.6626 437.12 53.5626 443.87 49.3626 448.79C45.2226 453.71 38.7726 456.17 30.0126 456.17ZM29.6526 445.55C31.3326 445.55 32.7426 445.28 33.8826 444.74C35.0226 444.14 35.9226 443.12 36.5826 441.68C37.8426 439.22 38.4726 435.2 38.4726 429.62C38.4726 424.16 37.8426 420.2 36.5826 417.74C35.3226 415.22 33.0126 413.9 29.6526 413.78C28.3926 413.78 27.0726 413.93 25.6926 414.23C24.3726 414.47 23.5326 414.83 23.1726 415.31C22.4526 416.15 21.8826 417.95 21.4626 420.71C21.1026 423.41 20.9226 426.38 20.9226 429.62C20.9226 434.66 21.4026 438.35 22.3626 440.69C23.0226 442.43 23.9526 443.69 25.1526 444.47C26.3526 445.19 27.8526 445.55 29.6526 445.55ZM105.617 455H88.8766L80.3266 438.17C79.4866 436.43 78.3766 435.32 76.9966 434.84V455H61.6066V401L76.9966 400.37V431.06C78.4366 430.46 79.6666 429.23 80.6866 427.37L88.3366 413.6L105.167 413.51L96.4366 427.55C95.0566 429.77 93.5566 431.54 91.9366 432.86C93.3166 434.36 94.8766 436.64 96.6166 439.7L105.617 455ZM133.144 455L131.704 449.33C128.944 453.83 125.104 456.08 120.184 456.08C116.164 456.08 112.864 454.97 110.284 452.75C107.764 450.47 106.504 447.29 106.504 443.21C106.504 440.69 107.224 438.5 108.664 436.64C110.164 434.72 112.204 433.37 114.784 432.59C118.144 431.63 123.334 431.09 130.354 430.97C130.354 427.01 130.174 424.91 129.814 424.67C129.514 424.43 128.554 424.31 126.934 424.31C125.914 424.31 124.504 424.37 122.704 424.49C119.824 424.61 115.924 424.94 111.004 425.48C110.524 422.24 110.164 418.76 109.924 415.04C113.104 414.38 116.434 413.84 119.914 413.42C123.394 412.94 126.514 412.7 129.274 412.7C134.074 412.7 137.674 413.51 140.074 415.13C142.474 416.69 144.034 418.76 144.754 421.34C145.474 423.92 145.804 427.19 145.744 431.15L145.654 444.38L145.924 455H133.144ZM125.404 446C126.964 446 128.614 445.7 130.354 445.1V438.44H129.634C125.194 438.44 122.734 438.68 122.254 439.16C121.954 439.46 121.714 439.91 121.534 440.51C121.414 441.11 121.354 441.68 121.354 442.22C121.354 443.66 121.684 444.65 122.344 445.19C123.004 445.73 124.024 446 125.404 446ZM195.125 413.6L184.325 448.25C182.225 454.91 180.335 459.74 178.655 462.74C176.975 465.8 175.295 467.93 173.615 469.13C172.655 469.79 171.125 470.3 169.025 470.66C166.985 471.02 164.765 471.2 162.365 471.2C158.765 471.2 155.885 470.87 153.725 470.21C153.665 468.77 153.725 467 153.905 464.9C154.085 462.86 154.325 461.12 154.625 459.68C157.145 459.8 159.605 459.86 162.005 459.86C163.805 459.86 165.155 459.83 166.055 459.77C166.955 458.03 167.795 456.2 168.575 454.28L162.365 453.92L148.505 413.6H164.795L171.995 442.58L172.085 444.29H172.355L178.835 413.6H195.125ZM257.04 426.56V452.21C253.02 453.53 249.21 454.49 245.61 455.09C242.01 455.69 238.98 455.99 236.52 455.99C228.36 455.99 221.97 453.86 217.35 449.6C212.73 445.34 210.42 438.8 210.42 429.98C210.42 420.98 212.85 414.26 217.71 409.82C222.57 405.32 229.41 403.07 238.23 403.07C242.85 403.07 248.4 403.76 254.88 405.14C254.88 406.34 254.76 408.14 254.52 410.54C254.28 412.88 254.04 414.53 253.8 415.49L250.56 415.4C246.6 415.28 243.51 415.22 241.29 415.22C234.63 415.22 231 415.61 230.4 416.39C229.44 417.53 228.75 419.3 228.33 421.7C227.97 424.1 227.79 426.41 227.79 428.63C227.79 432.65 228.24 435.77 229.14 437.99C230.04 440.21 231.42 441.77 233.28 442.67C235.14 443.57 237.66 444.02 240.84 444.02H241.2V426.56H257.04ZM283.453 456.17C276.253 456.17 270.853 454.49 267.253 451.13C263.713 447.71 261.943 442.34 261.943 435.02C261.943 431 262.303 427.49 263.023 424.49C263.803 421.43 264.733 419.3 265.813 418.1C267.193 416.54 269.713 415.25 273.373 414.23C277.093 413.21 280.573 412.7 283.813 412.7C291.553 412.7 297.073 414.35 300.373 417.65C303.673 420.95 305.323 426.23 305.323 433.49C305.323 441.29 303.553 447.02 300.013 450.68C296.473 454.34 290.953 456.17 283.453 456.17ZM283.723 445.64C286.063 445.64 287.593 444.83 288.313 443.21C289.033 441.53 289.393 438.59 289.393 434.39C289.393 431.45 289.243 429.2 288.943 427.64C288.643 426.02 288.073 424.85 287.233 424.13C286.453 423.35 285.223 422.96 283.543 422.96C281.143 422.96 279.763 423.17 279.403 423.59C278.923 424.01 278.533 425.33 278.233 427.55C277.933 429.77 277.783 432.08 277.783 434.48C277.783 438.56 278.173 441.44 278.953 443.12C279.793 444.8 281.383 445.64 283.723 445.64Z" fill="#0B0B0B"/>
            <mask id="mask0_16_18066" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="4" y="0" width="300" height="369">
            <path d="M304 0H4V369H304V0Z" fill="white"/>
            </mask>
            <g mask="url(#mask0_16_18066)">
            <path d="M109.249 229.959L102.5 216.459C27.5004 257.459 69.25 347.959 122.499 358.709C59.6995 293.709 87.4995 245.792 109.249 229.959Z" fill="#001510" stroke="black"/>
            <path d="M177.5 112.959V96.459L187.5 91.959L200.5 92.959L192.5 106.209L177.5 112.959Z" fill="#001510" stroke="black"/>
            <path d="M130 112.709V96.209L120 91.709L107 92.709L115 105.959L130 112.709Z" fill="#001510" stroke="black"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M112.25 32.2089C107.5 25.6256 93.15 12.6589 73.75 13.4589C84.4165 4.4588 115.25 -8.49135 153.25 11.7087C165.25 2.87541 198.05 -9.1411 233.25 13.4589C222.75 14.0422 200.6 18.6088 196 32.2089C218.667 21.8756 275.75 21.459 262.5 75.709C277.417 88.1255 306.4 120.609 303 151.209C296.917 142.709 279.6 125.759 259 125.959C297.75 170.209 322.25 292.709 188.25 358.459L186.75 359.209C193.75 349.126 205.95 320.859 198.75 288.459C198.084 302.793 187.85 338.859 152.25 368.459C152.25 357.235 143.4 338.949 135.223 322.056C131.562 314.491 128.036 307.207 125.5 300.959C119 278.293 122.45 228.309 188.25 209.709C179.667 208.876 161.25 205.359 156.25 197.959L153 197.459C149.333 200.543 138.35 207.109 123.75 208.709L111.75 192.209C137.5 197.459 164.2 167.759 130 154.959V141.459C139.25 143.209 161.5 145.659 176.5 141.459V154.959C157.5 163.209 150.55 192.009 198.75 191.209C209.25 188.709 225.35 171.309 207.75 139.709L223.25 111.209C218.75 79.459 188.25 22.959 154.5 61.709L153 62.959C140.75 44.7923 104 32.2089 84.25 111.209L98.75 137.459C92.75 146.677 85.35 169.433 103.75 186.709C78 193.793 30.0501 225.759 44.2501 296.959C22.1667 266.459 -7.85 189.559 48.75 125.959C38.0834 127.626 14.3 135.209 4.5 152.209C5.25 134.626 14.3 95.259 44.5 78.459C36 55.459 47 9.709 112.25 32.2089ZM71.702 85.1005C73.357 78.2005 80.2785 61.1245 94.7265 48.0195C76.364 39.917 42.1988 54.3375 71.702 85.1005ZM212.5 48.7509C217.917 53.334 230.05 67.201 235.25 86.001C250.75 73.2505 253.25 36.251 212.5 48.7509Z" fill="#001510"/>
            <path d="M73.75 13.4589L73.589 13.2678L73.0305 13.7388L73.7605 13.7087L73.75 13.4589ZM112.25 32.2089L112.168 32.4452L112.914 32.7024L112.453 32.0626L112.25 32.2089ZM153.25 11.7087L153.132 11.9294L153.271 12.0032L153.398 11.91L153.25 11.7087ZM233.25 13.4589L233.264 13.7085L234.035 13.6657L233.385 13.2485L233.25 13.4589ZM196 32.2089L195.763 32.1288L195.578 32.676L196.104 32.4364L196 32.2089ZM262.5 75.709L262.257 75.6495L262.22 75.8015L262.34 75.901L262.5 75.709ZM303 151.209L302.797 151.355L303.177 151.885L303.249 151.237L303 151.209ZM259 125.959L258.997 125.709L258.453 125.715L258.812 126.124L259 125.959ZM188.25 358.459L188.14 358.235L188.138 358.236L188.25 358.459ZM186.75 359.209L186.544 359.067L186.862 359.433L186.75 359.209ZM198.75 288.459L198.994 288.405L198.5 288.448L198.75 288.459ZM152.25 368.459H152V368.992L152.41 368.651L152.25 368.459ZM125.5 300.959L125.26 301.028L125.263 301.041L125.268 301.053L125.5 300.959ZM188.25 209.709L188.318 209.95L188.274 209.46L188.25 209.709ZM156.25 197.959L156.457 197.819L156.396 197.729L156.288 197.712L156.25 197.959ZM153 197.459L153.038 197.212L152.926 197.195L152.839 197.268L153 197.459ZM123.75 208.709L123.548 208.856L123.633 208.974L123.777 208.958L123.75 208.709ZM111.75 192.209L111.8 191.964L111.169 191.836L111.548 192.356L111.75 192.209ZM130 154.959H129.75V155.133L129.912 155.193L130 154.959ZM130 141.459L130.046 141.214L129.75 141.158V141.459H130ZM176.5 141.459H176.75V141.13L176.432 141.218L176.5 141.459ZM176.5 154.959L176.599 155.189L176.75 155.123V154.959H176.5ZM198.75 191.209L198.754 191.459H198.781L198.808 191.452L198.75 191.209ZM207.75 139.709L207.53 139.59L207.464 139.711L207.531 139.831L207.75 139.709ZM223.25 111.209L223.469 111.329L223.509 111.256L223.497 111.174L223.25 111.209ZM154.5 61.709L154.66 61.901L154.675 61.888L154.688 61.873L154.5 61.709ZM153 62.959L152.793 63.099L152.947 63.328L153.16 63.151L153 62.959ZM84.25 111.209L84.0075 111.149L83.9835 111.244L84.031 111.33L84.25 111.209ZM98.75 137.459L98.9595 137.596L99.0415 137.47L98.969 137.338L98.75 137.459ZM103.75 186.709L103.816 186.95L104.246 186.832L103.921 186.527L103.75 186.709ZM44.2501 296.959L44.0476 297.106L44.4952 296.91L44.2501 296.959ZM48.75 125.959L48.9368 126.125L49.4003 125.605L48.7114 125.712L48.75 125.959ZM4.49996 152.209L4.25018 152.199L4.71655 152.334L4.49996 152.209ZM44.5 78.459L44.6215 78.6775L44.8087 78.5735L44.7345 78.3725L44.5 78.459ZM71.702 85.1005L71.5215 85.2735L71.8385 85.604L71.945 85.159L71.702 85.1005ZM94.7265 48.0195L94.8945 48.2047L95.1795 47.9461L94.827 47.7908L94.7265 48.0195ZM212.5 48.7509L212.426 48.5119L211.989 48.6461L212.338 48.9418L212.5 48.7509ZM235.25 86.001L235.009 86.0675L235.111 86.4385L235.409 86.194L235.25 86.001ZM73.7605 13.7087C93.046 12.9134 107.325 25.8107 112.047 32.3552L112.453 32.0626C107.675 25.4405 93.2545 12.4044 73.74 13.2091L73.7605 13.7087ZM153.367 11.4879C115.268 -8.76493 84.3255 4.20884 73.589 13.2678L73.9115 13.65C84.508 4.70881 115.232 -8.21777 153.132 11.9294L153.367 11.4879ZM233.385 13.2485C198.079 -9.41972 165.165 2.62741 153.102 11.5073L153.398 11.91C165.335 3.12347 198.021 -8.86237 233.115 13.6693L233.385 13.2485ZM196.237 32.289C198.5 25.5967 205.098 21.0922 212.504 18.1853C219.899 15.2825 228.034 13.999 233.264 13.7085L233.236 13.2093C227.966 13.502 219.776 14.7935 212.321 17.7199C204.876 20.6422 198.099 25.221 195.763 32.1288L196.237 32.289ZM262.743 75.7685C266.065 62.167 264.987 51.955 261.109 44.4574C257.23 36.9583 250.569 32.2121 242.801 29.5041C227.282 24.094 207.278 26.7929 195.896 31.9814L196.104 32.4364C207.389 27.2916 227.259 24.6156 242.636 29.9763C250.317 32.6538 256.859 37.3295 260.664 44.6871C264.471 52.046 265.56 62.126 262.257 75.6495L262.743 75.7685ZM303.249 151.237C304.958 135.853 298.527 120.023 289.829 106.505C281.128 92.9825 270.135 81.739 262.66 75.517L262.34 75.901C269.781 82.0955 280.739 93.302 289.409 106.776C298.082 120.254 304.442 135.965 302.751 151.182L303.249 151.237ZM259.002 126.209C269.233 126.11 278.663 130.27 286.302 135.528C293.941 140.785 299.771 147.127 302.797 151.355L303.203 151.064C300.146 146.792 294.276 140.408 286.586 135.116C278.896 129.824 269.366 125.609 258.997 125.709L259.002 126.209ZM188.36 358.684C255.429 325.775 282.861 278.644 288.654 234.179C294.444 189.733 278.611 147.974 259.188 125.795L258.812 126.124C278.139 148.194 293.931 189.81 288.159 234.114C282.389 278.4 255.071 325.394 188.14 358.235L188.36 358.684ZM186.862 359.433L188.362 358.683L188.138 358.236L186.638 358.986L186.862 359.433ZM198.506 288.513C205.687 320.83 193.515 349.026 186.544 359.067L186.955 359.352C193.985 349.225 206.212 320.888 198.994 288.405L198.506 288.513ZM152.41 368.651C188.066 339.005 198.33 302.872 199 288.471L198.5 288.448C197.837 302.713 187.634 338.714 152.09 368.267L152.41 368.651ZM134.998 322.165C139.087 330.614 143.34 339.4 146.571 347.477C149.804 355.56 152 362.899 152 368.459H152.5C152.5 362.795 150.27 355.379 147.035 347.291C143.796 339.195 139.536 330.392 135.448 321.947L134.998 322.165ZM125.268 301.053C127.808 307.31 131.338 314.603 134.998 322.165L135.448 321.947C131.786 314.381 128.264 307.104 125.731 300.865L125.268 301.053ZM188.182 209.469C155.221 218.786 137.845 235.975 129.536 253.703C121.232 271.42 121.995 289.646 125.26 301.028L125.74 300.89C122.504 289.606 121.743 271.507 129.989 253.915C138.229 236.335 155.479 219.233 188.318 209.95L188.182 209.469ZM156.043 198.099C157.325 199.997 159.453 201.628 162.033 203.02C164.617 204.414 167.673 205.579 170.834 206.536C177.155 208.45 183.921 209.54 188.226 209.958L188.274 209.46C183.995 209.045 177.262 207.96 170.979 206.057C167.837 205.106 164.815 203.953 162.271 202.58C159.723 201.205 157.675 199.622 156.457 197.819L156.043 198.099ZM152.962 197.706L156.212 198.206L156.288 197.712L153.038 197.212L152.962 197.706ZM123.777 208.958C138.431 207.352 149.46 200.763 153.161 197.651L152.839 197.268C149.207 200.322 138.269 206.867 123.723 208.461L123.777 208.958ZM111.548 192.356L123.548 208.856L123.952 208.562L111.952 192.062L111.548 192.356ZM129.912 155.193C138.428 158.381 143.101 162.601 144.967 167.015C146.83 171.421 145.923 176.081 143.149 180.214C137.588 188.496 124.578 194.57 111.8 191.964L111.7 192.454C124.671 195.099 137.887 188.948 143.564 180.492C146.408 176.256 147.372 171.419 145.428 166.82C143.487 162.23 138.671 157.938 130.087 154.725L129.912 155.193ZM129.75 141.459V154.959H130.25V141.459H129.75ZM176.432 141.218C168.969 143.308 159.687 143.747 151.102 143.441C142.522 143.135 134.659 142.086 130.046 141.214L129.953 141.705C134.59 142.582 142.478 143.634 151.085 143.94C159.688 144.247 169.031 143.81 176.567 141.7L176.432 141.218ZM176.75 154.959V141.459H176.25V154.959H176.75ZM198.746 190.959C186.716 191.159 178.155 189.511 172.373 186.816C166.595 184.124 163.603 180.395 162.668 176.421C161.732 172.44 162.848 168.162 165.391 164.355C167.933 160.549 171.891 157.233 176.599 155.189L176.4 154.73C171.609 156.811 167.573 160.188 164.975 164.077C162.377 167.966 161.205 172.385 162.181 176.535C163.159 180.692 166.28 184.529 172.161 187.269C178.038 190.008 186.683 191.66 198.754 191.459L198.746 190.959ZM207.531 139.831C216.306 155.585 216.659 167.758 213.552 176.286C210.442 184.824 203.856 189.737 198.692 190.966L198.808 191.452C204.144 190.182 210.858 185.144 214.022 176.457C217.191 167.76 216.794 155.434 207.968 139.588L207.531 139.831ZM223.03 111.09L207.53 139.59L207.969 139.829L223.469 111.329L223.03 111.09ZM154.688 61.873C163.094 52.2215 171.261 48.5414 178.836 48.8806C186.421 49.2203 193.481 53.5915 199.661 60.1925C212.025 73.397 220.758 95.408 223.002 111.244L223.497 111.174C221.242 95.26 212.475 73.146 200.026 59.8505C193.8 53.2015 186.626 48.729 178.859 48.3811C171.082 48.0329 162.78 51.8215 154.311 61.545L154.688 61.873ZM153.16 63.151L154.66 61.901L154.34 61.517L152.84 62.767L153.16 63.151ZM84.4925 111.27C94.3635 71.7855 108.459 55.298 121.517 50.8835C134.56 46.4739 146.705 54.071 152.793 63.099L153.207 62.819C147.045 53.6805 134.689 45.9024 121.357 50.4095C108.041 54.9115 93.8865 71.632 84.0075 111.149L84.4925 111.27ZM98.969 137.338L84.469 111.088L84.031 111.33L98.531 137.58L98.969 137.338ZM103.921 186.527C94.7805 177.944 92.052 168.009 92.35 159.071C92.648 150.122 95.9805 142.173 98.9595 137.596L98.5405 137.323C95.5195 141.964 92.152 150.001 91.85 159.054C91.548 168.117 94.3195 178.198 103.579 186.891L103.921 186.527ZM44.4952 296.91C37.4086 261.378 45.8317 235.659 59.2185 217.941C72.612 200.214 90.987 190.479 103.816 186.95L103.684 186.468C90.7635 190.022 72.2885 199.813 58.8195 217.64C45.3434 235.476 36.8915 261.341 44.0049 297.008L44.4952 296.91ZM48.5632 125.793C20.2093 157.654 13.5495 192.852 16.7451 223.897C19.9398 254.935 32.984 281.826 44.0476 297.106L44.4525 296.813C33.4328 281.593 20.4269 254.784 17.2425 223.846C14.0588 192.917 20.6907 157.865 48.9368 126.125L48.5632 125.793ZM4.71655 152.334C9.58221 143.894 17.9296 137.776 26.4113 133.558C34.8908 129.341 43.4785 127.036 48.7886 126.206L48.7114 125.712C43.3548 126.549 34.7175 128.869 26.1887 133.11C17.662 137.351 9.21771 143.525 4.28337 152.084L4.71655 152.334ZM44.3784 78.2405C29.2143 86.676 19.3713 100.771 13.2269 114.941C7.08241 129.111 4.62638 143.379 4.25018 152.199L4.74973 152.22C5.12354 143.456 7.5675 129.249 13.6856 115.14C19.8036 101.031 29.5856 87.042 44.6215 78.6775L44.3784 78.2405ZM112.331 31.9725C79.659 20.7061 60.468 26.4977 50.5288 38.1089C40.6122 49.694 39.9922 66.983 44.2655 78.5455L44.7345 78.3725C40.5077 66.935 41.1377 49.849 50.9087 38.4341C60.6575 27.0452 79.5915 21.2118 112.168 32.4452L112.331 31.9725ZM71.945 85.159C73.591 78.2975 80.491 61.2695 94.8945 48.2047L94.5585 47.8343C80.066 60.98 73.123 78.104 71.459 85.0425L71.945 85.159ZM94.827 47.7908C90.188 45.7438 84.563 45.1231 79.201 45.8212C73.84 46.5191 68.7185 48.5387 65.0975 51.7995C61.469 55.0675 59.353 59.5785 60.0225 65.2185C60.6905 70.845 64.126 77.5625 71.5215 85.2735L71.8825 84.9275C64.526 77.257 61.169 70.636 60.519 65.1595C59.8705 59.6965 61.912 55.341 65.432 52.171C68.9595 48.9944 73.978 47.0054 79.2655 46.317C84.552 45.6287 90.083 46.244 94.6255 48.2482L94.827 47.7908ZM212.338 48.9418C217.725 53.4995 229.825 67.3255 235.009 86.0675L235.491 85.934C230.275 67.0765 218.108 53.169 212.661 48.5601L212.338 48.9418ZM235.409 86.194C239.324 82.9725 242.411 78.2285 244.2 73.1265C245.99 68.025 246.492 62.5425 245.21 57.841C243.925 53.1305 240.849 49.2104 235.511 47.2698C230.186 45.3339 222.641 45.3786 212.426 48.5119L212.573 48.9899C222.734 45.8732 230.157 45.8555 235.34 47.7398C240.51 49.6194 243.481 53.4025 244.727 57.973C245.976 62.553 245.494 67.9295 243.729 72.961C241.964 77.9915 238.925 82.654 235.091 85.808L235.409 86.194Z" fill="black"/>
            </g>
        </svg>
    `;

    return (
        <SvgXml
            xml={theme === "light" ? lightXml : xml}
        />
    );
};

export default Logo;