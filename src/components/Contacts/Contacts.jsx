import React from 'react';

export default function Contacts({ contacts, deleteContact }) {
  const renderContacts = contacts.map(contact => (
    <li key={contact.id}>
      {contact.name}: {contact.number}
      <button
        style={{ margin: 5 }}
        type="button"
        onClick={() => deleteContact(contact.id)}
      >
        del
      </button>
    </li>
  ));
  return <ul>{renderContacts}</ul>;
}
