const FormInput = ({label, ...OtherProps}) => {
  return (
    <div>
      <label className='block mb-2 text-sm font-medium text-gray'>
        {label}
      </label>
      <input {...OtherProps} />
    </div>
  )
}

export default FormInput
