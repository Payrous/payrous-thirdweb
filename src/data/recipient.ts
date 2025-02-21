interface Recipient {
    id: number; 
    initial: string;
    name: string;
    recipient: number;
}

export const recipient: Recipient[] = [
    {
        id: 1,
        initial: 'C',
        name: 'Confab Company',
        recipient: 500,
    },
    {
        id: 2,
        initial: 'P',
        name: 'Platinum Company',
        recipient: 2125,
    }
]