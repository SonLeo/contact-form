import React from 'react'
import { Formik } from 'formik'
import './App.css'

function App() {
  const REGEX = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
  }

  const handleFormSubmit = (values) => {
    alert(JSON.stringify(values))
  }

  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
        phone: '',
        message: ''
      }}
      onSubmit={handleFormSubmit}
      validate={(values) => {
        const errors = {}

        if (!values.username) {
          errors.username = 'Username không được để trống'
        }

        if (!values.email) {
          errors.email = 'Email không được để trống'
        } else if (!REGEX.email.test(values.email)) {
          errors.email = 'Email nhập chưa đúng'
        }

        if (!values.phone) {
          errors.phone = 'Số điện thoại không được để trống'
        }

        return errors
      }}
    >
      {({ values, errors, handleChange, handleSubmit, handleBlur, touched, setFieldTouched }) => (
        <div className='main'>
          <form id='form-1' className='form' onSubmit={handleSubmit}>
            <h3 className='heading'>Contact form</h3>
            <p className='desc'>Cùng nhau học lập trình tại CODEGYM ❤️</p>

            <div className='spacer'></div>

            <div className={`form-group ${errors.username && touched.username ? 'invalid' : ''}`}>
              <label className='form-label' htmlFor='username'>
                Tên đăng nhập
              </label>
              <input
                name='username'
                id='username'
                placeholder='VD: Sơn Trịnh'
                className='form-control'
                value={values.username}
                onChange={handleChange}
                onBlur={() => setFieldTouched('username', true)}
              />
              {errors.username && touched.username && <span className='form-message'>{errors.username}</span>}
            </div>

            <div className={`form-group ${errors.email && touched.email ? 'invalid' : ''}`}>
              <label className='form-label' htmlFor='email'>
                Email
              </label>
              <input
                name='email'
                id='email'
                placeholder='VD: email@domain.com'
                className='form-control'
                value={values.email}
                onChange={handleChange}
                onBlur={() => setFieldTouched('email', true)}
              />
              {errors.email && touched.email && <span className='form-message'>{errors.email}</span>}
            </div>

            <div className={`form-group ${errors.phone && touched.phone ? 'invalid' : ''}`}>
              <label className='form-label' htmlFor='phone'>
                Số điện thoại
              </label>
              <input
                name='phone'
                type='number'
                id='phone'
                placeholder='Nhập số điện thoại'
                className='form-control'
                value={values.phone}
                onChange={handleChange}
                onBlur={() => setFieldTouched('phone', true)}
              />
              {errors.phone && touched.phone && <span className='form-message'>{errors.phone}</span>}
            </div>

            <div className='form-group'>
              <label className='form-label' htmlFor='message'>
                Message
              </label>
              <textarea
                id='message'
                className='form-control'
                name='message'
                rows={4}
                cols={50}
                placeholder='Để lại lời nhắn'
                onChange={handleChange}
                value={values.message}
              ></textarea>
            </div>

            <button type='submit' className='form-submit'>
              Submit
            </button>
          </form>
        </div>
      )}
    </Formik>
  )
}

export default App