import React from 'react';

// Common pattern as requested by the user:
// export const IconName = ({ className = "", size = 24 }) => { ... }

/**
 * PlayIcon Component
 * @param {string} className - Optional CSS classes for the SVG
 * @param {number} size - Size of the icon (default: 24)
 * @returns {JSX.Element}
 */
export const PlayIcon = ({ className = "", size = 24 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 5V19L19 12L8 5Z" />
    </svg>
  );
};

/**
 * SearchIcon Component
 * @param {string} className - Optional CSS classes for the SVG
 * @param {number} size - Size of the icon (default: 18)
 * @returns {JSX.Element}
 */
export const SearchIcon = ({ className = "", size = 18 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.25 14.25C11.5638 14.25 14.25 11.5638 14.25 8.25C14.25 4.93619 11.5638 2.25 8.25 2.25C4.93619 2.25 2.25 4.93619 2.25 8.25C2.25 11.5638 4.93619 14.25 8.25 14.25Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.7498 15.75L12.4873 12.4875"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

/**
 * CartIcon Component
 * @param {string} className - Optional CSS classes for the SVG
 * @param {number} size - Size of the icon (default: 20)
 * @returns {JSX.Element}
 */
export const CartIcon = ({ className = "", size = 20 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.99707 3.49609C2.99707 3.21995 3.22093 2.99609 3.49707 2.99609H3.93543C4.66237 2.99609 5.07976 3.46917 5.32152 3.94075C5.4872 4.2639 5.6065 4.65813 5.70508 4.99951H15.9999C16.6634 4.99951 17.1429 5.63392 16.9619 6.27229L15.4664 11.5468C15.2225 12.4073 14.4368 13.0012 13.5423 13.0012H8.46306C7.56125 13.0012 6.77099 12.3977 6.5336 11.5277L5.89118 9.17338C5.88723 9.16268 5.88361 9.15177 5.88034 9.14067L4.851 5.6429C4.81568 5.52686 4.78318 5.41439 4.7518 5.3058C4.65195 4.96027 4.56346 4.65406 4.43165 4.39696C4.2723 4.08613 4.12597 3.99609 3.93543 3.99609H3.49707C3.22093 3.99609 2.99707 3.77224 2.99707 3.49609ZM6.84471 8.86872L7.49833 11.2645C7.61702 11.6995 8.01215 12.0012 8.46306 12.0012H13.5423C13.9895 12.0012 14.3824 11.7043 14.5044 11.274L15.9999 5.99951H6.00063L6.84471 8.86872ZM10 15.4995C10 16.3279 9.32843 16.9995 8.5 16.9995C7.67157 16.9995 7 16.3279 7 15.4995C7 14.6711 7.67157 13.9995 8.5 13.9995C9.32843 13.9995 10 14.6711 10 15.4995ZM9 15.4995C9 15.2234 8.77614 14.9995 8.5 14.9995C8.22386 14.9995 8 15.2234 8 15.4995C8 15.7757 8.22386 15.9995 8.5 15.9995C8.77614 15.9995 9 15.7757 9 15.4995ZM15 15.4995C15 16.3279 14.3284 16.9995 13.5 16.9995C12.6716 16.9995 12 16.3279 12 15.4995C12 14.6711 12.6716 13.9995 13.5 13.9995C14.3284 13.9995 15 14.6711 15 15.4995ZM14 15.4995C14 15.2234 13.7761 14.9995 13.5 14.9995C13.2239 14.9995 13 15.2234 13 15.4995C13 15.7757 13.2239 15.9995 13.5 15.9995C13.7761 15.9995 14 15.7757 14 15.4995Z"
        fill="currentColor"
      />
    </svg>
  );
};

/**
 * ArrowRightIcon Component
 * @param {string} className - Optional CSS classes for the SVG
 * @param {number} size - Size of the icon (default: 14)
 * @returns {JSX.Element}
 */
export const ArrowRightIcon = ({ className = "", size = 14 }) => {

  return (
    <svg
      width={size}
      height={9}
      viewBox="0 0 14 9"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.57741 0.244078C8.90285 -0.0813592 9.43048 -0.0813593 9.75592 0.244078L13.0893 3.57741C13.2455 3.73369 13.3333 3.94565 13.3333 4.16667C13.3333 4.38768 13.2455 4.59964 13.0893 4.75592L9.75592 8.08926C9.43049 8.41469 8.90285 8.41469 8.57741 8.08926C8.25197 7.76382 8.25197 7.23618 8.57741 6.91074L10.4882 5H0.833333C0.373096 5 0 4.6269 0 4.16667C0 3.70643 0.373096 3.33333 0.833333 3.33333H10.4882L8.57741 1.42259C8.25197 1.09715 8.25197 0.569515 8.57741 0.244078Z"
        fill="currentColor"
      />
    </svg>
  );
};

/**
 * HomeIcon Component
 * @param {string} className - Optional CSS classes for the SVG
 * @param {number} size - Size of the icon (default: 24)
 * @returns {JSX.Element}
 */
export const HomeIcon = ({ className = "", size = 24 }) => {

  return (
    <svg width={size} height={24} viewBox="0 0 18 19" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M7.54952 0.529942C8.38743 -0.176648 9.61257 -0.176647 10.4505 0.529943L17.2005 6.22205C17.7074 6.64956 18 7.27895 18 7.94211L18 17.252C18 18.2185 17.2165 19.002 16.25 19.002H12.75C11.7835 19.002 11 18.2185 11 17.252L11 12.2449C11 12.1068 10.8881 11.9949 10.75 11.9949H7.24999C7.11192 11.9949 6.99999 12.1068 6.99999 12.2449L6.99999 17.252C6.99999 18.2185 6.2165 19.002 5.25 19.002H1.75C0.783502 19.002 0 18.2185 0 17.252V7.94211C0 7.27895 0.292551 6.64956 0.799517 6.22205L7.54952 0.529942ZM9.48349 1.67665C9.20419 1.44112 8.79581 1.44112 8.5165 1.67665L1.76651 7.36876C1.59752 7.51126 1.5 7.72106 1.5 7.94211L1.5 17.252C1.5 17.39 1.61193 17.502 1.75 17.502H5.25C5.38807 17.502 5.49999 17.39 5.49999 17.252L5.49999 12.2449C5.49999 11.2784 6.2835 10.4949 7.24999 10.4949H10.75C11.7165 10.4949 12.5 11.2784 12.5 12.2449L12.5 17.252C12.5 17.39 12.6119 17.502 12.75 17.502H16.25C16.3881 17.502 16.5 17.39 16.5 17.252L16.5 7.94211C16.5 7.72106 16.4025 7.51126 16.2335 7.36876L9.48349 1.67665Z" fill="currentColor" />
    </svg>
  );
};

/**
 * HomeActiveIcon Component
 * @param {string} className - Optional CSS classes for the SVG
 * @param {number} size - Size of the icon (default: 28)
 * @returns {JSX.Element}
 */
export const HomeActiveIcon = ({ className = "", size = 28 }) => {

  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M15.4079 3.49783C14.5853 2.83796 13.4147 2.83796 12.5921 3.49783L4.84212 9.71457C4.30976 10.1416 4 10.7872 4 11.4697V22.7499C4 23.9926 5.00736 24.9999 6.25 24.9999H8.75C9.99264 24.9999 11 23.9926 11 22.7499V17.25C11 16.5596 11.5596 16 12.25 16H15.75C16.4404 16 17 16.5596 17 17.25V22.7499C17 23.9926 18.0074 24.9999 19.25 24.9999H21.75C22.9926 24.9999 24 23.9926 24 22.7499V11.4697C24 10.7872 23.6902 10.1416 23.1579 9.71457L15.4079 3.49783Z" fill="currentColor" />
    </svg>
  );
};

/**
 * ChatIcon Component
 * @param {string} className - Optional CSS classes for the SVG
 * @param {number} size - Size of the icon (default: 24)
 * @returns {JSX.Element}
 */
export const ChatIcon = ({ className = "", size = 24 }) => {

  return (
    <svg width={size} height={24} viewBox="0 0 20 20" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C8.38171 20 6.81782 19.6146 5.41286 18.888L1.58704 19.9553C0.922123 20.141 0.232581 19.7525 0.0469058 19.0876C-0.0145358 18.8676 -0.014506 18.6349 0.046948 18.4151L1.11461 14.5922C0.386366 13.186 0 11.6203 0 10C0 4.47715 4.47715 0 10 0ZM10 1.5C5.30558 1.5 1.5 5.30558 1.5 10C1.5 11.4696 1.87277 12.8834 2.57303 14.1375L2.72368 14.4072L1.61096 18.3914L5.59755 17.2792L5.86709 17.4295C7.12006 18.1281 8.53218 18.5 10 18.5C14.6944 18.5 18.5 14.6944 18.5 10C18.5 5.30558 14.6944 1.5 10 1.5ZM6.75 11H11.2483C11.6625 11 11.9983 11.3358 11.9983 11.75C11.9983 12.1297 11.7161 12.4435 11.35 12.4932L11.2483 12.5H6.75C6.33579 12.5 6 12.1642 6 11.75C6 11.3703 6.28215 11.0565 6.64823 11.0068L6.75 11H11.2483H6.75ZM6.75 7.5H13.2545C13.6687 7.5 14.0045 7.83579 14.0045 8.25C14.0045 8.6297 13.7223 8.94349 13.3563 8.99315L13.2545 9H6.75C6.33579 9 6 8.66421 6 8.25C6 7.8703 6.28215 7.55651 6.64823 7.50685L6.75 7.5H13.2545H6.75Z" fill="currentColor" />
    </svg>
  );
};

/**
 * ChatActiveIcon Component
 * @param {string} className - Optional CSS classes for the SVG
 * @param {number} size - Size of the icon (default: 24)
 * @returns {JSX.Element}
 */
export const ChatActiveIcon = ({ className = "", size = 24 }) => {

  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M2.00003 14C2.00003 7.37258 7.37261 2 14 2C20.6274 2 26 7.37258 26 14C26 20.6274 20.6274 26 14 26C11.964 26 10.0446 25.4924 8.36332 24.5963L3.59342 25.9527C2.65148 26.2206 1.78133 25.3504 2.04919 24.4085L3.40531 19.6396C2.50826 17.9577 2.00003 16.0372 2.00003 14ZM9.5 11.75C9.5 12.1642 9.83579 12.5 10.25 12.5H17.75C18.1642 12.5 18.5 12.1642 18.5 11.75C18.5 11.3358 18.1642 11 17.75 11H10.25C9.83579 11 9.5 11.3358 9.5 11.75ZM10.25 15.5C9.83579 15.5 9.5 15.8358 9.5 16.25C9.5 16.6642 9.83579 17 10.25 17H14.75C15.1642 17 15.5 16.6642 15.5 16.25C15.5 15.8358 15.1642 15.5 14.75 15.5H10.25Z" fill="currentColor" />
    </svg>
  );
};

