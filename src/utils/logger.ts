export interface Logger {
    log(message: string): void;
    error(message: string): void;
  }
  
  export class ConsoleLogger implements Logger {
    log(message: string): void {
      console.log(`[INFO] ${message}`);
    }
    error(message: string): void {
      console.error(`[ERROR] ${message}`);
    }
  }
  