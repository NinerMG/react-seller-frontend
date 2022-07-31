import React, {useState, useEffect} from 'react'
import SellerService from '../services/SellerService'
import { Link, useParams, useNavigate } from 'react-router-dom'


const AddSellerComponent = () => {
    

    const [camapaignName,setCamapaignName] = useState('no name was given')
    const [keywords,setKeywords] = useState('name,product')
    const [bidAmount,setBidAmount] = useState('')
    const [camapaignFund,setCamapaignFund] = useState(100000)
    const [status,setStatus] = useState('on')
    const [town,setTown] = useState('Berlin')
    const [radius,setRadius] = useState('1')


    const navigate = useNavigate();
    const {id} = useParams();


    const saveOrUpdateSeller = (e) => {
        e.preventDefault();

        const seller = {camapaignName, keywords, bidAmount, camapaignFund, status, town, radius}

        if(id) {
            SellerService.updateSeller(id, seller).then((response) =>{
                navigate("/clients");
             }).catch(error => {
                console.log(error);
            })

        }else{
            SellerService.createSeller(seller).then((response) =>{
                console.log(response.data)

                navigate("/clients");
             }).catch(error => {
            console.log(error)
            })
            }
    }


    useState(() => {

        SellerService.getSellerById(id).then((response) =>{
            setCamapaignName(response.data.camapaignName)
            setKeywords(response.data.keywords)
            setBidAmount(response.data.bidAmount)
            setCamapaignFund(response.data.camapaignFund)
            setStatus(response.data.status)
            setTown(response.data.town)
            setRadius(response.data.radius)
        }).catch(error =>{
            console.log(error)
        })

    },)


const title = () => {

    if(id){
        return <h2 className = "text-center"> Update Camapaign</h2>
    }else{
        return <h2 className = "text-center"> Add New Camapaign </h2>
    }
}


  return (
    <div>
       <br /><br />
        <div className = "container">
            <div className = "row">
                <div className = "card col-md-6 offset-md-3 offset-3">
                    {
                        title()
                    }
                    <div className = "card-body">
                        <form>
                            <div className = "form-group mb-2">
                                <label className = "form-label"> Campaign Name: </label>
                                <input
                                    type = "text"
                                    placeholder = "Enter Campaign Name"
                                    name = "campaignName"
                                    className = "form-control"
                                    value = {camapaignName}
                                    onChange = {(e) => setCamapaignName(e.target.value)}
                                    >
                                </input>
                            </div>

                            <div className = "form-group mb-2">
                                <label className = "form-label"> Keywords: </label>
                                <input
                                    type = "text"
                                    placeholder = "Enter Keywords, e.g. products, company name"
                                    name = "keywords"
                                    className = "form-control"
                                    value = {keywords}
                                    onChange = {(e) => setKeywords(e.target.value)}
                                    >
                                </input>
                            </div>


                            <div className = "form-group mb-2">
                                <label className = "form-label"> Bid Amount: </label>
                                <input
                                    type = "text"
                                    placeholder = "Enter Bid Amount - minimal value"
                                    name = "bidAmount"
                                    className = "form-control"
                                    value = {bidAmount}
                                    onChange = {(e) => setBidAmount(e.target.value)}
                                    >
                                </input>
                            </div>

                            <div className = "form-group mb-2">
                                <label className = "form-label"> Campaign Found: </label>
                                <input
                                    type = "text"
                                    placeholder = "Enter Campaign Found"
                                    name = "campaignFound"
                                    className = "form-control"
                                    value = {camapaignFund - bidAmount}
                                    onChange = {(e) => setCamapaignFund(e.target.value)}
                                    
                                    >
                                </input>
                            </div>

                            <div className = "form-group mb-2">
                                <label className = "form-label"> Status   : 
                                    <select
                                    className ="custom-select"
                                    value = {status}
                                    onChange = {(e) => {
                                        const selectedStatus = e.target.value;
                                        setStatus(selectedStatus);
                                    }}
                                    >
                                    <option value = "on"> On </option>
                                    <option value = "off"> Off </option>
                                    </select>
                                    </label>
                            </div>

                            <div className = "form-group mb-2">
                                <label className = "form-label"> Town   : </label>
                                <select
                                    className ="custom-select"
                                    value = {town}
                                    onChange = {(e) => {
                                        const selectedTown = e.target.value;
                                        setTown(selectedTown);
                                    }}
                                    >
                                    <option value = "Berlin"> Berlin </option>
                                    <option value = "Cracow"> Cracow </option>
                                    <option value = "New York"> New York </option>
                                    <option value = "Paris"> Paris </option>
                                    <option value = "Tokio"> Tokio </option>
                                    <option value = "Warsaw"> Warsaw </option>
                                    </select>
                            </div>

                            <div className = "form-group mb-2">
                                <label className = "form-label"> Radius (in km)   : </label>
                                <select
                                    className ="custom-select"
                                    value = {radius}
                                    onChange = {(e) => {
                                        const selectedRadius = e.target.value;
                                        setRadius(selectedRadius);
                                    }}
                                    >
                                    <option value = {1}> 1 </option>
                                    <option value = {5}> 5 </option>
                                    <option value = {10}> 10 </option>
                                    <option value = {25}> 25 </option>
                                    <option value = {50}> 50 </option>
                                    <option value = {100}> 100 </option>
                                    </select>
                            </div>

                            <button className = "btn btn-success" onClick={(e) => saveOrUpdateSeller(e)}> Confirm</button>
                            <Link to = "/clients" className = "btn btn-danger"> Cancel </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default AddSellerComponent