/**
 * ShopIcon Component
 * @param {string} className - Optional CSS classes for the SVG
 * @param {number} size - Size of the icon (default: 24)
 * @returns {JSX.Element}
 */
export const ShopIcon = ({ className = "", size = 24 }) => {

  return (
    <svg width={size} height={24} viewBox="0 0 20 20" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M4.75 0C2.12665 0 0 2.12665 0 4.75C0 7.37335 2.12665 9.5 4.75 9.5H8.75C9.16421 9.5 9.5 9.16421 9.5 8.75V4.75C9.5 2.12665 7.37335 0 4.75 0ZM1.5 4.75C1.5 2.95507 2.95507 1.5 4.75 1.5C6.54493 1.5 8 2.95507 8 4.75V8H4.75C2.95507 8 1.5 6.54493 1.5 4.75ZM4.75 20C2.12665 20 0 17.8734 0 15.25C0 12.6266 2.12665 10.5 4.75 10.5H8.75C9.16421 10.5 9.5 10.8358 9.5 11.25V15.25C9.5 17.8734 7.37335 20 4.75 20ZM1.5 15.25C1.5 17.0449 2.95507 18.5 4.75 18.5C6.54493 18.5 8 17.0449 8 15.25V12H4.75C2.95507 12 1.5 13.4551 1.5 15.25ZM20 4.75C20 2.12665 17.8734 0 15.25 0C12.6266 0 10.5 2.12665 10.5 4.75V8.75C10.5 9.16421 10.8358 9.5 11.25 9.5H15.25C17.8734 9.5 20 7.37335 20 4.75ZM15.25 1.5C17.0449 1.5 18.5 2.95507 18.5 4.75C18.5 6.54493 17.0449 8 15.25 8H12V4.75C12 2.95507 13.4551 1.5 15.25 1.5ZM15.25 20C17.8734 20 20 17.8734 20 15.25C20 12.6266 17.8734 10.5 15.25 10.5H11.25C10.8358 10.5 10.5 10.8358 10.5 11.25V15.25C10.5 17.8734 12.6266 20 15.25 20ZM18.5 15.25C18.5 17.0449 17.0449 18.5 15.25 18.5C13.4551 18.5 12 17.0449 12 15.25V12H15.25C17.0449 12 18.5 13.4551 18.5 15.25Z" fill="currentColor" />
    </svg>
  );
};

