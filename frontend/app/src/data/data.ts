export const rows:Rows = [
    {
        id : 'up20-un30',
        generation : "20~30",
        answers : [0.18,0.22,0.37,0.23]
    },
    {
        id : 'up30-un40',
        generation : "30~40",
        answers : [0.18,0.22,0.37,0.23]
    }
]

export type Row = {
    id : string,
    generation : string,
    answers : number[]
}

export type Rows = Row[]