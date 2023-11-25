import { CreateAccountInterface, CreateAccountYupSchema } from '@coffee-shop/web/utils-shared';
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';

const InputCreateComponent = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm<CreateAccountInterface>({
    resolver: yupResolver(CreateAccountYupSchema)
  });

  const onSubmit = (data: CreateAccountInterface) => console.log(data);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-1/3">
        <p className="text-center text-xl font-bold tracking-wide">Create an account</p>
        <p className="text-center text-gray-600 text-sm font-semibold pt-10">STARBUCKS® REWARDS</p>
        <p className="text-center text-gray-400 text-xs font-semibold pt-2">
          Join Starbucks Rewards to earn Stars for free food and drinks, any way you pay. Get access
          to mobile ordering, a birthday Reward, and moremore
        </p>
      </div>
      <div className="w-3/5 rounded-xl shadow-xl h-full mt-20 p-8">
        <p className="text-gray-700 text-sm px-10">* indicates required field</p>
        <form className="flex flex-col py-4 px-10" onSubmit={handleSubmit(onSubmit)}>
          <label>Personal Information</label>
          <label className="label-title">First Name</label>
          <input className="custom-input" {...register('firstName')} />
          <label className="pt-2 text-xs text-red-400">{errors.firstName?.message}</label>

          <label className="label-title">Last Name</label>
          <input className="custom-input" {...register('lastName')} />
          <label className="pt-2 text-xs text-red-400">{errors.lastName?.message}</label>
          <label className="mt-10 mb-4">Account Security</label>
          <label className="label-title">Email address</label>
          <input className="custom-input" {...register('email')} />
          <label className="pt-2 text-xs text-red-400">{errors.email?.message}</label>
          <label className="label-title">Password</label>
          <input className="custom-input" {...register('password')} />
          <label className="pt-2 text-xs text-red-400">{errors.password?.message}</label>

          <button onClick={handleSubmit(onSubmit)}>submit</button>
        </form>
      </div>
    </div>
  );
};

export default InputCreateComponent;
