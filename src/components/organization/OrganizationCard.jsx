import { Card, CardContent } from "../../components/ui/Card";

export default function OrganizationCard() {
  return (
    <Card>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 text-sm">
        <div className="space-y-1">
          <p>
            <strong>Название организации:</strong> Имя
          </p>
          <p>
            <strong>ФИО:</strong> Имя Фамилия Отчество
          </p>
          <p>
            <strong>Юридический статус:</strong> ИП
          </p>
          <p>
            <strong>ИНН:</strong> 9878974165168
          </p>
          <p>
            <strong>Email:</strong> mail@mail.ru
          </p>
          <p>
            <strong>Телефон:</strong> +7 (987) 654-32-10
          </p>
          <p>
            <strong>Система налогообложения:</strong> без НДС
          </p>
          <p>
            <strong>Бик:</strong> 974165168
          </p>
          <p>
            <strong>Банк:</strong> Россельхоз банк
          </p>
          <p>
            <strong>Корр. счёт:</strong> 987 89 741 6 5168 00000000
          </p>
          <p>
            <strong>Расчётный счёт:</strong> 98789741651689878974
          </p>
        </div>
        <div className="space-y-1">
          <p>
            <strong>С презентацией платформы:</strong>
          </p>
          <p>Прямая ссылка на регистрацию:</p>
          <p>
            Промо для рефералов: <span className="font-bold">257042</span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
