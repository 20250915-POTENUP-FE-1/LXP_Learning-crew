function Input() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white">
      <form className="space-y-6">
        <div>
          <label className="mb-2 block text-gray-700">아이디</label>
          <input
            type="email"
            placeholder="이메일형식으로 작성해주세요."
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
      </form>
    </div>
  );
}

export default Input;
