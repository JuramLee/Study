const createRouter = () => {
  const routes = [];

  const router = {
    // 애플리케이션의 경로 목록들을 저장한다.
    addRoute(fragment, component) {
      routes.push({ fragment, component });
      return this; // 여기서this란 뭔가?
    },

    // 현재 URL이 변경되면 페이지 콘텐츠를 해당 URL에 매핑된 구성 요소로 교체한다.
    start() {
      // routes 배열에서 현재 브라우저 hash값과 동일한 해시값을 가진 구성 요소를 찾는다.
      const checkRoutes = () => {
        const currentRoute = routes.find(
          (route) => route.fragment === window.location.hash
        );
        console.log(currentRoute);
        currentRoute?.component(); // 페이지 이동을 보여주기 위해 innerText를 변경하는 메서드 근데 자꾸 에러남..
      };

      window.addEventListener('hashchange', checkRoutes); // 브라우저에서 hash값이 바뀔때 발생하는 이벤트.
      checkRoutes();
    },

    navigate(fragment) {
      return (window.location.hash = fragment);
    },
  };

  return router;
};

export default createRouter;
