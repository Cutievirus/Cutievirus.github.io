export class TimeInterval{
    private ms:number;
    constructor(ms:number){
        this.ms=ms;
    }
    get milliseconds(){ return this.ms; }
    get seconds(){ return this.ms/1000; }
    get minutes(){ return this.seconds/60; }
    get hours(){ return this.minutes/60; }
    get days(){ return this.hours/24; }
    get weeks(){ return this.days/7; }
    get months(){ return this.years/12; }
    get years(){ return this.days/365; }
    after(date:Date){
        return new Date(date.getTime()+this.ms);
    }
    before(date:Date){
        return new Date(date.getTime()-this.ms);
    }
    afterNow(){
        return this.after(new Date());
    }
    beforeNow(){
        return this.before(new Date());
    }

    toString(){
        // TODO: I can get more intuitive intervals by converting to a Date and subtracting the time units from each other
        let time:TimeInterval = this;
        let times:string[] = [];
        if(time.years>=1) {times.push(`${time.years} ${time.years>1?'years':'year'}`);}
        time = new TimeInterval(time.ms%years(1).ms);
        if(time.months>=1) times.push(`${time.months} ${time.months>1?'months':'month'}`);
        time = new TimeInterval(time.ms%months(1).ms);
        if(time.weeks>=1) times.push(`${time.weeks} ${time.weeks>1?'weeks':'week'}`);
        time = new TimeInterval(time.ms%weeks(1).ms);
        if(time.days>=1) times.push(`${time.days} ${time.days>1?'days':'day'}`);
        time = new TimeInterval(time.ms%days(1).ms);
        if(time.hours>=1) times.push(`${time.hours} ${time.hours>1?'hours':'hour'}`);
        time = new TimeInterval(time.ms%hours(1).ms);
        if(time.minutes>=1) times.push(`${time.minutes} ${time.minutes>1?'minutes':'minute'}`);
        time = new TimeInterval(this.ms%minutes(1).ms);
        if(time.seconds>=1) times.push(`${time.seconds} ${time.seconds>1?'seconds':'second'}`);
        time = new TimeInterval(time.ms%seconds(1).ms);
        if(time.milliseconds>=1) times.push(`${time.milliseconds} ${time.milliseconds>1?'milliseconds':'millisecond'}`);
        return times.join(' ');
    }

    static get zero(){ return zero; }
}

const zero = Object.freeze(new TimeInterval(0));

export const seconds = (n:number)=>new TimeInterval(n*1000);
export const minutes = (n:number)=>seconds(60*n);
export const hours = (n:number)=>minutes(60*n);
export const days = (n:number)=>hours(24*n);
export const weeks = (n:number)=>days(7*n);
export const months = (n:number)=>days(30*n);
export const years = (n:number)=>days(365*n);

export const timeBetween = (start:Date,end:Date)=>{
    return new TimeInterval(end.getTime()-start.getTime());
}
export const timeSince = (start:Date)=>{
    return timeBetween(start,new Date());
}
export const timeUntil = (end:Date)=>{
    return timeBetween(new Date(),end);
}