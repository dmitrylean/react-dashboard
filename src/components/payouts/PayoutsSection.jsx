import { useState } from "react";
import { Card, CardContent } from "../../components/ui/Card";
import { Input } from "../../components/ui/Input";
import PayoutsTable from "./PayoutsTable";
import PayoutsCards from "./PayoutsCards";
import PaginationBar from "../../components/ui/PaginationBar";

const payouts = [
  {
    date: "05.02.2024 11:31",
    sum: "59 440 ₽",
    request: "выплачено ранее (обновление программы)",
    to: "2202206254381556",
    status: "выплачено",
  },
  {
    date: "05.02.2024 11:31",
    sum: "59 440 ₽",
    request: "перевод на банковскую карту",
    to: "2202206254381556",
    status: "выплачено",
  },
];

export default function PayoutsSection() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const visiblePayouts =
    pageSize === "all"
      ? payouts
      : payouts.slice((page - 1) * pageSize, page * pageSize);

  return (
    <Card>
      <CardContent className="p-4 space-y-4">
        <Input placeholder="Поиск" className="w-full md:w-64" />

        <div className="hidden md:block">
          <PayoutsTable payouts={visiblePayouts} />
        </div>

        <div className="block md:hidden">
          <PayoutsCards payouts={visiblePayouts} />
        </div>

        <PaginationBar
          totalItems={payouts.length}
          page={page}
          setPage={setPage}
          pageSize={pageSize}
          setPageSize={setPageSize}
        />
      </CardContent>
    </Card>
  );
}
