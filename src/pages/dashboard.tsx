import { memo } from 'react';
import { LayoutGrid } from 'lucide-react';
import '../styles/dashboard.css';


const Dashboard = () => {
    return (
        <div>
            <div className="d-drawer lg:d-drawer-open">
                <input id="my-drawer" type="checkbox" className="d-drawer-toggle" />
                <div className="d-drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}

                    <label htmlFor="my-drawer" className="btn btn-primary d-drawer-button lg:hidden">
                        Open drawer
                    </label>
                </div>

                <div className="d-drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="d-drawer-overlay"></label>

                    <ul className="d-menu bg-white border-r-1 border-neutral-50 min-h-full w-70 p-4">
                        <div className="mb-4">
                            <div className="flex items-center justify-start gap-3">
                                <img src="./logo.svg" className="w-[26px]" alt="CrediNova logo" />
                                <span className="font-semibold text-lg">CrediNova</span>
                            </div>
                        </div>

                        {/* Sidebar content here */}
                        <li>
                            <a>
                                <LayoutGrid className="w-[18px]" />
                                Dashboard
                            </a>
                        </li>
                        <li>
                            <details open>
                                <summary>
                                    <LayoutGrid className="w-[18px]" />
                                    Loans
                                </summary>
                                <ul>
                                    <li>
                                        <a>
                                            {/* <LayoutGrid className="w-[18px]" /> */}
                                            Active Loans
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            {/* <LayoutGrid className="w-[18px]" /> */}
                                            Loan History
                                        </a>
                                    </li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <a className="d-menu-active">
                                <LayoutGrid className="w-[18px]" />
                                Dashboard
                            </a>
                        </li>


                    </ul>
                    
                </div>
            </div>
        </div>
    );
}

export default memo(Dashboard);
