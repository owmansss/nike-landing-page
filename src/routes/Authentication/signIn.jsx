import SignInForm from '../../components/SignInForm'
import SignUpForm from '../../components/SignUpForm'
import officeThumb from '../../assets/images/office.png'
const Auth = () => {
  return (
    <div className=' inline-flex justify-evenly bg-slate-50 h-fit w-full'>
      <div className='flex justify-start mt-5 mb-5 shadow-xl shadow-slate-300'>
        <SignInForm />
        <SignUpForm />
      </div>
      <div className='h-32 p-32 rounded-md place-items-center'>
        <img src={officeThumb} alt='logo' className='mr-5 h-auto max-w-full' />
      </div>
    </div>
  )
}

export default Auth
