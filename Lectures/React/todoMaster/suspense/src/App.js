import { Suspense, lazy } from "react";
import UserSkeleton from "./components/Skeletons/user.skeleton";
import { ErrorBoundary } from "react-error-boundary";
// import ErrorBoundary from "./utils/error-boundary,js";
import ApiCustomError from "./apis/@error";

// import UserList from './components/UserList';
const UserList = lazy(() => import("./components/UserList"));

// const RenderLoading = () => <p style={{ fontSize: "300px" }}>Loading...</p>;

function App() {
  return (
    <Suspense fallback={<UserSkeleton />}>
      <ErrorBoundary
        fallback={<div>에러발생!!</div>}
        onError={(err) => {
          const { response } = err;
          const theError = new ApiCustomError(response.data, response.status);
          alert(theError);
        }}
      >
        <UserList />
      </ErrorBoundary>
    </Suspense>
  );
}

export default App;
