import { Card, CardContent } from "../../components/ui/Card";

export default function BalanceCard() {
  return (
    <Card>
      <CardContent className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-4 max-h-95">
        <div>
          <p className="text-gray-500">Balance:</p>
          <p className="font-semibold text-[#006999]">0$</p>
        </div>
        <div className="grid grid-cols-2 md:flex md:gap-8 text-sm text-center w-88, h-55 gap-15 divide-x-4 divide-gray-200"></div>
      </CardContent>
    </Card>
  );
}
