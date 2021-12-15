import { useForm } from 'react-hook-form';
export default function AddProductPage(props) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    const newData = { ...data, image: data.image[0].name };
    props.onAdd(newData);
  };

  const addProductForm = () => {
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder="Tên sản phẩm"
          />
        </div>
        
        <div>
          <input
            type="file"
            {...register("image", { required: true })}
            
          />
        </div>

        <div>
          <input
            type="text"
            {...register("price", { required: true })}
            placeholder="Giá sản phẩm"
          />
        </div>

        <div>
          <input
            type="text"
            {...register("description")}
            placeholder="mô tả sản phẩm"
          />
        </div>
        <button>Thêm</button>
      </form>
    );
  };

  return <div className="App">{addProductForm()}</div>;
}