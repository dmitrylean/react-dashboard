import { Card, CardContent } from "../ui/Card";

export default function OrganizationCard() {
  return (
    <Card>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 text-sm">
        <div className="space-y-1">
          <p>
            <strong>Name:</strong> Full Name
          </p>
          <p>
            <strong>Email:</strong> mail@mail.ru
          </p>
          <p>
            <strong>Payment System:</strong> Visa / MasterCard
          </p>
          <p>
            <strong>Bank:</strong> New York Bank
          </p>
          <p>
            <strong>PayPal:</strong> 0000000000
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
