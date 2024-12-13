```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* This route will cause issues if the user navigates directly to it  */}
        <Route path="/users/:userId/profile" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

function UserProfile(){
  //This component has an issue
  const { userId } = useParams();
  return(
    <h1>User Profile {userId}</h1>
  );
}
```