/**
 * ShopActiveIcon Component
 * @param {string} className - Optional CSS classes for the SVG
 * @param {number} size - Size of the icon (default: 24)
 * @returns {JSX.Element}
 */
export const ShopActiveIcon = ({ className = "", size = 24 }) => {

  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M4.75 0C2.12665 0 0 2.12665 0 4.75C0 7.37335 2.12665 9.5 4.75 9.5H8.75C9.16421 9.5 9.5 9.16421 9.5 8.75V4.75C9.5 2.12665 7.37335 0 4.75 0ZM4.75 20C2.12665 20 0 17.8734 0 15.25C0 12.6266 2.12665 10.5 4.75 10.5H8.75C9.16421 10.5 9.5 10.8358 9.5 11.25V15.25C9.5 17.8734 7.37335 20 4.75 20ZM15.25 0C17.8734 0 20 2.12665 20 4.75C20 7.37335 17.8734 9.5 15.25 9.5H11.25C10.8358 9.5 10.5 9.16421 10.5 8.75V4.75C10.5 2.12665 12.6266 0 15.25 0ZM15.25 20C17.8734 20 20 17.8734 20 15.25C20 12.6266 17.8734 10.5 15.25 10.5H11.25C10.8358 10.5 10.5 10.8358 10.5 11.25V15.25C10.5 17.8734 12.6266 20 15.25 20Z" fill="currentColor" />
    </svg>
  );
};

/**
 * MobileCartIcon Component
 * @param {string} className - Optional CSS classes for the SVG
 * @param {number} size - Size of the icon (default: 24)
 * @returns {JSX.Element}
 */
