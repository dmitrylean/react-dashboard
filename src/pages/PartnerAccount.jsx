import TopNav from "../components/layout/TopNav";
import BalanceCard from "../components/balance/BalanceCard";
import OrganizationCard from "../components/organization/OrganizationCard";
import PayoutsSection from "../components/payouts/PayoutsSection";

export default function PartnerAccount() {
  return (
    <div className="min-h-screen bg-gray-50">
      <TopNav />
      <div className="p-6 space-y-6">
        <BalanceCard />
        <OrganizationCard />
        <PayoutsSection />
      </div>
    </div>
  );
}
