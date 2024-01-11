import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@mui/material';
import { UseMutationResult } from '@tanstack/react-query';
import {
    FieldValues,
    SubmitHandler,
    useForm,
    UseFormRegister,
    UseFormReturn,
} from 'react-hook-form';
import { ZodType } from 'zod';

type CreateFormProps<TFormFields extends FieldValues> = {
    title: string;
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    useMutation: () => UseMutationResult<any, unknown, TFormFields>;
    validationSchema: ZodType<TFormFields>;
    successMessage: string;
    renderForm: (methods: {
        register: UseFormRegister<TFormFields>;
        errors: UseFormReturn['formState']['errors'];
    }) => React.ReactNode;
};

function CreateForm<TFormFields extends FieldValues>({
    title,
    useMutation,
    validationSchema,
    successMessage,
    renderForm,
}: CreateFormProps<TFormFields>) {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<TFormFields>({ resolver: zodResolver(validationSchema) });

    const mutation = useMutation();

    const onSubmit: SubmitHandler<TFormFields> = (data) => {
        mutation.mutate(data, { onSuccess: () => alert(successMessage) });
    };

    return (
        <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-3xl font-bold">{title}</h1>
            {renderForm({ register, errors })}
            <Button className="" type="submit" disabled={!isValid}>
                Submit
            </Button>
        </form>
    );
}

export default CreateForm;
