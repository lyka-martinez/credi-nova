import { memo } from 'react'
import { Mail, LockKeyhole, EyeOff } from 'lucide-react'
import WhiteLogo from '../assets/images/logo-white.webp'
import Google from '../assets/images/google-logo.png'
import Banner from '../assets/images/banner.png'
import '../styles/loginpage.css'

const LoginPage = () => {
    return (
        <div className="b-login-page">
            {/* Banner Section */}
            <div className="b-banner bg-accent-500">
                <div className="flex w-full items-center justify-start gap-2 lg:gap-3">
                    <img
                        src={WhiteLogo}
                        className="w-[24px] sm:w-[28px]"
                        alt="crediNova logo"
                    />
                    <span className="xs:text-lg font-medium lg:text-xl">
                        CrediNova
                    </span>
                </div>

                <img
                    src={Banner}
                    alt="Finance Banner"
                    className="hidden h-[50%] max-h-[380px] w-auto lg:block"
                />

                <div className="w-full text-start">
                    <h1 className="mb-2 text-lg font-medium tracking-wider sm:text-2xl lg:mb-5 lg:text-3xl">
                        Empowering Your Financial Future
                    </h1>

                    <p className="text-secondary-500 text-xs sm:text-base">
                        Secure, simple, and personalized finance solutions at
                        your fingertips.
                    </p>
                </div>
            </div>

            {/* Login Section */}
            <div className="b-login">
                <div className="b-login-main">
                    <div className="flex w-full flex-col gap-4 lg:max-w-[420px] lg:gap-5">
                        <div className="w-full text-start">
                            <h2 className="mb-2 hidden text-3xl font-bold lg:mb-3 lg:block">
                                Welcome Back
                            </h2>
                            <p className="text-sm text-neutral-300">
                                Enter your Email and Password to Log In.
                            </p>
                        </div>

                        <form className="flex w-full flex-col gap-2">
                            {/* Email Inputs */}
                            <fieldset className="d-fieldset">
                                <legend className="d-fieldset-legend">
                                    Email
                                </legend>

                                <label className="d-input d-validator sm:d-input-lg">
                                    <Mail className="w-[16px] sm:w-[18px]" />
                                    <input
                                        type="email"
                                        placeholder="Enter email address"
                                        required
                                    />
                                </label>

                                <div className="d-validator-hint mt-0 hidden">
                                    Enter valid email address
                                </div>
                            </fieldset>

                            {/* Password */}
                            <div>
                                <fieldset className="d-fieldset">
                                    <legend className="d-fieldset-legend">
                                        Password
                                    </legend>

                                    <label className="d-input d-validator sm:d-input-lg">
                                        <LockKeyhole className="w-[16px] sm:w-[18px]" />
                                        <input
                                            type="password"
                                            required
                                            placeholder="Enter Password"
                                            minLength={8}
                                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                            title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                                        />

                                        <button
                                            type="button"
                                            className="btn btn-ghost h-full px-1"
                                        >
                                            <EyeOff className="w-[16px] text-neutral-200 sm:w-[18px]" />
                                        </button>
                                    </label>

                                    <div className="d-validator-hint mt-0 hidden">
                                        Must be more than 8 characters,
                                        including
                                        <br />
                                        At least one number <br />
                                        At least one lowercase letter <br />
                                        At least one uppercase letter
                                    </div>
                                </fieldset>

                                <div className="mt-2 text-end text-xs font-medium sm:text-xs">
                                    <a href="#" className="text-primary">
                                        Forget Password?
                                    </a>
                                </div>
                            </div>
                        </form>

                        {/* Form Buttons */}
                        <div className="flex w-full flex-col gap-2 pt-4 lg:gap-3">
                            <button className="d-btn d-btn-accent sm:d-btn-lg">
                                Log In
                            </button>

                            <div className="d-divider my-2 text-xs text-neutral-300 sm:text-xs">
                                Or Log In With
                            </div>

                            <button className="d-btn sm:d-btn-lg hover:bg-secondary-500/60 border-neutral-100 bg-white">
                                <img
                                    src={Google}
                                    className="w-[18px] sm:w-[20px]"
                                    alt="crediNova logo"
                                />
                                Google
                            </button>
                        </div>

                        {/* Register Link */}
                        <div className="w-full pt-4 text-center">
                            <p className="text-xs text-neutral-300 sm:text-xs">
                                Don't have an account?{' '}
                                <a
                                    href="#"
                                    className="text-primary font-medium"
                                >
                                    Register Here
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer Section */}
                <div className="b-login-footer">
                    <p>© 2025 All rights reserved</p>

                    <div className="flex gap-4">
                        <a href="#">Terms of Use</a>
                        <a href="#">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(LoginPage)
