import { CardHeader } from '@/components/card-header';
import Card from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { MerchantInfoSchema } from '@/features/merchant/info/schema';
import { MerchantInfoType } from '@/queries';
import { formatBusinessNumber, formatPhoneNumber } from '@/utils/format-register';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useUpdateMerchant } from '../hooks/useUpdateMerchant';
import * as styles from './merchant-info.css';
import MerchantInfoFormAction from './MerchantInfoFormAction';

type FormValues = z.infer<typeof MerchantInfoSchema>;

interface Props {
  merchantInfo: MerchantInfoType;
}

const MerchantInfoForm = ({ merchantInfo }: Props) => {
  const [isEditing, setIsEditing] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(MerchantInfoSchema),
    mode: 'all',
    defaultValues: {
      name: merchantInfo.name,
      businessNumber: merchantInfo.businessNumber,
      contactName: merchantInfo.contact.name,
      contactEmail: merchantInfo.contact.email,
      contactPhone: merchantInfo.contact.phone,
    },
  });

  const { mutate: updateMerchant, isPending } = useUpdateMerchant(() => {
    setIsEditing(false);
  });

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <Card className={styles.cardContainer}>
      <CardHeader title="기본 정보" description="가맹점의 기본 정보를 확인할 수 있습니다." />
      <div className={styles.merchantInfoContent}>
        <Form {...form}>
          <form onSubmit={form.handleSubmit((data) => updateMerchant(data))}>
            <div className={styles.formGrid}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>가맹점명</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={!isEditing} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="businessNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>사업자등록번호</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={!isEditing}
                        maxLength={12}
                        onChange={(e) => {
                          const formatted = formatBusinessNumber(e.target.value);
                          field.onChange(formatted);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="contactName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>담당자명</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={!isEditing} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="contactEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>담당자 이메일</FormLabel>
                    <FormControl>
                      <Input {...field} type="email" disabled={!isEditing} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="contactPhone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>담당자 연락처</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={!isEditing}
                        maxLength={13}
                        onChange={(e) => {
                          const formatted = formatPhoneNumber(e.target.value);
                          field.onChange(formatted);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className={styles.buttonWrapper}>
              {isEditing ? (
                <MerchantInfoFormAction.EditButtons
                  onCancel={handleCancel}
                  isSubmitting={isPending}
                  isValid={form.formState.isValid}
                />
              ) : (
                <MerchantInfoFormAction.ModifyButton onClick={() => setIsEditing(true)} />
              )}
            </div>
          </form>
        </Form>
      </div>
    </Card>
  );
};

export default MerchantInfoForm;