export const MobileCartIcon = ({ className = "", size = 24 }) => {

  return (
    <svg width={size} height={24} viewBox="0 0 18 18" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0.75C0 0.335786 0.335786 0 0.75 0H1.30826C2.25873 0 2.82782 0.638993 3.15325 1.23299C3.37016 1.62894 3.52708 2.08818 3.64982 2.50395C3.68306 2.50134 3.71674 2.5 3.7508 2.5H16.2481C17.0783 2.5 17.6778 3.29442 17.4502 4.0928L15.6224 10.5019C15.2856 11.6832 14.2062 12.4978 12.9779 12.4978H7.02977C5.79128 12.4978 4.7056 11.6699 4.37783 10.4756L3.61734 7.70455L2.35874 3.45578L2.3567 3.44834C2.201 2.88051 2.05487 2.35005 1.83773 1.9537C1.62686 1.5688 1.45877 1.5 1.30826 1.5H0.75C0.335786 1.5 0 1.16421 0 0.75ZM5.07283 7.34027L5.82434 10.0786C5.97333 10.6215 6.46682 10.9978 7.02977 10.9978H12.9779C13.5362 10.9978 14.0268 10.6275 14.18 10.0906L15.9168 4H4.08549L5.05906 7.28682C5.06434 7.3046 5.06892 7.32243 5.07283 7.34027ZM8.5 15.5C8.5 16.6046 7.60457 17.5 6.5 17.5C5.39543 17.5 4.5 16.6046 4.5 15.5C4.5 14.3954 5.39543 13.5 6.5 13.5C7.60457 13.5 8.5 14.3954 8.5 15.5ZM7 15.5C7 15.2239 6.77614 15 6.5 15C6.22386 15 6 15.2239 6 15.5C6 15.7761 6.22386 16 6.5 16C6.77614 16 7 15.7761 7 15.5ZM15.5 15.5C15.5 16.6046 14.6046 17.5 13.5 17.5C12.3954 17.5 11.5 16.6046 11.5 15.5C11.5 14.3954 12.3954 13.5 13.5 13.5C14.6046 13.5 15.5 14.3954 15.5 15.5ZM14 15.5C14 15.2239 13.7761 15 13.5 15C13.2239 15 13 15.2239 13 15.5C13 15.7761 13.2239 16 13.5 16C13.7761 16 14 15.7761 14 15.5Z" fill="currentColor" />
    </svg>
  );
};

/**
 * MobileCartActiveIcon Component
 * @param {string} className - Optional CSS classes for the SVG
 * @param {number} size - Size of the icon (default: 24)
 * @returns {JSX.Element}
 */
export const MobileCartActiveIcon = ({ className = "", size = 24 }) => {

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M2.5 4.25C2.5 3.83579 2.83579 3.5 3.25 3.5H3.80826C4.75873 3.5 5.32782 4.13899 5.65325 4.73299C5.87016 5.12894 6.02708 5.58818 6.14982 6.00395C6.18306 6.00134 6.21674 6 6.2508 6H18.7481C19.5783 6 20.1778 6.79442 19.9502 7.5928L18.1224 14.0019C17.7856 15.1832 16.7062 15.9978 15.4779 15.9978H9.52977C8.29128 15.9978 7.2056 15.1699 6.87783 13.9756L6.11734 11.2045L4.85874 6.95578L4.8567 6.94834C4.701 6.38051 4.55487 5.85005 4.33773 5.4537C4.12686 5.0688 3.95877 5 3.80826 5H3.25C2.83579 5 2.5 4.66421 2.5 4.25ZM9 21C10.1046 21 11 20.1046 11 19C11 17.8954 10.1046 17 9 17C7.89543 17 7 17.8954 7 19C7 20.1046 7.89543 21 9 21ZM16 21C17.1046 21 18 20.1046 18 19C18 17.8954 17.1046 17 16 17C14.8954 17 14 17.8954 14 19C14 20.1046 14.8954 21 16 21Z" fill="currentColor" />
    </svg>
  );
};

/**
 * AccountIcon Component
 * @param {string} className - Optional CSS classes for the SVG
 * @param {number} size - Size of the icon (default: 24)
 * @returns {JSX.Element}
 */
export const AccountIcon = ({ className = "", size = 24 }) => {

  return (
    <svg width={size} height={20} viewBox="0 0 16 20" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M13.7506 11.9953C14.9927 11.9953 15.9995 13.0022 15.9995 14.2442V14.8196C15.9995 15.7139 15.6799 16.5787 15.0984 17.2581C13.529 19.0916 11.1418 19.9964 7.99646 19.9964C4.8506 19.9964 2.46458 19.0913 0.89828 17.257C0.318519 16.5781 0 15.7146 0 14.8219V14.2442C0 13.0022 1.00686 11.9953 2.24888 11.9953H13.7506ZM13.7506 13.4953H2.24888C1.83528 13.4953 1.5 13.8306 1.5 14.2442V14.8219C1.5 15.3575 1.69111 15.8756 2.03897 16.283C3.29228 17.7507 5.25815 18.4964 7.99646 18.4964C10.7348 18.4964 12.7024 17.7506 13.9588 16.2827C14.3078 15.8751 14.4995 15.3562 14.4995 14.8196V14.2442C14.4995 13.8306 14.1642 13.4953 13.7506 13.4953ZM7.99646 0C10.7579 0 12.9965 2.23858 12.9965 5C12.9965 7.76142 10.7579 10 7.99646 10C5.23503 10 2.99646 7.76142 2.99646 5C2.99646 2.23858 5.23503 0 7.99646 0ZM7.99646 1.5C6.06346 1.5 4.49646 3.067 4.49646 5C4.49646 6.933 6.06346 8.5 7.99646 8.5C9.92945 8.5 11.4965 6.933 11.4965 5C11.4965 3.067 9.92945 1.5 7.99646 1.5Z" fill="currentColor" />
    </svg>
  );
};

