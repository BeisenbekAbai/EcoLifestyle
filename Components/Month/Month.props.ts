import { DetailedHTMLProps, HTMLAttributes } from "react";




export interface MonthProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    start: number
    daysnum: number
    monthname: string
    monthnum: number
    eventsList: any
}