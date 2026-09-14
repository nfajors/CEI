/* ============================================================
   STUDENT VENTURE BOARD DATA — read by assets/js/features.js.
   EDITING: add a student venture as an object in VENTURES. Keep the
   board honest — only ventures with a student founder who has agreed
   to be listed:
     { name, founder, grad, phase (1-4), blurb, url (optional) }
   While VENTURES is empty the whole section and its menu entries stay
   hidden (see hideEmptyVentureBoard in assets/js/render.js); add one
   entry and the board, filters, and "Add your venture" button appear.

   VENTURE_FORM_URL — where "Add your venture" points. Leave null and the
   button opens a prefilled email to the CEI asking for exactly the fields
   the board needs. Create a dedicated intake form, paste its URL here, and
   the button switches over on its own. Do NOT point this at the general
   feedback form.
   ============================================================ */
const VENTURE_FORM_URL = null;

const VENTURES = [];
