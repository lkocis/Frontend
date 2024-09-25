import './AuthorInfo.css';
import React, { useState } from 'react';
import AddAuthorForm from './AddAuthorForm';
import AuthorInfo from './AuthorInfo';
import GetAuthorById from './GetAuthorById';
import UpdateAuthor from './UpdateAuthor';
import { handleDeleteAuthor } from './HandleDeleteAuthor';

function App() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);
    const [authorsList, setAuthorsList] = useState([]); 
    const [selectedAuthor, setSelectedAuthor] = useState(null); // Changed to null

    return (
        <>
            <h1>Authors List</h1>
            <table className="authors-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Date of Birth</th>
                        <th>Image</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {authorsList.length > 0 ? (
                        authorsList.map((author) => (
                            <tr key={author.id}>
                                <td>{author.name}</td>
                                <td>{author.dob}</td>
                                <td>
                                    <img src={author.image} alt={author.name} className="author-table-image" />
                                </td>
                                <td>
                                    <button onClick={() => setSelectedAuthor(author)}>Edit</button>
                                    <button onClick={() => handleDeleteAuthor(index, setIndex, authorsList, setAuthorsList)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">No authors available</td>
                        </tr>
                    )}
                </tbody>
            </table>

            <AddAuthorForm authors={authorsList} setList={setAuthorsList} />

            {selectedAuthor && (
                <UpdateAuthor 
                    authors={authorsList} 
                    setList={setAuthorsList} 
                    selectedAuthor={selectedAuthor} 
                    setSelectedAuthor={setSelectedAuthor} 
                />
            )}

            <h3>Find Author</h3>
            <GetAuthorById setSelectedAuthor={setSelectedAuthor} />
        </>
    );
}

export default App;


/*function App() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);
    const [authorsList, setAuthorsList] = useState([]); 
    const [selectedAuthor, setSelectedAuthor] = useState(authorsList);

    let author = authorsList[index]; 

    return (
        <>
            <button onClick={() => handleNextClick(setIndex, authorsList)} className='buttonNext'>Next</button>

            <button onClick={() => handlePreviousClick(setIndex, authorsList)} className='buttonPrevious'>Previous</button>

            {authorsList.length > 0 ? 
            (
                <AuthorInfo author={author}/>
            ) : 
            (
                <p>No authors available</p>
            )}

            <button onClick={() => handleMoreClick(setShowMore)} className='button-ShowMore'>{showMore ? 'Hide' : 'Show'} details</button>
            {showMore && <p>{author.bio}</p>}

            <AddAuthorForm authors = {authorsList} setList = {setAuthorsList}/>

            <br/>
            {selectedAuthor && (<UpdateAuthorForm authors={authorsList} setList={setAuthorsList} selectedAuthor={selectedAuthor} setSelectedAuthor={setSelectedAuthor} />)}
            <ul>
                {authorsList.map(author => (
                    <li key={author.id}>
                        {author.name} 
                        <button onClick={() => setSelectedAuthor(author)}>Edit</button>
                        <button onClick={() => handleDeleteAuthor(index, setIndex, authorsList, setAuthorsList)} className='button-delete'>Delete</button>
                    </li>
                ))}
            </ul>
        <br/>
        <h3>Find Author</h3>
         <GetAuthorById setSelectedAuthor={setSelectedAuthor} />
    </>
    );
}

export default App;*/

 


