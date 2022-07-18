const Calen_RCM = () => {
    return (
        <section>
                <div className="data_user">
                <span className="data_user_date">
                <input type="date" id="start" name="trip-start"
                        defaultValue="2022-05-17"
                        min="2022-01-01" max="2022-12-31"/>
                </span>
                <span className="center_data_fam">
                    <span className="me-3">Familiar: </span>     
                    <input className="form-control" type="text" placeholder="Taco, Jimenez" aria-label="Disabled input example" disabled/>
                </span>
            </div>
            <div className="card_calendar">
                <div>
                    Neurocirugia
                </div>
                <div>
                    <table className="table caption-top table-bordered text-center">
                        <thead>
                        <tr>
                            <th scope="col">16/05/22</th>
                            <th scope="col">17/05/22</th>
                            <th scope="col">18/05/22</th>
                            <th scope="col">19/05/22</th>
                            <th scope="col">20/05/22</th>
                            <th scope="col">21/05/22</th>
                            <th scope="col">22/05/22</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                            <button type="button" className="btn btn-info color-buttons">9:50am</button>
                            </td>
                            <td>
                            <button type="button" className="btn btn-info color-buttons">9:50am</button>
                            </td>
                            <td>
                            <button type="button" className="btn btn-info color-buttons">9:50am</button>
                            </td>
                            <td>
                            <button type="button" className="btn btn-info color-buttons">9:50am</button>
                            </td>
                            <td>
                            <button type="button" className="btn btn-info color-buttons">9:50am</button>
                            </td>
                            <td>
                            <button type="button" className="btn btn-info color-buttons">9:50am</button>
                            </td>
                            <td>
                            <button type="button" className="btn btn-info color-buttons">9:50am</button>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>
                            <button type="button" className="btn btn-info color-buttons">11:00am</button>
                            </td>
                            <td>
                            <button type="button" className="btn btn-info color-buttons">11:00am</button>
                            </td>
                            <td></td>
                            <td>
                            <button type="button" className="btn btn-info color-buttons">10:40am</button>
                            </td>
                            <td>
                            <button type="button" className="btn btn-info color-buttons">11:00am</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <button type="button" className="btn btn-info color-buttons">11:50am</button>
                            </td>
                            <td></td>
                            <td>
                            <button type="button" className="btn btn-info color-buttons">11:50am</button>
                            </td>
                            <td>
                            <button type="button" className="btn btn-info color-buttons">11:40am</button>
                            </td>
                            <td>
                            <button type="button" className="btn btn-info color-buttons">12:00pm</button>
                            </td>
                            <td></td>
                            <td>
                            <button type="button" className="btn btn-info color-buttons">1:05pm</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <button type="button" className="btn btn-info color-buttons">12:45pm</button>
                            </td>
                            <td></td>
                            <td>
                            <button type="button" className="btn btn-info color-buttons">2:00pm</button>
                            </td>
                            <td>
                            <button type="button" className="btn btn-info color-buttons">2:00pm</button>
                            </td>
                            <td></td>
                            <td></td>
                            <td>
                            <button type="button" className="btn btn-info color-buttons">1:30pm</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <button type="button" className="btn btn-info color-buttons">2:10pm</button>
                            </td>
                            <td></td>
                            <td>
                            <button type="button" className="btn btn-info color-buttons">3:00pm</button>
                            </td>
                            <td>
                            <button type="button" className="btn btn-info color-buttons">3:00pm</button>
                            </td>
                            <td></td>
                            <td></td>
                            <td>
                            <button type="button" className="btn btn-info color-buttons">2:30pm</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}
export default Calen_RCM