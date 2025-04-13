import { Router } from 'express';
import { RsvpController } from '../controllers/rsvp.controller';

export const createRsvpRouter = (rsvpController: RsvpController): Router => {
  const router = Router();

  // POST endpoint to create or update RSVP.
  router.post('/', rsvpController.addOrUpdateRsvp);

  // GET endpoint for confirmed attendees.
  router.get('/confirmed', rsvpController.getConfirmedAttendees);

  // GET endpoint for RSVP counts.
  router.get('/counts', rsvpController.getRsvpCounts);

  return router;
};
