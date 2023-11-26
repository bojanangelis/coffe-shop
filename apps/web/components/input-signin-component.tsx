'use client';
import { yupResolver } from '@hookform/resolvers/yup';
import { SignInAccountInterface, SignInAccountYupSchema } from '@coffee-shop/web/utils-shared';
import React from 'react';
import { useForm } from 'react-hook-form';

const InputSignInPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignInAccountInterface>({
    resolver: yupResolver(SignInAccountYupSchema)
  });

  const onSubmit = async (values: SignInAccountInterface) => {};

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="md:w-1/3">
        <p className="text-center text-xl font-bold tracking-wide">
          Sign in with your starbucks account
        </p>
      </div>
      <div className="md:w-3/5 rounded-xl shadow-xl h-full mt-20 p-8">
        <p className="text-gray-700 text-sm md:px-10">* indicates required field</p>
        <form className="flex flex-col py-4 md:px-10" onSubmit={handleSubmit(onSubmit)}>
          <label className="label-title">Email address</label>
          <input
            type="email"
            autoComplete="email"
            className="custom-input"
            {...register('email')}
          />
          <label className="label-title">Password</label>
          <input
            type="password"
            autoComplete="password"
            className="custom-input"
            {...register('password')}
          />
          <label className="pt-2 text-xs text-red-400">
            {errors.email?.message || errors.password?.message}
          </label>

          <div className="flex flex-col mt-6 space-y-2">
            <p className="text-xs underline text-green-800 font-semibold cursor-pointer">
              Forgot your username?
            </p>
            <p className="text-xs underline text-green-800 font-semibold cursor-pointer">
              Forgot your password?
            </p>
          </div>
          <div className="flex items-center justify-end">
            <button
              className="px-4 py-1.5 bg-green-800 text-white rounded-3xl shadow-lg"
              onClick={handleSubmit(onSubmit)}
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InputSignInPage;
