export type RsvpStatus = 'Yes' | 'No' | 'Maybe';

export interface Player {
  id: string;
  name: string;
}

export interface RsvpEntry {
  player: Player;
  status: RsvpStatus;
}

export interface RsvpCounts {
  total: number;
  confirmed: number;
  declined: number;
}

export interface Logger {
  log(message: string): void;
  error(message: string): void;
}

export class RsvpService {
  private rsvpMap: Map<string, RsvpEntry>;

  constructor(private logger: Logger, initialEntries?: RsvpEntry[]) {
    this.rsvpMap = new Map<string, RsvpEntry>();
    if (initialEntries) {
      initialEntries.forEach(entry => this.addOrUpdateRsvp(entry));
    }
    this.logger.log('RsvpService initialized.');
  }

// asynchronous to allow for future I/O
  public async addOrUpdateRsvp(entry: RsvpEntry): Promise<void> {
    if (!entry || !entry.player || !entry.player.id || !entry.status) {
      this.logger.error('Invalid entry.');
      return;
    }

    // perform database async validations.
    this.rsvpMap.set(entry.player.id, entry);
    this.logger.log(`RSVP updated for ${entry.player.name}: "${entry.status}"`);
  }

  public async getConfirmedAttendees(): Promise<RsvpEntry[]> {
    return Array.from(this.rsvpMap.values()).filter(entry => entry.status === 'Yes');
  }

  public async getRsvpCounts(): Promise<RsvpCounts> {
    let confirmed = 0;
    let declined = 0;
    this.rsvpMap.forEach(entry => {
      if (entry.status === 'Yes') confirmed++;
      if (entry.status === 'No') declined++;
    });
    return {
      total: this.rsvpMap.size,
      confirmed,
      declined,
    };
  }
}
