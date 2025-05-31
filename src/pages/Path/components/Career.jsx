import careerData from '../data/careerData.json'

export default function Career() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto px-4">
      {careerData.map((item, index) => (
        <section key={index}>
          <div className="bg-surface -mx-4 px-4 py-8">
            <h3 className="text-xl text-primaryColor font-semibold mb-2">{item.title}</h3>
            <p>{item.description}</p>
            <p>{item.responsibilities}</p>
            <p>{item.achievements}</p>
            <p>{item.developed_skills}</p>
          </div>
        </section>
      ))}

    </div>
  );
}