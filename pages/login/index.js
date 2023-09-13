import { useRouter } from 'next/router';
import { useState } from 'react';
import Form from '@/components/Form';
import FormGroup from '@/components/FormGroup';
import Button from '@/components/Button';
import FormLink from '@/components/FormLink';
import { loginUser } from '@/services/user';
import { alertShow } from '@/components/Alert';

const Login = () => {
  const router = useRouter();
  const [state, setState] = useState({ emailLogin: '', passwordLogin: '' });

  const handlerSubmit = async (e) => {
    e.preventDefault();

    const { emailLogin, passwordLogin } = state;

    if (emailLogin && passwordLogin) {
      try {
        const { data, status } = await loginUser({
          email: emailLogin,
          password: passwordLogin,
        });

        if (status === 200) {
          localStorage.setItem('userData', JSON.stringify(data));
          alertShow.success('Successful login');
          router.push('/');
        }
      } catch ({
        response: {
          data: { message },
        },
      }) {
        alertShow.error(message);
      }
    } else {
      alertShow.info('Email and password required');
    }
  };

  const handlerChange = ({ name, value }) => {
    setState({ ...state, [name]: value });
  };

  return (
    <section className="ContainerCenter">
      <Form
        customClass="Form"
        title="welcome to the todo app"
        onSubmit={handlerSubmit}
      >
        <FormGroup
          customClass="col-12"
          controlId="input-email-login"
          inputType="email"
          inputName="emailLogin"
          labelText="Email Address"
          onChange={handlerChange}
        />

        <FormGroup
          customClass="col-12"
          controlId="input-password-login"
          inputType="password"
          inputName="passwordLogin"
          labelText="Password"
          onChange={handlerChange}
        />

        <Button typeButton="submit" customClass="Form-button" text="login" />

        <FormLink
          linkDescription="Don't have an account?"
          href="/signUp"
          linkText="Sign Up here!"
        />
      </Form>
    </section>
  );
};

export default Login;
