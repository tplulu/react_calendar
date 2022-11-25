import { useState, useEffect } from "react"; 
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowRight} from "@fortawesome/free-solid-svg-icons"
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons"
import Calendrier from './Calendrier';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {useRef} from 'react';

const Boutons = () => {
    const [actualise, setactualise] = useState("");
    const [titre, settitre] = useState("");
    const [comment, setcomment] = useState("");
    const inputRef = useRef(null);
    const inputRefComment = useRef(null);
    const Modal = (jour, mois, annee, name) => {
    const iddate = jour+'/'+mois+'/'+annee
    const saved = localStorage.getItem(iddate);
    var initialValue=[]
    initialValue = JSON.parse(saved);
    if (initialValue === null ) initialValue=[]
        function saveform(name) {
            setactualise("no")
            const iddate = jour+'/'+mois+'/'+annee
            const titre = inputRef.current.value
            const comment = inputRefComment.current.value
            const MySwalconfirm = withReactContent(Swal)
            if(titre != "") {
                var form = [titre, comment]
                var newliste = [...initialValue, form]
                localStorage.setItem(iddate, JSON.stringify(newliste));
                MySwalconfirm.fire({
                    icon: 'success',
                    title: "L'événement à bien été ajouté !",
                    didClose: () => {
                        setMois(mois+1-1)
                        setAnnee(annee)
                        
                        setactualise("yes")
                    }
                })
            }
            else {
                MySwalconfirm.fire({
                    icon: 'error',
                    title: "Merci de remplir au moins le titre "
                })
            }
        }
        const MySwal = withReactContent(Swal)
        MySwal.fire({
            title: <div><p>RDV pour le {jour}/{mois+1}/{annee}</p></div>,
            html: <div><form>
            <input
                ref={inputRef}
                type="text"
                onChange ={(e) => settitre(e.target.value)}
                placeholder="Titre"
                className="form-control"
                aria-label="titre"
            />
            <br></br>
            <input
                ref={inputRefComment}
                type="textarea"
                className="form-control"
                onChange ={(e) => setcomment(e.target.value)}
                placeholder="Commentaire"
                aria-label="comment"
            />
            <br></br>
            <input type="submit" className="btn btn-success" value="Ajouter un Rendez-vous" onClick={() => saveform(name)}></input>
            <div className="row col-sm-12" style={{overflowX: 'auto', width: '99%', justifyContent: 'center'}}>
            {initialValue.map(function (event, index) { 
                return (
                    <div style={{marginTop : '20px', height : '250px', marginLeft: '12px', marginRight: '10px'}} className=" col-sm-5 border border-info ">
                    <h2>{event[0]} </h2>
                    <div>{event[1]}</div> 
                    <div>Le {jour}/{mois+1}/{annee}</div>
                    </div>
                )
            })
            }
            </div>
            </form>
            </div>,
          })
        
    }
    const d = new Date();
    let month = d.getMonth();
    let year = d.getFullYear();
    d.setMonth(month)
    const name = d.toLocaleString('fr-FR', { month: 'long' })
    const [annee, setAnnee] = useState(year);
    const [mois, setMois] = useState(month);
    const [nomMois, setnomMois] = useState(name);
    function getnommonth(numMonth) {
        if(numMonth<0) {
            numMonth=11
        }
        if(numMonth>11) {
            numMonth=0
        }
        let date = new Date();
        date.setMonth(numMonth)
        let newName = date.toLocaleString('fr-FR', { month: 'long' })
        setMois(numMonth)
        setnomMois(newName)
        return true;
    }
    return ( <div className="w-100">
        
        <div className="bg-dark container w-25">
            <div className="row col-sm-12">
                <div className="col-sm-4"><button className="btn btn-info" onClick={() => setAnnee(annee - 1)}> <FontAwesomeIcon icon={faArrowLeft} /> </button></div>
                <div className="col-sm-4"><span>{annee} </span></div>
                <div className="col-sm-4"><button className="btn btn-info" onClick={() => setAnnee(annee + 1)} > <FontAwesomeIcon icon={faArrowRight} /> </button></div>
            </div>
            
            <div className="row col-sm-12">
            
                <div className="col-sm-4"><button className="btn btn-info" onClick={() => getnommonth(mois-1)}> <FontAwesomeIcon icon={faArrowLeft} />  </button> </div>
                <div className="col-sm-4"><span>{nomMois} </span></div>
                <div className="col-sm-4"><button className="btn btn-info" onClick={ () => getnommonth(mois+1)}> <FontAwesomeIcon icon={faArrowRight} /> </button></div>
            </div>
            
        </div>
        <Calendrier annee={annee} mois={mois} fonction={Modal} />
        </div>
    )
}

export default Boutons
