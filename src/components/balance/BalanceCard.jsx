import { useState } from "react";
import { Card, CardContent } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { Checkbox } from "../../components/ui/Checkbox";

export default function BalanceCard() {
  const [checked, setChecked] = useState(false);

  return (
    <Card>
      <CardContent className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-4 max-h-95">
        <div>
          <p className="text-gray-500">Баланс на счёте:</p>
          <p className="font-semibold text-[#006999]">0 руб.</p>
        </div>
        <div className="grid grid-cols-2 md:flex md:gap-8 text-sm text-center w-88, h-55 gap-15 divide-x-4 divide-gray-200">
          <div>
            <p>Группа 1</p>
            <p className="text-left mt-2">40%</p>
          </div>
          <div>
            <p>Группа 2</p>
            <p className="text-left mt-2">60%</p>
          </div>
          <div>
            <p>Группа 3</p>
            <p className="text-left mt-2">10%</p>
          </div>
          <div>
            <p>Группа 4</p>
            <p className="text-left mt-2">5%</p>
          </div>
        </div>
        <div className="flex items-start md:items-center gap-2 text-sm">
          <Checkbox checked={checked} onCheckedChange={setChecked} />
          <span>Ознакомлен с индивидуальным партнёрским соглашением</span>
        </div>
        <Button className="w-full md:w-auto">Продолжить</Button>
      </CardContent>
    </Card>
  );
}
