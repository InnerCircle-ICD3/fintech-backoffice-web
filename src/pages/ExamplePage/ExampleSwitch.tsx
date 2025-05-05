import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/Form';
import { Switch } from '@/components/ui/Switch';
import { formFieldsContainer, formItemStyle, labelContainer } from './example.css';

const FormSchema = z.object({
  marketing_emails: z.boolean().default(false).optional(),
  security_emails: z.boolean(),
});

export const ExampleSwitch = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      security_emails: true,
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log('Form submitted:', data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div>
          <h3>Email Notifications</h3>
          <div className={formFieldsContainer}>
            <FormField
              control={form.control}
              name="marketing_emails"
              render={({ field }) => (
                <FormItem className={formItemStyle}>
                  <div className={labelContainer}>
                    <FormLabel>Marketing emails</FormLabel>
                    <FormDescription>
                      Receive emails about new products, features, and more.
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch size="sm" checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <FormControl>
                    <Switch size="md" checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <FormControl>
                    <Switch size="lg" checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="security_emails"
              render={({ field }) => (
                <FormItem className={formItemStyle}>
                  <div className={labelContainer}>
                    <FormLabel>Security emails</FormLabel>
                    <FormDescription>Receive emails about your account security.</FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      disabled
                      aria-readonly
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </div>
      </form>
    </Form>
  );
};
