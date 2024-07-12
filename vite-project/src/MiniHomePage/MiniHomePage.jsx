import React from 'react';
import './MiniHomePage.css';
import 'bootstrap/dist/css/bootstrap.css';

export default function MiniHomePage() {
  return (
    <div className="container mt-5 transparent-bg">
      <div className="text-center mb-5">
        <p id="teamName"><b>TEAM Ctrl + Alt + Glory...</b></p>
      </div>
      <div className="card p-4">
        <h5 className="card-title text-center mb-4 ltStyle"><b>Language Translator</b></h5>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="fromLanguage" className="form-label">From :</label>
            <div className="input-group">
              <input type="text" id="fromLanguage" className="form-control" placeholder="Enter From language" />
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="toLanguage" className="form-label">To :</label>
            <div className="input-group">
              <input type="text" id="toLanguage" className="form-control" placeholder="Enter To language" />
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-12">
            <label htmlFor="textToTranslate" className="form-label">Text to Translate:</label>
            <textarea id="textToTranslate" className="form-control" rows="3" placeholder="Enter text to translate"></textarea>
          </div>
        </div>
        <div className="text-center mb-3">
          <button className="btn btn-primary">Translate</button>
        </div>
        <div className="row mb-3">
          <div className="col-md-12">
            <label htmlFor="translationResult" className="form-label">Translation Result:</label>
            <textarea id="translationResult" className="form-control" rows="3" placeholder="Translation result" readOnly></textarea>
          </div>
        </div>
      </div>
    </div>  
  );
}
