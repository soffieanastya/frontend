import { render, screen } from '@testing-library/react';
import Contact from '../../../src/pages/ContactPage/Contact';

describe('Contact', () => {
  const contact = {
    name: 'Yuhari',
    phoneNumber: '081212345678'
  };

  beforeEach(() => {
    render(<Contact contact={contact} />);
  });

  it('should render Yuhari and 081212345678', () => {
    expect(screen.getByText(contact.name)).toBeDefined();
    expect(screen.getByText(contact.phoneNumber)).toBeDefined();
  });
});
