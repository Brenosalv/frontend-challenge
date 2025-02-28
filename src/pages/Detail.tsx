import { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import { unknownBookCoverAddress } from './Home';

import styles from '../styles/pages/Detail.module.css';

import { BookData } from "../types/BookData";

export const Detail: FC = () => {
  const history = useHistory();

  const [book, setBook] = useState<BookData>();

  useEffect(() => {
    setBook(JSON.parse(localStorage.getItem("selectedBook")!));
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <svg onClick={() => history.push("/")} className={styles.backButton} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 8H1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 15L1 8L8 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

        <svg className={styles.oval1} width="78" height="99" viewBox="0 0 78 99" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <circle cx="67" cy="32" r="50" transform="rotate(25 67 32)" fill="url(#pattern0)" />
          <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="0.406072" height="0.0716598">
              <use xlinkHref="#image0" transform="scale(0.0119433)" />
            </pattern>
            <image id="image0" width="34" height="6" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAGCAYAAACmekziAAAABGdBTUEAALGOfPtRkwAAAY5JREFUKBW9Uj1IQlEUPuf6pCQofI9+CLMhaynInwyKfrYgGgxRCyEICpyaImh0aomaJKjFagjhUVRDRJNNDv61tLokgRROiZV6T/cFwitsKjpwOYfvnPN9H/deA/xjdM4stTS19W81dw+VN0OBfDwep7o81gt9DofDTByux35bK3afh4BHAPGMgKYByIKElwjswmTCmy9G2p1+G6fqOgHaEPGItbLzp7j68pMJ2+xaU7Hw6AGiVTFTIYQ7JMhKzJgtpGI5wUFml98KvBZBogGGUug5q95qfBrOeHVeaGn77k8jst03LtxuANIkAu4hwwyv8RVEmALAK4Z40ovKdTp9UNFIlBH/KK/VloFgQcxkBLSPxCqCw05IDrHjEMJmIZISvWHGcLerj23fq+q7tv89rBNBM8oOb4IIOhjAjslkiOYTark+aBnzy6VXHgDgQSAcFKJR0ZsTDysJc4dkMB4Xk7GH+rw+a+Sl0ptLkiBXSJ7m9L2GteL0ebU/0bCpA2X3Yo/s9Ia129PBf1Z+AO3ViTcdfWOLAAAAAElFTkSuQmCC" />
          </defs>
        </svg>

        <svg className={styles.oval2} width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <circle cx="32" cy="32" r="24" transform="rotate(25 32 32)" fill="url(#pattern0)" />
          <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="0.845983" height="0.149291">
              <use xlinkHref="#image0" transform="scale(0.0248819)" />
            </pattern>
            <image id="image0" width="34" height="6" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAGCAYAAACmekziAAAABGdBTUEAALGOfPtRkwAAAY5JREFUKBW9Uj1IQlEUPuf6pCQofI9+CLMhaynInwyKfrYgGgxRCyEICpyaImh0aomaJKjFagjhUVRDRJNNDv61tLokgRROiZV6T/cFwitsKjpwOYfvnPN9H/deA/xjdM4stTS19W81dw+VN0OBfDwep7o81gt9DofDTByux35bK3afh4BHAPGMgKYByIKElwjswmTCmy9G2p1+G6fqOgHaEPGItbLzp7j68pMJ2+xaU7Hw6AGiVTFTIYQ7JMhKzJgtpGI5wUFml98KvBZBogGGUug5q95qfBrOeHVeaGn77k8jst03LtxuANIkAu4hwwyv8RVEmALAK4Z40ovKdTp9UNFIlBH/KK/VloFgQcxkBLSPxCqCw05IDrHjEMJmIZISvWHGcLerj23fq+q7tv89rBNBM8oOb4IIOhjAjslkiOYTark+aBnzy6VXHgDgQSAcFKJR0ZsTDysJc4dkMB4Xk7GH+rw+a+Sl0ptLkiBXSJ7m9L2GteL0ebU/0bCpA2X3Yo/s9Ia129PBf1Z+AO3ViTcdfWOLAAAAAElFTkSuQmCC" />
          </defs>
        </svg>

        <svg className={styles.ring} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="13" cy="13" r="12" stroke="#4550A7" strokeWidth="2" />
        </svg>

        <svg className={styles.solidBlueCircle} width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="31.5" cy="31.5" r="31.5" fill="#00173D" />
        </svg>

        <svg className={styles.solidPinkCircle} width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="7.5" cy="7.5" r="7.5" fill="#FF6978" />
        </svg>

        <div className={styles.bookCoverShadow} />

        <img
          width="153px"
          height="229px"
          className={styles.bookCover}
          src={book?.volumeInfo.imageLinks.thumbnail !== undefined ?
            book?.volumeInfo.imageLinks.thumbnail : unknownBookCoverAddress}
          alt="Book cover"
        />
      </header>

      <main className={styles.main}>
        <div className={styles.bookTitleAndSubtitleContainer}>
          <p className={styles.bookTitleAndSubtitle}>
            {book?.volumeInfo.title !== undefined ? book?.volumeInfo.title : "Unknown title"}
            <em
              className={styles.bookSubtitle}
              style={{ display: book?.volumeInfo.subtitle === undefined ? "none" : "" }}
            >
              &nbsp;:&nbsp;
              {book?.volumeInfo.subtitle}
            </em>
          </p>
        </div>

        <p className={styles.bookAuthor}>
          {book?.volumeInfo.authors[0] !== undefined ? book?.volumeInfo.authors[0] : "Unknown author"}
        </p>

        <div className={styles.bookDescriptionContainer}>
          {book?.volumeInfo.description !== undefined ?
            book?.volumeInfo.description.replace(/([?])\s*(?=[A-Z])/g, "$1|").split("|").map((sentence, index) => (
              <p key={index} className={styles.bookDescriptionSentence}>{sentence}</p>
            )) :
            "This book has no description."}
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.readOptionContainer}>
          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 0H4.8C6.56731 0 8 1.59188 8 3.55556V16C8 14.5272 6.92548 13.3333 5.6 13.3333H0V0Z" stroke="#CFCBD2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path fillRule="evenodd" clipRule="evenodd" d="M16 0H11.2C9.43269 0 8 1.59188 8 3.55556V16C8 14.5272 9.07452 13.3333 10.4 13.3333H16V0Z" stroke="#CFCBD2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          <p className={styles.footerOptionText}>Read</p>
        </div>

        <div className={styles.listenOptionContainer}>
          <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 13.3333V8C6.58375e-08 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8V13.3333" stroke="#CFCBD2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15 10.7778H16C16 10.2255 15.5523 9.77783 15 9.77783V10.7778ZM1 10.7778V9.77783C0.447715 9.77783 0 10.2255 0 10.7778H1ZM13.5556 11.5556C13.5556 11.6783 13.4561 11.7778 13.3333 11.7778V9.77783C12.3515 9.77783 11.5556 10.5738 11.5556 11.5556H13.5556ZM13.5556 14.2223V11.5556H11.5556V14.2223H13.5556ZM13.3333 14.0001C13.4561 14.0001 13.5556 14.0995 13.5556 14.2223H11.5556C11.5556 15.2041 12.3515 16.0001 13.3333 16.0001V14.0001ZM14.2222 14.0001H13.3333V16.0001H14.2222V14.0001ZM14 14.2223C14 14.0995 14.0995 14.0001 14.2222 14.0001V16.0001C15.2041 16.0001 16 15.2041 16 14.2223H14ZM14 10.7778V14.2223H16V10.7778H14ZM13.3333 11.7778H15V9.77783H13.3333V11.7778ZM13.3333 7.77783C11.2469 7.77783 9.55556 9.4692 9.55556 11.5556H11.5556C11.5556 10.5738 12.3515 9.77783 13.3333 9.77783V7.77783ZM16 7.77783H13.3333V9.77783H16V7.77783ZM18 9.77783C18 8.67326 17.1046 7.77783 16 7.77783V9.77783H18ZM18 14.2223V9.77783H16V14.2223H18ZM14.2222 18.0001C16.3086 18.0001 18 16.3087 18 14.2223H16C16 15.2041 15.2041 16.0001 14.2222 16.0001V18.0001ZM13.3333 18.0001H14.2222V16.0001H13.3333V18.0001ZM9.55556 14.2223C9.55556 16.3087 11.2469 18.0001 13.3333 18.0001V16.0001C12.3515 16.0001 11.5556 15.2041 11.5556 14.2223H9.55556ZM9.55556 11.5556V14.2223H11.5556V11.5556H9.55556ZM0 7.77783C-1.10457 7.77783 -2 8.67326 -2 9.77783H0V7.77783ZM2.66667 7.77783H0V9.77783H2.66667V7.77783ZM6.44444 11.5556C6.44444 9.4692 4.75308 7.77783 2.66667 7.77783V9.77783C3.64851 9.77783 4.44444 10.5738 4.44444 11.5556H6.44444ZM6.44444 14.2223V11.5556H4.44444V14.2223H6.44444ZM2.66667 18.0001C4.75308 18.0001 6.44444 16.3087 6.44444 14.2223H4.44444C4.44444 15.2041 3.64851 16.0001 2.66667 16.0001V18.0001ZM1.77778 18.0001H2.66667V16.0001H1.77778V18.0001ZM-2 14.2223C-2 16.3087 -0.308631 18.0001 1.77778 18.0001V16.0001C0.795938 16.0001 0 15.2041 0 14.2223H-2ZM-2 9.77783V14.2223H0V9.77783H-2ZM2 14.2223V10.7778H0V14.2223H2ZM1.77778 14.0001C1.90051 14.0001 2 14.0995 2 14.2223H0C0 15.2041 0.795938 16.0001 1.77778 16.0001V14.0001ZM2.66667 14.0001H1.77778V16.0001H2.66667V14.0001ZM2.44444 14.2223C2.44444 14.0995 2.54394 14.0001 2.66667 14.0001V16.0001C3.64851 16.0001 4.44444 15.2041 4.44444 14.2223H2.44444ZM2.44444 11.5556V14.2223H4.44444V11.5556H2.44444ZM2.66667 11.7778C2.54394 11.7778 2.44444 11.6783 2.44444 11.5556H4.44444C4.44444 10.5738 3.64851 9.77783 2.66667 9.77783V11.7778ZM1 11.7778H2.66667V9.77783H1V11.7778Z" fill="#CFCBD2" />
          </svg>

          <p className={styles.footerOptionText}>Listen</p>
        </div>

        <div className={styles.shareOptionContainer}>
          <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 8V14.4C0 15.2837 0.716344 16 1.6 16H11.2C12.0837 16 12.8 15.2837 12.8 14.4V8" stroke="#CFCBD2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.60001 3.2L6.40001 0L3.20001 3.2" stroke="#CFCBD2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.40002 0V10.4" stroke="#CFCBD2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          <p className={styles.footerOptionText}>Share</p>
        </div>
      </footer>
    </div>
  );
}