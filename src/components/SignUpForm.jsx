import {
  createAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
  createUserDocFromAuth,
} from '../utils/firebase.utils'
import { useState, useContext } from 'react'
import { UserContext } from '../contexts/user-contexts'
import FormInput from './form-input/form-input.component'

const SignUpForm = () => {
  const { setCurrentUser } = useContext(UserContext)
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
      setCurrentUser(user)
      await createUserDocFromAuth(user, { displayName })
      resetFormFields()
    } catch (error) {
      console.log('error' + error.message)
    }
  }
  const defaultFormFields = {
    displayName:'',
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
    <div className=''>
      <div className='grid justify-start ml-12 mt-16 shadow-slate-100 shadow-inner mb-10 rounded-md mr-5'>
        <div>
          <div className='flex flex-col items-center justify-center px-6 lg:py-0 mt-4'>
            <div className='w-full bg-white rounded-lg md:mt-0 sm:max-w-md xl:p-0 mb-10'>
              <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
                <h1 className='lg:text-2xl text-center font-bold leading-tight tracking-tight text-gray-900 sm:text-lg'>
                  Create an account
                </h1>
                <form onSubmit={handleSubmit}>
                  <div>
                    <FormInput
                      label='Display Name'
                      type='text'
                      name='displayName'
                      id='displayName'
                      onChange={handleChange}
                      value={displayName}
                      placeholder='Name'
                      className='bg-gray-50 w-full border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block-w full p-2.5 mb-2'
                      required
                    />
                  </div>
                  <div>
                    <FormInput
                      label='Your Email'
                      type='email'
                      name='email'
                      id='email'
                      onChange={handleChange}
                      value={email}
                      placeholder='name@company.com'
                      className='bg-gray-50 border w-full border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block-w full p-2.5 mb-2'
                      required
                    />
                  </div>
                  <div>
                    <FormInput
                      label='Password'
                      type='password'
                      name='password'
                      id='password'
                      onChange={handleChange}
                      value={password}
                      placeholder='••••••••'
                      className='bg-gray-50 border w-full border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block-w full p-2.5 mb-2'
                      required
                    />
                  </div>
                  <div>
                    <FormInput
                      label='Confirm Password'
                      type='password'
                      name='confirmPassword'
                      id='confirm-password'
                      onChange={handleChange}
                      value={confirmPassword}
                      placeholder='••••••••'
                      className='bg-gray-50 border w-full border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block-w full mb-2 p-2.5'
                      required
                    />
                  </div>
                  <button
                    type='submit'
                    className='border-2 mr-3 h-11 w-36 mt-1 rounded-lg text-white shadow-md shadow-blue-400/50 bg-[#4285F4] hover:bg-[#4285F4]/90'
                  >
                    Sign Up{' '}
                  </button>
                  <button
                    type='button'
                    className='w-full mt-1 h-9 text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-2 text-center inline-flex items-center justify-around dark:focus:ring-[#4285F4]/55'
                    onClick={logGoogleuser}
                  >
                    <svg
                      className='ml-9 w-4 h-4'
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
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpForm
