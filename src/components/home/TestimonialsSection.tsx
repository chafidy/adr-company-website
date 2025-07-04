
const TestimonialsSection = () => {
  return (
    <section className="bg-adr-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ce que nos clients disent</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Témoignages de groupes ayant voyagé avec nous à Madagascar
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="flex items-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
            </div>
            <p className="text-gray-600 mb-4">
              "Un voyage scolaire inoubliable pour nos 45 élèves à la découverte de la biodiversité malgache. Organisation impeccable, guides pédagogues, et une équipe à l'écoute de nos besoins spécifiques."
            </p>
            <div className="font-semibold">- Lycée Français de Tananarive</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="flex items-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
            </div>
            <p className="text-gray-600 mb-4">
              "Notre grande famille de 12 personnes a adoré le circuit des baobabs. Le logement était parfaitement adapté pour nous permettre de rester ensemble. Les enfants ont été émerveillés par la faune locale."
            </p>
            <div className="font-semibold">- Famille Rakotonirina</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="flex items-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
            </div>
            <p className="text-gray-600 mb-4">
              "Notre association a choisi ADR COMPANY pour un séjour solidaire à Madagascar. Le circuit mixant découvertes culturelles et actions sur le terrain était parfaitement équilibré. Une expérience riche en émotions."
            </p>
            <div className="font-semibold">- Association Mada-Actions</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
