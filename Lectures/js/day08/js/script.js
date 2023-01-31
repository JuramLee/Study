const musicListData = [
  {
    src: "./assets/image/iu_0.jpg",
    color: ["#0272a4", "#f6a564"],
  },
  {
    src: "./assets/image/iu_1.jpg",
    color: ["#b6bfc8", "#36595b"],
  },
  {
    src: "./assets/image/iu_2.jpg",
    color: ["#e58e82", "#6f569f"],
  },
  
];


const $playList = document.getElementById('ls');

for (let i = 0 ; i < musicListData.length ; i++) {
  const $createLi = document.createElement('li');
  $playList.appendChild($createLi); 
}

const $playListItem = document.getElementById('ls').children;

for (let i = 0 ; i < musicListData.length ; i++){
  const $coverLi = document.createElement('img');
  $playListItem[i].appendChild($coverLi);
  $playListItem[i].innerHTML = `<img src="${musicListData[i].src}" alt="아이유 노래">`
  // $playListItem[i].addEventListener('click', selectedMusic);
}
console.log($playListItem);


let playIndex = 0;
let playStatus = false;
let selected = false;
const $btns = document.querySelectorAll('.list_btn_group');
const $prevBtn = document.querySelector('.list_btn_group > button:first-child');
const $nextBtn = document.querySelector('.list_btn_group > button:last-child');
const $current = document.querySelector('.disk_inner');
const $main = document.getElementById('main');
const $playBtn = document.querySelector('.play_btn_group > button:first-child');
const $stopBtn = document.querySelector('.play_btn_group > button:last-child');
const $disk = document.querySelector('.disk');

function selectedMusic() {
  selected = true;
  $playListItem[playIndex].classList.add('play');
  $current.setAttribute('style', `background-color: ${musicListData[playIndex].color[0]}`);
  $main.setAttribute('style', `background: linear-gradient(120deg, ${musicListData[playIndex].color[0]}, ${musicListData[playIndex].color[1]})`);
  if(playStatus == true) {
    $main.children[0].src = musicListData[playIndex].src;
  } else $main.children[0].src = "";
}

function prevPlay() {
  if (playIndex <= 0) {
    playIndex = 0;
  } else playIndex--;

  for(let i = 0 ; i < musicListData.length ; i++) {
    $playListItem[i].classList.remove('play');
  }

  selectedMusic();
}

function nextPlay() {
  if (playIndex >= musicListData.length -1) {
    playIndex = 0;
  } else playIndex++;
  
  for(let i = 0 ; i < musicListData.length ; i++) {
    $playListItem[i].classList.remove('play');
  }

  selectedMusic();
}

$prevBtn.addEventListener('click', prevPlay);
$nextBtn.addEventListener('click', nextPlay);


function playMusic() {
  playStatus = true;
  if(selected == true){
  $disk.classList.add('active');
  console.log($playListItem[playIndex]);
  $main.children[0].src = musicListData[playIndex].src;
  // $main.children[0].setAttribute('style', 'background-size: cover');
  // $main.setAttribute('style', `background: src:${musicListData[playIndex].src})`);
  }
}

function stopMusic() {
  playStatus = false;
  $main.children[0].src = ""
  $disk.classList.remove('active');
}

$playBtn.addEventListener('click', playMusic);
$stopBtn.addEventListener('click', stopMusic);

function imgPlay() {
  
}




/* 요소정리
1. .list_btn_group > ul
    - li태그의 자식요소로 이미지를 갖고
    - 해당 ul의 자식으로서 추가

2. .list_btn_group > button:first-child
   .list_btn_group > button:last-child
    ps. let currentPlayIndex = 0;

3. diskInner
    선택된 노래가 바뀔때마다 디스크 내부원 변경

4. main
    선택된 노래가 바뀔 때마다 배경화면이 바뀐다
    선택된 노래가 실행되면 앨범 이미지로 바뀐다
    ps. let playstatus = 0(false);

5. .disk에 active 추가(애니메이션)

6. .play_btn_group > button:first-child
   .play_btn_group > button:last-child

   *플레이 버튼이 눌러졌을 때 배경화면이 그라데이션에서 앨범 이미지로 변경 및 디스크 회전
   *중지 버튼이 눌러지면 디스크회전 중지 배경화면 그라데이션으로

7. 생성된 ul의 li의 이미지 태그를 가지고 올 것

   *현재 선택된 노래의 focus 
   *흰색테두리 + 크기 커짐

8. 이미지 눌렀을 때도 이동 가능(재생 중일 때 클릭되면 재생 노래도 변경)
*/
