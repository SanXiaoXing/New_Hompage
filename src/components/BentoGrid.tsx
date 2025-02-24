import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { featuresData } from '@/components/content/featuresData';

export function BentoDemo() {
  return (
    <BentoGrid className="lg:grid-cols-3">
      {featuresData.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}