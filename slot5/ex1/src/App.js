// src/App.js
import React from 'react'; 
import RegistrationForm from './components/forms/RegistrationForm';
import LoginForms from './components/forms/LoginForms';
import ManageUser from './components/ManageUser/ManageUser';
function App() {
  return (
    <div className="App">
      <LoginForms />
      {/* Có thể thêm header, navbar nếu cần */}
      <RegistrationForm />


      <ManageUser />

      {/* Footer hoặc nội dung khác nếu bài tập yêu cầu */}
      <footer className="text-center mt-5 py-3 bg-light">
        <p>Bro, 1TB Disk is so expensive, my LT dying help ToT</p>
      </footer>
    </div>
  );
}

export default App;