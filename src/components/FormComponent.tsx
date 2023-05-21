import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {ZodSchema, z} from 'zod';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {updateAuth} from '../repositories/auth';
import {useDispatch} from '../redux/hooks/useDispatch';

const FormData = [
  {
    id: 'name',
    schema: z.string().nonempty('Required'),
    name: 'Name',
    type: 'text',
    required: true,
    disabled: false,
  },
  {
    id: 'email',
    schema: z.string().email('Invalid email address'),
    name: 'Email',
    type: 'email',
    required: true,
    disabled: true,
  },
  {
    id: 'phoneNumber',
    schema: z.string().regex(/^\d{10}$/, 'Invalid phone number'),
    name: 'Phone number',
    type: 'tel',
    required: false,
    disabled: false,
  },
  {
    id: 'photoURL',
    schema: z.string(),
    name: 'Photo URL',
    type: 'text',
    required: false,
    disabled: false,
  },
] as const;

type FormDataType = typeof FormData;
type IdType = FormDataType[number]['id'];
type SchemaType = {[K in IdType]: z.ZodString};

const schemaObject = FormData.reduce((obj, item) => {
  obj[item.id] = item.schema;
  return obj;
}, {} as SchemaType);

const schema: ZodSchema = z.object(schemaObject);

const FormComponent = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: user?.displayName,
      email: user?.email,
      phoneNumber: user?.phoneNumber,
      photoURL: user?.photoURL,
    },
  });

  const onSubmit = async (data: any) => {
    if (user) {
      updateAuth({...user, ...data}, dispatch);
    }
  };

  return (
    <div className='border rounded-md m-2 p-4'>
      <div className='text-center font-bold text-lg'>Change Form</div>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
        {FormData.map((value, index) => (
          <div key={index}>
            <label className='block'>
              {value.name}:{' '}
              {value.required && <span className='text-red-500'>*</span>}
              <input
                type={value.type}
                {...register(value.id)}
                disabled={value.disabled}
                className='block border border-gray-300 p-2 rounded w-full'
              />
            </label>
            <p className='text-red-500'>
              {errors[value.id]?.message?.toString()}
            </p>
          </div>
        ))}
        <button type='submit' className='bg-blue-500 text-white p-2 rounded'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
