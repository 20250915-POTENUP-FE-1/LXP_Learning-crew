function Button() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white">
      <form className="space-y-6">
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

export default Button;