/**
 * AccountActiveIcon Component
 * @param {string} className - Optional CSS classes for the SVG
 * @param {number} size - Size of the icon (default: 24)
 * @returns {JSX.Element}
 */
export const AccountActiveIcon = ({ className = "", size = 24 }) => {

  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M21 16C22.6569 16 24 17.3431 24 19V19.7146C24 23.2924 19.7895 26 14 26C8.21053 26 4 23.4333 4 19.7146V19C4 17.3431 5.34315 16 7 16H21ZM14 2C17.3137 2 20 4.68629 20 8C20 11.3137 17.3137 14 14 14C10.6863 14 8 11.3137 8 8C8 4.68629 10.6863 2 14 2Z" fill="currentColor" />
    </svg>
  );
};

/**
 * CardIcon Component
 * @param {string} className - Optional CSS classes for the SVG
 * @param {number} size - Size of the icon (default: 36)
 * @returns {JSX.Element}
 */
export const CardIcon = ({ className = "", size = 36 }) => {
  return (
    <svg width={size} height={size} className={className} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="path-1-inside-1_226_34534" fill="white">
        <path d="M0 16C0 7.16344 7.16344 0 16 0H20C28.8366 0 36 7.16344 36 16V20C36 28.8366 28.8366 36 20 36H16C7.16344 36 0 28.8366 0 20V16Z" />
      </mask>
      <path d="M0 16C0 7.16344 7.16344 0 16 0H20C28.8366 0 36 7.16344 36 16V20C36 28.8366 28.8366 36 20 36H16C7.16344 36 0 28.8366 0 20V16Z" fill="white" fill-opacity="0.15" />
      <path d="M16 0V1H20V0V-1H16V0ZM36 16H35V20H36H37V16H36ZM20 36V35H16V36V37H20V36ZM0 20H1V16H0H-1V20H0ZM16 36V35C7.71573 35 1 28.2843 1 20H0H-1C-1 29.3888 6.61116 37 16 37V36ZM36 20H35C35 28.2843 28.2843 35 20 35V36V37C29.3888 37 37 29.3888 37 20H36ZM20 0V1C28.2843 1 35 7.71573 35 16H36H37C37 6.61116 29.3888 -1 20 -1V0ZM16 0V-1C6.61116 -1 -1 6.61116 -1 16H0H1C1 7.71573 7.71573 1 16 1V0Z" fill="white" fill-opacity="0.1" mask="url(#path-1-inside-1_226_34534)" />
      <path d="M23.3335 13.333H12.6668C11.9304 13.333 11.3335 13.93 11.3335 14.6663V21.333C11.3335 22.0694 11.9304 22.6663 12.6668 22.6663H23.3335C24.0699 22.6663 24.6668 22.0694 24.6668 21.333V14.6663C24.6668 13.93 24.0699 13.333 23.3335 13.333Z" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M11.3335 16.667H24.6668" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

  );
};

/**
 * WalletIcon Component
 * @param {string} className - Optional CSS classes for the SVG
 * @param {number} size - Size of the icon (default: 36)
 * @returns {JSX.Element}
 */
export const WalletIcon = ({ className = "", size = 36 }) => {
  return (
    <svg width={size} height={size} className={className} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="path-1-inside-1_226_34542" fill="white">
        <path d="M0 16C0 7.16344 7.16344 0 16 0H20C28.8366 0 36 7.16344 36 16V20C36 28.8366 28.8366 36 20 36H16C7.16344 36 0 28.8366 0 20V16Z" />
      </mask>
      <path d="M0 16C0 7.16344 7.16344 0 16 0H20C28.8366 0 36 7.16344 36 16V20C36 28.8366 28.8366 36 20 36H16C7.16344 36 0 28.8366 0 20V16Z" fill="white" fill-opacity="0.15" />
      <path d="M16 0V1H20V0V-1H16V0ZM36 16H35V20H36H37V16H36ZM20 36V35H16V36V37H20V36ZM0 20H1V16H0H-1V20H0ZM16 36V35C7.71573 35 1 28.2843 1 20H0H-1C-1 29.3888 6.61116 37 16 37V36ZM36 20H35C35 28.2843 28.2843 35 20 35V36V37C29.3888 37 37 29.3888 37 20H36ZM20 0V1C28.2843 1 35 7.71573 35 16H36H37C37 6.61116 29.3888 -1 20 -1V0ZM16 0V-1C6.61116 -1 -1 6.61116 -1 16H0H1C1 7.71573 7.71573 1 16 1V0Z" fill="white" fill-opacity="0.1" mask="url(#path-1-inside-1_226_34542)" />
      <path d="M22.6667 14.6667V12.6667C22.6667 12.4899 22.5964 12.3203 22.4714 12.1953C22.3464 12.0702 22.1768 12 22 12H13.3333C12.9797 12 12.6406 12.1405 12.3905 12.3905C12.1405 12.6406 12 12.9797 12 13.3333C12 13.687 12.1405 14.0261 12.3905 14.2761C12.6406 14.5262 12.9797 14.6667 13.3333 14.6667H23.3333C23.5101 14.6667 23.6797 14.7369 23.8047 14.8619C23.9298 14.987 24 15.1565 24 15.3333V18M24 18H22C21.6464 18 21.3072 18.1405 21.0572 18.3905C20.8071 18.6406 20.6667 18.9797 20.6667 19.3333C20.6667 19.687 20.8071 20.0261 21.0572 20.2761C21.3072 20.5262 21.6464 20.6667 22 20.6667H24C24.1768 20.6667 24.3464 20.5964 24.4714 20.4714C24.5964 20.3464 24.6667 20.1768 24.6667 20V18.6667C24.6667 18.4899 24.5964 18.3203 24.4714 18.1953C24.3464 18.0702 24.1768 18 24 18Z" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M12 13.333V22.6663C12 23.02 12.1405 23.3591 12.3905 23.6092C12.6406 23.8592 12.9797 23.9997 13.3333 23.9997H23.3333C23.5101 23.9997 23.6797 23.9294 23.8047 23.8044C23.9298 23.6794 24 23.5098 24 23.333V20.6663" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

  );
};

