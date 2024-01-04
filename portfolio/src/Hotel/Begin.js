import minhaImagem from '././img/hero-image-1.png'
export function Begin(){
    return(
        <div class="h-screen">
            <div class="container mx-auto px-4 h-24 flex items-center">
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
                {minhaImagem && (
                <div style={{ backgroundImage: `url(${minhaImagem})`, height: '450px' }}>
                    <div class="container mx-auto px-4 h-full flex items-center justify-center">
                        <div>
                            <div class='text-center'>
                                <h1 class="text-gray-200 text-3xl mb-2">Onde você quer ir?</h1>
                                <p class="text-green-100">Escolha cidade e estado para encontrar os melhores resorts</p>
                            </div>
                            <div class='mt-7'>
                                <form class='space-x-4'>
                                    <select name="" id="" class='bg-gray-50 px-3 py-2 border border-gray-300 rounded text-gray-500'>
                                        <option value="">Escolha o estado</option>
                                    </select>
                                    <select name="" id="" class='bg-gray-50 px-3 py-2 border border-gray-300 rounded text-gray-500'>
                                        <option value="">Escolha a cidade</option>
                                    </select>
                                    <button class="inline-flex items-center text-yellow-900 bg-yellow-500 font-medium px-3 py-2 rounded">
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
    </div>

    )
}