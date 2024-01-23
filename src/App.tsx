import '../src/scss/styles.scss';
import * as bootstrap from 'bootstrap';
import { Radio } from './components/ui/radio';
import { Subtitle } from './components/ui/subtitle';
import { Title } from './components/ui/title';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";

// import * as Form from '@radix-ui/react-form';


import Button from './components/ui/button';
import TextArea from './components/ui/textarea';
import SelectCake from './components/selectCake/selectCake';
import SelectCountry from './components/ui/select';

function App() {

  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [today, setToday] = useState<string>("");
  const [hour,setHour] = useState<string>("");
  const [selectedCake, setSelectedCake] = useState<string | null>(null);


  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: "",
      lastName: "",
      phone: "",
      date: "",
      time: "",
      email: "",
      address: "",
      city: "",
      state: "",
      line2: "",
      country: "",
      cake:""
    }});
  

    function handleSendOrder(data: any){
        data.cake = selectedCake;
        validateForm(data);
    }

    function validateForm(data: any){
      getToday();

      if (!data.email.match(/\S+@\S+\.\S+/)) {
        setError('email', {
          type: 'manual',
          message: 'Invalid email format',
        });
      }else if(data.date < today) {
        setError('date', {
          type: 'manual',
          message: 'Invalid date',
        });
      }else if(data.time < hour && data.time !=='' && data.date === today){
        setError('time', {
          type: 'manual',
          message: 'Invalid time',
        });
      }else{
        submitOrder(data);
      }
    }

    function getToday(){
      let date = new Date().toISOString().split('T')[0];
      setToday(date);
      const dateAndHour = new Date();
      let formatedHour = `${String(dateAndHour.getHours()).padStart(2, '0')}:${String(dateAndHour.getMinutes()).padStart(2, '0')}`;
      setHour(formatedHour); 
    }

    async function submitOrder(data: any) {

  
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
  
        if (response.status === 201) {
          const responseData = await response.json();
          alert('Pedido enviado');
        } else {
          alert('Erro na requisição');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Erro na requisição');
      } finally {
        
      }
    }
  

  return (
    <div className="row d-flex align-items-center justify-content-center px-5 pt-5 pb-5">
      <div className='cake-main'>

      <Title style="title text-center" texto="Cake order Form" />
      <div className="subtitle d-flex flex-column justify-content-start">
        <Subtitle />
      </div>
        <form onSubmit={handleSubmit(handleSendOrder)} className='needs-validation' noValidate>
        <SelectCake onSelect={(cake) => setSelectedCake(cake)} />
        <div className='row d-flex justify-content-start align-items-end'>
          <Title style="information-title" texto="Order information" />
          <div className='col-md-6 col-12'>
            <TextArea {...register('name', {required: true})} type="text" label="Name" id="firstName" placeholder='first' className='form-control my-2 rounded-0 input-cake' divStyle='' isLabelRequired={true}/>
            {errors.name && <p className='error-message'>This field is required</p>}
          </div>
          <div className='col-md-6 col-12'>

          <TextArea {...register('lastName', {required: true})} type="text" id="lastName" placeholder='last' className='form-control my-2 rounded-0 input-cake' />
          {errors.lastName && <p className='error-message'>This field is required</p>}
          </div>
          <div className='col-md-6 col-12'>

          <TextArea {...register('date', {required: true})} type="date" label="Delivery date" id="dateDelivery" placeholder='MM/DD/YYYY' className='form-control my-2 rounded-0 input-cake' />
          {errors.date && <p className='error-message'>This field is required</p>}
          </div>
          <div className='col-md-6 col-12'>
          <TextArea {...register('time', {required: true})} type="time" label="Preferred delivery time" id="timeDelivry" placeholder='HH:MM AM' className='form-control my-2 rounded-0 input-cake' />
          {errors.time && <p className='error-message'>This field is required</p>}
          </div>
          <div className='col-md-6 col-12'>
          <TextArea {...register("phone", {pattern: {value: /[0-9]{10}/, message: 'error message'}})} type='tel' label="phone" id="dateDelivery" placeholder='### ### ###' className='form-control my-2 rounded-0 input-cake' isLabelRequired={true} />
          {errors.phone && <p className='error-message'>This field is required</p>}
          </div>
          <div className='col-md-6 col-12'>
          <TextArea {...register('email', {required: true})} type='email' label="Email" id="email" placeholder='' className='form-control my-2 rounded-0 input-cake' isLabelRequired={true}/>
          {errors.email && <p className='error-message'>This field is required</p>}
          </div>
          <TextArea {...register('address', {required: false})} type='text' label="Address" id="street" placeholder='Street Address' className='form-control my-2 rounded-0 input-cake'/>
          {errors.address && <p className='error-message'>This field is required</p>}
          <TextArea {...register('line2', {required: false})} type='text' id="streetLine2" placeholder='Street Address line 2' className='form-control my-2 rounded-0 input-cake'/>
          {errors.line2 && <p className='error-message'>This field is required</p>}
          <TextArea {...register('city', {required: false})} type='text' id="city" placeholder='city' className='form-control my-2 rounded-0 input-cake'/>
          {errors.city && <p className='error-message'>This field is required</p>}
          <TextArea {...register('state', {required: false})} type='text' id="postal" placeholder='postal / zip code' className='form-control my-2 rounded-0 input-cake'/>
          {errors.state && <p className='error-message'>This field is required</p>}
          <SelectCountry  {...register('country', {required: false})}/>
          {errors.country && <p className='error-message'>This field is required</p>}
        </div>
        
        <Button />
      </form>
     
      </div>
      
    </div>
  )
}

export default App