/**
 * BuildingIcon Component
 * @param {string} className - Optional CSS classes for the SVG
 * @param {number} size - Size of the icon (default: 36)
 * @returns {JSX.Element}
 */
export const BuildingIcon = ({ className = "", size = 36 }) => {
  return (
    <svg width={size} height={size} className={className} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="path-1-inside-1_226_34555" fill="white">
        <path d="M0 16C0 7.16344 7.16344 0 16 0H20C28.8366 0 36 7.16344 36 16V20C36 28.8366 28.8366 36 20 36H16C7.16344 36 0 28.8366 0 20V16Z" />
      </mask>
      <path d="M0 16C0 7.16344 7.16344 0 16 0H20C28.8366 0 36 7.16344 36 16V20C36 28.8366 28.8366 36 20 36H16C7.16344 36 0 28.8366 0 20V16Z" fill="white" fill-opacity="0.15" />
      <path d="M16 0V1H20V0V-1H16V0ZM36 16H35V20H36H37V16H36ZM20 36V35H16V36V37H20V36ZM0 20H1V16H0H-1V20H0ZM16 36V35C7.71573 35 1 28.2843 1 20H0H-1C-1 29.3888 6.61116 37 16 37V36ZM36 20H35C35 28.2843 28.2843 35 20 35V36V37C29.3888 37 37 29.3888 37 20H36ZM20 0V1C28.2843 1 35 7.71573 35 16H36H37C37 6.61116 29.3888 -1 20 -1V0ZM16 0V-1C6.61116 -1 -1 6.61116 -1 16H0H1C1 7.71573 7.71573 1 16 1V0Z" fill="white" fill-opacity="0.1" mask="url(#path-1-inside-1_226_34555)" />
      <path d="M14 24.6663V12.6663C14 12.3127 14.1405 11.9736 14.3905 11.7235C14.6406 11.4735 14.9797 11.333 15.3333 11.333H20.6667C21.0203 11.333 21.3594 11.4735 21.6095 11.7235C21.8595 11.9736 22 12.3127 22 12.6663V24.6663H14Z" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M14.0002 18H12.6668C12.3132 18 11.9741 18.1405 11.724 18.3905C11.474 18.6406 11.3335 18.9797 11.3335 19.3333V23.3333C11.3335 23.687 11.474 24.0261 11.724 24.2761C11.9741 24.5262 12.3132 24.6667 12.6668 24.6667H14.0002" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M22 16H23.3333C23.687 16 24.0261 16.1405 24.2761 16.3905C24.5262 16.6406 24.6667 16.9797 24.6667 17.3333V23.3333C24.6667 23.687 24.5262 24.0261 24.2761 24.2761C24.0261 24.5262 23.687 24.6667 23.3333 24.6667H22" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M16.6665 14H19.3332" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M16.6665 16.667H19.3332" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M16.6665 19.333H19.3332" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M16.6665 22H19.3332" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

  );
};

/**
 * ClockIcon Component
 * @param {string} className - Optional CSS classes for the SVG
 * @param {number} size - Size of the icon (default: 36)
 * @returns {JSX.Element}
 */
export const ClockIcon = ({ className = "", size = 36 }) => {
  return (
    <svg width={size} height={size} className={className} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="path-1-inside-1_226_34568" fill="white">
        <path d="M0 16C0 7.16344 7.16344 0 16 0H20C28.8366 0 36 7.16344 36 16V20C36 28.8366 28.8366 36 20 36H16C7.16344 36 0 28.8366 0 20V16Z" />
      </mask>
      <path d="M0 16C0 7.16344 7.16344 0 16 0H20C28.8366 0 36 7.16344 36 16V20C36 28.8366 28.8366 36 20 36H16C7.16344 36 0 28.8366 0 20V16Z" fill="white" fill-opacity="0.15" />
      <path d="M16 0V1H20V0V-1H16V0ZM36 16H35V20H36H37V16H36ZM20 36V35H16V36V37H20V36ZM0 20H1V16H0H-1V20H0ZM16 36V35C7.71573 35 1 28.2843 1 20H0H-1C-1 29.3888 6.61116 37 16 37V36ZM36 20H35C35 28.2843 28.2843 35 20 35V36V37C29.3888 37 37 29.3888 37 20H36ZM20 0V1C28.2843 1 35 7.71573 35 16H36H37C37 6.61116 29.3888 -1 20 -1V0ZM16 0V-1C6.61116 -1 -1 6.61116 -1 16H0H1C1 7.71573 7.71573 1 16 1V0Z" fill="white" fill-opacity="0.1" mask="url(#path-1-inside-1_226_34568)" />
      <g clip-path="url(#clip0_226_34568)">
        <path d="M18.0002 24.6663C21.6821 24.6663 24.6668 21.6816 24.6668 17.9997C24.6668 14.3178 21.6821 11.333 18.0002 11.333C14.3183 11.333 11.3335 14.3178 11.3335 17.9997C11.3335 21.6816 14.3183 24.6663 18.0002 24.6663Z" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M18 14V18L20.6667 19.3333" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_226_34568">
          <rect width="16" height="16" fill="white" transform="translate(10 10)" />
        </clipPath>
      </defs>
    </svg>

  );
};

