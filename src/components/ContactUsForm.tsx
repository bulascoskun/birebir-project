'use client';
import { FormEvent } from 'react';
import styles from './css-modules/ContactUsForm.module.css';

/* FONT */
import { Lexend } from 'next/font/google';
const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
});

const ContactUsForm = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submitted');
  };

  return (
    <div className={`${styles['contact-form']} ${styles['box']}`}>
      <form onSubmit={handleSubmit}>
        <div className={`${styles['input-group']}`}>
          <input
            className={lexend.className}
            type="text"
            name="isim"
            placeholder="İsim"
          />
          <input
            className={lexend.className}
            type="text"
            name="soyisim"
            placeholder="Soyisim"
          />
        </div>

        <input
          className={lexend.className}
          type="email"
          name="email"
          placeholder="E-Posta Adresi"
        />

        <textarea
          className={lexend.className}
          name="message"
          placeholder="Mesajınız"
        ></textarea>

        <button
          className={`${styles['submit']} ${lexend.className}`}
          type="submit"
        >
          Gönder
        </button>
      </form>
    </div>
  );
};
export default ContactUsForm;
