import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";




export interface DayProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    info_date: string
    info_event: string
    children: ReactNode
}