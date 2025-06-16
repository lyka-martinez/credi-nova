import { memo, useState } from 'react'
import { Mail, LockKeyhole, EyeClosed, Eye } from 'lucide-react'
import InputField from './input'
import Button from './button'
import WhiteLogo from '../assets/images/logo-white.webp'
import Google from '../assets/images/google-logo.png'
import Banner from '../assets/images/banner.png'
import '../styles/loginpage.css'

/**
 * LoginBanner component displays the banner section of the login page.
 * @returns JSX.Element
 */

const LoginBanner = () => (
    <div className="b-banner bg-accent-500">
        <div className="flex w-full items-center justify-start gap-2 lg:gap-3">
            <img
                src={WhiteLogo}
                className="w-[24px] sm:w-[28px]"
                alt="crediNova logo"
            />
            <span className="xs:text-lg font-medium lg:text-xl">CrediNova</span>
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
                Secure, simple, and personalized finance solutions at your
                fingertips.
            </p>
        </div>
    </div>
)

/**
 * LoginPage component
 * @param onLogin - Callback function to handle login action
 * @returns JSX.Element
 */

type LoginPageProps = {
    onLogin: () => void
}

const LoginPage = ({ onLogin }: LoginPageProps) => {
    const [showPassword, setshowPassword] = useState(false)
    const [form, setForm] = useState({ email: '', password: '' })

    const hanldeSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const { email, password } = form
        if (email === 'admin@gmail.com' && password === '1234') {
            onLogin()
        } else {
            alert('Invalid email or password')
        }
    }

    return (
        <div className="b-login-page">
            {/* Banner Section */}
            <LoginBanner />

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

                        <form
                            id="LoginForm"
                            className="flex w-full flex-col gap-2"
                            onSubmit={hanldeSubmit}
                        >
                            <InputField
                                label="Email"
                                icon={<Mail className="w-[16px] sm:w-[18px]" />}
                                inputProps={{
                                    required: true,
                                    type: 'email',
                                    placeholder: 'Enter email address',
                                    value: form.email,
                                    onChange: (e) => {
                                        setForm({
                                            ...form,
                                            email: e.target.value,
                                        })
                                    },
                                }}
                                hint="Enter valid email address"
                                className="d-validator sm:d-input-lg"
                            />

                            <div>
                                <InputField
                                    label="Password"
                                    type={showPassword ? 'text' : 'password'}
                                    icon={
                                        <LockKeyhole className="w-[16px] sm:w-[18px]" />
                                    }
                                    inputProps={{
                                        placeholder: 'Enter Password',
                                        required: true,
                                        value: form.password,
                                        onChange: (e) => {
                                            setForm({
                                                ...form,
                                                password: e.target.value,
                                            })
                                        },
                                    }}
                                    hint="Enter valid password"
                                    className="sm:d-input-lg"
                                >
                                    <button
                                        type="button"
                                        className="btn btn-ghost h-full px-1"
                                        tabIndex={-1}
                                        onClick={() =>
                                            setshowPassword((prev) => !prev)
                                        }
                                        aria-label={
                                            showPassword
                                                ? 'Hide Password'
                                                : 'Show Password'
                                        }
                                    >
                                        {showPassword ? (
                                            <Eye className="w-[16px] text-neutral-200 sm:w-[18px]" />
                                        ) : (
                                            <EyeClosed className="w-[16px] text-neutral-200 sm:w-[18px]" />
                                        )}
                                    </button>
                                </InputField>

                                <div className="mt-2 text-end text-xs font-medium sm:text-xs">
                                    <a href="#" className="text-primary">
                                        Forget Password?
                                    </a>
                                </div>
                            </div>
                        </form>

                        {/* Form Buttons */}
                        <div className="flex w-full flex-col gap-2 pt-4 lg:gap-3">
                            <Button
                                type="submit"
                                variant="accent"
                                size="lg"
                                form="LoginForm"
                            >
                                Log In
                            </Button>

                            <div className="d-divider my-2 text-xs text-neutral-300 sm:text-xs">
                                Or Log In With
                            </div>

                            <Button
                                variant="secondary"
                                size="lg"
                                leftIcon={
                                    <img
                                        src={Google}
                                        className="w-[18px] sm:w-[20px]"
                                        alt="crediNova logo"
                                    />
                                }
                            >
                                Google
                            </Button>
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
