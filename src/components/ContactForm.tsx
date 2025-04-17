import { useState } from 'react';
import { Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import emailjs from '@emailjs/browser';

// Konfigurasi EmailJS - kredensial dari pengguna
const EMAILJS_SERVICE_ID = 'service_1fo733f';
const EMAILJS_TEMPLATE_ID = 'template_mxv9ebk';
const EMAILJS_PUBLIC_KEY = 'v_RXKnZQt0zjpYHR3';

const ContactForm = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    // Parameter untuk EmailJS - pastikan nama parameter sesuai dengan template EmailJS
    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_name: 'Kawung Digital',
      to_email: 'kawungdigimark@gmail.com'
    };
    
    // Kirim email menggunakan EmailJS
    emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    )
    .then((response) => {
      console.log('Email berhasil dikirim!', response);
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset submitted state after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    })
    .catch((err) => {
      console.error('Gagal mengirim email:', err);
      setIsSubmitting(false);
      setError(t('errorSendingMessage'));
    });
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      {submitted ? (
        <div className="text-center py-8">
          <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 p-4 rounded-lg mb-6">
            <p className="font-medium">{t('thankYouMessage')}</p>
            <p>{t('willGetBack')}</p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">{t('yourName')}</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">{t('emailAddress')}</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 mb-2">{t('subject')}</label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              required
            >
              <option value="">{t('selectSubject')}</option>
              <option value="General Inquiry">{t('generalInquiry')}</option>
              <option value="Service Request">{t('serviceRequest')}</option>
              <option value="Partnership">{t('partnership')}</option>
              <option value="Other">{t('other')}</option>
            </select>
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">{t('yourMessage')}</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              required
            ></textarea>
          </div>
          
          {error && (
            <div className="mb-4 p-3 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-md">
              {error}
            </div>
          )}
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-indigo-600 text-white py-3 px-6 rounded hover:bg-indigo-700 transition-colors flex items-center justify-center"
          >
            {isSubmitting ? t('sending') : (
              <>
                <span>{t('sendMessage')}</span>
                <Send size={18} className="ml-2" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
