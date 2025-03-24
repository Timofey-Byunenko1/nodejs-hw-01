import { readContacts } from "../utils/readContacts.js";

const countContacts = async () => {
  const contacts = await readContacts();
  console.log(`Всего контактов: ${contacts.length}`);
};

countContacts();
