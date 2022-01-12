import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from "./Button";
import './Form.css'
import Mark from "../components/images/mark.svg";
import MarkRectangle from "../components/images/mark-rectangle.svg";

import Swal from 'sweetalert2';

const Form = () => {
    const {
        register, /*регистрации элементов формы для дальнейшего отслеживания*/
        handleSubmit,/*для отправки данных при нажатии*/
        formState: { errors, isValid }, /*объект-ошибки для валидации и поле, отвечающие за то, валидна ли форма*/
        reset /*очистка полей формы после отправки*/
    } = useForm({ mode: 'onChange' });

    const onSubmit = async (data) => {
        setBtnDisable(true);

        console.log(data);
        localStorage.setItem('имя', data.name);
        localStorage.setItem('телефон', data.phone);
        localStorage.setItem('почта', data.mail);
        localStorage.setItem('комментарий', data.comment);

        let formdata= JSON.stringify(data);

        const response = await fetch('https://api.slapform.com/oenfcnVza',{
            method: "POST",
            body: formdata,
            })
                .then( response => {
                if (response.ok) {
                    console.log(response.json());
                    Swal.fire({
                        title: 'ОТПРАВЛЕНО',
                        text: 'Форма успешно отправлена!',
                        icon: 'success',
                    });
                reset();
                setBtnDisable(false);
                }
                else throw response;
                })
                .catch(error=>{
                    console.log("Ошибка ",error);
                    Swal.fire({
                        title: 'ОШИБКА',
                        text: 'Ошибка! Пожалуйста, отправьте форму еще раз',
                        icon: 'error',
                    });
                    setBtnDisable(false);
                })
        setBtnDisable(false);
    }

    /*обработка добавления класса для блокировки кнопки отправления*/
    let buttonClasses = [' '];
    console.log(isValid)
    if (!isValid) {
        buttonClasses.push('disabled ');
    } else {
        buttonClasses = [' '];
    }

    const [btnDisable, setBtnDisable] = useState(false);

    return (
        <form method="POST" onSubmit={handleSubmit(onSubmit)}>
            <input
                placeholder='Ваше имя'
                {...register('name', { required: true })}
            />
            <div className='form-error'>
                {errors?.name && <div className='form-error-text'>Заполните имя!</div>}
            </div>

            <input
                placeholder='Телефон'
                {...register('phone', {
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
                {...register('mail', {
                    required: true,
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
                {...register('comment')}
            />

            <label>
                <div className="checkbox">
                <input
                    {...register('checkbox',
                     { required: true })}
                    type="checkbox"
                />
                        <img src={MarkRectangle} alt="img" className="mark-rect"/>
                        <img src={Mark} alt="img" className="mark"/>
                <p className='checkbox-title'> Отправляя заявку, я даю согласие на обработку своих персональных данных  </p>
                </div>
            </label>
            <br />

            <Button disabled={btnDisable} buttonStyle="btn--form" buttonClasses={buttonClasses.join("")} type={"submit"}>ОСТАВИТЬ ЗАЯВКУ!</Button>
        </form>
    );
};

export default Form;
