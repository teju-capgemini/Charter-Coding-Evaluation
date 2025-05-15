import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Login from "../pages/auth/Login"
import Error from "../pages/auth/Error";
import { Suspense } from "react";
import ProtectedRoute from "../layout/ProtectedRoute";
import { LINKS } from "../constant/linkConstant";
import RoutesList from "./routes";


const AppRouter = () => {
    const loggedInUser = localStorage.getItem('authToken');
  return (
    <BrowserRouter>
    <Routes>
        {
            !loggedInUser && (
                <>
                   <Route path='/' element={<Navigate to={"/login"}/>}/>
                   <Route path='/login' element={<Login />} />
                   <Route path="/" element={<Error />} />
                </>
            )

        }
   
      {/* Protected Routes */}
      <Route element={<ProtectedRoute redirectTo={LINKS.HOME} />}>
        {RoutesList.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <route.component />
              </Suspense>
            }
          />
        ))}
      </Route>

      {/* Catch-all Route */}
      <Route path="*" element={<Error />} />
    </Routes>
</BrowserRouter>
  )
}

export default AppRouter