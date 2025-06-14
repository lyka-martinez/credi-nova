import { memo } from 'react';
import { Mail, LockKeyhole, EyeOff } from 'lucide-react';
import WhiteLogo from '../assets/images/logo-white.webp';
import Google from '../assets/images/google-logo.png';
import Banner from '../assets/images/banner.png';
import '../styles/loginPage.css';


const LoginPage = () => {
    return (
        <div className="b-login-page">
            {/* Banner Section */}
            <div className="b-banner bg-accent-500">
                <div className="flex items-center justify-start w-full gap-2 lg:gap-3">
                    <img src={WhiteLogo} className="w-[24px] sm:w-[28px]" alt="crediNova logo" />
                    <span className="font-medium xs:text-lg lg:text-xl">CrediNova</span>
                </div>

                <img src={Banner} alt="Finance Banner" className="w-auto h-[50%] max-h-[380px] hidden lg:block" />

                <div className="text-start w-full">
                    <h1 className="text-lg font-medium tracking-wider mb-2 sm:text-2xl lg:text-3xl lg:mb-5">
                        Empowering Your Financial Future
                    </h1>

                    <p className="text-xs text-secondary-500 sm:text-base">
                        Secure, simple, and personalized finance solutions at your fingertips.
                    </p>
                </div>  
            </div>

            {/* Login Section */}
            <div className="b-login">
                <div className="b-login-main">

                    <div className="w-full flex flex-col gap-4 lg:max-w-[420px] lg:gap-5">
                        <div className="text-start w-full">
                            <h2 className="hidden text-3xl font-bold mb-2 lg:block lg:mb-3">
                                Welcome Back
                            </h2>
                            <p className="text-sm text-neutral-300">
                                Enter your Email and Password to Log In.
                            </p>
                        </div>

                        <form className="w-full flex flex-col gap-2">
                            {/* Email Inputs */}
                            <fieldset className="d-fieldset">
                                <legend className="d-fieldset-legend">Email</legend>

                                <label className="d-input d-validator sm:d-input-lg">
                                    <Mail className="w-[16px] sm:w-[18px]" />
                                    <input type="email" placeholder="Enter email address" required />
                                </label>

                                <div className="d-validator-hint hidden mt-0">
                                    Enter valid email address
                                </div>
                            </fieldset>

                            {/* Password */}
                            <div>
                                <fieldset className="d-fieldset">
                                    <legend className="d-fieldset-legend">Password</legend>

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

                                        <button type="button" className="btn btn-ghost h-full px-1">
                                            <EyeOff className="w-[16px] text-neutral-200 sm:w-[18px]" />
                                        </button>
                                    </label>

                                    <div className="d-validator-hint hidden mt-0">
                                        Must be more than 8 characters, including
                                        <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
                                    </div>
                                </fieldset>

                                <div className="text-end text-xs font-medium mt-2 sm:text-xs">
                                    <a href="#" className="text-primary">Forget Password?</a>
                                </div>
                            </div>
                        </form>

                        {/* Form Buttons */}
                        <div className="w-full flex flex-col gap-2 pt-4 lg:gap-3">
                            <button className="d-btn d-btn-accent sm:d-btn-lg">Log In</button>

                            <div className="d-divider text-xs text-neutral-300 my-2 sm:text-xs">Or Log In With</div>

                            <button className="d-btn bg-white border-neutral-100 sm:d-btn-lg hover:bg-secondary-500/60">
                                <img src={Google} className="w-[18px] sm:w-[20px]" alt="crediNova logo" />
                                Google
                            </button>
                        </div>

                        {/* Register Link */}
                        <div className="w-full text-center pt-4">
                            <p className="text-xs text-neutral-300 sm:text-xs">
                                Don't have an account? <a href="#" className="font-medium text-primary">Register Here</a>
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
    );
}

export default memo(LoginPage);
