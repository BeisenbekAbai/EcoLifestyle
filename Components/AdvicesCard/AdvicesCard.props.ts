import { DetailedHTMLProps, HTMLAttributes } from "react";




export interface AdvicesCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    image: string
    title: string
    text: any
}