function Login() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white">
      <h1 className="mb-2 text-center text-2xl font-bold">로그인</h1>
      <p className="mb-20 text-center text-gray-500">
        새로운 가능성을 발견하세요. 바로 시작할 수 있습니다.
      </p>

      <form className="space-y-6">
        <div>
          <label className="mb-2 block text-gray-700">아이디</label>
          <input
            type="email"
            placeholder="이메일 형식으로 작성해주세요"
            className="h-12 w-[520px] rounded-lg border border-gray-300 px-4 py-3 text-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-gray-700">비밀번호</label>
          <input
            type="password"
            placeholder="8자 이상으로 작성해주세요."
            className="h-12 w-[520px] rounded-lg border border-gray-300 px-4 py-3 text-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            minLength={8}
            required
          />
        </div>
        <div className="mt-8 flex flex-col gap-3">
          <button
            type="submit"
            className="h-12 w-[520px] rounded-lg border border-blue-500 py-3 font-semibold text-blue-500 transition-all hover:bg-blue-500 hover:text-white"
          >
            로그인
          </button>
          <button
            type="button"
            className="h-12 w-[520px] rounded-lg border border-gray-300 py-3 font-semibold text-gray-600 transition-all hover:bg-gray-100"
          >
            회원가입
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
