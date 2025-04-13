import express from 'express';
import bodyParser from 'body-parser';
import { ConsoleLogger } from './utils/logger';
import { RsvpService } from './services/rsvp.service';
import { RsvpController } from './controllers/rsvp.controller';
import { createRsvpRouter } from './routes/rsvp.routes';

const app = express();
const port = process.env.PORT || 5001;

// Middleware setup.
app.use(bodyParser.json());

// Dependency Injection.
const logger = new ConsoleLogger();
const rsvpService = new RsvpService(logger);
const rsvpController = new RsvpController(rsvpService);

app.use('/rsvp', createRsvpRouter(rsvpController));

// Root Health Check.
app.get('/', (req, res) => {
  res.status(200).send('Gametime Hero RSVP API is up and running!');
});

app.listen(port, () => {
  logger.log(`Server running on port ${port}`);
});
