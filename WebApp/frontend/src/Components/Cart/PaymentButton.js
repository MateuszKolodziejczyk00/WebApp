import React, { useEffect, useRef } from 'react'

const PaymentButton = () =>
{
    let createOrderDelegate = (data, actions) =>
    {

    }

    let onApproveDelegate = async (data, actions) =>
    {

    }
 
    const paypal = useRef()

    useEffect(() =>
    {
        window.paypal.Buttons({
            createOrder: createOrderDelegate,
            onApprove: onApproveDelegate
        }).render(paypal.current)
    }, [])


    return (
        <div>
            <div ref={paypal}></div>
        </div>
    )
}

export default PaymentButton
