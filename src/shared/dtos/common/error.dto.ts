export type ErrorResponse = {
  code: string;
  message: string;
  group?: string;
  timestamp?: string; // ISO 8601 format
};
