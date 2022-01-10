import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import {Button} from "./Button";
import './Form.css'

const Form = () => {
    const {
        register, /*регистрации элементов формы для дальнейшего отслеживания*/
        handleSubmit,/*для отправки данных при нажатии*/
        formState: {errors, isValid}, /*объект-ошибки для валидации и поле, отвечающие за то, валидна ли форма*/
        reset /*очистка полей формы после отправки*/
    } = useForm({mode: 'onChange'});

    //заменить на фетч
    const onSubmit = data => {
        console.log('Отправлено', data);
        reset();
    }

    /*обработка добавления класса для блокировки кнопки отправления*/
    let buttonClasses = [' '];
    if (!isValid) {
        buttonClasses.push('disabled ');
    } else {
        buttonClasses = [' '];
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                placeholder='Ваше имя'
                {... register('name', {required: true})}
            />
            <div className='form-error'>
                {errors?.name && <div className='form-error-text'>Заполните имя!</div>}
            </div>

            <input
                placeholder='Телефон'
                {... register('phone', {
                    required: true,
                    pattern: /(\+7|8)[- _]*\(?[- _]*(\d{3}[- _]*\)?([- _]*\d){7}|\d\d[- _]*\d\d[- _]*\)?([- _]*\d){6})/
                })}
            />
            <div className='form-error'>
                {errors.phone?.type === 'required' && <div>Заполните телефон!</div>}
            </div>
            <div className='form-error'>
                {errors.phone?.type === 'pattern' && <div>Некорректный номер телефона!</div>}
            </div>

            <input
                placeholder='E-mail'
                {... register('mail', {
                    required:true,
                    pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                })}
            />
            <div className='form-error'>
                {errors.mail?.type === 'required' && <div>Заполните почту!</div>}
            </div>
            <div className='form-error'>
                {errors.mail?.type === 'pattern' && <div>Некорректная почта!</div>}
            </div>

            <textarea
                placeholder='Ваш комментарий'
                {... register('comment')}
            />
            <br/>
            <Button buttonStyle="btn--form" buttonClasses={buttonClasses.join("")} type={"submit"}>ОСТАВИТЬ ЗАЯВКУ!</Button>
        </form>
    );
};

export default Form;