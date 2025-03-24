import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

const removeLastContact = async () => {
  const contacts = await readContacts();
  if (contacts.length === 0) {
    console.log("Нет контактов для удаления.");
    return;
  }
  contacts.pop();
  await writeContacts(contacts);
  console.log("Последний контакт удален.");
};

removeLastContact();
