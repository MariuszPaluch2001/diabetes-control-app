export interface InsulineDoze {
    Id: string;
    units: number;
    timestamp: Date;
    typeName: string;
    description: string;
}

export interface InsulineDozePost {
    units: number;
    timestamp: Date;
    type: string;
    description: string;
}

export interface InsulineDozeType {
    value: string;
    label: string;
}