import createRouter from './router';

function App() {
  // const pages = {
  //   home: () => <div>HOME 페이지입니다.</div>,
  //   shop: () => <div>SHOP 페이지입니다.</div>,
  // };

  const container = document.querySelector('main');
  const pages = {
    home: () => (container.innerText = 'home page'),
    shop: () => (container.innerText = 'shop page'),
  };

  const router = createRouter();
  router.addRoute('#/', pages.home).addRoute('#/shop', pages.shop).start();

  window.addEventListener('click', (event) => {
    if (event.target.matches('[data-navigate]')) {
      return router.navigate(event.target.dataset.navigate);
    }
  });

  return (
    <>
      {/* <a href='#/'>HOME</a>
      <br></br>
      <a href='#/shop'>SHOP</a> */}
      <button data-navigate='/'>home</button>
      <button data-navigate='/shop'>shop</button>
    </>
  );
}

export default App;

// https://devrappers.tistory.com/72
// https://fe-developers.kakaoent.com/2022/221124-router-without-library/
// https://blog.naver.com/PostView.naver?blogId=cmstar77&logNo=221028981868&categoryNo=29&parentCategoryNo=0&viewDate=&currentPage=1&postListTopCurrentPage=1&from=search
