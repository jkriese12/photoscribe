import React, { useState } from 'react';
import "./ScribeForm.css";

const ScribeForm = ({ Scribe, error }) => { 

    const [details, setDetails] = useState({ year: "", location: "", description:"" });

    const submitHandler = e => {
        e.preventDefault();

        Scribe(details);
    }

    return (  

        <div className="form-container">
            <form
                onSubmit={submitHandler}>  
        
            <div>
                <label for="FormControlInput1" className="form-label">Photo Year</label>
                <input type="email" className="form-control" id="FormControlInput1" onChange={e => setDetails({...details, year: e.target.value})} value={details.year}/>
            </div>
            <div>
                <label for="FormControlInput2" className="form-label">Photo Location</label>
                <input type="email" className="form-control" id="FormControlInput2" onChange={e => setDetails({...details, location: e.target.value})} value={details.location}/>
            </div>
            <div>
                <label for="FormControlTextarea1" className="form-label">Photo Details</label>
                <textarea className="form-control" id="FormControlTextarea1" rows="8" onChange={e => setDetails({...details, description: e.target.value})} value={details.description}></textarea>
            </div>
        </form>
        <br/>
        <button type="submit" className="btn btn-secondary btn-block">Add Text </button>
    </div>
    )
}

export default ScribeForm;
