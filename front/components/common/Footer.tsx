/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";
import * as React from "react";
// import { SVGProps } from "react";
import { useRouter } from "next/router";
import styles from "./Footer.module.scss";

const SvgHome = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30px"
    height="30px"
    viewBox="0 0 491.969 491.969"
    style={{
      enableBackground: "new 0 0 512 512"
    }}
    xmlSpace="preserve"
    {...props}
  >
    <path
      data-original="#000000"
      d="M412.654 51.687h-80.615V86.06l80.615 65.584zM412.654 307.131v-34.086l-80.615-65.693-86.055-70.125L79.312 273.045V458.4h105.074V275.879h123.196V458.4h105.072z"
    />
    <path
      data-original="#000000"
      d="m79.312 255.517 166.672-135.819 86.055 70.125 80.615 65.694 36.971 30.126 42.344-51.964-79.315-64.522-80.615-65.584-86.055-70.005L0 233.679l42.343 51.964z"
    />
  </svg>
);

const SvgCalendar = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      enableBackground: "new 0 0 512 512"
    }}
    xmlSpace="preserve"
    width="30px"
    height="30px"
    {...props}
  >
    <path d="M472.178 54.613h-69.404V40.96c0-9.425-7.641-17.067-17.067-17.067S368.64 31.535 368.64 40.96v13.653H143.36V40.96c0-9.425-7.641-17.067-17.067-17.067s-17.067 7.641-17.067 17.067v13.653H39.822C17.829 54.613 0 72.442 0 94.436v45.511a5.69 5.69 0 0 0 5.689 5.689h500.622a5.69 5.69 0 0 0 5.689-5.689V94.436c0-21.994-17.829-39.823-39.822-39.823zM506.311 179.769H5.689A5.69 5.69 0 0 0 0 185.458v262.838c0 21.986 17.824 39.811 39.811 39.811h432.378c21.988 0 39.811-17.824 39.811-39.811V185.458a5.689 5.689 0 0 0-5.689-5.689zM129.707 391.396h-40.96c-9.425 0-17.067-7.641-17.067-17.067s7.641-17.067 17.067-17.067h40.96c9.425 0 17.067 7.641 17.067 17.067s-7.642 17.067-17.067 17.067zm0-80.783h-40.96c-9.425 0-17.067-7.641-17.067-17.067s7.641-17.067 17.067-17.067h40.96c9.425 0 17.067 7.641 17.067 17.067s-7.642 17.067-17.067 17.067zm97.849 80.783h-40.96c-9.425 0-17.067-7.641-17.067-17.067s7.641-17.067 17.067-17.067h40.96c9.425 0 17.067 7.641 17.067 17.067s-7.642 17.067-17.067 17.067zm0-80.783h-40.96c-9.425 0-17.067-7.641-17.067-17.067s7.641-17.067 17.067-17.067h40.96c9.425 0 17.067 7.641 17.067 17.067s-7.642 17.067-17.067 17.067zm97.848 80.783h-40.96c-9.425 0-17.067-7.641-17.067-17.067s7.641-17.067 17.067-17.067h40.96c9.425 0 17.067 7.641 17.067 17.067s-7.641 17.067-17.067 17.067zm0-80.783h-40.96c-9.425 0-17.067-7.641-17.067-17.067s7.641-17.067 17.067-17.067h40.96c9.425 0 17.067 7.641 17.067 17.067s-7.641 17.067-17.067 17.067zm97.849 80.783h-40.96c-9.425 0-17.067-7.641-17.067-17.067s7.641-17.067 17.067-17.067h40.96c9.425 0 17.067 7.641 17.067 17.067s-7.641 17.067-17.067 17.067zm0-80.783h-40.96c-9.425 0-17.067-7.641-17.067-17.067s7.641-17.067 17.067-17.067h40.96c9.425 0 17.067 7.641 17.067 17.067s-7.641 17.067-17.067 17.067z" />
  </svg>
);

