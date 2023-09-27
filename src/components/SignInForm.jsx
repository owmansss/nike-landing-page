import SubmitButton from "./button/SubmitButton"
import FormInput from "./form-input/form-input.component"

const SignInForm = () => {
  return (
    <div className='mt-16 mb-10 h-96 w-96 shadow-slate-200 shadow-lg border-2 rounded-md'>
      <h1 className='text-2xl flex justify-center font-semibold mt-3 mb-3'>
        SIGN IN
      </h1>
      <div className=' mt-5'>
        <div className='m-3'>
          <FormInput
          label='Display Name'
            type='text'
            name='displayName'
            placeholder='Name'
            className='bg-gray-50 border w-full border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block-w full p-2.5 mb-2'
            required
          />
        </div>
        <div className='m-3'>
          <FormInput
           label='Password'
            type='password'
            name='password'
            placeholder='••••••••'
            className='bg-gray-50 border w-full border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block-w full p-2.5 mb-2'
            required
          />
        </div>
      </div>
      <div className='mt-5 m-3'>
       <SubmitButton />
        <button
          type='submit'
          className='border-2 w-full h-11 inline-flex items-center justify-center mt-1 rounded-lg text-white shadow-md shadow-blue-400/50 bg-[#4285F4] hover:bg-[#4285F4]/90 text-sm'
        >
          <svg
            className='mr-5 w-4 h-4'
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
          </svg>{' '}
          Sign in With Google
        </button>
      </div>
    </div>
  )
}

export default SignInForm
