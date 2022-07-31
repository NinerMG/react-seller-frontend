import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import SellerService from '../services/SellerService'

const ListSellerComponent = () => {

    const [sellers, setSellers] = useState([])

    useEffect(() => {

        getAllSellers();
    }, [])

    const getAllSellers = () =>{
        SellerService.getAllSellers().then((respone) => {
            setSellers(respone.data)
            console.log(respone.data);
        }).catch(error =>{
            console.log(error);
        })
    }
    

    const deleteSeller = (sellerId) => {
        SellerService.deleteSeller(sellerId).then((respone) => {
            getAllSellers();
        }).catch(error => {
            console.log(error);
        })
    }

  return (
    <div className = "container">
        <h2 className = "text center"> List Product to Sell</h2>
        <Link to = "/editcampaign" className = "btn btn-primary mb-2"> Add Campaign</Link>
        <table className = "table table-bordered table-stripped">
            <thead>
                
                <th> Campaign name </th>
                <th> Keywords </th>
                <th> Bid Amount</th>
                <th> Camapaign Fund </th>
                <th> Status</th>
                <th> Town </th>
                <th> Radius (in km) </th>
                <th> Actions </th>
               
            </thead>
            <tbody>
                {
                sellers.map(
                    seller =>
                    <tr key = {seller.id}>
                        
                        <td> {seller.camapaignName} </td>
                        <td> {seller.keywords} </td>
                        <td> {seller.bidAmount} </td>
                        <td> {seller.camapaignFund} </td>
                        <td> {seller.status} </td>
                        <td> {seller.town} </td>
                        <td> {seller.radius} </td>
                        <td>
                            <Link className = "btn btn-info" to={`/edit-seller/${seller.id}`}> Update </Link>
                            <button className = "btn btn-danger" onClick = {() => deleteSeller(seller.id)}
                            style = {{marginLeft:"10px"}}> Delete</button>
                        </td>
                    </tr>
                )
}
            </tbody>
        </table>
    </div>
  )
}

export default ListSellerComponent