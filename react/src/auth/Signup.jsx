import { useState } from 'react';
import { Link } from 'react-router-dom';
import axiosClient from '../axios.js';
import { useStateContext } from '../context/ContextProvider.jsx';



export default function Signup() {
  const { setCurrentUser, setUserToken } = useStateContext();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState({ __html: '' });

  const onSubmit = (e) => {
    e.preventDefault();
    setError({ __html: '' });

    axiosClient
      .post('http://127.0.0.1:8000/api/signup', {
        name: fullName,
        email,
        password,
        password_confirmation: confirmPassword,
      })
      .then(({ data }) => {
        setCurrentUser(data.user);
        setUserToken(data.token);
        //console.log(data);
      })
      .catch((error) => {
        if (error.response) {
          const finalErrors = Object.values(error.response.data.errors).reduce((accum, next) =>
            [...accum, ...next,], [])
          console.log(finalErrors);
          setError({ __html: finalErrors.join('<br />') });
        }
        console.error(error);
      });

  }
  return (
    <>
      <div className="flex min-h-full">
        <div className="relative hidden w-0 flex-1 lg:block">
          <img
            className="absolute inset-0 h-screen w-full object-cover"
            src="https://www.thrustforge.com/ThrustForgeFrontImage.png"
            alt=""
          />
        </div>
        <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 mt-20">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <img
                className="h-100 w-auto"
                src="https://www.thrustforge.com/ThrustForgeMainLogo2400x1800.png"
                alt="ThrustForge"
              />
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">Register your account</h2>
              <p className="mt-2 text-sm text-gray-600">
                Or{' '}
                <Link
                  to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                  sign in to your account
                </Link>
              </p>
            </div>

            <div className="mt-8">
              <div>


                <div className="relative mt-6">
                  <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-gray-300" />
                  </div>

                </div>
              </div>

              {error.__html && (<div className="bg-red-500 rounded py-2 px-2 text-white" dangerouslySetInnerHTML={error}></div>)}

              <div className="mt-6">
                <form onSubmit={onSubmit} method="POST" className="space-y-6" >


                  <div className="-space-y-px shadow-sm">

                    <div>
                      <label htmlFor="email-address" className="sr-only">
                        Full Name
                      </label>
                      <input
                        id="full-name"
                        name="full-name"
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                        className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Full Name.."
                      />
                    </div>               <div>
                      <label htmlFor="email-address" className="sr-only">
                        Email address
                      </label>
                      <input
                        id="email-address"
                        name="email"
                        type="email"
                        value={email}
                        autoComplete="email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="relative block w-full border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Email address"
                      />
                    </div>
                    <div>
                      <label htmlFor="password" className="sr-only">
                        Password
                      </label>
                      <input
                        id="password"
                        name="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="current-password"
                        required
                        className="relative block w-full border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Password"
                      />
                    </div>
                    <div>
                      <label htmlFor="confirm-password" className="sr-only">
                        Confirm Password
                      </label>
                      <input
                        id="confirm-password"
                        name="confirm_password"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Confirm Password"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="terms-accepted"
                        name="terms_accepted"
                        type="checkbox"
                        required
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                        I accept the terms and conditions
                      </label>
                    </div>


                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
