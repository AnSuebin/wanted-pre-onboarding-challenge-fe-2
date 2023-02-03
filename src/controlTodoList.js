/**
 * ControlTodo module
 * @module controlTodoList
 */

/**
 * Create todo
 * @param {object} todo - Todo
 * @param {string} todo.content - Todo content
 * @param {string} todo.category - Todo category
 * @param {string} [todo.tag] - Todo tag (optional)
 * @returns {Array<object>} - TodoList
 */
exports.createTodo = (todo) => {};

/**
 * Update todo
 * @param {number} id - Todo id
 * @param {object} todo - Todo
 * @param {string} todo.content - Todo content
 * @param {string} todo.category - Todo category
 * @param {string} [todo.tag] - Todo tag (optional)
 * @param {boolean} status - Todo status
 * @returns {Array<object>} - TodoList
 */
exports.updateTodo = (id) => {};

/**
 * Delete todo
 * @param {number} id - Todo id
 * @returns {Array<object>} - TodoList
 */
exports.deleteTodo = (id) => {};

/**
 * DeleteAll todo
 * @returns {Array<object>} - TodoList
 */
exports.deleteAllTodo = () => {};

/**
 * DeleteTag todo
 * @param {number} id - Todo id
 * @param {object} todo - Todo
 * @param {string} todo.tag - Todo tag
 * @returns {Array<object>} - TodoList
 */
exports.deleteTagTodo = () => {};

/**
 * DeleteTagAll todo
 * @param {number} id - Todo id
 * @returns {Array<object>} - TodoList
 */
exports.deleteTagAllTodo = () => {};
