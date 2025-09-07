type FAQItem = {
  question: string;
  answer: string;
};

export const desktopHeaderPhrase = ['Frequently asked', 'questions'];
export const mobileHeaderPhrase = ['Frequently', 'asked', 'questions'];
export const animate = {
  initial: {
    y: '100%',
    opacity: 0,
  },
  open: (i: number) => ({
    y: '0%',
    opacity: 1,
    transition: { duration: 1, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
  }),
};

export const faqData = [
  {
    question: 'How do I create an account with Atlas Financial Bank?',
    answer:
      "Opening an account with Atlas Financial Bank is simple and quick! You can easily apply online through our secure website by clicking the 'Open Account' button, or visit any of our branches to speak with a customer service representative. We'll guide you through the necessary steps and required documentation.",
  },
  {
    question: 'How does Atlas Financial Bank ensure the security of my financial data?',
    answer:
      "At Atlas Financial Bank, your security is our top priority. We utilize state-of-the-art encryption technologies, multi-factor authentication, and continuous fraud monitoring to protect your financial data. Our systems are regularly updated and audited to ensure compliance with the highest industry security standards.",
  },
  {
    question: 'What types of transactions can I perform with Atlas Financial Bank?',
    answer:
      "With Atlas Financial Bank, you can perform a wide range of transactions, including secure online transfers, bill payments, direct deposits, ATM withdrawals, and point-of-sale purchases. Our mobile banking app also allows you to manage your accounts on the go, deposit checks remotely, and view your transaction history.",
  },
  {
    question: 'What benefits does Atlas Financial Bank offer for wealth management?',
    answer:
      "Atlas Financial Bank offers comprehensive wealth management services designed to help you achieve your long-term financial goals. Our benefits include personalized investment strategies, retirement planning, estate planning, and expert financial advice from dedicated advisors who will work closely with you to grow and preserve your assets.",
  },
];

