

import React, { Component } from 'react'
import "./weddingCard.css"
import * as jsPDF from 'jspdf'
import html2canvas from "html2canvas"
import { connect } from "react-redux";

class WeddingCard extends Component {
    constructor(props) {
        super(props)
    }

    printDocument() {
        const input = document.getElementById('WeddingCard');
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                pdf.addImage(imgData, 'JPEG', 25, 40);
                // pdf.output('dataurlnewwindow');
                pdf.save("download.pdf");
            })
            ;
    }
    render() {
        console.log(this.props)
        return (
            <div className="container">
                <div className="row">
                    <div className="col-7">
                        <div className="WeddingCard" div id="WeddingCard">
                            <h3>Our wedding day</h3>
                            <h2>{this.props.cardReservation.fullName}<span> & </span>{this.props.cardReservation.partnerName}</h2>

                            <div>at 3:00 </div>
                            <div> the pleasure of your company , we would like to invite you to our wedding"</div>
                            <div>hayat amman </div>
                            <div>4th circle</div>
                            <div className="weddingCard-date">sunday,{this.props.cardReservation.date}</div>
                            <div className="line"></div>
                        </div></div>



                    <div className="col-3">

                        <div className="row">
                            <div className="small-card">
                                <h3>Our wedding day</h3>
                                <h2>{this.props.cardReservation.fullName}<span> & </span>{this.props.cardReservation.partnerName}</h2>

                                <p> the pleasure of your company , we would like to invite you to our wedding"</p>

                                <p>hayat amman</p>
                                <p>4th circle</p>
                                <div className="weddingCard-date-small">sunday,{this.props.cardReservation.date}</div>

                            </div>

                            <div className="small-card2">
                                <h3>Our wedding day</h3>
                                <h2>{this.props.cardReservation.fullName}<span> & </span>{this.props.cardReservation.partnerName}</h2>

                                <p>at 3:00 </p>
                                <p> the pleasure of your company , we would like to invite you to our wedding"</p>
                                <p>hayat amman</p>
                                <p>4th circle</p>
                                <div className="weddingCard-date-small">sunday,{this.props.cardReservation.date}</div>

                            </div>
                            <button onClick={this.printDocument} id="btnPdf">Download PDF</button>
                        </div></div>
                </div>

            </div>



        )
    }
}
const mapStateToProps = state => {
    return {
      ...state
    };
  };
  
  export default connect(mapStateToProps)(WeddingCard);