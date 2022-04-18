import * as React from 'react';

interface Socials {
}

export const Socials: React.FC<Socials> = () => {
    return (
        <section className='sociales'>

            <ul className='links'>
                <li className='links__li'>
                    <a className='link' href='https://www.behance.net/stephaniem735e' target="_blank">
                        <svg className='icon' width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.5612 5.55659H13.125V6.79034H17.5788L17.5612 5.55659ZM16.625 14.0441C16.2885 14.2671 15.891 14.3802 15.4875 14.3678C15.2204 14.3957 14.9504 14.3681 14.6945 14.2868C14.4385 14.2055 14.2021 14.0722 14 13.8953C13.6264 13.4717 13.4319 12.9196 13.4575 12.3553H19.25C19.2918 11.7678 19.2416 11.1774 19.1012 10.6053C18.9655 10.0611 18.728 9.54749 18.4013 9.09159C18.0724 8.64936 17.6476 8.28739 17.1588 8.03284C16.6149 7.76469 16.0151 7.62972 15.4088 7.63909C14.8385 7.63491 14.2732 7.74499 13.7463 7.96284C13.2637 8.16627 12.8264 8.46371 12.46 8.83784C12.0946 9.21944 11.8116 9.67216 11.6287 10.1678C11.4325 10.7029 11.3347 11.2691 11.34 11.8391C11.331 12.4171 11.4258 12.9921 11.62 13.5366C11.7849 14.0297 12.0467 14.4848 12.39 14.8753C12.7452 15.2587 13.1817 15.5577 13.6675 15.7503C14.2092 15.9567 14.7854 16.0577 15.365 16.0478C16.1782 16.0732 16.9812 15.8603 17.675 15.4353C18.3758 14.9373 18.8803 14.2099 19.1012 13.3791H17.1675C17.064 13.654 16.8735 13.8875 16.625 14.0441ZM13.6237 10.4391C13.6919 10.2209 13.8049 10.0195 13.9556 9.84766C14.1063 9.67586 14.2913 9.53753 14.4987 9.44159C14.7735 9.31794 15.0726 9.25811 15.3737 9.26659C15.5913 9.24801 15.8103 9.27671 16.0157 9.35071C16.2211 9.42472 16.4081 9.54228 16.5638 9.69534C16.8611 10.0593 17.0519 10.4984 17.115 10.9641H13.4837C13.4979 10.7863 13.5302 10.6104 13.58 10.4391H13.6237ZM8.995 10.0191C9.44034 9.83364 9.82731 9.53132 10.115 9.14409C10.3794 8.73284 10.5108 8.25013 10.4912 7.76159C10.5084 7.31607 10.4215 6.87268 10.2375 6.46659C10.0829 6.11476 9.83472 5.81211 9.52 5.59159C9.18632 5.36231 8.80741 5.20717 8.40875 5.13659C7.93697 5.03764 7.45576 4.99069 6.97375 4.99659H1.75V16.0041H7.0875C7.5746 16.0044 8.05976 15.9427 8.53125 15.8203C8.97815 15.7047 9.40154 15.5123 9.7825 15.2516C10.1515 14.9958 10.452 14.6533 10.6575 14.2541C10.8849 13.8077 10.9963 13.3111 10.9813 12.8103C10.9978 12.1897 10.8238 11.579 10.4825 11.0603C10.1155 10.5388 9.5712 10.1686 8.95125 10.0191H8.995ZM4.17375 6.87784H6.44C6.6482 6.87758 6.85604 6.89514 7.06125 6.93034C7.25021 6.95834 7.43167 7.02379 7.595 7.12284C7.7528 7.2121 7.88067 7.34606 7.9625 7.50784C8.06384 7.70184 8.11214 7.91917 8.1025 8.13784C8.1188 8.32617 8.09 8.51568 8.01849 8.69067C7.94697 8.86565 7.83479 9.02108 7.69125 9.14409C7.3781 9.35936 7.0034 9.46686 6.62375 9.45034H4.17375V6.87784ZM8.40875 13.3878C8.31885 13.5662 8.18291 13.7172 8.015 13.8253C7.84027 13.934 7.64773 14.011 7.44625 14.0528C7.2223 14.103 6.99321 14.1265 6.76375 14.1228H4.13875V11.1041H6.76375C7.21421 11.0844 7.65906 11.2101 8.0325 11.4628C8.20121 11.6142 8.3319 11.8032 8.41399 12.0145C8.49608 12.2258 8.52725 12.4535 8.505 12.6791C8.52866 12.9196 8.49569 13.1623 8.40875 13.3878V13.3878Z" fill="#9FB2DD" />
                        </svg>
                        <span>Behance</span>
                    </a>
                </li>
                <li className='links__li'>
                    <a className='link' href='https://github.com/stephymelo' target="_blank">
                        <svg className='icon' width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2.24609C9.62547 2.24619 7.32846 3.09121 5.51996 4.62994C3.71146 6.16867 2.5095 8.30071 2.12913 10.6446C1.74876 12.9884 2.21481 15.3912 3.4439 17.4228C4.67298 19.4545 6.58488 20.9826 8.83752 21.7336C9.33752 21.8211 9.52502 21.5211 9.52502 21.2586C9.52502 21.0211 9.51251 20.2336 9.51251 19.3961C7 19.8586 6.35 18.7836 6.15 18.2211C5.92807 17.674 5.57627 17.1892 5.125 16.8086C4.775 16.6211 4.275 16.1586 5.11249 16.1461C5.43227 16.1808 5.73898 16.2921 6.00663 16.4705C6.27427 16.6489 6.49496 16.8892 6.65 17.1711C6.78677 17.4168 6.97068 17.6331 7.19119 17.8076C7.4117 17.9821 7.66447 18.1114 7.93503 18.188C8.20559 18.2646 8.48861 18.2871 8.76788 18.2542C9.04714 18.2213 9.31717 18.1336 9.56248 17.9961C9.60577 17.4877 9.83234 17.0124 10.2 16.6586C7.975 16.4086 5.65 15.5461 5.65 11.7211C5.63594 10.7273 6.00268 9.7657 6.675 9.03362C6.36928 8.16984 6.40505 7.22191 6.775 6.38362C6.775 6.38362 7.61247 6.12111 9.525 7.40862C11.1613 6.9586 12.8887 6.9586 14.525 7.40862C16.4375 6.10862 17.275 6.38362 17.275 6.38362C17.645 7.2219 17.6808 8.16985 17.375 9.03362C18.0493 9.76445 18.4164 10.7269 18.4 11.7211C18.4 15.5586 16.0625 16.4086 13.8375 16.6586C14.0761 16.9005 14.2599 17.1909 14.3764 17.5101C14.4929 17.8293 14.5393 18.1699 14.5125 18.5086C14.5125 19.8461 14.5 20.9211 14.5 21.2586C14.5 21.5211 14.6875 21.8336 15.1875 21.7336C17.4362 20.9765 19.3426 19.4449 20.5664 17.4121C21.7903 15.3794 22.2519 12.9779 21.8689 10.6363C21.4859 8.29474 20.2832 6.16547 18.4755 4.6286C16.6678 3.09174 14.3727 2.24733 12 2.24609V2.24609Z" fill="#9FB2DD" />
                        </svg>
                        <span>Github</span>
                    </a>
                </li>
                <li className='links__li'>
                    <a className='link' href='https://www.linkedin.com/in/stephanie-melo-henao' target="_blank">
                        <svg className='icon' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.3525 1.5001H2.6475C2.50468 1.49812 2.36287 1.52429 2.23017 1.57712C2.09747 1.62994 1.97648 1.7084 1.8741 1.80799C1.77172 1.90758 1.68996 2.02637 1.63349 2.15756C1.57702 2.28876 1.54695 2.42979 1.545 2.5726V15.4276C1.54695 15.5704 1.57702 15.7115 1.63349 15.8426C1.68996 15.9738 1.77172 16.0926 1.8741 16.1922C1.97648 16.2918 2.09747 16.3703 2.23017 16.4231C2.36287 16.4759 2.50468 16.5021 2.6475 16.5001H15.3525C15.4953 16.5021 15.6371 16.4759 15.7698 16.4231C15.9025 16.3703 16.0235 16.2918 16.1259 16.1922C16.2283 16.0926 16.31 15.9738 16.3665 15.8426C16.423 15.7115 16.453 15.5704 16.455 15.4276V2.5726C16.453 2.42979 16.423 2.28876 16.3665 2.15756C16.31 2.02637 16.2283 1.90758 16.1259 1.80799C16.0235 1.7084 15.9025 1.62994 15.7698 1.57712C15.6371 1.52429 15.4953 1.49812 15.3525 1.5001V1.5001ZM6.0675 14.0551H3.8175V7.3051H6.0675V14.0551ZM4.9425 6.3601C4.63219 6.3601 4.3346 6.23684 4.11518 6.01742C3.89577 5.798 3.7725 5.50041 3.7725 5.1901C3.7725 4.8798 3.89577 4.58221 4.11518 4.36279C4.3346 4.14337 4.63219 4.0201 4.9425 4.0201C5.10727 4.00142 5.27413 4.01775 5.43215 4.06802C5.59018 4.11829 5.7358 4.20137 5.85949 4.31183C5.98318 4.42228 6.08214 4.55761 6.1499 4.70897C6.21766 4.86032 6.25269 5.02428 6.25269 5.1901C6.25269 5.35593 6.21766 5.51989 6.1499 5.67124C6.08214 5.8226 5.98318 5.95793 5.85949 6.06838C5.7358 6.17884 5.59018 6.26192 5.43215 6.31219C5.27413 6.36246 5.10727 6.37879 4.9425 6.3601V6.3601ZM14.1825 14.0551H11.9325V10.4326C11.9325 9.5251 11.61 8.93261 10.7925 8.93261C10.5395 8.93446 10.2931 9.01381 10.0866 9.15998C9.88011 9.30615 9.72336 9.51211 9.6375 9.75011C9.57881 9.92639 9.55337 10.112 9.5625 10.2976V14.0476H7.3125C7.3125 14.0476 7.3125 7.9126 7.3125 7.2976H9.5625V8.25011C9.7669 7.89543 10.0642 7.60324 10.4223 7.40501C10.7805 7.20677 11.1859 7.10999 11.595 7.1251C13.095 7.1251 14.1825 8.09261 14.1825 10.1701V14.0551Z" fill="#9FB2DD" />
                        </svg>
                        <span>Linkedin</span>
                    </a>
                </li>
            </ul>
        </section>
    );
}