import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button"
import Image from 'next/image';

interface SliceCardProps{
  name: string;
}

export default function SliceCard(props: SliceCardProps) {
  return (
    <Card className="w-72 max-w-sm overflow-hidden mb-3 rounded-sm">
      
        <div className="relative w-full h-60">
          <Image src="/ultimate-pepp.jpg" layout="fill" objectFit="cover" alt="ultimate-pepp" />
        </div>
      <CardHeader>
        <p className="text-xl font-bold leading-none">{props.name}</p>
      </CardHeader>

      <CardFooter>
        <Button className="bg-yellow-300">
          <p className="text-sm font-bold">Order Now</p>
          </Button>
      </CardFooter>
    </Card>
  );
}
