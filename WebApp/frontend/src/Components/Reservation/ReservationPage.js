import React, {useState} from 'react'
import { Controller, useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import TimePicker from 'react-time-picker'
import DatePicker, { getDefaultLocale } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const ReservationPage = () => {
  const {control, register, handleSubmit, formState: {errors} } = useForm();
  const [selectedDate, setSelectedDate] = useState(null)

  const onSubmit = (data) =>
  {
    alert("Rezerwacja została wykonana")
  }

  let getMinTime = () =>
  {
    if(selectedDate == null)
    {
      return '9:00'
    }

    return selectedDate.getDay() == 6 ? '12:00' : '9:00'
  }

  let getMaxTime = () =>
  {
    if(selectedDate == null)
    {
      return '21:00'
    }

    return selectedDate.getDay() == 6 ? '21:00' : '22:00'
  }

  return (
    <div className = "ReservationPageContent">
      <div className = "Form">
      <h1 className = "FormTitle">Rezerwacja</h1>
      <form onSubmit={handleSubmit(onSubmit)}>

      <div className = "FormRow">
        <h3 className = "FormName">Data</h3>

        <Controller
        control={control}
        name='date'
        required = "Data jest wymagana"
        render={({ field }) => (
          <DatePicker className = "FormElementDate"
            popperProps={{strategy: 'fixed'}}
            placeholderText='Select date'
            onChange={(date) => {field.onChange(date); setSelectedDate(date) } }
            selected={field.value}
            filterDate={date => date.getDay() != 0 }
            />
         )}
        />
      </div>

      <div className = "FormRow">
        <h3 className = "FormName">Godzina</h3>

        <Controller
        control={control}
        name='time'
        required = "czas jest wymagany"
        render={({ field }) => (
          <TimePicker className = "FormElementTime"
            popperProps={{strategy: 'fixed'}}
            placeholderText='Select date'
            onChange={(date) => field.onChange(date)}
            selected={field.value}
            disableClock={true}
            maxDetail = "hour"
            minTime={getMinTime()}
            maxTime={getMaxTime()}
            />
         )}
        />
      </div>

      <div className = "FormRow">
          <h3 className = "FormName">Nr Telefonu</h3>

          <input className = "FormElement" type = "text" placeholder = 'Nr Telefonu' { ...register("phone",{
              required: "Nieprawidłowy nr telefonu",
              pattern: {
                  value: /^[0-9]{9}$/,
                  message: "Nieprawidłowy nr telefonu"
              }
              }) } />
      </div>

      <div className = "FormRow">
          <h3 className = "FormName">Liczba Osób</h3>

          <input className = "FormElement" type = "number" placeholder = 'Liczba Osób' { ...register("numberOfPeople",{
              required: "Nieprawidłowa liczba osób",
              validate: {
                positive: v => {
                  if(v < 1)
                  {
                    return "Nieprawidłowa liczba osób"
                  }
                  return true
                 }
              }
              }) } />
      </div>

      <div className = "FormRow">
          <h3 className = "FormName">E-Mail</h3>

          <input className = "FormElement" type = "text" placeholder = 'Email' { ...register("email",{
              required: "Nieprawidłowy e-mail",
              pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/,
                  message: "Nieprawidłowy e-mail"
              }
              }) } />
      </div>

      <ErrorMessage className = "FormError"
          errors={errors}
          name="date"
          render={({message}) => <h4>{message}</h4>}
      />

      <ErrorMessage className = "FormError"
          errors={errors}
          name="time"
          render={({message}) => <h4>{message}</h4>}
      />

      <ErrorMessage className = "FormError"
          errors={errors}
          name="phone"
          render={({message}) => <h4>{message}</h4>}
      />

      <ErrorMessage className = "FormError"
          errors={errors}
          name="numberOfPeople"
          render={({message}) => <h4>{message}</h4>}
      />

      <ErrorMessage className = "FormError"
          errors={errors}
          name="email"
          render={({message}) => <h4>{message}</h4>}
      />

      <input className = "FormSubmit" type = "submit" />
      </form>
      </div>
    </div>
  )
}

export default ReservationPage
