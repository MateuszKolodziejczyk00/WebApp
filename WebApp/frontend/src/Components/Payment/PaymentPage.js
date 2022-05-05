import React, { useEffect, useState } from 'react'
import AddressForm from './AddressForm'

import Payment from './Payment'

const PaymentFormPage = ({history}) => {
    let [addressData, setAddressData] = useState(null)

    console.log(history)
    useEffect(() =>
    {
        setAddressData(null)
    }, [])

    return (
        <div className = "PaymentPage">
            <div className = "PaymentPageContent">
                { addressData ? <Payment addressData = { addressData } history = {history} /> : <AddressForm setAddressData={setAddressData} /> }
            </div>
        </div>
    )
}

export default PaymentFormPage
