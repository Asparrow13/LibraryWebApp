import { createBrowserRouter,type RouteObject, RouterProvider } from "react-router-dom"
import ThemeToggle from "./ThemeToggle";
import './App.css'

const myRoutes : RouteObject[] =[
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/books',
        element: <Books/>
    },
    {
        path: '/authors',
        element: <Authors/>
    },
    {
        path: '/genre',
        element: <Genre/>
    }
]


function Home() {
    return (
        <>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Homepage</a></li>
                            <li><a>Books</a></li>
                            <li><a>Authors</a></li>
                            <li><a>Genre</a></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <a className="btn-ghost text-xl">Home</a>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> </svg>
                    </button>
                    <ThemeToggle /> {}
                </div>
            </div>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                    {/*head*/}
                        <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Genre</th>
                        </tr>
                        </thead>
                        <tbody>
                    {/*row 1*/}
                        <tr className="hover:bg-base-300">
                        <th>1</th>
                        <td>Cy Ganderton</td>
                        <td>Ahmed</td>
                        <td>Comedy</td>
                        </tr>
                    {/*row 2*/}
                        <tr className="hover:bg-base-300">
                        <th>2</th>
                        <td>Hart Hagerty</td>
                        <td>Ahmed</td>
                        <td>Thriller</td>
                        </tr>
                    {/*row 3*/}
                        <tr className="hover:bg-base-300">
                        <th>3</th>
                        <td>Brice Swyre</td>
                        <td>Ahmed</td>
                        <td>Romance</td>
                        </tr>
                        </tbody>
                </table>
            </div>
        </>
    );
}

function Books() {
    return (
        <>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Homepage</a></li>
                            <li><a>Books</a></li>
                            <li><a>Authors</a></li>
                            <li><a>Genre</a></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <a className="btn-ghost text-xl">Books</a>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> </svg>
                    </button>
                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </button>
                </div>
            </div>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                    {/*head*/}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Genre</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/*row 1*/}
                    <tr className="hover:bg-base-300">
                        <th>1</th>
                        <td>Cy Ganderton</td>
                        <td>Ahmed</td>
                        <td>Comedy</td>
                    </tr>
                    {/*row 2*/}
                    <tr className="hover:bg-base-300">
                        <th>2</th>
                        <td>Hart Hagerty</td>
                        <td>Ahmed</td>
                        <td>Thriller</td>
                    </tr>
                    {/*row 3*/}
                    <tr className="hover:bg-base-300">
                        <th>3</th>
                        <td>Brice Swyre</td>
                        <td>Ahmed</td>
                        <td>Romance</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

function Authors() {
    return (
        <div>This is the list of book authors</div>
    );
}

function Genre() {
    return (
        <div>This is the list of book genre</div>
    );
}

function App() {
  return <RouterProvider router = {createBrowserRouter(myRoutes)} />
}

export default App
