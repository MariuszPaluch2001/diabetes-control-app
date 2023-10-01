export interface GlucoseLevel {
    Id: string;
    value: number;
    timestamp: Date;
    unitName: string;
}

export interface GlucoseLevelPost {
    value: number;
    timestamp: Date;
    unit: string;
}

export interface GlucoseLevelType {
    value: string;
    label: string;
}