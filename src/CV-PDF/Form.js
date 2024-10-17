import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './CV-Hme.css';

const Form = () => {
    const [PImg, setPImg] = useState("");
    const [FulName, setFulName] = useState("");
    const [JobTitle, setJobTitle] = useState("");
    const [Phone, setPhone] = useState("");
    const [Email, setEmail] = useState("");
    const [A_Propos, setA_PROPOS] = useState("");
    const [Formation, setFormation] = useState("");
    const [Formationlist, setFormationlist] = useState([]);
    const [Competences, setCompetences] = useState("");
    const [competenceList, setCompetenceList] = useState([]);
    const [Langage, setLangage] = useState("");
    const [Langagelist, setLangagelist] = useState([]);
    const [SoftSkils, setSoftSkils] = useState("");
    const [SoftSkilslist, setSoftSkilslist] = useState([]);

    const [selected, setSelected] = useState('Blue');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const options = [
        { img: '#007BFF', label: 'Blue' },
        { img: '#ff8800', label: 'Orange' },
        { img: '#8800ff', label: 'Purple' },
        { img: '#ff0066', label: 'Griv' }
    ];

    const handleSelect = (label) => {
        setSelected(label);
        setIsDropdownOpen(false); 
    };
    const navigate = useNavigate();

    const handleSbmit = (event) => {
        event.preventDefault();
        navigate("/Affiche", {
            state: {
                PImg,
                FulName,
                JobTitle,
                Phone,
                Email,
                A_Propos,
                Formationlist,
                competenceList,
                Langagelist,
                SoftSkilslist,
                selected
            }
        });
    };

    const addCompetences = () => {
        if (Competences.trim()) {
            setCompetenceList([...competenceList, Competences.trim()]);
            setCompetences("");
        }
    };

    const addFormation = () => {
        if (Formation.trim()) {
            setFormationlist([...Formationlist, Formation.trim()]);
            setFormation("");
        }
    };

    const addLangage = () => {
        if (Langage.trim()) {
            setLangagelist([...Langagelist, Langage.trim()]);
            setLangage("");
        }
    };

    const addSoftSkils = () => {
        if (SoftSkils.trim()) {
            setSoftSkilslist([...SoftSkilslist, SoftSkils.trim()]);
            setSoftSkils("");
        }
    };

    return (
        <div style={{ backgroundImage: 'url("https://i.pinimg.com/736x/b7/3b/00/b73b00fad0a2f24f43739911da68741a.jpg")', backgroundSize: 'cover',backgroundPosition: 'center',height:'230vh'}}>
            <form onSubmit={handleSbmit} style={{ display: "flex", justifyContent: "center" }}>
                <div >
                    <label>Profile Picture:</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setPImg(URL.createObjectURL(e.target.files[0]))}
                    />
                    <label>Full Name:</label>
                    <input
                        type="text"
                        value={FulName}
                        onChange={(e) => setFulName(e.target.value)} 
                    />
                    <label>Job Title:</label>
                    <input
                        type="text"
                        value={JobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                    />
                    <label>Phone:</label>
                    <input
                        type="text"
                        value={Phone}
                        onChange={(e) => setPhone(e.target.value)} 
                    />
                    <label>Email:</label>
                    <input
                        type="email"
                        value={Email}
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    <label>About:</label>
                    <textarea
                        value={A_Propos}
                        onChange={(e) => setA_PROPOS(e.target.value)}
                    />

                    <label>Formation:</label>
                    <input
                        class="w90"
                        type="text"
                        value={Formation}
                        onChange={(e) => setFormation(e.target.value)} 
                    />
                    <button type="button" className="buttons" onClick={addFormation}>+</button>
                    <ul>
                        {Formationlist.map((formation, index) => (
                            <li key={index}>{formation}</li>
                        ))}
                    </ul>

                    <label>Competences:</label>
                    <input
                        class="w90"
                        type="text"
                        value={Competences}
                        onChange={(e) => setCompetences(e.target.value)}
                    />
                    <button type="button" className="buttons" onClick={addCompetences}>+</button>
                    <ul>
                        {competenceList.map((competence, index) => (
                            <li key={index}>{competence}</li>
                        ))}
                    </ul>

                    <label>Languages:</label>
                    <input
                        class="w90"
                        type="text"
                        value={Langage}
                        onChange={(e) => setLangage(e.target.value)}
                    />
                    <button type="button" className="buttons" onClick={addLangage}>+</button>
                    <ul>
                        {Langagelist.map((langage, index) => (
                            <li key={index}>{langage}</li>
                        ))}
                    </ul>

                    <label>Soft Skills:</label>
                    <input
                        class="w90"
                        type="text"
                        value={SoftSkils}
                        onChange={(e) => setSoftSkils(e.target.value)}
                    />
                    <button type="button" className="buttons" onClick={addSoftSkils}>+</button>
                    <ul>
                        {SoftSkilslist.map((softSkill, index) => (
                            <li key={index}>{softSkill}</li>
                        ))}
                    </ul>
                    <p>Select your design CV</p>
                    <div className="custom-select" style={{ textAlign: "center", width: "100%" }}>
                        <div style={{ textAlign: "center" }} className="select-selected" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                            {selected}
                        </div>
                        {isDropdownOpen && (
                            <div className="select-items" style={{ textAlign: "center" }}>
                                {options.map((option, index) => (
                                    <div key={index} onClick={() => handleSelect(option.label)}>
                                        <div style={{ backgroundColor: option.img, width: "20px", height: "20px" }}></div>
                                        {option.label}
                                    </div>
                                ))}

                            </div>
                        )}
                    </div>
                    <div className="sub">
                        <input className="buttonSubmit" type="submit" value="Submit" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Form;
