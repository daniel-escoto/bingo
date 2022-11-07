import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePageButtons = ({ isAuthenticated, logout }) => {
  if (isAuthenticated) {
    return (
      <>
        <Link
          to={routes.adminUsers()}
          className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
        >
          Manage Users
        </Link>
        <button
          onClick={logout}
          className="rounded bg-red-500 py-2 px-4 font-bold text-white hover:bg-red-700 ml-4"
        >
          Logout
        </button>
      </>
    )
  } else {
    return (
      <>
        <Link
          to={routes.signup()}
          className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
        >
          Sign Up
        </Link>
        <Link
          to={routes.login()}
          className="ml-4 rounded bg-green-500 py-2 px-4 font-bold text-white hover:bg-green-700"
        >
          Log In
        </Link>
      </>
    )
  }
}

const HomePage = () => {
  const { isAuthenticated, logOut } = useAuth()

  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Welcome to Bingo</h1>
        <div className="flex flex-row mt-4">
          <HomePageButtons isAuthenticated={isAuthenticated} logout={logOut} />
        </div>
      </div>
    </>
  )
}

export default HomePage
