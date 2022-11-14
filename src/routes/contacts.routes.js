import { Router } from "express";
import {
  createContact,
  deleteContact,
  renderContacts,
  contactToggleDone,
  renderContactEdit,
  editContact,
} from "../controllers/contacts.controllers";

const router = Router();

// Render all contacts
router.get("/", renderContacts);

router.post("/contacts/add", createContact);

router.get("/contacts/:id/toggleDone", contactToggleDone);

router.get("/contacts/:id/edit", renderContactEdit);

router.post("/contacts/:id/edit", editContact);

router.get("/contacts/:id/delete", deleteContact);

export default router;
