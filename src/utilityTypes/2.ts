interface Book {
    id: number;
    title: string;
    author: string;
    price: number;
}

const book: Book = {
    id: 1,
    title: 'Clean Code',
    author: 'Robert Martin',
    price: 49
}

function updateBook(updatedProperties: Omit<Book, 'id'>) {
    return { ...book, ...updatedProperties };
}

const updatedProperties = {
    title: 'Clean Code',
    author: 'Robert Martin',
    price: 69
}

console.log(updateBook(updatedProperties));
