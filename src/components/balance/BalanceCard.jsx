import { useState } from "react";
import { Card, CardContent } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { Checkbox } from "../../components/ui/Checkbox";

export default function BalanceCard() {
  const [checked, setChecked] = useState(false);

  return (
    <Card>
      <CardContent className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-4">
        <div>
          <p className="text-gray-500">Баланс на счёте:</p>
          <p className="text-xl font-bold">0 руб.</p>
        </div>
        <div className="grid grid-cols-2 md:flex md:gap-6 text-sm text-center">
          <div>
            Группа 1<br />
            40%
          </div>
          <div>
            Группа 2<br />
            20%
          </div>
          <div>
            Группа 3<br />
            10%
          </div>
          <div>
            Группа 4<br />
            5%
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
