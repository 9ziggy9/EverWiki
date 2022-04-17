# EverWiki

THIS PROJECT IS STILL UNDER DEVELOPMENT.

https://everwiki.herokuapp.com/
EverWiki is an EverNote clone looking to present notes in a personal Wiki format. Notes are created by users and associated to a given notebook which are then compiled into a library. EverWiki provides a text editor aimed at developers and LaTeX users to easily create technical notes.

General flow of EverWiki is as follows:
* Users register an account and may then create _notebooks_.
* A user populates notebooks with notes via a robust text editor.
* The notebook file tree stylistically similar to Wikipedia pages and provide for convenient browsing.
* DOMPurify is used to sanitize rendered HTML in their only two component locations. Do I feel lucky?

TODO: Fix undefined bug on note load. Good opportunity to run a load screen

The following routes exist in the API
# NOTES
* POST /api/note/
* GET /api/note/:noteId
* POST /api/note/:noteId/edit
* GET /api/note/:noteId/delete
# NOTEBOOKS
* POST /api/users/:userId/library (create new Notebook)
* GET /api/users/:userId/library (populate a user's library on session start)
* GET /api/notebook/:notebookId (delete notebook)
# SESSION
* POST /api/session (login)
* GET /api/session (restore session)
* DELETE /api/session (logout)
# USERS
* POST /api/users (sign up)

A database schematic can be found on the Wiki.
https://github.com/9ziggy9/EverWiki/wiki/Database-Schema
