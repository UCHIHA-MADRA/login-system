async function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    try {
      const response = await axios.post('/login', { username, password });
      document.getElementById('error').textContent = response.data;
    } catch (error) {
      document.getElementById('error').textContent = 'Invalid credentials';
    }
  }
  