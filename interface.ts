export interface DatePick{
        startDate: Date,
        endDate:Date,
}

export interface Guests{
        adults:number,
        children:number,
        infants:number,
        pets:number,
}

export interface FlexDate{
        duration:number,
        dates:number[][],
}

export interface ExperiencesDate{
        startDate:Date,
        endDate:Date,
}

export interface sampleTabData{
        from:number,
        to:number,
        id:string,
}

export interface sampleTab{
        tabs: sampleTabData[]
}