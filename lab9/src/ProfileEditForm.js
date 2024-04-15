import React from 'react';
import { useForm } from 'react-hook-form';

const ProfileEditForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        First Name:
        <input
          type="text"
          {...register('firstName', { required: 'First name is required' })}
        />
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </label>
      <label>
        Middle Name:
        <input
          type="text"
          {...register('middleName', { required: 'Middle name is required' })}
        />
        {errors.middleName && <p>{errors.middleName.message}</p>}
      </label>
      <label>
        Last Name:
        <input
          type="text"
          {...register('lastName', { required: 'Last name is required' })}
        />
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </label>
      <label>
        Date of Birth:
        <input type="text" {...register('dateOfBirth')} />
      </label>
      <label>
        Address:
        <textarea {...register('address')}></textarea>
      </label>
      <button type="submit">Save</button>
    </form>
  );
};

export default ProfileEditForm;