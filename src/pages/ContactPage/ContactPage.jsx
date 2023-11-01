import Contact from './Contact';

const ContactPage = () => {
  const contacts = [
    {
      name: 'Gio',
      phoneNumber: '089999999999'
    },
    {
      name: 'Soffie',
      phoneNumber: '089999999988'
    },
    {
      name: 'Maudy',
      phoneNumber: '089999999997'
    },
    {
      name: 'Elon',
      phoneNumber: '089999999986'
    },
    {
      name: 'Izza',
      phoneNumber: '089999999985'
    }
  ];

  return (
    <>
      <h1>List of Contacts</h1>
      <ul className="list-contact">
        {contacts.map((contact) => (
          <li key={contact.phoneNumber}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactPage;