const SvgChatbot = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40px"
    height="40px"
    viewBox="0 0 512 512"
    xmlSpace="preserve"
    {...props}
  >
    <path
      d="M310.667 456.736A208.3 208.3 0 0 1 256 464c-114.691 0-208-93.309-208-208S141.309 48 256 48s208 93.309 208 208a208.423 208.423 0 0 1-7.262 54.668 104.919 104.919 0 0 1 13.043 12.377 223.814 223.814 0 1 0-146.737 146.736 105.01 105.01 0 0 1-12.377-13.045Z"
      data-original="#000000"
    />
    <path
      d="M192 437.018V408l-10.95 8.212 2.1 4.21A7.994 7.994 0 0 1 184 424v9.978q3.957 1.606 8 3.04ZM256 448v-80l-16 12v67.328a193.8 193.8 0 0 0 16 .672Z"
      data-original="#000000"
    />
    <path
      d="M392 288a103.356 103.356 0 0 1 50.645 13.194A192.775 192.775 0 0 0 448 256c0-105.869-86.131-192-192-192S64 150.131 64 256a190.884 190.884 0 0 0 16.79 78.492L104 293.875v-22.918c0-.7.012-1.411.036-2.114a60.155 60.155 0 0 1 14.5-36.659l11.366-13.367a8 8 0 0 1 13.856 3.243l6.488 25.94h6.44L184 220.686V168a8 8 0 0 1 2.343-5.657l32-32A8 8 0 0 1 224 128h40a8 8 0 0 1 5.657 2.343L291.313 152H312a8 8 0 0 1 8 8v20a28.032 28.032 0 0 1-28 28h-12v39.557l7.43 66.863a23.96 23.96 0 0 1-2.389 13.385L272 353.889v93.445a191.553 191.553 0 0 0 29.193-4.69A103.959 103.959 0 0 1 392 288Z"
      data-original="#000000"
    />
    <path
      d="M270.731 320.648a7.976 7.976 0 0 0 .8-4.463L264.84 256H240a8 8 0 0 1-4.438-1.344l-36.489-24.326-2.656.567-17.617 17.615a8 8 0 0 1 3.854 3.05l7.125 10.688A21.854 21.854 0 0 0 208 272a8 8 0 0 1 8 8v16a32.059 32.059 0 0 1-24 30.988V349.1a43.865 43.865 0 0 1-7.39 24.407L176 386.422V400l19.2-14.4A8 8 0 0 1 208 392v49.925q7.873 2.034 16 3.394V376a8 8 0 0 1 3.2-6.4l30.489-22.867Z"
      data-original="#000000"
    />
    <path
      d="m161.344 379.562 9.954-14.93A27.917 27.917 0 0 0 176 349.1V320a8 8 0 0 1 8-8 16.019 16.019 0 0 0 16-16v-8.849a37.815 37.815 0 0 1-23.531-16.026l-4.75-7.125H144a8 8 0 0 1-7.761-6.06l-4.225-16.9-1.285 1.511a44.111 44.111 0 0 0-10.7 26.847 45.483 45.483 0 0 0-.026 1.561V296a8 8 0 0 1-1.054 3.969l-29.457 51.55A193.378 193.378 0 0 0 168 426.612v-.723l-7.155-14.311A7.994 7.994 0 0 1 160 408v-24a8 8 0 0 1 1.344-4.438ZM152 296v-16h16v16ZM408 376v-32h-24v32a8 8 0 0 1-8 8h-32v24h32a8 8 0 0 1 8 8v32h24v-32a8 8 0 0 1 8-8h32v-24h-32a8 8 0 0 1-8-8Z"
      data-original="#000000"
    />
    <path
      d="M392 304a88 88 0 1 0 88 88 88.1 88.1 0 0 0-88-88Zm72 72v40a8 8 0 0 1-8 8h-28.624q-1.674 1.706-3.376 3.375V456a8 8 0 0 1-8 8h-40a8 8 0 0 1-8-8v-32h-32a8 8 0 0 1-8-8v-40a8 8 0 0 1 8-8h32v-32a8 8 0 0 1 8-8h40a8 8 0 0 1 8 8v32h32a8 8 0 0 1 8 8ZM292 192a12.013 12.013 0 0 0 12-12v-12h-16a8 8 0 0 1-5.657-2.343L260.687 144h-33.374L200 171.314v42.409a21.964 21.964 0 0 0 16-21.153V184h16v8.57a37.944 37.944 0 0 1-15.158 30.377L242.422 240H264v-40a8 8 0 0 1 8-8Zm-36-16h-16v-16h16Z"
      data-original="#000000"
    />
  </svg>
);
const SvgMemory = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30px"
    height="30px"
    viewBox="0 0 36.174 36.174"
    style={{
      enableBackground: "new 0 0 512 512"
    }}
    xmlSpace="preserve"
    {...props}
  >
    <path
      d="M23.921 20.528c0 3.217-2.617 5.834-5.834 5.834s-5.833-2.617-5.833-5.834 2.616-5.834 5.833-5.834 5.834 2.618 5.834 5.834zm12.253-8.284v16.57a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4v-16.57a4 4 0 0 1 4-4h4.92V6.86a3.5 3.5 0 0 1 3.5-3.5h11.334a3.5 3.5 0 0 1 3.5 3.5v1.383h4.92c2.209.001 4 1.792 4 4.001zm-9.253 8.284c0-4.871-3.963-8.834-8.834-8.834-4.87 0-8.833 3.963-8.833 8.834s3.963 8.834 8.833 8.834c4.871 0 8.834-3.963 8.834-8.834z"
      data-original="#000000"
    />
  </svg>
);

