export function Login() {
    return (
      <div class="h-screen w-screen flex items-center justify-center bg-gray-100 ">
        <div class="w-80">
        <h2 class="text-lg font-bold text-center mb-4">Login</h2>

        <div class="bg-white shadow-md rounded-md p-6 space-y-4">
            <div>
                <label
                    for="email"
                    class="block text-sm text-gray-800 mb-1"
                >E-mail</label>
                <input
                    id="email"
                    type="text"
                    class="w-full bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 rounded px-3 py-2 text-sm text-gray-800 placeholder-gray-300 focus:outline-none transition duration-200 ease-in-out"
                />
            </div>

            <div>
                <label
                    for="password"
                    class="block text-sm text-gray-800 mb-1"
                >Senha</label>
                <input

                    id="password"
                    type="text"
                    class="w-full bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 rounded px-3 py-2 text-sm text-gray-800 placeholder-gray-300 focus:outline-none transition duration-200 ease-in-out"
                />
            </div>

            <div class="text-right">
                <a href="index.html" class="text-sm text-gray-500 hover:underline">
                    Esqueci minha senha
                </a>
            </div>

            <div>
                <button class="w-full text-sm bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white shadow">
                    Login
                </button>
            </div>
        </div>
    </div>
</div>
    );
  }
  