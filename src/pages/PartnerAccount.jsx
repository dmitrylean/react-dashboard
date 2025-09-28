import TopNav from "../components/layout/TopNav";
import BalanceCard from "../components/balance/BalanceCard";
import ClientCard from "../components/client/ClientCard";
import PayoutsSection from "../components/payouts/PayoutsSection";
import DashboardLayout from "../components/layout/DashboardLayout";

export default function PartnerAccount() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardLayout>
        <TopNav />
        <div className="p-6 space-y-6">
          <BalanceCard />
          <ClientCard />
          <PayoutsSection />
        </div>
      </DashboardLayout>
    </div>
  );
}
