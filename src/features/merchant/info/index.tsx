import AdminSection from '@/components/layout/section/admin';
import { MerchantInfoType } from '@/queries/merchants/format';
import { useOutletContext } from 'react-router-dom';
import MerchantDeletion from './components/MerchantDeletion';
import MerchantInfoForm from './components/MerchantInfoForm';

const MerchantInfo = () => {
  const merchantInfo = useOutletContext<MerchantInfoType>();

  return (
    <AdminSection label={'가맹점 정보'}>
      <MerchantInfoForm merchantInfo={merchantInfo} />
      <MerchantDeletion />
    </AdminSection>
  );
};

export default MerchantInfo;
