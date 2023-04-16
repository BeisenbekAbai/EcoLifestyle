import { DetailedHTMLProps, HTMLAttributes } from "react";





export interface NewsCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    image: string
    publishedAt: string
    title: string
    url: string
}