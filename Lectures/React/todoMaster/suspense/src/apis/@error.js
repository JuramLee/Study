class ApiCustomError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;

    if (status === 403) {
      // logout
      window.location.href = "/";
      this.message = "세션이 만료되었습니다";
    }
    if (status === 404) {
      // 404페이지로 이동하는 로직이지만 현재 routing을 구현하지 않았으니 패스
      this.message = "존재하지 않는 페이지입니다.";
    }

    // ... 기타 등등
    // 전역 에러 핸들링은 axios의 interceptor로 에러핸들링하거나 custom error boundary로 처리한다.
  }
}

export default ApiCustomError;
