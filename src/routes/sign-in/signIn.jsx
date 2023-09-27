import SignInForm from '../../components/SignInForm'
import SignUpForm from '../../components/SignUpForm'
import officeThumb from '../../assets/images/office.png'
const SignIn = () => {
  return (
    <div className=' inline-flex justify-evenly bg-slate-100 h-fit w-full'>
      <div className='flex justify-start '>
        <SignInForm />
        <SignUpForm />
      </div>
      <div className='h-32 p-32 rounded-md place-items-center'>
        <img src={officeThumb} alt='logo' className='mr-5 h-auto max-w-full' />
      </div>
    </div>
  )
}

export default SignIn
