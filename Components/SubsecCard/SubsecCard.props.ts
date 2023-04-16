import { DetailedHTMLProps, HTMLAttributes } from "react";




export interface SubsectionCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    title: string
    info: string
    children: any
    color: string
}