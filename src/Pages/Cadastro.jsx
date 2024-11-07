


// import React, { useState } from 'react';
// import logo from '../Assets/logo-full.png';

// const RegisterPage = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//   });
//   const [showPassword, setShowPassword] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Formulário enviado:', formData);
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const styles = {
//     container: {
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       justifyContent: 'center',
//       minHeight: '100vh',
//       backgroundColor: 'white',
//       padding: '20px',
//       fontFamily: "'Poppins', sans-serif", // Aplicando a fonte Poppins
//     },
//     form: {
//       width: '100%',
//       maxWidth: '400px',
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       padding: '20px',
//       boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//       borderRadius: '8px',
//     },
//     logo: {
//       width: '200px',
//       height: 'auto',
//       marginBottom: '20px',
//     },
//     title: {
//       fontSize: '24px',
//       fontWeight: 'bold',
//       marginBottom: '20px',
//       textAlign: 'center',
//     },
//     inputGroup: {
//       marginBottom: '15px',
//       width: '100%',
//       maxWidth: '350px',
//     },
//     label: {
//       display: 'block',
//       marginBottom: '5px',
//       fontSize: '14px',
//     },
//     input: {
//       width: '100%',
//       padding: '10px',
//       fontSize: '16px',
//       border: '1px solid #ccc',
//       borderRadius: '4px',
//       marginBottom: '10px', // Espaço para o placeholder
//     },
//     passwordContainer: {
//       position: 'relative',
//     },
//     passwordToggle: {
//       position: 'absolute',
//       right: '10px',
//       top: '50%',
//       transform: 'translateY(-50%)',
//       background: 'none',
//       border: 'none',
//       cursor: 'pointer',
//     },
//     button: {
//       width: '100%',
//       padding: '10px',
//       fontSize: '16px',
//       color: 'white',
//       backgroundColor: '#007bff',
//       border: 'none',
//       borderRadius: '4px',
//       cursor: 'pointer',
//     },
//     loginLink: {
//       marginTop: '15px',
//       textAlign: 'center',
//       fontSize: '14px',
//     },
//     // Media queries para responsividade
//     '@media (max-width: 768px)': {
//       form: {
//         width: '90%',
//       },
//       inputGroup: {
//         width: '100%',
//         maxWidth: '300px',
//       },
//       logo: {
//         width: '150px',
//       },
//       title: {
//         fontSize: '20px',
//       },
//       button: {
//         fontSize: '14px',
//       },
//     },
//     '@media (max-width: 480px)': {
//       form: {
//         width: '90%',
//       },
//       inputGroup: {
//         width: '100%',
//         maxWidth: '250px',
//       },
//       logo: {
//         width: '120px',
//       },
//       title: {
//         fontSize: '18px',
//       },
//       button: {
//         fontSize: '12px',
//       },
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <form style={styles.form} onSubmit={handleSubmit}>
//         <img src={logo} alt="Logo" style={styles.logo} />
//         <h2 style={styles.title}>Inscreva-se na sua conta</h2>

//         <div style={styles.inputGroup}>
//           <label htmlFor="username" style={styles.label}>Nome de usuário</label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             value={formData.username}
//             onChange={handleInputChange}
//             required
//             style={styles.input}
//             placeholder="Digite seu nome de usuário"
//           />
//         </div>

//         <div style={styles.inputGroup}>
//           <label htmlFor="email" style={styles.label}>Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             required
//             style={styles.input}
//             placeholder="Digite seu email"
//           />
//         </div>

//         <div style={styles.inputGroup}>
//           <label htmlFor="password" style={styles.label}>Senha</label>
//           <div style={styles.passwordContainer}>
//             <input
//               type={showPassword ? "text" : "password"}
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleInputChange}
//               required
//               style={styles.input}
//               placeholder="Digite sua senha"
//             />
//             <button
//               type="button"
//               onClick={togglePasswordVisibility}
//               style={styles.passwordToggle}
//             >
//               {showPassword ? "Ocultar" : "Mostrar"}
//             </button>
//           </div>
//         </div>

//         <button type="submit" style={styles.button}>
//           Inscreva-me
//         </button>

//         <p style={styles.loginLink}>
//           Já tem uma conta? <a href="/login">Fazer Login</a>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default RegisterPage;
import React, { useState } from 'react';
import logo from '../Assets/logo-full.png';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulário enviado:', formData);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: 'white',
      padding: '20px',
      fontFamily: "'Poppins', sans-serif", // Aplicando a fonte Poppins
    },
    form: {
      width: '100%',
      maxWidth: '400px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      borderRadius: '8px',
      marginBottom: '20px',
    },
    logo: {
      width: '200px',
      height: 'auto',
      marginBottom: '20px',
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '20px',
      textAlign: 'center',
    },
    inputGroup: {
      marginBottom: '15px',
      width: '100%',
      maxWidth: '350px',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      fontSize: '14px',
    },
    input: {
      width: '100%',
      padding: '10px',
      fontSize: '16px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      marginBottom: '10px',
      boxSizing: 'border-box',
    },
    passwordContainer: {
      position: 'relative',
    },
    passwordToggle: {
      position: 'absolute',
      right: '10px',
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: '#007bff',
      fontWeight: 'bold',
    },
    button: {
      width: '100%',
      padding: '12px',
      fontSize: '16px',
      color: 'white',
      backgroundColor: '#007bff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    loginLink: {
      marginTop: '15px',
      textAlign: 'center',
      fontSize: '14px',
    },
    // Media queries para responsividade
    '@media (max-width: 768px)': {
      form: {
        width: '90%',
      },
      inputGroup: {
        width: '100%',
        maxWidth: '300px',
      },
      logo: {
        width: '150px',
      },
      title: {
        fontSize: '20px',
      },
      button: {
        fontSize: '14px',
      },
    },
    '@media (max-width: 480px)': {
      form: {
        width: '90%',
      },
      inputGroup: {
        width: '100%',
        maxWidth: '250px',
      },
      logo: {
        width: '120px',
      },
      title: {
        fontSize: '18px',
      },
      button: {
        fontSize: '14px',
        padding: '10px',
      },
    },
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <img src={logo} alt="Logo" style={styles.logo} />
        <h2 style={styles.title}>Inscreva-se na sua conta</h2>

        <div style={styles.inputGroup}>
          <label htmlFor="username" style={styles.label}>Nome de usuário</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
            style={styles.input}
            placeholder="Digite seu nome de usuário"
          />
        </div>

        <div style={styles.inputGroup}>
          <label htmlFor="email" style={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            style={styles.input}
            placeholder="Digite seu email"
          />
        </div>

        <div style={styles.inputGroup}>
          <label htmlFor="password" style={styles.label}>Senha</label>
          <div style={styles.passwordContainer}>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              style={styles.input}
              placeholder="Digite sua senha"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              style={styles.passwordToggle}
            >
              {showPassword ? "Ocultar" : "Mostrar"}
            </button>
          </div>
        </div>

        <button type="submit" style={styles.button}>
          Inscreva-me
        </button>

        <p style={styles.loginLink}>
          Já tem uma conta? <a href="/login">Fazer Login</a>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
