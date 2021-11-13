import React, {useState, useEffect} from 'react';
import { Alert, Button } from 'react-bootstrap';
import { Link} from 'react-router-dom';

const ManageApartments = () => {

    // use statwe for orders 

    const [orders, setOrders] = useState([])
    const [success, setSuccess] = useState('');
    const [show, setShow] = useState(true);
    const [error, setError] = useState('');
     

    // get the data 
    

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setOrders(data));
    }, []);



    // handle delete for manage the data 
    

    const handleDelete = (id, status) =>{
        const procced = window.confirm("Do you want to Cancel this order?")

        if(procced){
            setError(null);
            setSuccess(null)
            setShow(true);
            const url = `http://localhost:5000/delete/${id}`
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                const filtered = orders.filter((u)=> u._id !== id)
                setOrders(filtered)
                setSuccess('Delete Successfull')
                console.log(data)
            })
            .catch(err => {
                setSuccess(null)
                setError(err.message)
            })
        }
        console.log(id)
    }







    return (
        <div>
            <div id="services" className="my-5 py-5" style={{background: '#F1F5F9', borderRadius: '100px'}}>
                <h1 className="text-center services__heading">Total <span className="underline-highlight ">{orders?.length}</span> Apartment Are Listed</h1>

                <p className="text-center my-3" style={{"color": "gray"}}>You can Delete them if you want</p>

                <div className="container">
                    {
                        success && <Alert show={show} variant="success">
        
        
                        <div className="d-flex justify-content-between align-items-center">
                        <p className='m-0'>{success}</p>
                          <Button onClick={() => setShow(false)} variant="outline-success">
                            X
                          </Button>
                        </div>
                      </Alert>
                    }
                    {
                        error && <Alert show={show} variant="danger">
        
        
                        <div className="d-flex justify-content-between align-items-center">
                        <p className='m-0'>{error}</p>
                          <Button onClick={() => setShow(false)} variant="outline-danger">
                            X
                          </Button>
                        </div>
                      </Alert>
                    }
                </div>

                <div className=" py-5 mx-auto row row-cols-1 row-cols-md-2 justify-content-start row-cols-lg-2 row-cols-sm-1 g-4" style={{width: '90%'}}>
                

                {/* all orders to manage them added dynamically  */}
                
                {
                    orders.map((order)=>{
                        if(order.rating === null || order.rating === undefined){
                            order.rating = 0;
                        }
                        console.log(order.rating)
                        return (
                            <div style={{cursor: ''}} className="col-lg-6 col-md-12 col-sm-12 service-card">
                    <div class="card h-100 mb-3 g-0 border-0" style={{borderRadius: '20px', height: '250px'}}>
                    <div class="row h-100 g-0" style={{height: '250px'}}>
                      <div class="col-md-5 position-relative" style={{borderRadius: '20px'}}>
                        {
                           order?.status === 'Pending' && <span class="badge rounded-pill bg-danger position-absolute px-3 py-2" style={{top: "20px", left: '20px', fontSize: '16px'}}>{order?.status}</span>
                        }
                        {
                            order?.status === 'Reviewing' && <span class="badge rounded-pill bg-warning position-absolute px-3 py-2" style={{top: "20px", left: '20px', fontSize: '16px'}}>{order?.status}</span>
                        }
                        {
                            order?.status === 'Shipped' && <span class="badge rounded-pill bg-success position-absolute px-3 py-2" style={{top: "20px", left: '20px', fontSize: '16px'}}>{order?.status}</span>
                        }
                        <img src={order?.img} class="img-fluid h-100" alt="..." style={{borderRadius: '20px', padding: '10px', height: '250px'}}/>
                      </div>
                      <div class="col-md-7 h-100" style={{height: '250px'}}>
                        <div class="card-body d-flex flex-column justify-content-evenly align-items-start" style={{height: '250px'}}>

                          {/* pill badge  */}

                          <div className="d-flex justify-content-start align-items-center">
                            <span className="text-primary px-3 badge rounded-pill" style={{backgroundColor: '#DBEAFE', fontSize: '12px', fontWeight: '100'}}>
                              <i class="fas fa-share-alt"></i> {order?.memeber} Network
                            </span>
                            <span className="text-warning px-3 ms-3 badge rounded-pill" style={{backgroundColor: '#FEF9C3', fontSize: '12px', fontWeight: '100' }}>
                            <i class="fas fa-users"></i> {order?.type} Family
                            </span>
                          </div>

                    {/* service name  */}

                            <h5 class="card-title">{order?.apartment_name}</h5>
                            <h6>Email: {order?.email}</h6>
                            <div class="card-text text-muted" style={{fontSize: '14px'}}>
                              <span><i className="fas fa-bed"></i> {order?.total_beds} Beds</span>
                              <span><i className="fas fa-bath ms-3"></i> {order?.total_bath} Baths</span>
                              <span><i className="fas fa-expand-arrows-alt ms-3"></i> {order.apartment_size} Sq. Fit</span>
                            </div>
                            <div className="cards-footer w-100 d-flex justify-content-between align-items-center">
                                <span><i style={{color: '#EF4444'}} class="fas fa-star"></i> {order?.rating}</span>
                            <Button style={{color: 'rgb(20,184,166)', backgroundColor: 'transparent', borderColor: 'rgb(20,184,166)', fontWeight: '500', letterSpacing: '0.5px', padding: '6px 19px'}}>${order?.price}</Button>
                            </div>
                            
                            <div className="cards-footer w-100 d-flex justify-content-center align-items-center">
                            

                            
                            
                            

                            
                            
                                <Button  
                                variant="danger" 
                                style={{"padding": "5px 15px", "background": "", "color": "white",      "textDecoration":                "none"}} onClick={(e)  =>handleDelete (order?._id, order?.status)}
                                >
                                Delete <i className="fas fa-window-close"></i>
                                </Button>
                                                 
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
                        )
                    })
                }

                </div>
            </div>
        </div>
    );
};

export default ManageApartments;