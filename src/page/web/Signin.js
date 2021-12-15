import React from 'react';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { signin } from '../../api/authApi';
import { authenticate} from '../../components/Authenticate';
const Signin = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const onSubmit = (data) => {
        signin(data).then((response) => {
            toast.success("đăng nhập thành công")
            authenticate(response.data.user)
            console.log(response.data.user)
            if(response.data.user.id === 1){
                navigate("/admin/product")
            }else{
                navigate("/")
            }
        })
            .catch((error) => toast.error('đăng nhập thất bại', error.response.data));
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                <label>Email</label>
                    <input type="email" {...register('email')} />
                </div>
                <div>
                <label>Password</label>
                    <input type="password" {...register('password')} />
                </div>
                <button>đăng nhập</button>
            </form>
        </div>
    );
}

export default Signin;