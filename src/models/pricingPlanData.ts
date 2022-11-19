export type PricingPlanIcon = 'close' | 'checkmark';

type PricingDataList = {
  text: string;
  icon: PricingPlanIcon;
};

type PricingPlanData = {
  type?: 'starter' | 'complete';
  price: number;
  mealsPerDay: number;
  list: PricingDataList[];
};

export default PricingPlanData;
