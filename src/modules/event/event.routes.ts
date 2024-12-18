import { Router } from 'express';
import eventController from './event.controller';

const eventRoutes = Router();

eventRoutes.post('/', eventController.create);
eventRoutes.get('/', eventController.list);
eventRoutes.get('/:id', eventController.show);
eventRoutes.patch('/:id', eventController.update);
eventRoutes.get('/:id/ticketTypes', eventController.getTicketTypes);

export default eventRoutes;
