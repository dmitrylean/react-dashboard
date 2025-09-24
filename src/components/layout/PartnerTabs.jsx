import { Tabs, TabsList, TabsTrigger } from "../../components/ui/Tabs";

export default function PartnerTabs() {
  return (
    <Tabs defaultValue="account">
      <TabsList className="flex overflow-x-auto gap-2 pb-2">
        <TabsTrigger value="account">Партнёрский счёт</TabsTrigger>
        <TabsTrigger value="refs">Рефералы</TabsTrigger>
        <TabsTrigger value="links">Ссылка и регистрации</TabsTrigger>
        <TabsTrigger value="payouts">Оплаты рефералов</TabsTrigger>
        <TabsTrigger value="rules">Правила</TabsTrigger>
        <TabsTrigger value="acts">Акты</TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
