import React from 'react';
import Nav from '../components/nav.jsx';

class Dashboard extends React.Component{

    render(){

        return(
            <div>
                <Nav/>

                <div className="container">
                    <div className="block--row">
                        <div className="block block--half">
                            <p>
                                Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken.
                            </p>
                        </div>
                        <div className="block block--half">
                            <p>
                                Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren 60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten.
                            </p>
                        </div>
                    </div>
                    <div className="block block--full">
                        <p>
                            Het is al geruime tijd een bekend gegeven dat een lezer, tijdens het bekijken van de layout van een pagina, afgeleid wordt door de tekstuele inhoud.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;
