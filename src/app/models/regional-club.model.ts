export interface RegionalClub {
  name: string;
  mapUrl: string;
  addressLine1: string;
  addressLine2: string;
  addressLine3: string;
  scheduleText: string; // Supports \n for line breaks
  email?: string;
}
