import { Request, Response } from 'express';
import { RsvpService, RsvpEntry } from '../services/rsvp.service';

export class RsvpController {
  constructor(private rsvpService: RsvpService) {}

  public addOrUpdateRsvp = async (req: Request, res: Response): Promise<void> => {
    try {
      const entry: RsvpEntry = req.body;
      await this.rsvpService.addOrUpdateRsvp(entry);
      res.status(200).json({ message: 'RSVP updated!' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to update!' });
    }
  };

  public getConfirmedAttendees = async (req: Request, res: Response): Promise<void> => {
    try {
      const attendees = await this.rsvpService.getConfirmedAttendees();
      res.status(200).json(attendees);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve!' });
    }
  };

  public getRsvpCounts = async (req: Request, res: Response): Promise<void> => {
    try {
      const counts = await this.rsvpService.getRsvpCounts();
      res.status(200).json(counts);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve!' });
    }
  };
}
