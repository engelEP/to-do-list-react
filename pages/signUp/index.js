import { useState } from 'react';
import { useRouter } from 'next/router';
import Button from '@/components/Button';
import Form from '@/components/Form';
import FormGroup from '@/components/FormGroup';
import FormLink from '@/components/FormLink';
import Checkbox from '@/components/Checkbox';
import { registerUser } from '@/services/user';
import { alertShow } from '@/components/Alert';

const SignUp = () => {
  const router = useRouter();
  const [check, setCheck] = useState(false);

  const [state, setState] = useState({
    nameSignUp: '',
    emailSignUp: '',
    passwordSignUp: '',
  });

  const handlerCheck = () => {
    setCheck((prevCheck) => !prevCheck);
  };

  const handlerChange = ({ name, value }) => {
    setState({ ...state, [name]: value });
  };

  const handlerSubmit = async (e) => {
    e.preventDefault();

    const { nameSignUp, emailSignUp, passwordSignUp } = state;

    if (nameSignUp && emailSignUp && passwordSignUp && check) {
      try {
        const { status } = await registerUser({
          email: emailSignUp,
          name: nameSignUp,
          password: passwordSignUp,
        });

        if (status) {
          alertShow.success('Registration completed!!!');
          router.push('/login');
        }
      } catch ({
        response: {
          data: { message },
        },
      }) {
        alertShow.error(message);
      }
    } else {
      alertShow.info('All fields are required...');
    }
  };

  return (
    <section className="ContainerCenter">
      <Form
        customClass="Form"
        onSubmit={handlerSubmit}
        title="sign up for our newsletter"
        subTitle="Fill out your information below to be signed up
        for our informative newsletter."
      >
        <FormGroup
          customClass="col-12"
          controlId="input-name-signUp"
          inputName="nameSignUp"
          inputType="text"
          labelText="first name"
          onChange={handlerChange}
        />

        <FormGroup
          customClass="col-12"
          controlId="input-email-signUp"
          inputName="emailSignUp"
          inputType="email"
          labelText="Email Address"
          onChange={handlerChange}
        />

        <FormGroup
          customClass="col-12"
          controlId="input-password-signUp"
          inputName="passwordSignUp"
          inputType="password"
          labelText="Password"
          onChange={handlerChange}
        />

        <div className="col-12">
          <span className="Form-label d-block">
            Add me to your mailing list
          </span>
          <Checkbox
            id="input-checkBox-signUp"
            classCheckbox="Form-checkBox form-check-input"
            classLabel="Form-label checkLabel"
            label="I agree to receive e-mails from your company and your terms and conditions."
            check={check}
            onChange={handlerCheck}
          />
        </div>

        <Button
          customClass="Form-button"
          text="sign me up"
          typeButton="submit"
        />
        <FormLink
          linkDescription="Already have an account?"
          linkText="Login here!"
          href="/login"
        />
      </Form>
    </section>
  );
};

export default SignUp;
