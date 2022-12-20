const musicListData = [
    {
        src: '../assets/image/iu_0.jpg',
        color: ['#0272a4', '#f6a564'],
    },
    {
        src: '../assets/image/iu_1.jpg',
        color: ['#b6bfc8', '#36595b'],
    },
    {
        src: '../assets/image/iu_2.jpg',
        color: ['#e58e82', '#6f569f'],
    },
]

/* 요소정리
1. .list_btn_group > ul
    - li채그의 자식요소로 이미지를 갖고
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