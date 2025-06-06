import { merchantsApi } from '@/api/merchants/api';
import { Button } from '@/components/ui/button';
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
import { QUERY_KEYS } from '@/constants/queries';
import { MerchantInfoSchema } from '@/features/merchant/info/schema';
import { MerchantInfoType } from '@/queries';
import { formatBusinessNumber, formatPhoneNumber } from '@/utils/format-register';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { Pencil } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { CardHeader } from './CardHeader';
import * as styles from './merchant-info.css';

type MerchantInfoFormType = z.infer<typeof MerchantInfoSchema>;

interface MerchantInfoFormProps {
  merchantInfo: MerchantInfoType;
}

const MerchantInfoForm = ({ merchantInfo }: MerchantInfoFormProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const form = useForm<MerchantInfoFormType>({
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

  const { mutate: updateMerchantInfo, isPending } = useMutation({
    mutationFn: (data: MerchantInfoFormType) => {
      return merchantsApi.update({
        name: data.name,
        businessNumber: data.businessNumber,
        contactName: data.contactName,
        contactEmail: data.contactEmail,
        contactPhone: data.contactPhone,
      });
    },
    meta: {
      invalidates: [[QUERY_KEYS.MERCHANT.INFO]],
    },
    onSuccess: () => {
      setIsEditing(false);
      form.reset();
    },
  });

  const handleSubmit = async (data: MerchantInfoFormType) => {
    updateMerchantInfo(data);
  };

  return (
    <Card className={styles.cardContainer}>
      <CardHeader title="기본 정보" description="가맹점의 기본 정보를 확인할 수 있습니다." />
      <div className={styles.merchantInfoContent}>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <div className={styles.formGrid}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>가맹점명</FormLabel>
                    <FormControl>
                      <Input {...field} readOnly={!isEditing} />
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
                        readOnly={!isEditing}
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
                      <Input {...field} readOnly={!isEditing} />
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
                      <Input {...field} type="email" readOnly={!isEditing} />
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
                        readOnly={!isEditing}
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
                <div className={styles.buttonContainer}>
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={() => {
                      form.reset();
                      setIsEditing(false);
                    }}
                    disabled={isPending}
                  >
                    취소
                  </Button>
                  <Button
                    type="submit"
                    variant="primary"
                    disabled={!form.formState.isValid || isPending}
                  >
                    {isPending ? '저장 중...' : '저장'}
                  </Button>
                </div>
              ) : (
                <Button width="fit" variant="primary" onClick={() => setIsEditing(true)}>
                  <div className={styles.buttonIcon}>
                    <Pencil size={16} />
                    정보 수정
                  </div>
                </Button>
              )}
            </div>
          </form>
        </Form>
      </div>
    </Card>
  );
};

export default MerchantInfoForm;
