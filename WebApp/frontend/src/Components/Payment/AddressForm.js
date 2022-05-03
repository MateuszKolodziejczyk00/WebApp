import React from 'react'
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message'

const AddressForm = ({ setAddressData }) =>{
    const {register, handleSubmit, formState: {errors} } = useForm();

    const onSubmit = (data) =>
    {
        setAddressData(data)
    }

    return (
        <div className = "AddressForm">
            <h1 className = "AddressFormTitle">Adres</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className = "AddressFormRow">
                    <h3 className = "AddressFormName">E-Mail</h3>

                    <input className = "AddressFormElement" type = "text" placeholder = 'Email' { ...register("email",{
                        required: "Nieprawidłowy e-mail",
                        pattern: {
                            value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/,
                            message: "Nieprawidłowy e-mail"
                        }
                        }) } />

                </div>

                <div className = "AddressFormRow">
                    <h3 className = "AddressFormName">Miejscowość</h3>

                    <input className = "AddressFormElement" type = "text" placeholder = 'Miejscowość' { ...register("town", {
                        required: "Nieprawidłowa miejsowość"
                        }) } />
                </div>

                <div className = "AddressFormRow">
                    <h3 className = "AddressFormName">Kod pocztowy</h3>

                    <input className = "AddressFormElement" type = "text" placeholder = 'Kod pocztowy' { ...register("postalCode", {
                        required: "Nieprawidłowy kod pocztowy",
                        pattern: {
                            value: /^[0-9]{2}-[0-9]{3}$/i,
                            message: "Nieprawidłowy kod pocztowy"
                        }})} />
                </div>

                <div className = "AddressFormRow">
                    <h3 className = "AddressFormName">Ulica</h3>

                    <input className = "AddressFormElement" type = "text" placeholder = 'Ulica' { ...register("street", {
                        required: "Nieprawidłowa ulica"
                        }) } />
                </div>

                <div className = "AddressFormRow">
                    <h3 className = "AddressFormName">Numer domu</h3>

                    <input className = "AddressFormElement" type = "number" placeholder = 'Numer domu' { ...register("houseNumber", {
                        required: "Nieprawidłowy numer domu"
                        }) } />
                </div>

                <div className = "AddressFormRow">
                    <h3 className = "AddressFormName">Numer mieszkania</h3>
                    <input className = "AddressFormElement" type = "number" placeholder = 'Numer mieszkania' { ...register("apartmentNumber", {
                        }) } />
                </div>


                <ErrorMessage className = "AddressFormError"
                    errors={errors}
                    name="email"
                    render={({message}) => <h4>{message}</h4>}
                />

                <ErrorMessage  className = "AddressFormElement"
                    errors={errors}
                    name="town"
                    render={({message}) => <h4>{message}</h4>}
                />

                <ErrorMessage  className = "AddressFormElement"
                    errors={errors}
                    name="postalCode"
                    render={({message}) => <h4>{message}</h4>}
                />

                <ErrorMessage  className = "AddressFormElement"
                    errors={errors}
                    name="street"
                    render={({message}) => <h4>{message}</h4>}
                />

                <ErrorMessage  className = "AddressFormElement"
                    errors={errors}
                    name="houseNumber"
                    render={({message}) => <h4>{message}</h4>}
                />

                <ErrorMessage  className = "AddressFormElement"
                    errors={errors}
                    name="apartmentNumber"
                    render={({message}) => <h4>{message}</h4>}
                />

                <input className = "AddressFormSubmit" type = "submit" />
            </form>
        </div>
    )
}

export default AddressForm