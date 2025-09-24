import PartnerTabs from "../components/layout/PartnerTabs";
import BalanceCard from "../components/balance/BalanceCard";
import OrganizationCard from "../components/organization/OrganizationCard";
import PayoutsSection from "../components/payouts/PayoutsSection";

export default function PartnerAccount() {
  return (
    <div className="p-4 space-y-6">
      <PartnerTabs />
      <BalanceCard />
      <OrganizationCard />
      <PayoutsSection />
    </div>
  );
}
