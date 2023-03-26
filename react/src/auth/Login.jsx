export default function Login() {
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
       <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
       <p className="mt-2 text-sm text-gray-600">
        Or{' '}
        <a href="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
         register a new account
        </a>
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

       <div className="mt-6">
        <form action="#" method="POST" className="space-y-6">


         <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                  autoComplete="current-password"
                  required
                  className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Password"
                />
              </div>
            </div>

         <div className="flex items-center justify-between">
          <div className="flex items-center">
           <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
           />
           <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
            Remember me
           </label>
          </div>

          <div className="text-sm">
           <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
            Forgot your password?
           </a>
          </div>
         </div>

         <div>
          <button
           type="submit"
           className="flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
           Sign in
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
