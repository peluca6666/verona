'use client';

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function About() {
    return (
        <div className="bg-white min-h-screen">
            <Header />

            <main className="pt-24 pb-8 sm:pt-32 sm:pb-16">


                <div className="container mx-auto px-4 max-w-6xl">

                    <div className="text-center mb-12 sm:mb-16">
                        <h1
                            className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-4"
                            style={{ fontFamily: 'Playfair Display, serif' }}
                        >
                            SOBRE NOSOTROS
                        </h1>
                        <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto"></div>
                    </div>

                    <div className="space-y-10 sm:space-y-16">


                        <div className="bg-gray-50 rounded-2xl p-6 sm:p-10 shadow-md">
                            <h2
                                className="text-xl sm:text-2xl font-light text-gray-900 mb-4"
                                style={{ fontFamily: 'Playfair Display, serif' }}
                            >
                                Nuestra Historia
                            </h2>

                            <p className="text-gray-700 leading-relaxed text-base">
                                Verona Joyas es un pequeño emprendimiento que se inauguró un 16 de septiembre de 2024 en Villa del Dique.
                                A medida de que pasaba el tiempo, nuestro negocio era mas conocido y nos alegra decir que ahora trabajamos en distintas zonas de todo Calamuchita. Por el momento trabajamos solo con
                                **tienda online** coordinando entregas, pero trabajaremos duro para tener nuestro espacio físico 🤍
                            </p>
                        </div>


                        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                            <div className="group">
                                <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 shadow-md hover:bg-amber-50 transition-colors duration-300">
                                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-amber-200 transition-colors duration-300">
                                        <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                        </svg>
                                    </div>

                                    <h3 className="text-lg font-medium text-gray-900 mb-2">Calidad Garantizada</h3>
                                    <p className="text-gray-600 text-base leading-relaxed">
                                        En nuestro emprendimiento encontrarás joyas de **acero quirúrgico** y sus variantes de acero dorado, blanco y joyas de **plata 925**.
                                    </p>
                                </div>
                            </div>

                            <div className="group">
                                <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 shadow-md hover:bg-amber-50 transition-colors duration-300">
                                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-amber-200 transition-colors duration-300">
                                        <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </div>

                                    <h3 className="text-lg font-medium text-gray-900 mb-2">Atención Personalizada</h3>
                                    <p className="text-gray-600 text-base leading-relaxed">
                                        Estoy muy feliz de que seas parte del camino de Verona Joyas y espero que nos sigas acompañando por muchos más años. Ya sabes que las joyitas mas lindas, en tendencia, para todas las edades y géneros las encontrás acá ✨
                                        Te saluda **Meli**.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6 sm:p-10 border border-amber-100 shadow-md">
                            <h2
                                className="text-xl sm:text-2xl font-light text-gray-900 mb-6 text-center"
                                style={{ fontFamily: 'Playfair Display, serif' }}
                            >
                                ¿Por Qué Elegirnos?
                            </h2>

                            <div className="grid grid-cols-3 gap-4">
                                <div className="text-center">
                                    <div className="text-2xl sm:text-3xl font-light text-amber-600 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                                        100%
                                    </div>
                                    <p className="text-gray-700 text-xs sm:text-sm font-medium">Productos Auténticos</p>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl sm:text-3xl font-light text-amber-600 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                                        +100
                                    </div>
                                    <p className="text-gray-700 text-xs sm:text-sm font-medium">Clientes Satisfechos</p>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl sm:text-3xl font-light text-amber-600 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                                        100%
                                    </div>
                                    <p className="text-gray-700 text-xs sm:text-sm font-medium">Compromiso</p>
                                </div>
                            </div>
                        </div>

                        {/* CTA WhatsApp */}
                        <div className="bg-gray-50 rounded-2xl p-6 sm:p-10 text-center shadow-md">
                            <h2
                                className="text-xl sm:text-2xl font-light text-gray-900 mb-3"
                                style={{ fontFamily: 'Playfair Display, serif' }}
                            >
                                ¿Tenés Alguna Consulta?
                            </h2>
                            <p className="text-gray-600 mb-6 text-base">
                                Estamos acá para ayudarte. No dudes en **contactarnos por WhatsApp**.
                            </p>
                            <button
                                onClick={() => window.open('https://wa.me/5493546515266?text=Hola! Quisiera hacer una consulta', '_blank')}
                                className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 sm:px-8 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
                            >
                                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.867-2.03-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                                </svg>
                                <span className="text-sm sm:text-base">Contactar por WhatsApp</span>
                            </button>
                        </div>

                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}