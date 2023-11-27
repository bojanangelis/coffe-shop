'use client';
import { yupResolver } from '@hookform/resolvers/yup';
import { CreateAccountInterface, CreateAccountYupSchema } from '@coffee-shop/web/utils-shared';
import React from 'react';
import { useForm } from 'react-hook-form';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { withApi } from '../api/client-api';
import { useSingUpMutation } from '@coffee-shop/web/data-access-graphql';
import { useRouter } from 'next/navigation';

const InputCreateComponent = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<CreateAccountInterface>({
    resolver: yupResolver(CreateAccountYupSchema)
  });
  const [{ data: signupData, fetching, error }, signup] = useSingUpMutation();

  const onSubmit = async (data: CreateAccountInterface) => {
    await signup({
      signupInput: {
        email: data.email,
        name: data.firstName + ' ' + data.lastName,
        password: data.password
      }
    });
    if (signupData) {
      router.push('/');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="md:w-1/3">
        <p className="text-center text-xl font-bold tracking-wide">Create an account</p>
        <p className="text-center text-gray-600 text-sm font-semibold pt-10">STARBUCKS® REWARDS</p>
        <p className="text-center text-gray-400 text-xs font-semibold pt-2">
          Join Starbucks Rewards to earn Stars for free food and drinks, any way you pay. Get access
          to mobile ordering, a birthday Reward, and moremore
        </p>
      </div>
      <div className="md:w-3/5 rounded-xl shadow-xl h-full mt-20 p-8">
        <p className="text-gray-700 text-sm md:px-10">* indicates required field</p>
        <form className="flex flex-col py-4 md:px-10" onSubmit={handleSubmit(onSubmit)}>
          <label>Personal Information</label>
          <label className="label-title">First Name</label>
          <input className="custom-input" {...register('firstName')} />
          <label className="pt-2 text-xs text-red-400">{errors.firstName?.message}</label>

          <label className="label-title">Last Name</label>
          <input className="custom-input" {...register('lastName')} />
          <label className="pt-2 text-xs text-red-400">{errors.lastName?.message}</label>
          <label className="mt-10 mb-4">Account Security</label>
          <label className="label-title">Email address</label>
          <input
            type="email"
            autoComplete="email"
            className="custom-input"
            {...register('email')}
          />
          <label className="pt-2 text-xs text-red-400">{errors.email?.message}</label>
          <label className="label-title">Password</label>
          <input
            type="password"
            autoComplete="password"
            className="custom-input"
            {...register('password')}
          />
          <label className="pt-2 text-xs text-red-400">{errors.password?.message}</label>
          <label className="pt-2 text-xs text-gray-500">
            Create a password 8 to 25 characters long that includes at least 1 uppercase and 1
            lowercase letter, 1 number and 1 special character like an exclamation point or
            asterisk.
          </label>
          <div className="flex items-center mt-10">
            <p className="text-xs underline text-green-800 font-semibold cursor-pointer">
              Already have a Starbucks gift card?
            </p>
            <ChevronDownIcon className="w-4 h-4" />
          </div>
          <label className="pt-2 text-xs text-red-400">{error?.message}</label>
          <div className="flex items-center justify-end">
            <button
              disabled={fetching}
              className="px-4 py-1.5 bg-green-800 text-white rounded-3xl shadow-lg"
              onClick={handleSubmit(onSubmit)}
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default withApi(InputCreateComponent);
