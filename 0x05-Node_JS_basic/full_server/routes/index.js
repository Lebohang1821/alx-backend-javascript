import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

/**
 * It binds routes to appropriate handler in
 * given Express application.
 * @param {Express} app The Express application.
 */
const mapRoutes = (app) => {
  app.get('/', AppController.getHomepage);
  app.get('/students', StudentsController.getAllStudents);
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

export default mapRoutes;
module.exports = mapRoutes;
