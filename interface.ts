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
        dates:Date[],
}