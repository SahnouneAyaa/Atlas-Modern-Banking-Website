import ic_document_duplicate from '../../../../public/svgs/ic_document_duplicate.svg';
import ic_identification from '../../../../public/svgs/ic_identification.svg';
import ic_lock_closed from '../../../../public/svgs/ic_lock_closed.svg';

// For desktop
export const desktopHeaderPhrase = ["Introducing Atlas Financial Bank's Next-", 'Gen Cards'];
export const desktopParagraphPhrase = [
  "Discover Atlas Financial Bank's latest innovation – our new cards. Elevate your banking",
  'experience with cutting-edge features, enhanced security, and unprecedented',
  'convenience.',
];

// For mobile
export const mobileHeaderPhrase = ["Introducing Atlas Financial Bank's", 'Next-Gen Cards'];
export const mobileParagraphPhrase = [
  "Discover Atlas Financial Bank's latest innovation – our new cards.",
  'Elevate your banking experience with cutting-edge features, enhanced',
  'security, and unprecedented convenience.',
];

export const edges = [
  {
    point: 'Contactless Technology',
    details:
      'Our new cards come equipped with contactless technology, allowing you to make swift and secure payments with a simple tap.',
    icon: ic_document_duplicate,
  },
  {
    point: 'Personalized Designs',
    details:
      'Customize your Atlas Financial Bank card to reflect your unique style. Choose from a range of exclusive designs that suit your personality.',
    icon: ic_identification,
  },
  {
    point: 'Advanced Security',
    details:
      'Your peace of mind is our utmost priority. Our cards feature advanced security measures and fraud protection to safeguard your transactions and data.',
    icon: ic_lock_closed,
  },
];
