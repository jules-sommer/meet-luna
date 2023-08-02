import { email, string, object, Output, literal, nullable, optional, boolean, enumType } from 'valibot'
import { createForm } from '@modular-forms/solid'


const SignInFormSchema = object({
    email: string([email()]),
})

type SignInForm = Output<typeof SignInFormSchema>

export const TextInput = () => {



}

export const SignInForm = () => {

    const [signInForm, { Form, Field }] = createForm<SignInForm>({
        initialValues: {
            email: '',
        },
    });

    const handleSubmit = (data: SignInForm) => {
        console.log(data);
    };
    
    return (

        <Form onSubmit={handleSubmit}>
                
            <Field name="email">
                {(field, props) => (
                    <input type="email" {...props} />
                )}
            </Field> 

            <button type='submit'></button>

        </Form>

    );

}