import { render, screen } from '@testing-library/react';
import ContactPage from '../../../src/pages/ContactPage/ContactPage';

describe('ContactPage', () => {
  const contacts = [
    {
      name: 'Gio',
      phoneNumber: '089999999999'
    },
    {
      name: 'Soffie',
      phoneNumber: '089999999988'
    }
  ];

  beforeEach(() => {
    render(<ContactPage />);
  });

  it('should display list of contacts', () => {
    contacts.forEach((contact) => {
      expect(screen.getByText(contact.name)).toBeDefined();
      expect(screen.getByText(contact.phoneNumber)).toBeDefined();
    });
  });
});
