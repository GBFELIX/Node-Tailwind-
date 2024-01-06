import Banner from './img/hero-image-1.png'
import Midft from './img/featured-img.png'
import Grid1 from './img/hotel-1.jpeg'
import Grid2 from './img/hotel-2.jpeg'
import Grid3 from './img/hotel-3.jpeg'
import Grid4 from './img/hotel-4.jpeg'
import Shadow from './img/image-shadow.png'
import Face from './img/icon-facebook.png'
import Insta from './img/icon-instagram.png'


export function Begin(){
    return(
        <div class="h-screen text-gray-600">
            <div class="container max-w-5xl mx-auto px-4 h-24 flex items-center">
                <div class="font-black">
                    Logo
                </div>
                <ul class="ml-auto space-x-4 flex items-center">
                    <li>
                        <a class="text-sm text-gray-600 hover:text-gray-800 hover:underline mr-2" href="index.html">Reservas</a>
                    </li>
                    <li>
                        <a class="text-sm text-gray-600 hover:text-gray-800 hover:underline mr-2" href="index.html">Saiba mais</a>
                    </li>
                    <li>
                        <a class="text-sm text-gray-600 hover:text-gray-800 hover:underline mr-2" href="index.html">Informações</a>
                    </li>
                    <li>
                        <a class="text-sm text-gray-600 hover:text-gray-800 hover:underline" href="index.html">Contato</a>
                    </li>
                </ul>
            </div>
            <div>
                {Banner && (
                <div style={{ backgroundImage: `url(${Banner})`, height: '450px' }}>
                    <div class="container max-w-5xl mx-auto px-4 h-full flex items-center justify-center">
                        <div>
                            <div class='text-center'>
                                <h1 class="text-gray-200 text-3xl mb-2">Onde você quer ir?</h1>
                                <p class="text-green-100">Escolha cidade e estado para encontrar os melhores resorts</p>
                            </div>
                            <div class='mt-7'>
                                <form class='grid grid-cols-2 lg:grid-cols-3 gap-4'>
                                    <select name="" id="" class='bg-gray-50 px-3 py-2 border border-gray-300 rounded text-gray-500'>
                                        <option value="">Escolha o estado</option>
                                    </select>
                                    <select name="" id="" class='bg-gray-50 px-3 py-2 border border-gray-300 rounded text-gray-500'>
                                        <option value="">Escolha a cidade</option>
                                    </select>
                                    <button class="col-span-2 lg:grid-cols-1 inline-flex items-center justify-center text-yellow-900 bg-yellow-500 font-medium px-3 py-2 rounded">
                                        <svg class='w-4 h-4 mr-2' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>
                                        Pesquisar resorts
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
        <div>
            <div class="container max-w-5xl mx-auto px-4 py-20">
                <div class="flex flex-col-reverse lg:flex-row">
                    <div class="pr-10">
                        <div class="text-sm text-gray-400 font-medium">Resort destaque</div>
                        <div class="text-2xl">Ecoresort</div>
                        <div class="text-sm text-gray-400 font-medium mt-2">Hotel qualidade 5 stars</div>
                        <div class="text-sm text-gray-400 font-medium mt-4">
                            <p class="mb-4">Lorem ipsum dolor sit amet . Os operadores gráficos e tipográficos sabem disso bem, na realidade, todas as profissões que lidam com o universo da comunicação têm um relacionamento estável com essas palavras, mas o que é? Lorem ipsum é um texto fofo sem qualquer sentido.</p>
                            <p class="mb-4">É uma seqüência de palavras latinas que, como estão posicionadas, não formem frases com um sentido completo, mas dão vida a um texto de teste útil para preencher</p>
                        </div>
                        <div class="mt-4">
                            <a href="index.html" class="inline-flex items-center text-yellow-900 bg-yellow-500 font-medium px-3 py-2 rounded">
                                    Solicitar reserva
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg>
                            </a>
                        </div>
                    </div>
                    <div class="flex-shrink-0 lg:ml-auto mb-5 lg:mb-0">
                        <img src={Midft} width="450" alt="foto" srcset="" />
                    </div>

                </div>
            </div>
        </div>

        <div>
            <div class="container max-w-5xl mx-auto px-4">
                <div>
                    <h3 class="text-2xl text-center text-gray-500 text-semibold mb-8">Conheça mais resorts</h3>
                    <div class="md:grid md:grid-cols-4 md:grid-rows-2 md:gap-6 space-y-6 md:space-y-0">
                        <div class="relative md:col-span-2 md:row-span-2 rounded-lg overflow-hidden">
                            <div class="absolute bottom-0 pl-4 pb-4 font-bold text-white z-20">
                                Beach Park Resort
                            </div>
                            <img src={Shadow} alt="" class="absolute bottom-0 left-0 right-0 h-20 z-10"/>
                            <img src={Grid1} alt="" srcset="" class="w-full h-full object-cover"/>
                        </div>
                        <div class="relative lg:col-span-2 lg:h-60  rounded-lg overflow-hidden">
                            <div class="absolute bottom-0 pl-4 pb-4 text-white font-bold z-20">
                                Salinas do Maragogi Resort
                            </div>
                            <img src={Shadow} alt="" class="absolute bottom-0 left-0 right-0 h-20 z-10"/>
                            <img src={Grid2} alt="" srcset="" class="w-full h-full object-cover"/>
                        </div>
                        <div class="relative rounded-lg overflow-hidden">
                            <div class="absolute bottom-0 pl-4 pb-4 font-bold text-white z-20">
                                grand Palladium
                            </div>
                            <img src={Shadow} alt="" class="absolute bottom-0 left-0 right-0 h-20 z-10"/>
                            <img src={Grid3} alt="" srcset="" class="w-full h-full object-cover"/>
                        </div>
                        <div class="relative rounded-lg overflow-hidden">
                            <div class="absolute bottom-0 pl-4 pb-4 font-bold text-white z-20">
                                Arraial d'Ajuda Eco Resort
                            </div>
                            <img src={Shadow} alt="" class="absolute bottom-0 left-0 right-0 h-20 z-10"/>
                            <img src={Grid4} alt="" srcset="" class="w-full h-full object-cover"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="py-20">
            <div class="container max-w-5xl px-auto px-4 flex justify-center">
                <form class='grid grid-cols-2 lg:grid-cols-3 gap-4'>
                    <select name="" id="" class='bg-gray-50 px-3 py-2 border border-gray-300 rounded text-gray-500'>
                        <option value="">Escolha o estado</option>
                    </select>
                    <select name="" id="" class='bg-gray-50 px-3 py-2 border border-gray-300 rounded text-gray-500'>
                        <option value="">Escolha a cidade</option>
                    </select>
                    <button class="col-span-2 lg:grid-cols-1 inline-flex items-center justify-center text-yellow-900 bg-yellow-500 font-medium px-3 py-2 rounded">
                        <svg class='w-4 h-4 mr-2' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>
                                        Pesquisar resorts
                    </button>
                </form>
            </div>
        </div>

        <div class='border-t border-gray-200'>
            <div class="container max-w-5xl mx-auto p-4 flex items-center justify-between">
                <div class="text-gray-400 font-black">
                    Logo
                </div>
                <div class="flex items-center space-x-3">
                    <a href="index.html"><img src={Face} alt="" srcset="" /></a>
                    <a href="index.html"><img src={Insta} alt="" srcset="" /></a>
                </div>
            </div>
        </div>
    </div>

    )
}