/**
 * ArrowRightLongIcon Component
 * @param {string} className - Optional CSS classes for the SVG
 * @param {number} size - Size of the icon (default: 24)
 * @returns {JSX.Element}
 */
export const ArrowRightLongIcon = ({ className = "", size = 24 }) => {
  return (
    <svg width={size} height={size} className={className} viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M8.57741 0.244078C8.90285 -0.0813592 9.43048 -0.0813593 9.75592 0.244078L13.0893 3.57741C13.2455 3.73369 13.3333 3.94565 13.3333 4.16667C13.3333 4.38768 13.2455 4.59964 13.0893 4.75592L9.75592 8.08926C9.43049 8.41469 8.90285 8.41469 8.57741 8.08926C8.25197 7.76382 8.25197 7.23618 8.57741 6.91074L10.4882 5H0.833333C0.373096 5 0 4.6269 0 4.16667C0 3.70643 0.373096 3.33333 0.833333 3.33333H10.4882L8.57741 1.42259C8.25197 1.09715 8.25197 0.569515 8.57741 0.244078Z" fill="currentColor" />
    </svg>
  );
};

export const MyProfileIcon = ({ className = " ", size = 24 }) => {
  return (<svg width={size} height={size} className={className} viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 0C4.79086 0 3 1.79086 3 4C3 6.20914 4.79086 8 7 8C9.20914 8 11 6.20914 11 4C11 1.79086 9.20914 0 7 0ZM2.00873 9C0.903151 9 0 9.88687 0 11C0 12.6912 0.83281 13.9663 2.13499 14.7966C3.41697 15.614 5.14526 16 7 16C8.85474 16 10.583 15.614 11.865 14.7966C13.1672 13.9663 14 12.6912 14 11C14 9.89557 13.1045 9.00001 12 9.00001L2.00873 9Z" fill="currentColor" />
  </svg>
  )
}

export const MyOrderIcon = ({ className = "", size = 24 }) => {
  return (<svg width={size} height={size} className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 1C4.36429 1 4.70583 1.09739 5 1.26757C5.29418 1.09739 5.63571 1 6 1C7.10457 1 8 1.89543 8 3V4H8.5C8.77614 4 9 4.22386 9 4.5V9C9 10.1046 8.10457 11 7 11H3C2.65312 11 2.32686 10.9117 2.04248 10.7563C1.42133 10.417 1 9.75768 1 9V4.5C1 4.22386 1.22386 4 1.5 4H2V3C2 1.89543 2.89543 1 4 1ZM3 4H5V3C5 2.44772 4.55228 2 4 2C3.44772 2 3 2.44772 3 3V4ZM6 3V4H7V3C7 2.44772 6.55228 2 6 2C5.91376 2 5.83008 2.01092 5.75025 2.03144C5.90938 2.3184 6 2.64862 6 3ZM9 3.08535V3H12.2505C13.217 3 14.0005 3.7835 14.0005 4.75V6.00006L14.8824 5.99994C15.4506 5.99986 15.9701 6.32087 16.2242 6.82912L17.8422 10.0651C17.9464 10.2734 18.0006 10.5031 18.0006 10.7359V14.4999C18.0006 15.3283 17.329 15.9999 16.5006 15.9999H14.9505C14.7189 17.141 13.71 18 12.5005 18C11.291 18 10.2821 17.1411 10.0505 16H8.95048C8.71884 17.1411 7.70997 18 6.50049 18C5.29101 18 4.28213 17.1411 4.0505 16H3.79248C2.82598 16 2.04248 15.2165 2.04248 14.25V11.8439C2.34318 11.9452 2.66518 12 3 12H7C8.65685 12 10 10.6569 10 9V4.5C10 3.84689 9.5826 3.29127 9 3.08535ZM14.0005 7.00006V9.99994H16.6916L15.3298 7.27633C15.2451 7.10692 15.0719 6.99991 14.8825 6.99994L14.0005 7.00006ZM6.50049 14C5.67206 14 5.00049 14.6716 5.00049 15.5C5.00049 16.3284 5.67206 17 6.50049 17C7.32892 17 8.00049 16.3284 8.00049 15.5C8.00049 14.6716 7.32892 14 6.50049 14ZM11.0005 15.5C11.0005 16.3284 11.6721 17 12.5005 17C13.3289 17 14.0005 16.3284 14.0005 15.5C14.0005 14.6716 13.3289 14 12.5005 14C11.6721 14 11.0005 14.6716 11.0005 15.5Z" fill="currentColor" />
  </svg>
  )
}

