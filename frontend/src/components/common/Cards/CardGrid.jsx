import CoreCard from './CoreCard';

const cards = [
  {
    title: 'Strategic Facilities Intelligence',
    subtitle: 'Data-Driven Excellence in Facilities Management',
    slogan:
      'Intelligence without action is meaningless. These dashboards transform data into decisions, insights into improvements, and analytics into achievements that drive operational excellence.',
  },
  {
    title: 'Derivco Facilities-Management System',
    subtitle: 'Comprehensive Operational Control',
    slogan: 'Stewardship in facility management ensures sustainable spaces, aligning resources with purpose.',
  },
  {
    title: 'Service Providers',
    subtitle: 'Trusted Partners in Facility Excellence',
    slogan:
      'Our carefully selected network of service providers delivers specialized expertise across all facility management domains, ensuring comprehensive coverage, quality service delivery, and operational excellence.',
  },
];

export default function CardGrid() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <CoreCard key={index} title={card.title} subtitle={card.subtitle} slogan={card.slogan} />
          ))}
        </div>
      </div>
    </section>
  );
}