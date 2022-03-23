export default interface Note {
    id?: number
    title: string
    author: string // Foreign key????????
    content: string
    timestamp?: Date | number | string 
}