import LibraryApplicationBackend from './LibraryApplicationBackend'
export const addBook = async(book)=>{
    const {data} = await LibraryApplicationBackend.post('/book/add',{...book});
    return data;
}

export const getAllBooks = async()=>{
    const {data} = await LibraryApplicationBackend.get('/book/all');
    return data;
}