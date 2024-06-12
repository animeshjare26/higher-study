import React from 'react';
import './QuestionStyles.css';

export default function QuestionForm() {
    return (
        <div className="form-container">
            <h1>Got a Query?</h1>
            <form>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="Subject" />
                <textarea placeholder="Query" rows="4"></textarea>
                <button className='btn'>Submit</button>
            </form>
        </div>
    );
}



// const [question, setQuestion] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         alert('Submitted successfully');
//         setQuestion('');
//     };



/* <div className="question-form-container">
            <div className="question-form mt-5">
                <h2>Have a Question?</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="questionInput" className="form-label">Your Question</label>
                        <input
                            type="text"
                            className="form-control"
                            id="questionInput"
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div> */