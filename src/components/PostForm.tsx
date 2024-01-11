import { TextField } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { z } from 'zod';

import { postFormData } from '@homework-task/api';
import CreateForm from '@homework-task/components/CreateForm';
import { PostFormData } from '@homework-task/types';

const PostForm = () => {
    const usePostMutation = () => useMutation({ mutationFn: postFormData });
    const postValidationSchema = z.object({
        title: z.string().max(50).min(1), // Assuming a max length of 100 characters for the title
        body: z.string().max(500).min(1), // Assuming a max length of 500 characters for the body
    });
    return (
        <CreateForm<PostFormData>
            title="Create Post"
            validationSchema={postValidationSchema}
            successMessage="Post created successfully!"
            useMutation={usePostMutation}
            renderForm={({ register, errors }) => (
                <>
                    <TextField
                        label="Title"
                        error={!!errors.title}
                        helperText={<>{errors.title?.message}</>}
                        autoFocus
                        {...register('title')}
                    />
                    <TextField
                        color="primary"
                        label="Body"
                        aria-label="body"
                        placeholder="Body"
                        error={!!errors.title}
                        helperText={<>{errors.title?.message}</>}
                        {...register('body')}
                    />
                </>
            )}
        />
    );
};

export default PostForm;
