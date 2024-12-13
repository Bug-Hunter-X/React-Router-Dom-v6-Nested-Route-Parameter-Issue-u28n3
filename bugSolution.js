```javascript
import { BrowserRouter, Routes, Route, useParams, useLocation, Navigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:userId/profile" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

function UserProfile() {
  const { userId } = useParams();
  const location = useLocation();

  // Check if userId is available in the location's pathname
  if (!location.pathname.includes(`/users/${userId}`)){
    return <Navigate to="/" replace={true} />;
  }

  return (
    <h1>User Profile {userId}</h1>
  );
}
```