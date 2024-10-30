import * as z from 'zod';

export const personalDetailsSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters' })
    .max(50, { message: 'Name must not exceed 50 characters' }),
  email: z.string().email('Invalid email address'),
  address: z
    .string()
    .min(5, { message: 'Address must be at least 5 characters' })
    .max(100, { message: 'Address must not exceed 100 characters' }),
  phoneNumber: z
    .string()
    .regex(/^\+?[\d\s-]{10,}$/, { message: 'Please enter a valid phone number' })
    .min(10, 'Phone number must be at least 10 characters'),
  institution: z
    .string()
    .min(2, { message: 'Institution name must be at least 2 characters' })
    .max(50, { message: 'Institution name must not exceed 50 characters' }),
  socialMedia: z.string().url('Social media link must be a valid URL')
});

export const teamSchema = z.object({
  teamOption: z.enum(['create', 'join'], {
    required_error: 'Please select an option'
  }),
  teamName: z.string().min(2, { message: 'Team name must be at least 2 characters' })
});

export const registrationSchema = z.object({
  ...personalDetailsSchema.shape,
  ...teamSchema.shape
});

export type RegistrationSchema = z.infer<typeof registrationSchema>;