const SvgWalk = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30px"
    height="30px"
    viewBox="0 0 464.866 464.866"
    style={{
      enableBackground: "new 0 0 512 512"
    }}
    xmlSpace="preserve"
    {...props}
  >
    <path
      d="M464.287 144.557a8.997 8.997 0 0 0-5.054-5.17l-39.207-15.818c-2.436-12.666-12.056-22.81-24.436-26.008l-2.115-24.363a9 9 0 0 0-15.634-5.267L367.779 79.03l-6.219-21.766a9.001 9.001 0 0 0-17.115-.594l-46.469 128.196-171.982 8.029-.216.01c-35.304 2.12-68.734-16.766-85.167-48.119-2.308-4.403-7.748-6.103-12.149-3.794a9 9 0 0 0-3.794 12.149c14.602 27.861 40.393 47.517 70 54.804a78.614 78.614 0 0 0-3.168 2.951c-11.295 11.142-24.777 31.506-26.736 66.093l-38.965 17.114a9 9 0 0 0-4.866 5.239L.516 357.071a9 9 0 0 0 3.995 10.801l9.804 5.643a8.994 8.994 0 0 0 7.603.645 9.001 9.001 0 0 0 5.366-5.425l14.499-40.702 34.982-2.895-10.63 14.438a8.998 8.998 0 0 0-1.603 6.968l11.105 60.217a9 9 0 0 0 8.851 7.368H95.8a9.003 9.003 0 0 0 8.855-10.612l-7.739-42.508 75.108-51.97c.232-.16-.216.181 0 0 7.114-5.975 12.278-12.556 15.972-19.323 37.819 6.639 90.655 16.078 124.726 21.598.455.209-.492-.132 0 0l70.599 96.525a8.997 8.997 0 0 0 11.384 2.689l8.274-4.261a9.002 9.002 0 0 0 3.881-12.122l-36.604-71.082 37.519 7.635-.904 12.991a9.003 9.003 0 0 0 4.175 8.236l5.521 3.484a9.005 9.005 0 0 0 7.547.961 9 9 0 0 0 5.586-5.164l12.897-31.528a9 9 0 0 0-5.512-11.955l-67.772-23.32 20.217-93.312c3.762.627 7.561.957 11.388.957 26.357 0 50.493-15.431 62.988-40.271a8.997 8.997 0 0 0 .381-7.22z"
      data-original="#000000"
    />
  </svg>
);

function Footer() {
  const router = useRouter();
  return (
    <footer
      className={`${styles.wrapper} flex justify-space-around align-center`}
    >
      <Link href="/walk">
        <a>
          {router.pathname.startsWith("/walk") ? (
            <SvgWalk fill="#9E7676" />
          ) : (
            <SvgWalk fill="#787878" />
          )}
        </a>
      </Link>
      <Link href="/memory">
        <a>
          {router.pathname.startsWith("/memory") ? (
            <SvgMemory fill="#9E7676" />
          ) : (
            <SvgMemory fill="#787878" />
          )}
        </a>
      </Link>
      <Link href="/home">
        <a>
          {router.pathname.startsWith("/home") ? (
            <SvgHome fill="#9E7676" />
          ) : (
            <SvgHome fill="#787878" />
          )}
        </a>
      </Link>
      <Link href="/calendar">
        <a>
          {router.pathname.startsWith("/calendar") ? (
            <SvgCalendar fill="#9E7676" />
          ) : (
            <SvgCalendar fill="#787878" />
          )}
        </a>
      </Link>
      <Link href="/chat">
        <a>
          {router.pathname.startsWith("/chat") ? (
            <SvgChatbot fill="#9E7676" />
          ) : (
            <SvgChatbot fill="#787878" />
          )}
        </a>
      </Link>
    </footer>
  );
}
export default Footer;