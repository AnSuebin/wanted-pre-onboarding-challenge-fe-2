// @ts-check
const {
  createTodo,
  updateTodo,
  deleteTodo,
  deleteAllTodo,
  deleteTagTodo,
  deleteTagAllTodo,
} = require("./controlTodoList");

/**
 * @file index.js is the root file for this example app
 * @author AnSoobin
 */

/**
 * Todo
 * @typedef {Object} Todo
 * @property {number} id - Todo ID
 * @property {string} content - Todo content
 * @property {boolean} status - Todo status
 * @property {string} category - Todo category
 * @property {string} [tag] - Todo tag (optional)
 */

/**
 * TodoList
 * @type {Array<object>}
 */
