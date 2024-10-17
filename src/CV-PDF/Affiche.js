import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from "react";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useEffect } from 'react';

import './AfficheCss/Affiche.css'; 


const Affiche = () => {
    const location = useLocation();
    const { PImg, FulName, JobTitle, Phone, Email, A_Propos, Formationlist, competenceList, Langagelist, SoftSkilslist, selected } = location.state || {};
    const [themeClass, setThemeClass] = useState('Blue');
    useEffect(() => {
        switch (selected) {
            case "Blue":
                setThemeClass('Blue');
                break;
            case "red":
                setThemeClass('Orange');
                break;
            case "balc":
                setThemeClass('Purple');
                break;
            case "withe":
                setThemeClass('Griv');
                break;
            default:
                setThemeClass('');
        }
    }, [selected]);
    const downloadPDF = () => {
        const input = document.getElementById('cv');
        
        html2canvas(input, { scale: 2 }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4'); 
    
            const pageWidth = pdf.internal.pageSize.width; 
            const pageHeight = pdf.internal.pageSize.height; 
            const canvasWidth = canvas.width;
            const canvasHeight = canvas.height;
    
            const imgWidth = pageWidth;
            const imgHeight = (canvasHeight * pageWidth) / canvasWidth;
    
            let heightLeft = imgHeight;
            let position = 0;

            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
            pdf.save(`${FulName}_CV.pdf`);
        });
    };
    

    return (
        <div style={{ backgroundImage: 'url("https://i.pinimg.com/736x/b7/3b/00/b73b00fad0a2f24f43739911da68741a.jpg")', backgroundSize: 'cover' }}>
            <div id="cv" className={`cv-container ${selected}`}>
                <header className="cv-header">
                    <img src={PImg} alt="Profile" className="profile-image" />
                    <div className="header-info">
                        <h1 className="name">{FulName}</h1>
                        <h2 className="job-title">{JobTitle}</h2>
                    </div>
                </header>
                <div className="contact-info">
                    <p><strong>Phone:</strong> {Phone}</p>
                    <p><strong>Email:</strong> {Email}</p>
                </div>
                <section className="about-section">
                    <h3>About</h3>
                    <p>{A_Propos}</p>
                </section>
                <section className="section">
                    <h3>Formation</h3>
                    <ul>
                        {Formationlist.map((e, index) =>
                            <li key={index}>{e}</li>
                        )}
                    </ul>
                </section>
                <section className="section">
                    <h3>Competences</h3>
                    <ul>
                        {competenceList.map((e, index) =>
                            <li key={index}>{e}</li>
                        )}
                    </ul>
                </section>
                <section className="section">
                    <h3>Languages</h3>
                    <ul>
                        {Langagelist.map((e, index) =>
                            <li key={index}>{e}</li>
                        )}
                    </ul>
                </section>
                <section className="section">
                    <h3>Soft Skills</h3>
                    <ul>
                        {SoftSkilslist.map((e, index) =>
                            <li key={index}>{e}</li>
                        )}
                    </ul>
                </section>
            </div>
            <button className="download-button" onClick={downloadPDF}>Download CV as PDF</button>
        </div>
    );
};

export default Affiche;
