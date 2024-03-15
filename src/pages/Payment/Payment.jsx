import React, { useState, useEffect, useRef } from 'react';
import './Payment.scss'
import axios from 'axios';
import { useParams } from 'react-router';
import { jwtDecode } from 'jwt-decode';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
    const paypal = useRef();
    const navigate = useNavigate();
    const { id } = useParams();
    const [tourBooked, setTourBooked] = useState([]);
    const [user, setUser] = useState([]);
    const [paypalRendered, setPayPalRendered] = useState(false);
    const [tourDataLoaded, setTourDataLoaded] = useState(false);
    const [order, setOrder] = useState(null);

    useEffect(() => {
        // Rest API Tour booked 
        axios.get(`http://localhost:8080/api/tour/${id}`)
            .then((response) => {
                const tour = response.data.tour.tour;
                console.log(tour);
                setTourBooked(tour);
                setTourDataLoaded(true);
            })
            .catch(error => console.log(error.message));
    }, [id]);

    useEffect(() => {
        if (tourDataLoaded && !paypalRendered) {
            window.paypal
                .Buttons({
                    createOrder: (data, actions, err) => {
                        return actions.order.create({
                            intent: "CAPTURE",
                            purchase_units: [
                                {
                                    amount: {
                                        description: tourBooked.tour_name,
                                        currency_code: "CAD",
                                        value: tourBooked.tour_price * 30 / 100
                                    },
                                },
                            ],
                        });
                    },
                    onApprove: async (data, actions) => {
                        const order = await actions.order.capture();
                        console.log("status ne:", order.status);
                        setOrder(order);
                    },
                    onError: (err) => {
                        console.log(err);
                    },
                })
                .render(paypal.current);
            setPayPalRendered(true);
        }
    }, [tourDataLoaded, paypalRendered, tourBooked]);

    useEffect(() => {
        if (order && order.status === 'COMPLETED') {
            toast.success('Payment successful ~ Wishing you a memorable experience');
            navigate('/');
        } else if (order && order.status !== 'COMPLETED') {
            toast.error('Payment failed');
        }
    }, [order]);

    return (
        <>
            <div className='payment-container'>
                <div className='paypal' ref={paypal}></div>
                <button onClick={() => navigate(-1)}>Are you not ready to pay?</button>
            </div>
        </>
    );
};

export default Payment;