export const NotificationIcon = ({ className = "", size = 24 }) => {
  return (<svg width={size} height={size} className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.7964 2.09808C1.57549 1.93239 1.26208 1.97716 1.0964 2.19808C0.930714 2.41899 0.975485 2.73239 1.1964 2.89808L3.1984 4.39958C3.41932 4.56527 3.73272 4.5205 3.8984 4.29958C4.06409 4.07867 4.01932 3.76527 3.7984 3.59958L1.7964 2.09808ZM1 6.9996C0.723858 6.9996 0.5 7.22346 0.5 7.4996C0.5 7.77574 0.723858 7.9996 1 7.9996H2.5C2.77614 7.9996 3 7.77574 3 7.4996C3 7.22346 2.77614 6.9996 2.5 6.9996H1ZM12.4497 16.0011C12.2174 17.1415 11.2089 17.9996 10 17.9996C8.79108 17.9996 7.78257 17.1415 7.55033 16.0011H12.4497ZM9.99765 1.99957C13.1466 1.99957 15.7415 4.33445 15.9821 7.35498L15.9955 7.57719L16 7.80171L15.999 11.4076L16.9528 13.9947L16.9784 14.0792L16.9939 14.166L16.9991 14.2541C16.9991 14.5692 16.8034 14.8446 16.4771 14.9614L16.3636 14.9942L16.2491 15.0041H3.75136C3.66286 15.0041 3.57506 14.9885 3.49203 14.9579C3.20513 14.8521 3.01636 14.586 3.00958 14.2418L3.01418 14.1243L3.04762 13.9948L3.99901 11.4106L4.00009 7.79238L4.00439 7.56781C4.12701 4.45072 6.77103 1.99957 9.99765 1.99957ZM18.9036 2.19808C18.7379 1.97716 18.4245 1.93239 18.2036 2.09808L16.2016 3.59958C15.9807 3.76527 15.9359 4.07867 16.1016 4.29958C16.2673 4.5205 16.5807 4.56527 16.8016 4.39958L18.8036 2.89808C19.0245 2.73239 19.0693 2.41899 18.9036 2.19808ZM19.5 7.4996C19.5 7.22346 19.2761 6.9996 19 6.9996H17.5C17.2239 6.9996 17 7.22346 17 7.4996C17 7.77574 17.2239 7.9996 17.5 7.9996H19C19.2761 7.9996 19.5 7.77574 19.5 7.4996Z" fill="#6A7282" />
  </svg>
  )
}
export const LogoutIcon = ({ className = "", size = 24 }) => {
  return (<svg width={size} height={size} className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 3.5C11 3.3542 10.9364 3.21567 10.8257 3.12068C10.7151 3.02569 10.5686 2.98371 10.4244 3.00574L3.42445 4.07574C3.18032 4.11306 3 4.32303 3 4.57V15.43C3 15.6769 3.18028 15.8869 3.42438 15.9243L10.4244 16.9953C10.5685 17.0173 10.7151 16.9754 10.8257 16.8804C10.9363 16.7854 11 16.6468 11 16.501V10L16.1722 10L15.1753 10.8737C14.9679 11.0556 14.9468 11.3714 15.1284 11.5793C15.3099 11.7871 15.6253 11.8081 15.8328 11.6263L17.8295 9.8763C17.9379 9.78135 18 9.64419 18 9.50001C18 9.35583 17.9379 9.21866 17.8295 9.12372L15.8328 7.37372C15.6253 7.19188 15.3099 7.21294 15.1284 7.42075C14.9679 7.62857 14.9679 7.94445 15.1753 8.1263L16.1723 9.00001L11 9.00001V3.5ZM8.5 11.25C8.08579 11.25 7.75 10.9142 7.75 10.5C7.75 10.0858 8.08579 9.75 8.5 9.75C8.91421 9.75 9.25 10.0858 9.25 10.5C9.25 10.9142 8.91421 11.25 8.5 11.25ZM12.5 16H12V11H13V15.5C13 15.7761 12.7761 16 12.5 16ZM12 8V4H12.5C12.7761 4 13 4.22386 13 4.5V8H12Z" fill="#6A7282" />
  </svg>
  )
}

/**
 * StarIcon Component (solid)
 * @param {string} className - Optional CSS classes for the SVG
 * @param {number} size - Size of the icon (default: 16)
 * @returns {JSX.Element}
 */
export const StarIcon = ({ className = "", size = 16 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z" />
    </svg>
  );
};

/**
 * HeartOutlineIcon Component
 * @param {string} className - Optional CSS classes for the SVG
 * @param {number} size - Size of the icon (default: 20)
 * @returns {JSX.Element}
 */
export const HeartOutlineIcon = ({ className = "", size = 20 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
};

/**
 * HeartFilledIcon Component
 * @param {string} className - Optional CSS classes for the SVG
 * @param {number} size - Size of the icon (default: 20)
 * @returns {JSX.Element}
 */
export const HeartFilledIcon = ({ className = "", size = 20 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
};
