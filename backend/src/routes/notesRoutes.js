import express from 'express';
import {getAllNotes} from '../../src/controllers/notesController.js';
import {getNotesById} from '../../src/controllers/notesController.js';
import {CreateNotes} from '../../src/controllers/notesController.js';
import {UpdateNotes} from '../../src/controllers/notesController.js';
import {DeleteNotes} from '../../src/controllers/notesController.js'

const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id", getNotesById);
router.post("/", CreateNotes);
router.put("/:id", UpdateNotes);
router.delete("/:id", DeleteNotes);

export default router;
