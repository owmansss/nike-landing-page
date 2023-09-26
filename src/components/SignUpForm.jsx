import {
  createAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
  createUserDocFromAuth,
} from '../utils/firebase.utils'
import { officeThumb } from '../assets/images'
import { useState } from 'react'

const SignUpForm = () => {
  const logGoogleuser = async () => {
    const { user } = await signInWithGooglePopup()
    await createUserDocFromAuth(user)
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    if (password !== confirmPassword) {
      alert('password doesnt match')
      return
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password)
      await createUserDocFromAuth(user, { displayName })
      resetFormFields()
    } catch (error) {
      console.log('error' + error.message)
    }
  }
  const defaultFormFields = {
    email: '',
    password: '',
    confirmPassword: '',
  }
  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { displayName, email, password, confirmPassword } = formFields
  const handleChange = (event) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }
  return (
    <div className='flex justify-around bg-slate-100 h-fit'>
      <div className='grid justify-start ml-32 -mr-6 mt-16 shadow-slate-200 shadow-lg mb-10 border-2'>
        <div className='mt-5 flex'>
          <button
            type='button'
            className='text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-2 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 ml-2 mb-2'
            onClick={logGoogleuser}
          >
            <svg
              className='mr-2 -ml-1 w-4 h-4'
              aria-hidden='true'
              focusable='false'
              data-prefix='fab'
              data-icon='google'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 488 512'
            >
              <path
                fill='currentColor'
                d='M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z'
              ></path>
            </svg>
            Sign up with Google<div></div>
          </button>
          <div className='h-14 w-px mr-2 ml-2 self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-20 dark:opacity-100'></div>
          <button
            type='button'
            className='text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-2 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2'
            onClick={logGoogleuser}
          >
            <svg
              className='mr-2 -ml-1 w-4 h-4'
              aria-hidden='true'
              focusable='false'
              data-prefix='fab'
              data-icon='google'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 488 512'
            >
              <path
                fill='currentColor'
                d='M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z'
              ></path>
            </svg>
            Sign up with Google<div></div>
          </button>
        </div>
        <div className='relative mt-5'>
          <div className='absolute inset-0 flex items-center'>
            <div className='w-full border-t border-gray-300'></div>
          </div>
          <div className='relative flex justify-center text-sm'>
            <span className='px-2 bg-gray-100 text-gray-500'>
              Or continue with
            </span>
          </div>
        </div>
        <div>
          <div className='flex flex-col items-center justify-center px-6 lg:py-0'>
            <div className='w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 mb-10'>
              <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
                <h1 className='text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl'>
                  Create an account
                </h1>
                <form onSubmit={handleSubmit}>
                  <div>
                    <label className='block mb-2 text-sm font-medium text-gray'>
                      {' '}
                      Display Name
                    </label>
                    <input
                      type='text'
                      name='displayName'
                      id='displayName'
                      onChange={handleChange}
                      value={displayName}
                      placeholder='Name'
                      className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block-w full p-2.5 mb-2'
                      required
                    />
                  </div>
                  <div>
                    <label className='block mb-2 text-sm font-medium text-gray'>
                      {' '}
                      Your Email
                    </label>
                    <input
                      type='email'
                      name='email'
                      id='email'
                      onChange={handleChange}
                      value={email}
                      placeholder='name@company.com'
                      className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block-w full p-2.5 mb-2'
                      required
                    />
                  </div>
                  <div>
                    <label className='block mb-2 text-sm font-medium text-gray'>
                      New Password
                    </label>
                    <input
                      type='password'
                      name='password'
                      id='password'
                      onChange={handleChange}
                      value={password}
                      placeholder='••••••••'
                      className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block-w full p-2.5 mb-2'
                      required
                    />
                  </div>
                  <div>
                    <label className='block mb-2 text-sm font-medium text-gray'>
                      Confirm Password
                    </label>
                    <input
                      type='password'
                      name='confirmPassword'
                      id='confirm-password'
                      onChange={handleChange}
                      value={confirmPassword}
                      placeholder='••••••••'
                      className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block-w full p-2.5 mb-2'
                      required
                    />
                  </div>
                  <button
                    type='submit'
                    className='border-2 h-10 w-28 mt-1 rounded-lg text-white shadow-md shadow-blue-400/50 bg-[#4285F4] hover:bg-[#4285F4]/90'
                  >
                    {' '}
                    Sign Up
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='h-32 p-32 rounded-md place-items-center'>
        <img src={officeThumb} alt='logo' className='mr-5 h-auto max-w-full' />
      </div>
    </div>
  )
}

export default SignUpForm
