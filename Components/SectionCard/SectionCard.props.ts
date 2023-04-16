import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";




export interface SectionCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    color: string
    children: ReactNode
    article: string
    info: string
    pageName: string
}