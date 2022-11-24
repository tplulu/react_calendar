import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCalendar} from "@fortawesome/free-solid-svg-icons"

const Calendrier = (props) => {
    const d_today = new Date();
    let month_today = d_today.getMonth();
    let year_today = d_today.getFullYear();
    var day_today = String(d_today.getDate()).padStart(2, '0');
    var date_jour =day_today+'/'+month_today+'/'+year_today
    const annee = props.annee
    const mois = props.mois
    const newname = props.newname
    const nbjours = new Date(annee, mois+1, 0).getDate();
    var week1_new = []
    var week1 = []
    var week2 = []
    var week3 = []
    var week4 = []
    var week5 = []
    var week6 = []
    var semaine = 1

    for(let i=1; i <= nbjours; i++) {
        var lemois = mois
        const jour_sem = new Date(annee, lemois, i).getDay()
        if(semaine == 1) {
            week1.push(i)
        }
        if(semaine == 2) {
            week2.push(i)
        }
        if(semaine == 3) {
            week3.push(i)
        }
        if(semaine == 4) {
            week4.push(i)
        }
        if(semaine == 5) {
            week5.push(i)
        }
        if(semaine == 6) {
            week6.push(i)
        }
        if (jour_sem==0) {
            semaine = semaine+1
        }
    }
    let taille_week1 = week1.length;
    let taille_week5 = week5.length;
    let taille_week6 = week6.length;
    let cpt =0
    let index =0
    if (taille_week1 == 7) {
        week1_new=week1
    } else {
        while (taille_week1 < 7) {
            week1_new.push(-1)
            cpt= cpt +1
            taille_week1 = taille_week1 +1
        }
        while (cpt < 7 ) {
            week1_new.push(week1[index])
            index = index + 1
            cpt = cpt + 1
        }
    }
    
    while(taille_week5<7) {
        week5.push(-1)
        taille_week5 = taille_week5+1
    }
    if (taille_week6 ==0) {
        while (taille_week6<7) {
            week6.push(-2)
            taille_week6 = taille_week6+1
        }
    }
    else{ while (taille_week6<7) {
                week6.push(-1)
                taille_week6 = taille_week6+1
            }
        }
    return(
        
        <div className="bg-dark container col-sm-12" style={{marginBottom : '20px'}}>
            {mois}/
            {nbjours}
            <div className="row"> 
                <div className="col-sm border border-info">Lundi</div>
                <div className="col-sm border border-info">Mardi</div>
                <div className="col-sm border border-info">Mercredi</div>
                <div className="col-sm border border-info">Jeudi</div>
                <div className="col-sm border border-info">Vendredi</div>
                <div className="col-sm border border-info">Samedi</div>
                <div className="col-sm border border-info">Dimanche</div>
            </div>
            <div className="row">
        {
        week1_new.map(function (lejours1, index) {
            const saved = localStorage.getItem(lejours1+'/'+mois+'/'+annee);
            var initialValue = JSON.parse(saved);
            var classbtn='col-sm p-3 btn border border-info'
            if (initialValue !== null ) classbtn='col-sm p-3 badge  eventDate btn border border-info ' 
            if (date_jour=== lejours1+'/'+mois+'/'+annee )classbtn=classbtn+' todayDate'
            if (lejours1 == -1) {
                return(
                    <div className="col-sm  p-3 border border-info"> </div>
                )
            }
            return (
                <div className={classbtn} style={{color : 'white'}} onClick={() => props.fonction(lejours1, mois, annee)}> {lejours1} </div>
               )
            })}
        </div>
        <div className="row">
        {week2.map(function (lejours2, index) { 
            const saved = localStorage.getItem(lejours2+'/'+mois+'/'+annee);
            var initialValue = JSON.parse(saved);
            var classbtn='col-sm p-3 btn border border-info'
            if (initialValue !== null ) classbtn='col-sm p-3 badge  eventDate btn border border-info'
            if (date_jour=== lejours2+'/'+mois+'/'+annee )classbtn=classbtn+' todayDate'
            return (
                <div className={classbtn} style={{color : 'white'}} onClick={() => props.fonction(lejours2, mois, annee)}> {lejours2} </div>
               )
            })}
        </div>
        <div className="row">
        {week3.map(function (lejours3, index) { 
            const saved = localStorage.getItem(lejours3+'/'+mois+'/'+annee);
            var initialValue = JSON.parse(saved);
            var classbtn='col-sm p-3 btn border border-info'
            if (initialValue !== null ) classbtn='col-sm p-3 badge  eventDate btn border border-info'
            if (date_jour=== lejours3+'/'+mois+'/'+annee )classbtn=classbtn+' todayDate'
            return (
                <div className={classbtn}  style={{color : 'white'}} onClick={() => props.fonction(lejours3, mois, annee)}> {lejours3} </div>
               )
            })}
        </div>
        <div className="row">
        {week4.map(function (lejours4, index) {
            const saved = localStorage.getItem(lejours4+'/'+mois+'/'+annee);
            var initialValue = JSON.parse(saved);
            var classbtn='col-sm p-3 btn border border-info'
            if (initialValue !== null ) classbtn='col-sm p-3 badge  eventDate btn border border-info' 
            if (date_jour=== lejours4+'/'+mois+'/'+annee )classbtn=classbtn+' todayDate'
            return (
                <div className={classbtn} style={{color : 'white'}} onClick={() => props.fonction(lejours4, mois, annee)} > {lejours4} </div>
               )
            })}
        </div>
        <div className="row">
        {week5.map(function (lejours5, index) { 
            const saved = localStorage.getItem(lejours5+'/'+mois+'/'+annee);
            var initialValue = JSON.parse(saved);
            var classbtn='col-sm p-3 btn border border-info'
            if (initialValue !== null ) classbtn='col-sm p-3 badge  eventDate btn border border-info'
            if (date_jour=== lejours5+'/'+mois+'/'+annee )classbtn=classbtn+' todayDate'
            if (lejours5 == -1) {
                return(
                    <div className="col-sm  p-3 border border-info"> </div>
                )
            }
            return (
                <div className={classbtn} style={{color : 'white'}} onClick={() => props.fonction(lejours5, mois, annee)}> {lejours5} </div>
               )
            })
        }
        </div>
        <div className="row">
        {week6.map(function (lejours6, index) { 
            const saved = localStorage.getItem(lejours6+'/'+mois+'/'+annee);
            var initialValue = JSON.parse(saved);
            var classbtn='col-sm p-3 btn border border-info'
            if (initialValue !== null ) classbtn='col-sm p-3 badge  eventDate btn border border-info'
            if (date_jour=== lejours6+'/'+mois+'/'+annee )classbtn=classbtn+' todayDate'
            if (lejours6 == -2) {
                return(
                    true
                )
            }
            if (lejours6 == -1) {
                return(
                    <div className="col-sm  p-3 border border-info"> </div>
                )
            }
            return (
                <div className={classbtn} style={{color : 'white'}} onClick={() => props.fonction(lejours6, mois, annee)}> {lejours6} </div>
               )
            })
        }
        </div>
            
        </div>
    )
}

export default Calendrier