import React from 'react';
import { signup } from '../../api/authApi';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { authenticate } from '../../components/Authenticate';
const Signup = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const onSubmit = (data) => {
        signup(data).then((response) => {
            toast.success("đăng ký thành công")
            authenticate(response.data.user)
            console.log(response)
            navigate('/signin')
        }
    )
    .catch((error)=> toast.error('đăng ký thất bại',error.response.data));
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div>
                    <label>Name</label>
                    <input type="text" {...register('name', { required: true })} />
                </div>
                <div>
                <label>Email</label>
                    <input type="email" {...register('email')} />
                </div>

                <div>
                <label>Password</label>
                    <input type="password" {...register('password')} />
                </div>
                <button>đăng ký</button>
            </form>
        </div>
    );
}

export default Signup;