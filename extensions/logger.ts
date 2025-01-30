import winston from 'winston';

const { combine, timestamp, printf, errors } = winston.format;

const logFormat = printf(({ level, message, timestamp, error }) => {
  return `[${timestamp}] ${level}: ${message} ${error ? `- ${error.message}` : ''}`;
});

const logger = winston.createLogger({
  level: 'info',
  format: combine(
    timestamp(),
    errors({ stack: true }),
    logFormat
  ),
  transports: [
    new winston.transports.Console({
      format: combine(
        winston.format.colorize(),
        logFormat
      ),
    }),
    new winston.transports.File({ filename: 'logs/app.log' })
  ],
});

export default logger;
