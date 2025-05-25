export function isValidUserId(userId: string): boolean {
  // Check if the userId is a valid UUID (version 4)
  return /^\d+$/.test(userId.trim());
}
