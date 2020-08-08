import React from 'react';





class Plan extends React.Component {

    render() {
        return (
            <div className="modal" id="change-plan">
                <div className="modal-dialog modal-lg planning">
                    <div className="modal-content">

                        <div className="modal-header">

                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <table className="table-responsive">

                                <tbody>
                                    <tr className="d-n">
                                        <td className="plan-heading">PLAN</td>
                                        <td className="plan-heading silver">SILVER</td>
                                        <td className="plan-heading gold">GOLD</td>
                                        <td className="plan-heading plat">PLATINUM</td>
                                    </tr>
                                    <tr>
                                        <td className="p-emp">CREDITS PER MONTH</td>
                                        <td data-column="Silver">60</td>
                                        <td data-column="Gold">120</td>
                                        <td data-column="Platinum">200</td>
                                    </tr>

                                    <tr>
                                        <td className="p-emp">MIN. NUMBER OF MONTHS</td>
                                        <td data-column="Silver">3</td>
                                        <td data-column="Gold">3</td>
                                        <td data-column="Platinum">6</td>
                                    </tr>

                                    <tr>
                                        <td className="p-emp">EXPERT CONSULTATIONS</td>
                                        <td data-column="Silver">1 PER 3 MONTHS</td>
                                        <td data-column="Gold">1 PER 2 MONTHS</td>
                                        <td data-column="Platinum">1 PER MONTH</td>
                                    </tr>

                                    <tr>
                                        <td className="p-emp">PRODUCTIONS INCLUDED</td>
                                        <td data-column="Silver">1 PER 6 MONTHS</td>
                                        <td data-column="Gold">1 PER 3 MONTHS</td>
                                        <td data-column="Platinum">2 PER 3 MONTHS</td>
                                    </tr>

                                    <tr>
                                        <td className="p-emp">ADVANCE EVENT BOOKING</td>
                                        <td data-column="Silver">24 HR</td>
                                        <td data-column="Gold">48 HR</td>
                                        <td data-column="Platinum">72 HR</td>
                                    </tr>

                                    <tr>
                                        <td className="p-emp">MUSIC VIDEO</td>
                                        <td></td>
                                        <td></td>
                                        <td data-column="Platinum">1 PER 6 MONTHS</td>
                                    </tr>
                                    <tr>
                                        <td className="p-emp">SOCIAL MEDIA PACKAGE</td>
                                        <td></td>
                                        <td></td>
                                        <td data-column="Platinum">INCLUDED</td>
                                    </tr>
                                    <tr>
                                        <td className="p-emp">PRICE PER MONTH</td>
                                        <td data-column="Silver">$999</td>
                                        <td data-column="Gold">$1,999</td>
                                        <td data-column="Platinum">$2,999</td>
                                    </tr>

                                    <tr>
                                        <td></td>
                                        <td data-column="Silver"><a data-toggle="modal" data-target="#upgrade-box" href="#" className="book-now">Downgrade</a></td>
                                        <td data-column="Gold"><a href="#" data-toggle="modal" data-target="#upgrade-box" className="book-now gold">Current Plan</a></td>
                                        <td data-column="Platinum"><a href="#" data-toggle="modal" data-target="#upgrade-box" className="book-now">Upgrade</a></td>
                                    </tr>

                                </tbody>
                            </table>

                        </div>


                    </div>
                </div>
            </div>
        );
    }
}
export default Plan;