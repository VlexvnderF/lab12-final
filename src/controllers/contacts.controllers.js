import Contact from "../model/Contact";

export const renderContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().lean();
    res.render("index", {
      contacts,
    });
  } catch (error) {
    console.log({ error });
    return res.render("error", { errorMessage: error.message });
  }
};

export const createContact = async (req, res, next) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.redirect("/");
  } catch (error) {
    return res.render("error", { errorMessage: error.message });
  }
};

export const contactToggleDone = async (req, res, next) => {
  let { id } = req.params;
  const contact = await Contact.findById(id);
  contact.done = !contact.done;
  await contact.save();
  res.redirect("/");
};

export const renderContactEdit = async (req, res, next) => {
  const contact = await Contact.findById(req.params.id).lean();
  res.render("edit", { contact });
};

export const editContact = async (req, res, next) => {
  const { id } = req.params;
  await Contact.updateOne({ _id: id }, req.body);
  res.redirect("/");
};

export const deleteContact = async (req, res, next) => {
  let { id } = req.params;
  await Contact.remove({ _id: id });
  res.redirect("/");
};
