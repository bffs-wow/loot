export enum AttendancePoints {
  None = 0,
  Partial = 0.25,
  Full = 0.5
}
export interface Attendance {
  date: Date;
  points: AttendancePoints;
}

export function parsePoints(val: string): AttendancePoints {
  if(val === '0.25') {
    return AttendancePoints.Partial;
  } else if (val === '0.5') {
    return AttendancePoints.Full;
  }
  return AttendancePoints.None;
}