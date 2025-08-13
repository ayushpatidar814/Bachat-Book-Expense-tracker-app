import React, {useState} from 'react'
import { Eye, EyeOff } from 'lucide-react';

const Input = ({value, onChange, placeholder, label, type}) => {

    const [showPassword, seTShowPassword] = useState(false);

    const toggleShowPassword = () => {
        seTShowPassword(!showPassword);
    };

  return (
    <div>
        <label className='text-[13px] text-slate-800'>{label}</label>

        <div className="input-box">
            <input type={type == 'password' ? showPassword ? 'text' : 'password' : type}
            placeholder={placeholder}
            className='w-full bg-transaparent outline-none'
            value={value}
            onChange={(e) => onChange(e)} />   

            {type === 'password' && (
                <>
                    {showPassword ? (
                        <div onClick={()=> toggleShowPassword()} className="text-primary cursor-pointer" >
                            <Eye />
                        </div>
                    ) : (
                        <div onClick={()=> toggleShowPassword()} className="text-slate-400 cursor-pointer" >
                            <EyeOff />
                        </div>
                    )}
                </>
            )} 
        </div>        
    </div>
  )
}

export default Input